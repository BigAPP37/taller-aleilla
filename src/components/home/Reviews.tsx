"use client";

import { useEffect, useRef } from "react";
import { config } from "@/config";

export function Reviews() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll<HTMLElement>(".ri").forEach((el, i) => {
          setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 100);
        });
        io.disconnect();
      },
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="reseñas" className="bg-zinc-900 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px bg-red-600" />
              <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">Lo que dicen</span>
            </div>
            <h2 className="font-display text-white uppercase leading-none" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>
              Reseñas<br /><span className="text-red-600">reales</span>
            </h2>
          </div>

          {/* Rating */}
          <a
            href={config.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-zinc-800 border border-white/6 hover:border-red-600/30 active:scale-95 px-5 py-4 rounded-sm transition-all self-start"
          >
            <div className="text-center">
              <div className="font-display text-white text-3xl leading-none">{config.googleRating}</div>
              <div className="flex gap-0.5 mt-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white/30 text-[10px] font-body mt-0.5">{config.googleReviewCount} reseñas</p>
            </div>
            <span className="text-red-500 text-xs font-body font-semibold leading-snug">Ver en<br />Google →</span>
          </a>
        </div>

        {/* Grid — 1 col mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {config.reviews.map((r, i) => (
            <div
              key={i}
              className="ri bg-zinc-800/50 border border-white/6 hover:border-red-600/20 p-5 flex flex-col gap-3 rounded-sm transition-colors"
              style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity 0.4s ease, transform 0.4s ease, border-color 0.3s" }}
            >
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className={`w-4 h-4 ${s <= r.rating ? "text-yellow-400" : "text-white/10"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white/55 font-body text-sm leading-relaxed flex-1 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-display text-sm flex-shrink-0">
                  {r.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-body text-sm font-semibold">{r.author}</p>
                  <p className="text-white/30 font-body text-xs">Cliente verificado · Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
