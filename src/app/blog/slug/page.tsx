import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/config/blogPosts";
import { config } from "@/config";
import { CTABanner } from "@/components/home/CTABanner";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) notFound();

  // Otros posts para "Más artículos"
  const otherPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  // JSON-LD Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `${config.domain}${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: config.brandName,
      url: config.domain,
    },
    publisher: {
      "@type": "Organization",
      name: config.brandName,
      url: config.domain,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero con imagen */}
      <div className="relative pt-20 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            quality={80}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-zinc-950/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/75" />
        </div>

        <div className="max-w-3xl mx-auto px-5 sm:px-8 relative z-10">
          <Link href="/blog" className="text-white/30 hover:text-red-500 font-body text-sm transition-colors mb-6 block">
            ← Volver al blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-red-600 text-white text-[10px] font-body font-semibold uppercase tracking-wider px-2 py-1 rounded-sm">
              {post.category}
            </span>
            <span className="text-white/30 font-body text-xs">
              {new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="text-white/30 font-body text-xs">
              · {post.readTime} min lectura
            </span>
          </div>
          <h1 className="font-display text-white uppercase leading-none mb-4" style={{ fontSize: "clamp(1.6rem, 6vw, 2.8rem)" }}>
            {post.title}
          </h1>
          <p className="text-white/50 font-body text-base sm:text-lg leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Contenido del artículo */}
      <article className="bg-zinc-950 py-10">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="prose-aelia">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return <h2 key={i} className="font-display text-white uppercase text-xl sm:text-2xl mt-8 mb-4">{block.text}</h2>;
              }
              if (block.type === "h3") {
                return <h3 key={i} className="font-body font-bold text-white text-base sm:text-lg mt-6 mb-2">{block.text}</h3>;
              }
              if (block.type === "ul" && block.items) {
                return (
                  <ul key={i} className="my-4 space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="text-white/55 font-body text-sm sm:text-base leading-relaxed flex items-start gap-2">
                        <span className="text-red-500 mt-1.5 text-xs">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-white/55 font-body text-sm sm:text-base leading-relaxed mb-4">{block.text}</p>;
            })}
          </div>

          {/* CTA inline */}
          <div className="mt-10 bg-zinc-900 border border-red-600/20 rounded-sm p-6">
            <p className="text-white font-body font-bold text-base mb-2">¿Necesitas este servicio?</p>
            <p className="text-white/45 font-body text-sm mb-4">Pide tu presupuesto gratuito. Sin compromiso, en menos de 30 minutos.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={config.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-body font-bold text-sm px-5 py-3 rounded-sm transition-colors"
              >
                Pedir presupuesto por WhatsApp →
              </a>
              <Link
                href="/contacto"
                className="flex items-center justify-center border border-white/15 hover:border-white/30 text-white font-body font-semibold text-sm px-5 py-3 rounded-sm transition-colors"
              >
                Formulario de contacto
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Más artículos */}
      {otherPosts.length > 0 && (
        <div className="bg-zinc-900/50 border-t border-white/6 py-10">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-px bg-red-600" />
              <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">Más artículos</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-zinc-900 border border-white/6 rounded-sm overflow-hidden hover:border-red-600/30 transition-colors"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-body font-bold text-white text-sm group-hover:text-red-400 transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-white/25 font-body text-[11px] mt-2 block">{p.readTime} min lectura</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <CTABanner />
    </>
  );
}
