"use client";

import { config } from "@/config";

export function CTABanner({
  title = "¿Tu coche necesita atención?",
  subtitle = "Presupuesto gratuito en 30 minutos. Sin compromiso.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-red-600 overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(0,0,0,.25) 10px,rgba(0,0,0,.25) 11px)" }} />

      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display text-white uppercase leading-none mb-3" style={{ fontSize: "clamp(1.8rem, 8vw, 3.5rem)" }}>
          {title}
        </h2>
        <p className="text-white/75 font-body text-[15px] mb-7 leading-relaxed">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={config.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-red-600 font-body font-bold text-[15px] px-6 py-4 rounded-sm active:scale-95 transition-transform shadow-lg"
          >
            Pedir cita por WhatsApp
          </a>
          <a
            href={`tel:${config.phone}`}
            className="flex items-center justify-center gap-2 border-2 border-white/60 text-white font-body font-bold text-[15px] px-6 py-4 rounded-sm active:scale-95 transition-transform"
          >
            {config.phoneFormatted}
          </a>
        </div>

        <p className="mt-5 text-white/45 font-body text-xs">
          L–V: 8:00–19:30 · S: 9:00–14:00 · D: Cerrado
        </p>
      </div>
    </section>
  );
}
