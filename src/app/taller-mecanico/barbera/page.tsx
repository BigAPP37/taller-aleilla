import { notFound } from "next/navigation";
import Link from "next/link";
import { CTABanner } from "@/components/home/CTABanner";
import { config } from "@/config";
import { municipios, municipioSlugs } from "@/config/municipios";
import type { Metadata } from "next";

/* ---------- Static generation ---------- */
export function generateStaticParams() {
  return municipioSlugs.map((slug) => ({ municipio: slug }));
}

/* ---------- SEO Metadata ---------- */
export async function generateMetadata({
  params,
}: {
  params: { municipio: string };
}): Promise<Metadata> {
  const m = municipios[params.municipio];
  if (!m) return {};

  return {
    title: m.metaTitle,
    description: m.metaDescription,
    keywords: m.keywords.join(", "),
    alternates: {
      canonical: `${config.domain}/taller-mecanico/${m.slug}`,
    },
    openGraph: {
      title: m.metaTitle,
      description: m.metaDescription,
      locale: "es_ES",
      type: "website",
      url: `${config.domain}/taller-mecanico/${m.slug}`,
    },
  };
}

/* ---------- Schema.org JSON-LD ---------- */
function LocalBusinessSchema({ slug }: { slug: string }) {
  const m = municipios[slug];
  if (!m) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: config.brandName,
    description: m.metaDescription,
    url: `${config.domain}/taller-mecanico/${m.slug}`,
    telephone: `+34${config.phone}`,
    email: config.email,
    image: `${config.domain}/images/taller-hero.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.street,
      addressLocality: config.city,
      postalCode: config.postalCode,
      addressRegion: config.province,
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: config.lat,
      longitude: config.lng,
    },
    areaServed: {
      "@type": "City",
      name: m.name,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: config.googleRating,
      reviewCount: config.googleReviewCount,
      bestRating: 5,
    },
    openingHoursSpecification: config.hours
      .filter((h) => !h.closed)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
    priceRange: "€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ---------- Page ---------- */
export default function MunicipioPage({
  params,
}: {
  params: { municipio: string };
}) {
  const m = municipios[params.municipio];
  if (!m) notFound();

  const featuredServices = config.services.filter((s) => s.featured);

  return (
    <>
      <LocalBusinessSchema slug={params.municipio} />

      {/* ===== HERO ===== */}
      <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 bg-zinc-950 border-b border-white/6 overflow-hidden">
        {/* Decorative bg number */}
        <span
          className="absolute -top-6 -right-4 font-display text-red-600/[0.03] leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(10rem, 30vw, 22rem)" }}
          aria-hidden="true"
        >
          {m.distanceKm}km
        </span>

        <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
          <Link
            href="/"
            className="text-white/30 hover:text-red-500 font-body text-sm transition-colors mb-6 block"
          >
            ← Inicio
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">
              A {m.distanceMin} minutos de {m.nameShort}
            </span>
          </div>

          <h1
            className="font-display text-white uppercase leading-none mb-4"
            style={{ fontSize: "clamp(1.8rem, 7vw, 3.5rem)" }}
          >
            {m.heroTitle}
            <br />
            <span className="text-red-600">{m.heroHighlight}</span>
          </h1>

          <p className="text-white/55 font-body text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            {m.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={config.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-body font-bold text-sm px-6 py-3.5 rounded-sm active:scale-95 transition-all text-center"
            >
              Pedir presupuesto gratis →
            </a>
            <a
              href={`tel:+34${config.phone}`}
              className="border border-white/10 hover:border-red-600/40 text-white font-body font-semibold text-sm px-6 py-3.5 rounded-sm transition-all text-center"
            >
              Llamar al {config.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* ===== INTRO + STATS ===== */}
      <section className="bg-zinc-900 py-12 sm:py-16 border-b border-white/6">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Text */}
            <div className="lg:col-span-3">
              <h2
                className="font-display text-white uppercase leading-none mb-4"
                style={{ fontSize: "clamp(1.4rem, 5vw, 2.2rem)" }}
              >
                Taller Motrio en Ripollet
                <br />
                <span className="text-red-600">
                  para {m.name}
                </span>
              </h2>
              <p className="text-white/50 font-body text-sm sm:text-base leading-relaxed mb-4">
                {m.intro}
              </p>
              <p className="text-white/50 font-body text-sm sm:text-base leading-relaxed">
                {m.whyUs}
              </p>
            </div>

            {/* Stats sidebar */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-2">
              {[
                { v: `${m.distanceKm} km`, l: `Desde ${m.nameShort}` },
                { v: `${m.distanceMin} min`, l: "En coche" },
                { v: `${config.googleRating}★`, l: "Google" },
                { v: "12 meses", l: "Garantía" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-zinc-950 border border-white/6 text-center py-5 px-3 rounded-sm"
                >
                  <div
                    className="font-display text-red-600 leading-none mb-1"
                    style={{ fontSize: "clamp(1.3rem, 4vw, 1.8rem)" }}
                  >
                    {s.v}
                  </div>
                  <div className="text-white/30 font-body text-xs uppercase tracking-wider">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS DESTACADOS ===== */}
      <section className="bg-zinc-950 py-12 sm:py-16 border-b border-white/6">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">
              Servicios
            </span>
          </div>
          <h2
            className="font-display text-white uppercase leading-none mb-6"
            style={{ fontSize: "clamp(1.4rem, 5vw, 2.2rem)" }}
          >
            Lo que hacemos
            <br />
            <span className="text-red-600">por tu coche</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {featuredServices.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="bg-zinc-900 border border-white/6 hover:border-red-600/30 p-4 sm:p-5 rounded-sm transition-colors duration-300 group"
              >
                <h3 className="font-display text-white uppercase text-sm sm:text-base leading-tight mb-1.5 group-hover:text-red-500 transition-colors">
                  {s.name}
                </h3>
                <p className="text-white/35 font-body text-xs sm:text-sm leading-relaxed">
                  {s.shortDescription}
                </p>
              </Link>
            ))}
          </div>

          <Link
            href="/servicios"
            className="inline-block mt-4 text-red-500 hover:text-red-400 font-body text-sm font-semibold transition-colors"
          >
            Ver todos los servicios →
          </Link>
        </div>
      </section>

      {/* ===== CÓMO LLEGAR ===== */}
      <section className="bg-zinc-900 py-12 sm:py-16 border-b border-white/6">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">
              Cómo llegar desde {m.nameShort}
            </span>
          </div>
          <h2
            className="font-display text-white uppercase leading-none mb-4"
            style={{ fontSize: "clamp(1.4rem, 5vw, 2.2rem)" }}
          >
            A solo {m.distanceMin} minutos
            <br />
            <span className="text-red-600">de tu casa</span>
          </h2>
          <p className="text-white/50 font-body text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
            {m.localInfo}
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {[
              {
                icon: "📍",
                title: config.street,
                desc: `${config.postalCode} ${config.city}, ${config.province}`,
              },
              {
                icon: "🕐",
                title: "L-V: 08:00–19:30",
                desc: "Sábados: 09:00–14:00",
              },
              {
                icon: "📞",
                title: config.phoneFormatted,
                desc: "WhatsApp disponible",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-zinc-950 border border-white/6 p-4 rounded-sm flex items-center gap-3"
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-body font-bold text-white text-sm">
                    {item.title}
                  </p>
                  <p className="text-white/40 font-body text-xs">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map embed */}
          <div className="rounded-sm overflow-hidden border border-white/6 aspect-video sm:aspect-[21/9]">
            <iframe
              title={`Cómo llegar desde ${m.name} a ${config.brandName}`}
              src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=${encodeURIComponent(m.name + ", Barcelona")}&destination=${encodeURIComponent(config.address)}&mode=driving&zoom=13`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ===== VENTAJAS ===== */}
      <section className="bg-zinc-950 py-12 sm:py-16 border-b border-white/6">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                n: "01",
                title: "Presupuesto gratis",
                desc: "Te damos presupuesto cerrado antes de empezar. Sin sorpresas ni costes ocultos.",
              },
              {
                n: "02",
                title: "Coche de cortesía",
                desc: "Vehículo de cortesía gratuito para reparaciones que requieran más de un día.",
              },
              {
                n: "03",
                title: "Garantía Motrio",
                desc: "12 meses de garantía en piezas y mano de obra, respaldados por la red Motrio.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="relative bg-zinc-900 border border-white/6 p-5 sm:p-6 rounded-sm overflow-hidden"
              >
                <span
                  className="absolute -bottom-2 -right-1 font-display text-red-600/10 leading-none select-none pointer-events-none"
                  style={{ fontSize: "5rem" }}
                  aria-hidden="true"
                >
                  {item.n}
                </span>
                <h3 className="font-display text-white uppercase text-base sm:text-lg leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-white/40 font-body text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <CTABanner />
    </>
  );
}
