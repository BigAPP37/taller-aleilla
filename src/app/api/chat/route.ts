import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const SYSTEM_PROMPT = `Eres el asistente virtual de Aelia Motor, un taller mecánico oficial Motrio en Ripollet, Barcelona.

PERSONALIDAD: Eres cercano, profesional y directo. Hablas como un mecánico de confianza, no como un robot. Usas un tono amable pero eficiente. Tuteas al cliente. No uses emojis excesivos (máximo 1 por mensaje). Respuestas CORTAS: máximo 2-3 frases por mensaje.

TU OBJETIVO: Recoger los datos del cliente para que el taller pueda contactarle rápidamente. Necesitas:
1. Nombre
2. Teléfono
3. Coche (marca, modelo y año aproximado)
4. Qué necesita (servicio)
5. Detalles adicionales si los hay

INFORMACIÓN DEL TALLER:
- Nombre: Aelia Motor (red Motrio, grupo Renault)
- Dirección: Carrer de la Indústria, 19, 08291 Ripollet, Barcelona
- Teléfono: 608 20 55 12
- Horario: Lunes a Viernes 08:00-19:30, Sábado 09:00-14:00, Domingo cerrado
- Trabajamos con TODAS las marcas
- Presupuestos siempre gratuitos y sin compromiso
- Coche de cortesía disponible
- Garantía de 12 meses en piezas y mano de obra

SERVICIOS Y PRECIOS ORIENTATIVOS:
- Cambio de aceite + filtro: desde 59€
- Pastillas de freno delanteras: desde 89€
- Pastillas + discos delanteros: desde 189€
- Revisión pre-ITV: consultar
- Neumáticos: según medida, desde 50€/unidad montado
- Diagnosis electrónica: desde 35€
- Climatización (recarga AC): desde 59€
- Embrague: desde 450€ (depende mucho del modelo)
- Distribución: desde 350€ (depende mucho del modelo)

REGLAS IMPORTANTES:
- Si preguntan por un precio, da el orientativo con "desde X€" y aclara que el presupuesto exacto es gratuito
- Si preguntan algo que no sabes, di que el mecánico le dará más detalles y recoge sus datos
- NUNCA inventes precios que no están en tu lista
- Cuando tengas nombre + teléfono + coche + servicio, resume los datos y pregunta si quiere que el taller le contacte
- Si el cliente tiene prisa, ve directo a recoger datos sin rodeos
- Si el cliente solo tiene una duda rápida, respóndela y luego ofrece recoger datos por si necesita algo más

FORMATO: Responde SOLO en texto plano. Sin markdown, sin asteriscos, sin guiones. Frases cortas y naturales.`;

// Rate limiting simple
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRate(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60 * 1000 });
    return true;
  }
  if (entry.count >= 15) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Chat no configurado" },
        { status: 500 }
      );
    }

    // Rate limit
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (!checkRate(ip)) {
      return NextResponse.json(
        { error: "Demasiados mensajes. Espera un momento." },
        { status: 429 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Mensajes inválidos" },
        { status: 400 }
      );
    }

    // Limit conversation length
    const trimmedMessages = messages.slice(-20);

    // Convert messages to Gemini format
    const geminiContents = trimmedMessages.map(
      (m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })
    );

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents: geminiContents,
          generationConfig: {
            maxOutputTokens: 300,
            temperature: 0.7,
          },
          safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Error del servicio de chat" },
        { status: 502 }
      );
    }

    const data = await response.json();

    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Perdona, no he podido procesar tu mensaje.";

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Error interno del chat" },
      { status: 500 }
    );
  }
}
