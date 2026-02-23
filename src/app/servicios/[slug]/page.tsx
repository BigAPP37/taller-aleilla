import { notFound } from "next/navigation";
import Link from "next/link";
import { CTABanner } from "@/components/home/CTABanner";
import { config } from "@/config";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return config.services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = config.services.find(s => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} en Ripollet | Motrio Aelia Motor`,
    description: service.shortDescription,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = config.services.find(s => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <div className="pt-20 pb-10 bg-zinc-950 border-b border-white/6">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Link href="/servicios" className="text-white/30 hover:text-red-500 font-body text-sm transition-colors mb-6 block">
            ← Volver a servicios
          </Link>
          <span className="text-4xl mb-4 block">{service.icon}</span>
          <h1 className="font-display text-white uppercase leading-none mb-3" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>
            {service.name}
          </h1>
          <p className="text-white/50 font-body text-base sm:text-lg leading-relaxed max-w-xl">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="bg-zinc-950 py-10">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {[
              { icon: "✅", title: "Garantía 12 meses", desc: "En piezas y mano de obra" },
              { icon: "💰", title: "Precio cerrado", desc: "Sin sorpresas al finalizar" },
              { icon: "⚡", title: "Mismo día", desc: "En la mayoría de casos" },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-900 border border-white/6 p-4 rounded-sm">
                <span className="text-xl mb-2 block">{item.icon}</span>
                <h3 className="font-body font-bold text-white text-sm mb-1">{item.title}</h3>
                <p className="text-white/40 font-body text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          <a
            href={config.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-red-600 text-white font-body font-bold text-base px-6 py-4 rounded-sm active:scale-95 transition-transform"
          >
            Pedir presupuesto por WhatsApp →
          </a>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
