"use client";

import { useState } from "react";
import { config } from "@/config";
import { SectionBg } from "@/components/ui/SectionBg";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative bg-zinc-950 py-14 sm:py-20 overflow-hidden">
      <SectionBg src="/images/bg-faq.jpg" alt="Mecánico profesional trabajando" opacity={88} />
      <div className="max-w-2xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">FAQ</span>
            <div className="w-5 h-px bg-red-600" />
          </div>
          <h2 className="font-display text-white uppercase leading-none" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>
            Preguntas<br /><span className="text-red-600">frecuentes</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {config.faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-sm overflow-hidden transition-colors duration-200 ${open === i ? "border-red-600/40 bg-zinc-900" : "border-white/6 bg-zinc-900/50"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className={`font-body font-semibold text-sm sm:text-[15px] ${open === i ? "text-white" : "text-white/70"}`}>
                  {faq.question}
                </span>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? "bg-red-600 rotate-45" : "bg-white/8"}`}>
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M6 1v10M1 6h10" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div style={{ maxHeight: open === i ? "300px" : "0", transition: "max-height 0.3s ease", overflow: "hidden" }}>
                <p className="px-5 pb-5 text-white/45 font-body text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
