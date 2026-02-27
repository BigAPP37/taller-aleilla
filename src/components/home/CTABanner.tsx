"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { config } from "@/config";
import Image from "next/image";

export function CTABanner({
  title = "¿Tu coche necesita atención?",
  subtitle = "Presupuesto gratuito en 30 minutos. Sin compromiso.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const ref = useScrollReveal();

  return (
    <section className="relative bg-zinc-950 overflow-hidden py-16 sm:py-20">
      {/* Photo background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-cta.jpg"
          alt="Coches en garaje profesional"
          fill
          quality={75}
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-zinc-950/60" />
        <div className="absolute inset-0 bg-red-600/20" />
      </div>

      <div ref={ref as any} className="reveal relative z-10 max-w-2xl mx-auto px-5 sm:px-8 text-center">
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
