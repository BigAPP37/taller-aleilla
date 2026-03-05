import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/config/blogPosts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Consejos de mecánica y mantenimiento del coche | Aelia Motor",
  description: "Consejos prácticos sobre mantenimiento del coche, frenos, aceite, ITV y más. Blog del taller mecánico Motrio Aelia Motor en Ripollet, Barcelona.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      {/* Hero */}
      <div className="pt-20 pb-10 bg-zinc-950 border-b border-white/6">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">Blog</span>
          </div>
          <h1 className="font-display text-white uppercase leading-none mb-3" style={{ fontSize: "clamp(1.8rem, 7vw, 3rem)" }}>
            Consejos de mecánica
          </h1>
          <p className="text-white/50 font-body text-base sm:text-lg max-w-2xl">
            Guías prácticas para cuidar tu coche, ahorrar en reparaciones y saber cuándo visitar el taller.
          </p>
        </div>
      </div>

      {/* Grid de posts */}
      <div className="bg-zinc-950 py-10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-zinc-900 border border-white/6 rounded-sm overflow-hidden hover:border-red-600/30 transition-colors"
              >
                {/* Imagen */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-red-600 text-white text-[10px] font-body font-semibold uppercase tracking-wider px-2 py-1 rounded-sm">
                    {post.category}
                  </span>
                </div>

                {/* Contenido */}
                <div className="p-4">
                  <h2 className="font-body font-bold text-white text-sm leading-snug mb-2 group-hover:text-red-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/40 font-body text-xs leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-white/25 font-body text-[11px]">
                    <span>{new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span>·</span>
                    <span>{post.readTime} min lectura</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
