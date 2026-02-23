"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { config } from "@/config";
import { serviceIconMap } from "@/components/ui/ServiceIcons";

export function ServicesGrid({ showAll = false }: { showAll?: boolean }) {
  const services = showAll ? config.services : config.services.filter(s => s.featured);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll<HTMLElement>(".ri").forEach((el, i) => {
          setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 50);
        });
        io.disconnect();
      },
      { threshold: 0.05 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="servicios" className="bg-zinc-950 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px bg-red-600" />
              <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">Lo que hacemos</span>
            </div>
            <h2 className="font-display text-white uppercase leading-none" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>
              Nuestros<br /><span className="text-red-600">servicios</span>
            </h2>
          </div>
          {!showAll && (
            <Link href="/servicios" className="text-white/40 hover:text-red-500 font-body text-sm transition-colors self-end pb-1 whitespace-nowrap">
              Ver todos →
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {services.map((s, i) => {
            const Icon = serviceIconMap[s.slug];
            return (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="ri group bg-zinc-900 border border-white/6 hover:border-red-600/40 hover:bg-zinc-800/60 active:scale-95 p-4 sm:p-5 flex flex-col gap-3 rounded-sm transition-all duration-200"
                style={{ opacity: 0, transform: "translateY(14px)", transition: "opacity 0.35s ease, transform 0.35s ease, border-color 0.2s, background 0.2s" }}
              >
                {Icon && (
                  <Icon className="w-7 h-7 text-red-600/70 group-hover:text-red-500 transition-colors duration-200" />
                )}
                <div>
                  <h3 className="font-display text-white uppercase text-sm sm:text-base leading-tight group-hover:text-red-500 transition-colors duration-200">
                    {s.name}
                  </h3>
                  <p className="text-white/35 font-body text-xs leading-relaxed mt-1 hidden sm:block line-clamp-2">
                    {s.shortDescription}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
