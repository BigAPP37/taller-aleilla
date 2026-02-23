import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-5 text-center">
      <span className="font-display text-red-600 text-8xl leading-none mb-4">404</span>
      <h1 className="font-display text-white uppercase text-3xl mb-3">Página no encontrada</h1>
      <p className="text-white/40 font-body text-sm mb-8">La página que buscas no existe.</p>
      <Link href="/" className="bg-red-600 text-white font-body font-bold px-6 py-3 rounded-sm active:scale-95 transition-transform">
        Volver al inicio →
      </Link>
    </div>
  );
}
