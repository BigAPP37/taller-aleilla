"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    n: "01",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Rapidez",
    desc: "La mayoría de reparaciones las resolvemos el mismo día. Sabemos que tu coche es tu herramienta de trabajo.",
  },
  {
    n: "02",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
    title: "Transparencia",
    desc: "Presupuesto cerrado antes de empezar. Sin costes ocultos, sin sorpresas en la factura final.",
  },
  {
    n: "03",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        <path d="M16 3.5A4 4 0 0119.5 7M18 14c2 1 3.5 3 3.5 5.5"/>
      </svg>
    ),
    title: "Certificados",
    desc: "Mecánicos con formación oficial Motrio y acceso a las bases de datos técnicas de todos los fabricantes.",
  },
  {
    n: "04",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Precio justo",
    desc: "Calidad de taller oficial Motrio sin los precios del concesionario. Recambios de calidad equivalente al original.",
  },
];

const stats = [
  { v: "+500", l: "Clientes" },
  { v: "5.0★", l: "Google" },
  { v: "<30min", l: "Presupuesto" },
  { v: "100%", l: "Garantía" },
];

export function WhyUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll<HTMLElement>(".ri").forEach((el, i) => {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, i * 90);
        });
        io.disconnect();
      },
      { threshold: 0.08 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="nosotros" className="bg-zinc-900 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">
              Por qué elegirnos
            </span>
          </div>
          <h2
            className="font-display text-white uppercase leading-none"
            style={{ fontSize: "clamp(1.8rem, 7vw, 3.5rem)" }}
          >
            Tu coche en manos<br />
            <span className="text-red-600">que de verdad cuidan</span>
          </h2>
        </div>

        {/* Cards — 2 cols mobile, 4 desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-3">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="ri relative bg-zinc-950 border border-white/6 hover:border-red-600/30 transition-colors duration-300 p-4 sm:p-6 flex flex-col gap-3 rounded-sm overflow-hidden"
              style={{
                opacity: 0,
                transform: "translateY(18px)",
                transition: "opacity 0.45s ease, transform 0.45s ease, border-color 0.3s",
              }}
            >
              {/* Número grande de fondo */}
              <span
                className="absolute -bottom-3 -right-1 font-display text-red-600/10 leading-none select-none pointer-events-none"
                style={{ fontSize: "clamp(4rem, 12vw, 7rem)" }}
                aria-hidden="true"
              >
                {p.n}
              </span>

              {/* Icono */}
              <div className="w-10 h-10 bg-red-600/10 border border-red-600/20 rounded-sm flex items-center justify-center text-red-500 flex-shrink-0">
                {p.icon}
              </div>

              {/* Texto */}
              <div className="relative z-10">
                <h3 className="font-display text-white uppercase text-base sm:text-lg leading-tight mb-1.5">
                  {p.title}
                </h3>
                <p className="text-white/40 font-body text-xs sm:text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 border border-white/6 rounded-sm overflow-hidden">
          {stats.map((s, i) => (
            <div
              key={i}
              className="ri bg-zinc-950 text-center py-5 px-3"
              style={{
                opacity: 0,
                transform: "translateY(14px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <div className="font-display text-red-600 leading-none mb-1" style={{ fontSize: "clamp(1.5rem, 5vw, 2.2rem)" }}>
                {s.v}
              </div>
              <div className="text-white/30 font-body text-xs uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
