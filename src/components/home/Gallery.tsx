"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/taller-interior.jpg", alt: "Interior del taller con elevadores", caption: "Elevadores profesionales" },
  { src: "/images/taller-hero.jpg",     alt: "Vista general del taller",           caption: "Amplio espacio de trabajo" },
  { src: "/images/taller-recepcion.jpg",alt: "Recepción del taller",               caption: "Atención al cliente" },
];

export function Gallery() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll<HTMLElement>(".ri").forEach((el, i) => {
          setTimeout(() => { el.style.opacity = "1"; el.style.transform = "scale(1)"; }, i * 100);
        });
        io.disconnect();
      },
      { threshold: 0.05 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-zinc-950 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-5 h-px bg-red-600" />
          <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">Nuestras instalaciones</span>
        </div>

        {/* Mobile: apilado | Desktop: grid asimétrico */}
        <div className="flex flex-col gap-2 sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-2 sm:h-[400px]">
          {/* Foto grande */}
          <div
            className="ri relative overflow-hidden rounded-sm aspect-video sm:aspect-auto sm:col-span-1 sm:row-span-2"
            style={{ opacity: 0, transform: "scale(0.97)", transition: "opacity 0.5s ease, transform 0.5s ease" }}
          >
            <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 640px) 100vw, 33vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
            <span className="absolute bottom-3 left-3 text-white/60 text-xs font-body">{photos[0].caption}</span>
          </div>

          {/* 2 fotos pequeñas */}
          {photos.slice(1).map((p, i) => (
            <div
              key={i}
              className="ri relative overflow-hidden rounded-sm aspect-video sm:aspect-auto sm:col-span-2"
              style={{ opacity: 0, transform: "scale(0.97)", transition: "opacity 0.5s ease, transform 0.5s ease" }}
            >
              <Image src={p.src} alt={p.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 640px) 100vw, 66vw" quality={85} />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white/60 text-xs font-body">{p.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
