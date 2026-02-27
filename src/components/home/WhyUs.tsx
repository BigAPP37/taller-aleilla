"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    n: "01",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h8l-1 8 11-12h-8l1-8z"/>
      </svg>
    ),
    title: "Rapidez",
    desc: "La mayoría de reparaciones las resolvemos el mismo día. Sabemos que tu coche es tu herramienta de trabajo.",
  },
  {
    n: "02",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 3a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2H4zm12.3 6.3l-5.3 5.3-3.3-3.3a1 1 0 10-1.4 1.4l4 4a1 1 0 001.4 0l6-6a1 1 0 00-1.4-1.4z"/>
      </svg>
    ),
    title: "Transparencia",
    desc: "Presupuesto cerrado antes de empezar. Sin costes ocultos, sin sorpresas en la factura final.",
  },
  {
    n: "03",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a4 4 0 00-4 4c0 1.8 1.2 3.3 2.8 3.8L10 12H8l-4 8h16l-4-8h-2l-.8-2.2A4 4 0 0016 6a4 4 0 00-4-4zm0 2a2 2 0 110 4 2 2 0 010-4z"/>
      </svg>
    ),
    title: "Certificados",
    desc: "Mecánicos con formación oficial Motrio y acceso a las bases de datos técnicas de todos los fabricantes.",
  },
  {
    n: "04",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        <path d="M11 8h2v4h-2zM11 14h2v2h-2z" fill="none"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.3 5h2.6L13 13h-2l-.3-6zM12 17a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" fill="currentColor"/>
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
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal({ threshold: 0.08 });
  const statsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="nosotros" className="bg-zinc-900 bg-noise py-14 sm:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div ref={headerRef as any} className="reveal mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">
              Por qué elegirnos
            </span>
          </div>
          <h2 className="font-display text-white uppercase leading-none" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>
            Tu coche en manos<br />
            <span className="text-red-600">que de verdad cuidan</span>
          </h2>
        </div>

        <div ref={cardsRef as any} className="reveal reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group relative bg-zinc-950 border border-white/[0.06] hover:border-red-600/40 transition-all duration-300 rounded-sm overflow-hidden"
            >
              {/* Red top accent line */}
              <div className="h-[3px] bg-red-600 w-full" />

              <div className="p-5 sm:p-6">
                {/* Icon container */}
                <div className="w-12 h-12 bg-red-600 rounded-sm flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-transform duration-300">
                  {p.icon}
                </div>

                <h3 className="font-display text-white uppercase text-lg sm:text-xl leading-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-white/40 font-body text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>

              {/* Big background number */}
              <span
                className="absolute -bottom-4 -right-2 font-display text-white/[0.03] leading-none select-none pointer-events-none"
                style={{ fontSize: "7rem" }}
                aria-hidden="true"
              >
                {p.n}
              </span>
            </div>
          ))}
        </div>

        <div ref={statsRef as any} className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <div key={i} className="bg-zinc-950 border border-white/[0.06] text-center py-6 px-3 rounded-sm">
              <div className="font-display text-red-600 leading-none mb-1.5" style={{ fontSize: "clamp(1.6rem, 5vw, 2.4rem)" }}>
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
