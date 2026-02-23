"use client";

import { useEffect, useRef } from "react";

const pillars = [
  { n: "01", icon: "⚡", title: "Rapidez", desc: "Reparaciones el mismo día." },
  { n: "02", icon: "🤝", title: "Transparencia", desc: "Presupuesto cerrado. Sin sorpresas." },
  { n: "03", icon: "🎓", title: "Certificados", desc: "Formación oficial Motrio." },
  { n: "04", icon: "💰", title: "Precio justo", desc: "Sin los precios del concesionario." },
];

export function WhyUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll<HTMLElement>(".ri").forEach((el, i) => {
          setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 80);
        });
        io.disconnect();
      },
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="nosotros" className="bg-zinc-900 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header compacto */}
        <div className="mb-6 sm:mb-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">Por qué elegirnos</span>
          </div>
          <h2 className="font-display text-white uppercase leading-none" style={{ fontSize: "clamp(1.6rem, 6vw, 3rem)" }}>
            Tu coche en manos<br /><span className="text-red-600">que de verdad cuidan</span>
          </h2>
        </div>

        {/* Cards — SIEMPRE 2 cols en mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="ri bg-zinc-800/50 border border-white/6 p-4 rounded-sm hover:border-red-600/30 transition-colors"
              style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity 0.4s ease, transform 0.4s ease, border-color 0.3s" }}
            >
              <span className="text-xl mb-2 block">{p.icon}</span>
              <span className="text-red-600/40 font-display text-3xl leading-none mb-1 block">{p.n}</span>
              <h3 className="font-display text-white uppercase text-sm sm:text-base mb-1">{p.title}</h3>
              <p className="text-white/40 font-body text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/6 border border-white/6 rounded-sm overflow-hidden">
          {[
            { v: "+500", l: "Clientes" },
            { v: "5.0★", l: "Google" },
            { v: "<30min", l: "Presupuesto" },
            { v: "100%", l: "Garantía" },
          ].map((s, i) => (
            <div key={i} className="ri bg-zinc-900 text-center py-4 px-3" style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity 0.4s ease, transform 0.4s ease" }}>
              <div className="font-display text-red-600 text-2xl sm:text-3xl leading-none">{s.v}</div>
              <div className="text-white/35 font-body text-xs uppercase tracking-wider mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
