import { config } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Taller Mecánico Motrio Aelia Motor Ripollet",
  description: "Contacta con Aelia Motor. Teléfono, WhatsApp y dirección del taller en Ripollet, Barcelona.",
};

export default function ContactoPage() {
  return (
    <div className="bg-zinc-950 min-h-screen pt-20 pb-16">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-px bg-red-600" />
          <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">Contacto</span>
        </div>
        <h1 className="font-display text-white uppercase leading-none mb-8" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>
          Hablemos de<br /><span className="text-red-600">tu coche</span>
        </h1>

        <div className="flex flex-col gap-3 mb-8">
          <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 bg-green-500/10 border border-green-500/30 hover:border-green-500/60 active:scale-95 px-5 py-4 rounded-sm transition-all">
            <span className="text-2xl">💬</span>
            <div>
              <p className="text-white font-body font-semibold text-sm">WhatsApp</p>
              <p className="text-white/40 font-body text-xs">Respuesta rápida</p>
            </div>
            <span className="ml-auto text-green-400 font-body text-sm">Abrir →</span>
          </a>
          <a href={`tel:${config.phone}`}
            className="flex items-center gap-4 bg-zinc-900 border border-white/8 hover:border-white/20 active:scale-95 px-5 py-4 rounded-sm transition-all">
            <span className="text-2xl">📞</span>
            <div>
              <p className="text-white font-body font-semibold text-sm">{config.phoneFormatted}</p>
              <p className="text-white/40 font-body text-xs">L–V 8:00–19:30 · S 9:00–14:00</p>
            </div>
            <span className="ml-auto text-white/30 font-body text-sm">Llamar →</span>
          </a>
          <a href={`mailto:${config.email}`}
            className="flex items-center gap-4 bg-zinc-900 border border-white/8 hover:border-white/20 active:scale-95 px-5 py-4 rounded-sm transition-all">
            <span className="text-2xl">✉️</span>
            <div>
              <p className="text-white font-body font-semibold text-sm">{config.email}</p>
              <p className="text-white/40 font-body text-xs">Email</p>
            </div>
            <span className="ml-auto text-white/30 font-body text-sm">Escribir →</span>
          </a>
        </div>

        <div className="bg-zinc-900 border border-white/6 p-5 rounded-sm">
          <h3 className="font-display text-white uppercase text-xl mb-3">Dirección</h3>
          <p className="text-white/50 font-body text-sm mb-4">{config.address}</p>
          <a href={config.mapUrl} target="_blank" rel="noopener noreferrer"
            className="text-red-500 font-body text-sm hover:text-red-400 transition-colors">
            Abrir en Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}
