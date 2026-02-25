import type { Metadata } from "next";
import Link from "next/link";
import { config } from "@/config";

export const metadata: Metadata = {
  title: "Aviso Legal | Aelia Motor",
  description: "Aviso legal e información sobre el titular del sitio web aeliamotor.es",
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <main className="bg-zinc-950 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-red-600 font-body text-xs uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-wide mb-4">
            Aviso Legal
          </h1>
          <p className="text-white/40 font-body text-sm">Última actualización: febrero 2026</p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none font-body space-y-10">

          <Section title="1. Datos del titular">
            <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa de los datos del titular de este sitio web:</p>
            <Table rows={[
              ["Denominación social", config.legalName],
              ["Nombre comercial", config.brandName],
              ["Domicilio", config.address],
              ["Correo electrónico", config.email],
              ["Teléfono", config.phoneFormatted],
              ["Sitio web", "aeliamotor.es"],
              ["Red de talleres", "Motrio (Renault Group)"],
            ]} />
          </Section>

          <Section title="2. Objeto y ámbito de aplicación">
            <p>El presente Aviso Legal regula el acceso y uso del sitio web <strong>aeliamotor.es</strong> (en adelante, "el Sitio Web"), del que es titular {config.legalName}.</p>
            <p>El acceso y uso del Sitio Web implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal. Si no está de acuerdo con las mismas, deberá abstenerse de utilizar el Sitio Web.</p>
          </Section>

          <Section title="3. Condiciones de uso">
            <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través del Sitio Web y, con carácter enunciativo pero no limitativo, a no emplearlos para:</p>
            <ul>
              <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
              <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico o que atenten contra los derechos humanos.</li>
              <li>Introducir o difundir virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar daños.</li>
              <li>Intentar acceder, utilizar y/o manipular los datos del titular, terceros proveedores y otros usuarios.</li>
            </ul>
          </Section>

          <Section title="4. Propiedad intelectual e industrial">
            <p>Todos los contenidos del Sitio Web (textos, fotografías, gráficos, imágenes, diseño, logotipos, iconos, código fuente, etc.) son propiedad de {config.legalName} o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial.</p>
            <p>Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa del titular.</p>
          </Section>

          <Section title="5. Exclusión de garantías y responsabilidad">
            <p>{config.legalName} no garantiza la disponibilidad y continuidad del funcionamiento del Sitio Web. Tampoco garantiza la utilidad del Sitio Web para la realización de ninguna actividad en concreto, ni la infalibilidad del mismo.</p>
            <p>El titular no será responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso, uso o mala utilización del Sitio Web.</p>
          </Section>

          <Section title="6. Modificaciones">
            <p>{config.legalName} se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en el Sitio Web, pudiendo cambiar, suprimir o añadir tanto los contenidos como los servicios que se presten a través de la misma.</p>
          </Section>

          <Section title="7. Legislación aplicable y jurisdicción">
            <p>La relación entre el titular y el usuario se regirá por la normativa española vigente. Las partes se someten, a su elección, para la resolución de los conflictos y con renuncia a cualquier otro fuero, a los juzgados y tribunales del domicilio del usuario.</p>
          </Section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row gap-4">
          <Link href="/politica-privacidad" className="text-red-500 hover:text-red-400 font-body text-sm transition-colors">
            → Política de Privacidad
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
          <span className="text-white/40 text-sm w-44 shrink-0">{label}</span>
          <span className="text-white/80 text-sm">{value}</span>
        </div>
      ))}
    </div>
  );
}
