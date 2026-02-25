"use client";

import { useState } from "react";
import Link from "next/link";
import { config } from "@/config";

export default function PoliticaCookiesPage() {
  const [open, setOpen] = useState<number | null>(null);

  const cookies = [
    {
      nombre: "_ga",
      proveedor: "Google Analytics",
      finalidad: "Distingue a los usuarios. Registra un identificador único para generar datos estadísticos sobre cómo usa el visitante el sitio web.",
      tipo: "Analítica",
      duracion: "2 años",
    },
    {
      nombre: "_ga_XXXXXXXXXX",
      proveedor: "Google Analytics",
      finalidad: "Mantiene el estado de la sesión de Google Analytics.",
      tipo: "Analítica",
      duracion: "2 años",
    },
    {
      nombre: "_gid",
      proveedor: "Google Analytics",
      finalidad: "Registra un identificador único que se usa para generar datos estadísticos sobre cómo el visitante usa el sitio web.",
      tipo: "Analítica",
      duracion: "24 horas",
    },
    {
      nombre: "_gat",
      proveedor: "Google Analytics",
      finalidad: "Utilizada para limitar la tasa de solicitudes.",
      tipo: "Analítica",
      duracion: "1 minuto",
    },
    {
      nombre: "cookie_consent",
      proveedor: "aeliamotor.es",
      finalidad: "Almacena las preferencias de cookies del usuario para no volver a mostrar el banner.",
      tipo: "Técnica",
      duracion: "1 año",
    },
  ];

  return (
    <main className="bg-zinc-950 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-red-600 font-body text-xs uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-wide mb-4">
            Política de Cookies
          </h1>
          <p className="text-white/40 font-body text-sm">Última actualización: febrero 2026</p>
        </div>

        <div className="space-y-10 font-body">

          <Section title="1. ¿Qué son las cookies?">
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web. Sirven para que el sitio recuerde tu visita, preferencias e información, lo que facilita tu próxima visita y hace el sitio más útil.</p>
          </Section>

          <Section title="2. Cookies que usamos">
            <p>Este sitio web utiliza las siguientes cookies:</p>
            <div className="mt-4 space-y-3">
              {cookies.map((c, i) => (
                <div key={i} className="border border-white/8 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/3 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-2 py-0.5 rounded-sm font-medium ${
                        c.tipo === "Técnica"
                          ? "bg-zinc-700 text-white/60"
                          : "bg-red-600/20 text-red-400"
                      }`}>
                        {c.tipo}
                      </span>
                      <span className="text-white/80 text-sm font-medium">{c.nombre}</span>
                    </div>
                    <span className="text-white/30 text-xs">{open === i ? "▲" : "▼"}</span>
                  </button>
                  {open === i && (
                    <div className="px-4 pb-4 pt-1 bg-white/2 space-y-2">
                      <Row label="Proveedor" value={c.proveedor} />
                      <Row label="Finalidad" value={c.finalidad} />
                      <Row label="Duración" value={c.duracion} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section title="3. Google Analytics">
            <p>Utilizamos Google Analytics, un servicio de analítica web proporcionado por Google LLC. Google Analytics usa cookies para ayudarnos a analizar el uso que hacen los usuarios del sitio web. La información generada por la cookie sobre tu uso del sitio web (incluyendo tu dirección IP) será transmitida y almacenada por Google en servidores de Estados Unidos.</p>
            <p>Google usará esta información para evaluar tu uso del sitio web, compilar informes sobre la actividad del sitio web y proporcionar otros servicios relacionados con la actividad del sitio web y el uso de internet.</p>
            <p>Puedes consultar la política de privacidad de Google Analytics en: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-red-500 hover:text-red-400">policies.google.com/privacy</a></p>
            <p>Para excluirte del seguimiento de Google Analytics en todos los sitios web, visita: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" className="text-red-500 hover:text-red-400">tools.google.com/dlpage/gaoptout</a></p>
          </Section>

          <Section title="4. Cómo gestionar las cookies">
            <p>Puedes aceptar, rechazar o gestionar las cookies en cualquier momento a través de los siguientes métodos:</p>
            <ul>
              <li><strong>Banner de cookies:</strong> al acceder al sitio web por primera vez, verás un banner donde puedes aceptar o rechazar las cookies no esenciales.</li>
              <li><strong>Configuración del navegador:</strong> puedes configurar tu navegador para que rechace o elimine las cookies:</li>
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[
                ["Chrome", "Ajustes → Privacidad → Cookies"],
                ["Firefox", "Opciones → Privacidad → Cookies"],
                ["Safari", "Preferencias → Privacidad → Cookies"],
                ["Edge", "Configuración → Privacidad → Cookies"],
              ].map(([browser, path]) => (
                <div key={browser} className="bg-white/3 border border-white/8 px-3 py-2 rounded-sm">
                  <p className="text-white/80 text-sm font-medium">{browser}</p>
                  <p className="text-white/40 text-xs">{path}</p>
                </div>
              ))}
            </div>
            <p className="mt-3">Ten en cuenta que deshabilitar las cookies puede afectar al funcionamiento del sitio web.</p>
          </Section>

          <Section title="5. Actualizaciones de esta política">
            <p>{config.legalName} puede actualizar esta Política de Cookies en función de nuevas exigencias legislativas, reglamentarias o con el fin de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. Cualquier cambio será publicado en esta página con la fecha de actualización.</p>
          </Section>

          <Section title="6. Contacto">
            <p>Si tienes alguna pregunta sobre nuestra Política de Cookies, puedes contactarnos en:</p>
            <p><strong>Email:</strong> <a href={`mailto:${config.email}`} className="text-red-500 hover:text-red-400">{config.email}</a></p>
            <p><strong>Dirección:</strong> {config.address}</p>
          </Section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row gap-4">
          <Link href="/aviso-legal" className="text-red-500 hover:text-red-400 font-body text-sm transition-colors">
            → Aviso Legal
          </Link>
          <Link href="/politica-privacidad" className="text-red-500 hover:text-red-400 font-body text-sm transition-colors">
            → Política de Privacidad
          </Link>
          <Link href="/" className="text-white/40 hover:text-white font-body text-sm transition-colors ml-auto">
            ← Volver al inicio
          </Link>
        </div>

      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide mb-4 pb-2 border-b border-white/8">
        {title}
      </h2>
      <div className="text-white/60 font-body text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-white/30 text-xs w-24 shrink-0 pt-0.5">{label}</span>
      <span className="text-white/60 text-xs">{value}</span>
    </div>
  );
}
