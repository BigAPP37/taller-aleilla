import { NextRequest, NextResponse } from "next/server";

// Rate limiting simple: máximo 5 envíos por IP en 10 minutos
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRate(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limit
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (!checkRate(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Inténtalo en unos minutos." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { nombre, telefono, email, matricula, modelo, servicio, medidas, mensaje } = body;

    // Validación básica
    if (!nombre || !telefono || !servicio) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    // Montar el email HTML
    const isNeumaticos = servicio === "neumaticos";
    const medidasText = isNeumaticos && medidas
      ? `\n🔧 Medidas: ${medidas.ancho}/${medidas.perfil} R${medidas.llanta}`
      : "";

    const htmlBody = `
      <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0b; color: #fff; border-radius: 8px; overflow: hidden;">
        <div style="background: #CC0000; padding: 20px 24px;">
          <h1 style="margin: 0; font-size: 20px; color: white;">Nueva solicitud de presupuesto</h1>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #999; width: 120px;">Nombre</td>
              <td style="padding: 8px 0; color: #fff; font-weight: 600;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #999;">Teléfono</td>
              <td style="padding: 8px 0; color: #fff; font-weight: 600;">
                <a href="tel:${telefono}" style="color: #f87171;">${telefono}</a>
              </td>
            </tr>
            ${email ? `<tr>
              <td style="padding: 8px 0; color: #999;">Email</td>
              <td style="padding: 8px 0; color: #fff;">${email}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #999;">Vehículo</td>
              <td style="padding: 8px 0; color: #fff;">${modelo || "No indicado"} · ${matricula || "Sin matrícula"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #999;">Servicio</td>
              <td style="padding: 8px 0; color: #CC0000; font-weight: 700; text-transform: uppercase;">${servicio.replace(/-/g, " ")}</td>
            </tr>
            ${isNeumaticos && medidas ? `<tr>
              <td style="padding: 8px 0; color: #999;">Medidas</td>
              <td style="padding: 8px 0; color: #fff; font-weight: 600;">${medidas.ancho}/${medidas.perfil} R${medidas.llanta}</td>
            </tr>` : ""}
          </table>
          ${mensaje ? `
          <div style="margin-top: 16px; padding: 12px; background: #18181b; border-radius: 4px;">
            <p style="margin: 0; color: #999; font-size: 12px; margin-bottom: 4px;">Mensaje:</p>
            <p style="margin: 0; color: #fff;">${mensaje}</p>
          </div>` : ""}
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            Enviado desde aeliamotor.es · ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}
          </p>
        </div>
      </div>
    `;

    const plainText = `
NUEVA SOLICITUD DE PRESUPUESTO
==============================
Nombre: ${nombre}
Teléfono: ${telefono}
${email ? `Email: ${email}` : ""}
Vehículo: ${modelo || "No indicado"} · ${matricula || "Sin matrícula"}
Servicio: ${servicio.replace(/-/g, " ").toUpperCase()}${medidasText}
${mensaje ? `\nMensaje: ${mensaje}` : ""}

Enviado desde aeliamotor.es
    `.trim();

    // Enviar con Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY no configurada");
      return NextResponse.json(
        { error: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Aelia Motor Web <web@aeliamotor.es>",
        to: ["info@aeliamotor.es"],
        subject: `Presupuesto: ${servicio.replace(/-/g, " ")} — ${nombre}`,
        html: htmlBody,
        text: plainText,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Error al enviar el mensaje." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact form error:", e);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
