"use client";

import { config } from "@/config";

export function LocationSection() {
  return (
    <section id="contacto" className="bg-zinc-900 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-5 h-px bg-red-600" />
          <span className="text-red-500 text-[11px] font-body font-semibold uppercase tracking-[0.15em]">Cómo llegar</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Info */}
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-white uppercase leading-none" style={{ fontSize: "clamp(1.8rem, 7vw, 3.5rem)" }}>
              Estamos en<br /><span className="text-red-600">Ripollet</span>
            </h2>

            <div className="flex flex-col gap-3">
              {[
                { icon: "📍", label: "Dirección", val: config.address },
                { icon: "📞", label: "Teléfono",  val: config.phoneFormatted, href: `tel:${config.phone}` },
                { icon: "✉️", label: "Email",     val: config.email, href: `mailto:${config.email}` },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-zinc-800/50 border border-white/6 px-4 py-3.5 rounded-sm">
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-white/35 font-body text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-body text-sm hover:text-red-500 transition-colors">{item.val}</a>
                    ) : (
                      <p className="text-white font-body text-sm">{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Horario */}
            <div className="bg-zinc-800/50 border border-white/6 rounded-sm overflow-hidden">
              {config.hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between px-4 py-2.5 border-b border-white/4 last:border-b-0">
                  <span className="text-white/50 font-body text-sm">{h.day}</span>
                  <span className={`font-body text-sm font-semibold ${h.closed ? "text-white/25" : "text-white"}`}>
                    {h.closed ? "Cerrado" : `${h.open} – ${h.close}`}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={config.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-red-600 active:bg-red-700 text-white font-body font-bold text-[15px] px-6 py-4 rounded-sm transition-colors"
            >
              Cómo llegar en Google Maps →
            </a>
          </div>

          {/* Mapa embed */}
          <div className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] rounded-sm overflow-hidden border border-white/6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.5!2d2.1543!3d41.4957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI5JzQ0LjUiTiAywrAwOSczMS4xIkU!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
