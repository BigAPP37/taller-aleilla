import { config } from "@/config";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Taller Mecánico Motrio Aelia Motor Ripollet",
  description: "Solicita presupuesto online en Aelia Motor. Teléfono, WhatsApp y formulario de contacto. Taller Motrio en Ripollet, Barcelona.",
};

export default function ContactoPage() {
  return (
    <div className="bg-zinc-950 min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-px bg-red-600" />
          <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">Contacto</span>
        </div>
        <h1 className="font-display text-white uppercase leading-none mb-10" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>
          Hablemos de<br /><span className="text-red-600">tu coche</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Formulario — columna principal */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Contacto directo — columna lateral */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500/10 border border-green-500/30 hover:border-green-500/60 active:scale-[0.98] px-5 py-4 rounded-sm transition-all">
              <span className="text-2xl">💬</span>
              <div>
                <p className="text-white font-body font-semibold text-sm">WhatsApp</p>
                <p className="text-white/40 font-body text-xs">Respuesta más rápida</p>
              </div>
              <span className="ml-auto text-green-400 font-body text-sm">Abrir →</span>
            </a>
            <a href={`tel:${config.phone}`}
              className="flex items-center gap-4 bg-zinc-900 border border-white/8 hover:border-white/20 active:scale-[0.98] px-5 py-4 rounded-sm transition-all">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-white font-body font-semibold text-sm">{config.phoneFormatted}</p>
                <p className="text-white/40 font-body text-xs">L–V 8:00–19:30 · S 9:00–14:00</p>
              </div>
              <span className="ml-auto text-white/30 font-body text-sm">Llamar →</span>
            </a>
            <a href={`mailto:${config.email}`}
              className="flex items-center gap-4 bg-zinc-900 border border-white/8 hover:border-white/20 active:scale-[0.98] px-5 py-4 rounded-sm transition-all">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-white font-body font-semibold text-sm">{config.email}</p>
                <p className="text-white/40 font-body text-xs">Email directo</p>
              </div>
              <span className="ml-auto text-white/30 font-body text-sm">Escribir →</span>
            </a>

            {/* Dirección */}
            <div className="bg-zinc-900 border border-white/[0.06] p-5 rounded-sm mt-1">
              <h3 className="font-display text-white uppercase text-lg mb-3">Dirección</h3>
              <p className="text-white/50 font-body text-sm mb-3">{config.address}</p>
              <a href={config.mapUrl} target="_blank" rel="noopener noreferrer"
                className="text-red-500 font-body text-sm hover:text-red-400 transition-colors">
                Abrir en Google Maps →
              </a>
            </div>

            {/* Horario */}
            <div className="bg-zinc-900 border border-white/[0.06] p-5 rounded-sm">
              <h3 className="font-display text-white uppercase text-lg mb-3">Horario</h3>
              <div className="flex flex-col gap-1.5">
                {config.hours.map((h) => (
                  <div key={h.day} className="flex justify-between font-body text-sm">
                    <span className="text-white/50">{h.day}</span>
                    <span className={h.closed ? "text-red-500/60" : "text-white/70"}>
                      {h.closed ? "Cerrado" : `${h.open} – ${h.close}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
