import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CTABanner } from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Taller Mecánico Motrio Aelia Motor Ripollet",
  description: "Todos los servicios de nuestro taller: cambio de aceite, frenos, neumáticos, diagnosis, ITV, climatización y más en Ripollet.",
};

export default function ServiciosPage() {
  return (
    <>
      <div className="pt-20 pb-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">Lo que hacemos</span>
          </div>
          <h1 className="font-display text-white uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)" }}>
            Todos nuestros<br /><span className="text-red-600">servicios</span>
          </h1>
        </div>
      </div>
      <ServicesGrid showAll />
      <CTABanner />
    </>
  );
}
