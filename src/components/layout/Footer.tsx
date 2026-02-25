import Link from "next/link";
import { config } from "@/config";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/6 py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm">
                <span className="font-display text-white text-lg leading-none">M</span>
              </div>
              <div>
                <div className="font-display text-white text-sm uppercase tracking-widest">Motrio</div>
                <div className="text-white/40 font-body text-[10px] uppercase tracking-wider">{config.brandName}</div>
              </div>
            </div>
            <p className="text-white/35 font-body text-sm leading-relaxed">{config.tagline}</p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white/50 font-body text-xs uppercase tracking-widest mb-4">Servicios</h4>
            <div className="flex flex-col gap-2">
              {config.services.filter(s => s.featured).slice(0, 5).map(s => (
                <Link key={s.slug} href={`/servicios/${s.slug}`} className="text-white/35 hover:text-white font-body text-sm transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white/50 font-body text-xs uppercase tracking-widest mb-4">Contacto</h4>
            <div className="flex flex-col gap-2 text-white/35 font-body text-sm">
              <a href={`tel:${config.phone}`} className="hover:text-white transition-colors">{config.phoneFormatted}</a>
              <a href={`mailto:${config.email}`} className="hover:text-white transition-colors">{config.email}</a>
              <p>{config.street}</p>
              <p>{config.postalCode} {config.city}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 font-body text-xs">© {new Date().getFullYear()} {config.legalName}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/aviso-legal" className="text-white/20 hover:text-white/50 font-body text-xs transition-colors">
              Aviso Legal
            </Link>
            <span className="text-white/10">·</span>
            <Link href="/politica-privacidad" className="text-white/20 hover:text-white/50 font-body text-xs transition-colors">
              Privacidad
            </Link>
            <span className="text-white/10">·</span>
            <Link href="/politica-cookies" className="text-white/20 hover:text-white/50 font-body text-xs transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
