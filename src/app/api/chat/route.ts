import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

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
- Cuando tengas nombre + teléfono + coche + servicio, resume los datos y di EXACTAMENTE la frase "¿Quieres que el taller te contacte?" al final
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

// ─── Extract client data from conversation ─────────────────
function extractClientData(messages: { role: string; content: string }[]): {
  nombre?: string;
  telefono?: string;
  coche?: string;
  servicio?: string;
} {
  const userTexts = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content)
    .join(" ");
  const assistantTexts = messages
    .filter((m) => m.role === "assistant")
    .map((m) => m.content)
    .join(" ");

  const data: {
    nombre?: string;
    telefono?: string;
    coche?: string;
    servicio?: string;
  } = {};

  // Name from assistant confirmations
  const nameMatch = assistantTexts.match(
    /(?:Gracias|Genial|Entendido),?\s+([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)/
  );
  if (
    nameMatch &&
    !["Para", "El", "La", "Los", "Las", "Tu", "Un", "Una"].includes(
      nameMatch[1]
    )
  ) {
    data.nombre = nameMatch[1];
  } else {
    const nameMatch2 = assistantTexts.match(
      /Perfecto,\s+([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)/
    );
    if (
      nameMatch2 &&
      !["Para", "El", "La", "Los", "Las", "Tu", "Un", "Una"].includes(
        nameMatch2[1]
      )
    ) {
      data.nombre = nameMatch2[1];
    }
  }

  // Phone
  const phoneMatch = userTexts.match(/(\d{3}[\s.-]?\d{3}[\s.-]?\d{3,4})/);
  if (phoneMatch) {
    data.telefono = phoneMatch[1].replace(/[\s.-]/g, "");
  }

  // Car
  const carBrands =
    /\b(seat|ford|renault|peugeot|citroen|citroën|opel|volkswagen|vw|bmw|mercedes|audi|toyota|hyundai|kia|nissan|fiat|dacia|skoda|mazda|honda|volvo|mini|tesla|cupra|mg)\b/i;
  const carMatch = userTexts.match(
    new RegExp(
      carBrands.source +
        /\s+([a-záéíóúñ0-9\s]+?)(?:\s+(?:de\s+)?(\d{4}))?\b/i.source,
      "i"
    )
  );
  if (carMatch) {
    const brand = carMatch[1];
    const model = carMatch[2]?.trim() || "";
    const year = carMatch[3] || "";
    data.coche = [brand, model, year].filter(Boolean).join(" ").trim();
  }

  // Services
  const serviceKeywords = [
    "aceite", "filtros", "frenos", "pastillas", "discos", "itv", "pre-itv",
    "pre itv", "revision", "revisión", "neumáticos", "neumaticos", "ruedas",
    "embrague", "distribución", "distribucion", "climatización", "climatizacion",
    "aire acondicionado", "diagnosis", "diagnóstico", "diagnostico", "batería",
    "bateria", "arranque", "escape", "suspensión", "suspension", "amortiguadores",
    "cambio de aceite", "multimedia", "radio", "pantalla", "lunas", "parabrisas",
    "carrocería", "carroceria", "pintura", "chapa", "correa", "refrigerante",
    "anticongelante", "dirección", "direccion", "turbo", "inyectores",
    "bujías", "bujias",
  ];

  const foundServices: string[] = [];
  const lowerText = userTexts.toLowerCase();
  for (const kw of serviceKeywords) {
    if (lowerText.includes(kw) && !foundServices.includes(kw)) {
      foundServices.push(kw);
    }
  }
  if (foundServices.length > 0) {
    data.servicio = foundServices.join(", ");
  }

  return data;
}

// ─── Send email notification via Resend ────────────────────
async function sendNotificationEmail(data: {
  nombre?: string;
  telefono?: string;
  coche?: string;
  servicio?: string;
}) {
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY no configurada, no se envía notificación");
    return;
  }

  const now = new Date().toLocaleString("es-ES", {
    timeZone: "Europe/Madrid",
  });

  const htmlBody = `
    <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0b; color: #fff; border-radius: 8px; overflow: hidden;">
      <div style="background: #CC0000; padding: 20px 24px;">
        <h1 style="margin: 0; font-size: 20px; color: white;">💬 Nuevo lead del chatbot</h1>
      </div>
      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #999; width: 120px;">Nombre</td>
            <td style="padding: 8px 0; color: #fff; font-weight: 600;">${data.nombre || "No indicado"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #999;">Teléfono</td>
            <td style="padding: 8px 0; color: #fff; font-weight: 600;">
              <a href="tel:${data.telefono || ""}" style="color: #f87171;">${data.telefono || "No indicado"}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #999;">Vehículo</td>
            <td style="padding: 8px 0; color: #fff;">${data.coche || "No indicado"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #999;">Servicio</td>
            <td style="padding: 8px 0; color: #CC0000; font-weight: 700; text-transform: uppercase;">${data.servicio || "No indicado"}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Enviado desde el chatbot de aeliamotor.es · ${now}
        </p>
      </div>
    </div>
  `;

  const plainText = `
NUEVO LEAD DEL CHATBOT
======================
Nombre: ${data.nombre || "No indicado"}
Teléfono: ${data.telefono || "No indicado"}
Vehículo: ${data.coche || "No indicado"}
Servicio: ${data.servicio || "No indicado"}

Enviado desde el chatbot de aeliamotor.es · ${now}
  `.trim();

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Aelia Motor Web <web@aeliamotor.es>",
        to: ["info@aeliamotor.es"],
        subject: `💬 Chatbot: ${data.servicio || "consulta"} — ${data.nombre || "Cliente"}`,
        html: htmlBody,
        text: plainText,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend notification error:", err);
    }
  } catch (e) {
    console.error("Error enviando notificación:", e);
  }
}

// ─── Main handler ──────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Chat no configurado" },
        { status: 500 }
      );
    }

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

    const trimmedMessages = messages.slice(-20);

    // Convert to Gemini format
    const geminiContents = trimmedMessages.map(
      (m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })
    );

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
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
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_NONE",
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_NONE",
            },
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

    // Check if the bot has collected all data and is ready to hand off
    const lower = text.toLowerCase();
    if (
      lower.includes("contacte") ||
      lower.includes("contactar") ||
      lower.includes("presupuesto exacto")
    ) {
      const clientData = extractClientData([
        ...trimmedMessages,
        { role: "assistant", content: text },
      ]);

      // Only send email if we have at least name or phone
      if (clientData.nombre || clientData.telefono) {
        sendNotificationEmail(clientData).catch(console.error);
      }
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Error interno del chat" },
      { status: 500 }
    );
  }
}
