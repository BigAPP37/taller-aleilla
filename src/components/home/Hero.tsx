"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { config } from "@/config";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll<HTMLElement>(".hi");
    items?.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 150 + i * 130);
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-zinc-950 overflow-hidden">
      {/* Foto de fondo — ocupa toda la pantalla */}
      <div className="absolute inset-0">
        <Image
          src="/images/taller-hero-stock.jpg"
          alt="Mecánico profesional trabajando en motor — Taller Motrio Aelia Motor"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        {/* Overlay fuerte para legibilidad */}
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-zinc-950/50" />
      </div>

      {/* Barra roja izquierda */}
      <div className="absolute left-0 inset-y-0 w-1 bg-red-600 z-20" />

      {/* Contenido — pegado abajo en mobile */}
      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-end text-center min-h-screen px-5 pb-12 pt-20 lg:justify-center lg:pb-20"
      >
        {/* Badge */}
        <div
          className="hi inline-flex items-center gap-2 border border-red-600/40 bg-red-600/10 px-3 py-1.5 rounded-sm mb-5"
          style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.5s ease" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">
            Taller Oficial Motrio · Ripollet
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hi font-display text-white uppercase leading-none mb-4"
          style={{
            fontSize: "clamp(3.8rem, 18vw, 8rem)",
            letterSpacing: "-0.01em",
            opacity: 0,
            transform: "translateY(16px)",
            transition: "all 0.5s ease",
          }}
        >
          Tu coche.<br />
          <span className="text-red-600">Nuestro</span><br />
          estándar.
        </h1>

        {/* Subtítulo */}
        <p
          className="hi text-white/60 font-body text-[15px] leading-relaxed mb-7 max-w-[280px] sm:max-w-sm"
          style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.5s ease" }}
        >
          Sin sorpresas en el presupuesto. Mecánicos certificados Motrio en Ripollet, Barcelona.
        </p>

        {/* CTAs */}
        <div
          className="hi flex flex-col w-full max-w-xs gap-3 mb-8"
          style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.5s ease" }}
        >
          <a
            href={config.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-red-600 active:bg-red-700 text-white font-body font-bold text-[16px] px-6 py-4 rounded-sm transition-colors w-full sm:w-auto"
          >
            Pedir cita por WhatsApp →
          </a>
          <a
            href={`tel:${config.phone}`}
            className="flex items-center justify-center gap-2 bg-white/8 border border-white/15 active:bg-white/15 text-white font-body font-semibold text-[16px] px-6 py-4 rounded-sm transition-colors w-full sm:w-auto"
          >
            📞 {config.phoneFormatted}
          </a>
        </div>

        {/* Pills de confianza */}
        <div
          className="hi flex flex-wrap justify-center gap-2"
          style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.5s ease" }}
        >
          {[
            `⭐ ${config.googleRating} en Google`,
            "⚡ Presupuesto en 30 min",
            "🚗 Coche de cortesía",
            "🔧 Todas las marcas",
          ].map((t) => (
            <span
              key={t}
              className="text-white/50 text-xs font-body bg-white/5 border border-white/8 px-3 py-1.5 rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
