import type { Metadata } from "next";
import Link from "next/link";
import { config } from "@/config";

export const metadata: Metadata = {
  title: "Política de Privacidad | Aelia Motor",
  description: "Política de privacidad y protección de datos de Aelia Motor conforme al RGPD.",
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="bg-zinc-950 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-red-600 font-body text-xs uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-wide mb-4">
            Política de Privacidad
          </h1>
          <p className="text-white/40 font-body text-sm">Última actualización: febrero 2026</p>
        </div>

        <div className="space-y-10 font-body">

          <Section title="1. Responsable del tratamiento">
            <Table rows={[
              ["Responsable", config.legalName],
              ["Domicilio", config.address],
              ["Correo electrónico", config.email],
              ["Teléfono", config.phoneFormatted],
            ]} />
          </Section>

          <Section title="2. Qué datos recogemos">
            <p>En función del uso que haga del Sitio Web, podemos recoger los siguientes datos personales:</p>
            <ul>
              <li><strong>Datos de contacto:</strong> nombre, número de teléfono y correo electrónico cuando nos contactas a través del formulario, WhatsApp o email.</li>
              <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de navegación. Estos datos son recogidos de forma anónima y agregada a través de Google Analytics.</li>
              <li><strong>Datos de comunicación:</strong> el contenido de los mensajes que nos envías a través de WhatsApp o correo electrónico.</li>
            </ul>
          </Section>

          <Section title="3. Finalidad y base legal del tratamiento">
            <Table rows={[
              ["Gestionar tu consulta o solicitud de cita", "Interés legítimo / Ejecución de contrato"],
              ["Enviarte información sobre nuestros servicios si lo solicitas", "Consentimiento"],
              ["Analizar el tráfico web (Google Analytics)", "Consentimiento (cookies)"],
              ["Cumplir obligaciones legales", "Obligación legal"],
            ]} />
          </Section>

          <Section title="4. Conservación de los datos">
            <p>Los datos personales proporcionados se conservarán:</p>
            <ul>
              <li>Durante el tiempo necesario para atender tu consulta o gestionar la relación contractual.</li>
              <li>Una vez finalizada la relación, durante los plazos legales exigidos (máximo 6 años para datos fiscales y mercantiles).</li>
              <li>Los datos de analítica web se conservan según los plazos establecidos por Google Analytics (por defecto, 26 meses).</li>
            </ul>
          </Section>

          <Section title="5. Destinatarios de los datos">
            <p>Los datos no serán cedidos a terceros salvo obligación legal. Sin embargo, para la prestación de servicios, pueden acceder a tus datos los siguientes proveedores:</p>
            <ul>
              <li><strong>Google LLC</strong> — a través de Google Analytics (analítica web) y Google Maps (mapa de localización). Google puede transferir datos fuera del Espacio Económico Europeo bajo el marco EU-US Data Privacy Framework.</li>
              <li><strong>Meta Platforms (WhatsApp)</strong> — cuando nos contactas mediante WhatsApp Business.</li>
              <li><strong>Vercel Inc.</strong> — proveedor de alojamiento del sitio web.</li>
            </ul>
          </Section>

          <Section title="6. Tus derechos">
            <p>Puedes ejercer en cualquier momento los siguientes derechos enviando un email a <strong>{config.email}</strong> con copia de tu DNI:</p>
            <ul>
              <li><strong>Acceso:</strong> conocer qué datos tuyos tratamos.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión:</strong> solicitar que eliminemos tus datos.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato electrónico.</li>
              <li><strong>Limitación:</strong> solicitar que restrinjamos el tratamiento.</li>
            </ul>
            <p className="mt-3">También tienes derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en <a href="https://www.aepd.es" className="text-red-500 hover:text-red-400">www.aepd.es</a>.</p>
          </Section>

          <Section title="7. Seguridad">
            <p>{config.legalName} ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales, así como para evitar su pérdida, alteración y/o acceso por parte de terceros no autorizados. El sitio web utiliza protocolo HTTPS con certificado SSL.</p>
          </Section>

          <Section title="8. Modificaciones">
            <p>Nos reservamos el derecho de modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. En dichos supuestos, se anunciará en esta página con la fecha de la última actualización.</p>
          </Section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row gap-4">
          <Link href="/aviso-legal" className="text-red-500 hover:text-red-400 font-body text-sm transition-colors">
            → Aviso Legal
          </Link>
          <Link href="/politica-cookies" className="text-red-500 hover:text-red-400 font-body text-sm transition-colors">
            → Política de Cookies
          </Link>
          <Link href="/" className="text-white/40 hover:text-white font-body text-sm transition-colors ml-auto">
            ← Volver al inicio
          </Link>
        </div>

      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide mb-4 pb-2 border-b border-white/8">
        {title}
      </h2>
      <div className="text-white/60 font-body text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

function Table({ rows }: { rows: [string, string][] }) {
  return (
    <div className="mt-4 rounded-sm overflow-hidden border border-white/8">
      {rows.map(([label, value], i) => (
        <div key={i} className={`flex gap-4 px-4 py-3 ${i % 2 === 0 ? "bg-white/3" : "bg-transparent"}`}>
          <span className="text-white/40 text-sm w-52 shrink-0">{label}</span>
          <span className="text-white/80 text-sm">{value}</span>
        </div>
      ))}
    </div>
  );
}
