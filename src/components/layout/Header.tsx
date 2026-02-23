"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { config } from "@/config";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#nosotros",  label: "Nosotros" },
  { href: "/#reseñas",   label: "Reseñas" },
  { href: "/#contacto",  label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/95 backdrop-blur-sm border-b border-white/6" : "bg-transparent"}`}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm">
              <span className="font-display text-white text-lg leading-none">M</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-white text-sm uppercase tracking-widest">Motrio</div>
              <div className="text-white/40 font-body text-[10px] uppercase tracking-wider">{config.brandName}</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-white/50 hover:text-white font-body text-sm transition-colors">
                {l.label}
              </Link>
            ))}
            <a
              href={config.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-body font-semibold text-sm px-4 py-2 rounded-sm transition-colors"
            >
              Pedir cita
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menú"
          >
            <span className={`w-5 h-px bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`w-5 h-px bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`w-5 h-px bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-zinc-950 flex flex-col justify-center px-8 transition-all duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col gap-2">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-white uppercase py-4 border-b border-white/6 transition-colors hover:text-red-500"
              style={{ fontSize: "clamp(1.5rem, 8vw, 2.5rem)" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={config.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center bg-red-600 text-white font-body font-bold text-lg px-6 py-4 rounded-sm"
          >
            Pedir cita por WhatsApp →
          </a>
          <a
            href={`tel:${config.phone}`}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center border border-white/15 text-white font-body font-semibold text-base px-6 py-3.5 rounded-sm"
          >
            📞 {config.phoneFormatted}
          </a>
        </nav>
      </div>
    </>
  );
}
