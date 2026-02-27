"use client";

import Link from "next/link";
import { config } from "@/config";
import { serviceIconMap } from "@/components/ui/ServiceIcons";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionBg } from "@/components/ui/SectionBg";

export function ServicesGrid({ showAll = false }: { showAll?: boolean }) {
  const services = showAll ? config.services : config.services.filter(s => s.featured);
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="servicios" className="relative bg-zinc-950 py-14 sm:py-24 overflow-hidden">
      <SectionBg src="/images/bg-services.jpg" alt="Motor de coche profesional" opacity={88} />
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        <div ref={headerRef as any} className="reveal flex items-end justify-between mb-10 sm:mb-14">
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

        <div ref={gridRef as any} className="reveal reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((s, i) => {
            const Icon = serviceIconMap[s.slug];
            return (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group relative bg-zinc-900 border border-white/[0.06] hover:border-red-600/40 active:scale-[0.98] rounded-sm transition-all duration-300 overflow-hidden"
              >
                {/* Red left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-5 sm:p-6 flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-11 h-11 bg-red-600/10 border border-red-600/20 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                    {Icon && (
                      <Icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-white uppercase text-base sm:text-lg leading-tight mb-1.5 group-hover:text-red-500 transition-colors duration-200">
                      {s.name}
                    </h3>
                    <p className="text-white/35 font-body text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {s.shortDescription}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg className="w-4 h-4 text-white/15 group-hover:text-red-500 transition-all duration-300 flex-shrink-0 mt-1 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>

                {/* Background number */}
                <span
                  className="absolute -bottom-3 -right-1 font-display text-white/[0.02] leading-none select-none pointer-events-none"
                  style={{ fontSize: "5rem" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
