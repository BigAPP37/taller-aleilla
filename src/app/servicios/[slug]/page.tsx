import { notFound } from "next/navigation";
import Link from "next/link";
import { CTABanner } from "@/components/home/CTABanner";
import { config } from "@/config";
import { serviceContent } from "@/config/serviceContent";
import { serviceIconMap } from "@/components/ui/ServiceIcons";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return config.services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const content = serviceContent[params.slug];
  const service = config.services.find(s => s.slug === params.slug);
  if (!service) return {};
  return {
    title: content?.title ?? `${service.name} en Ripollet | Motrio Aelia Motor`,
    description: content?.metaDescription ?? service.shortDescription,
    keywords: content?.keywords?.join(", "),
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = config.services.find(s => s.slug === params.slug);
  if (!service) notFound();

  const content = serviceContent[params.slug];
  const Icon = serviceIconMap[params.slug];

  return (
    <>
      {/* Hero de servicio */}
      <div className="pt-20 pb-10 bg-zinc-950 border-b border-white/6">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <Link href="/servicios" className="text-white/30 hover:text-red-500 font-body text-sm transition-colors mb-6 block">
            ← Volver a servicios
          </Link>
          <div className="flex items-start gap-5">
            {Icon && (
              <div className="w-14 h-14 bg-zinc-900 border border-white/8 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                <Icon className="w-7 h-7 text-red-600" />
              </div>
            )}
            <div>
              <h1 className="font-display text-white uppercase leading-none mb-3" style={{ fontSize: "clamp(1.8rem, 7vw, 3.5rem)" }}>
                {service.name}
              </h1>
              <p className="text-white/55 font-body text-base sm:text-lg leading-relaxed max-w-2xl">
                {content?.intro ?? service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Qué ofrecemos */}
      {content?.whatWeOffer && (
        <div className="bg-zinc-950 py-10 border-b border-white/6">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-px bg-red-600" />
              <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">Qué incluye</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {content.whatWeOffer.map((item, i) => (
                <div key={i} className="bg-zinc-900 border border-white/6 p-5 rounded-sm">
                  <div className="w-7 h-7 bg-red-600/15 rounded-sm flex items-center justify-center mb-3">
                    <span className="text-red-500 font-display text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-body font-bold text-white text-sm mb-2">{item.heading}</h3>
                  <p className="text-white/40 font-body text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Ventajas + Por qué nosotros */}
      <div className="bg-zinc-900 py-10 border-b border-white/6">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {[
              { icon: "✓", title: "Garantía 12 meses", desc: "En piezas y mano de obra" },
              { icon: "€", title: "Precio cerrado", desc: "Sin sorpresas al finalizar" },
              { icon: "⚡", title: "Mismo día", desc: "En la mayoría de casos" },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-800/50 border border-white/6 p-4 rounded-sm flex items-center gap-3">
                <div className="w-9 h-9 bg-red-600 rounded-sm flex items-center justify-center flex-shrink-0 font-display text-white text-base">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-body font-bold text-white text-sm">{item.title}</h3>
                  <p className="text-white/40 font-body text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {content?.whyUs && (
            <div className="bg-zinc-800/30 border border-red-600/20 p-5 rounded-sm">
              <p className="text-white/60 font-body text-sm leading-relaxed">
                <span className="text-red-500 font-semibold">Aelia Motor · </span>
                {content.whyUs}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FAQ */}
      {content?.faq && content.faq.length > 0 && (
        <div className="bg-zinc-950 py-10 border-b border-white/6">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-px bg-red-600" />
              <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">Preguntas frecuentes</span>
            </div>
            <div className="flex flex-col gap-3">
              {content.faq.map((item, i) => (
                <div key={i} className="bg-zinc-900 border border-white/6 p-5 rounded-sm">
                  <h3 className="font-body font-bold text-white text-sm mb-2">{item.q}</h3>
                  <p className="text-white/45 font-body text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-zinc-950 py-10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <a
            href={config.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-body font-bold text-base px-6 py-4 rounded-sm active:scale-95 transition-all w-full sm:w-auto"
          >
            Pedir presupuesto de {service.name} por WhatsApp →
          </a>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
