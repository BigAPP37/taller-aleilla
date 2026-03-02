"use client";

import { useState } from "react";
import { config } from "@/config";

const ANCHOS = ["155","165","175","185","195","205","215","225","235","245","255","265","275","285","295","305"];
const PERFILES = ["30","35","40","45","50","55","60","65","70","75","80"];
const LLANTAS = ["13","14","15","16","17","18","19","20","21","22"];

type FormState = "idle" | "sending" | "ok" | "error";

export function ContactForm() {
  const [servicio, setServicio] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isNeumaticos = servicio === "neumaticos";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const data: Record<string, any> = {
      nombre: fd.get("nombre"),
      telefono: fd.get("telefono"),
      email: fd.get("email") || "",
      matricula: fd.get("matricula") || "",
      modelo: fd.get("modelo") || "",
      servicio: fd.get("servicio"),
      mensaje: fd.get("mensaje") || "",
    };

    if (isNeumaticos) {
      data.medidas = {
        ancho: fd.get("ancho"),
        perfil: fd.get("perfil"),
        llanta: fd.get("llanta"),
      };
    }

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        setFormState("ok");
      } else {
        setErrorMsg(json.error || "Error al enviar.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Error de conexión. Inténtalo de nuevo.");
      setFormState("error");
    }
  }

  if (formState === "ok") {
    return (
      <div className="bg-zinc-900 border border-green-600/30 rounded-sm p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-display text-white uppercase text-xl mb-2">Solicitud enviada</h3>
        <p className="text-white/50 font-body text-sm mb-6">
          Hemos recibido tu solicitud. Te contactaremos lo antes posible con el presupuesto.
        </p>
        <a
          href={config.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white font-body font-bold text-sm px-5 py-3 rounded-sm"
        >
          ¿Urgente? Escríbenos por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 border border-white/[0.06] rounded-sm overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 px-5 py-4 sm:px-6">
        <h3 className="font-display text-white uppercase text-lg sm:text-xl">
          Solicita tu presupuesto
        </h3>
        <p className="text-white/70 font-body text-xs mt-1">
          Te respondemos en menos de 30 minutos en horario laboral
        </p>
      </div>

      <div className="p-5 sm:p-6 flex flex-col gap-4">
        {/* Nombre + Teléfono */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-white/50 font-body text-xs uppercase tracking-wider mb-1.5 block">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              name="nombre"
              type="text"
              required
              placeholder="Tu nombre"
              className="w-full bg-zinc-950 border border-white/10 text-white font-body text-sm px-4 py-3 rounded-sm focus:border-red-600/60 focus:outline-none transition-colors placeholder:text-white/20"
            />
          </div>
          <div>
            <label className="text-white/50 font-body text-xs uppercase tracking-wider mb-1.5 block">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              name="telefono"
              type="tel"
              required
              placeholder="600 000 000"
              className="w-full bg-zinc-950 border border-white/10 text-white font-body text-sm px-4 py-3 rounded-sm focus:border-red-600/60 focus:outline-none transition-colors placeholder:text-white/20"
            />
          </div>
        </div>

        {/* Email (opcional) */}
        <div>
          <label className="text-white/50 font-body text-xs uppercase tracking-wider mb-1.5 block">
            Email <span className="text-white/20">(opcional)</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="tu@email.com"
            className="w-full bg-zinc-950 border border-white/10 text-white font-body text-sm px-4 py-3 rounded-sm focus:border-red-600/60 focus:outline-none transition-colors placeholder:text-white/20"
          />
        </div>

        {/* Modelo + Matrícula */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-white/50 font-body text-xs uppercase tracking-wider mb-1.5 block">
              Modelo del vehículo
            </label>
            <input
              name="modelo"
              type="text"
              placeholder="Ej: Peugeot 308 1.5 HDI"
              className="w-full bg-zinc-950 border border-white/10 text-white font-body text-sm px-4 py-3 rounded-sm focus:border-red-600/60 focus:outline-none transition-colors placeholder:text-white/20"
            />
          </div>
          <div>
            <label className="text-white/50 font-body text-xs uppercase tracking-wider mb-1.5 block">
              Matrícula
            </label>
            <input
              name="matricula"
              type="text"
              placeholder="1234 ABC"
              maxLength={10}
              className="w-full bg-zinc-950 border border-white/10 text-white font-body text-sm px-4 py-3 rounded-sm focus:border-red-600/60 focus:outline-none transition-colors placeholder:text-white/20 uppercase"
            />
          </div>
        </div>

        {/* Servicio */}
        <div>
          <label className="text-white/50 font-body text-xs uppercase tracking-wider mb-1.5 block">
            Servicio <span className="text-red-500">*</span>
          </label>
          <select
            name="servicio"
            required
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
            className="w-full bg-zinc-950 border border-white/10 text-white font-body text-sm px-4 py-3 rounded-sm focus:border-red-600/60 focus:outline-none transition-colors appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%23666' stroke-width='1.5'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
          >
            <option value="" disabled>Selecciona un servicio</option>
            {config.services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
            <option value="otro">Otro / No estoy seguro</option>
          </select>
        </div>

        {/* Medidas de neumáticos — solo si selecciona neumáticos */}
        {isNeumaticos && (
          <div className="bg-zinc-950 border border-red-600/20 rounded-sm p-4 animate-in">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2a8 8 0 110 16 8 8 0 010-16zm0 4a4 4 0 100 8 4 4 0 000-8zm0 2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
              </svg>
              <span className="text-red-500 font-body text-xs font-semibold uppercase tracking-wider">
                Medidas del neumático
              </span>
            </div>
            <p className="text-white/30 font-body text-xs mb-3">
              Las encuentras en el lateral del neumático. Ej: 205/55 R16
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-white/40 font-body text-[10px] uppercase tracking-wider mb-1 block">Ancho</label>
                <select
                  name="ancho"
                  required
                  className="w-full bg-zinc-900 border border-white/10 text-white font-body text-sm px-3 py-2.5 rounded-sm focus:border-red-600/60 focus:outline-none transition-colors"
                >
                  <option value="">—</option>
                  {ANCHOS.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <label className="text-white/40 font-body text-[10px] uppercase tracking-wider mb-1 block">Perfil</label>
                <select
                  name="perfil"
                  required
                  className="w-full bg-zinc-900 border border-white/10 text-white font-body text-sm px-3 py-2.5 rounded-sm focus:border-red-600/60 focus:outline-none transition-colors"
                >
                  <option value="">—</option>
                  {PERFILES.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <label className="text-white/40 font-body text-[10px] uppercase tracking-wider mb-1 block">Llanta</label>
                <select
                  name="llanta"
                  required
                  className="w-full bg-zinc-900 border border-white/10 text-white font-body text-sm px-3 py-2.5 rounded-sm focus:border-red-600/60 focus:outline-none transition-colors"
                >
                  <option value="">—</option>
                  {LLANTAS.map(v => <option key={v} value={v}>R{v}</option>)}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Mensaje */}
        <div>
          <label className="text-white/50 font-body text-xs uppercase tracking-wider mb-1.5 block">
            Mensaje <span className="text-white/20">(opcional)</span>
          </label>
          <textarea
            name="mensaje"
            rows={3}
            placeholder="Cuéntanos qué necesitas o cualquier detalle relevante..."
            className="w-full bg-zinc-950 border border-white/10 text-white font-body text-sm px-4 py-3 rounded-sm focus:border-red-600/60 focus:outline-none transition-colors resize-none placeholder:text-white/20"
          />
        </div>

        {/* Error */}
        {formState === "error" && (
          <div className="bg-red-600/10 border border-red-600/30 text-red-400 font-body text-sm px-4 py-3 rounded-sm">
            {errorMsg}
          </div>
        )}

        {/* Privacidad + Submit */}
        <p className="text-white/25 font-body text-[11px] leading-relaxed">
          Al enviar, aceptas nuestra{" "}
          <a href="/politica-privacidad" className="text-white/40 underline hover:text-white/60">política de privacidad</a>.
          Usaremos tus datos solo para responder a tu solicitud.
        </p>

        <button
          type="submit"
          disabled={formState === "sending"}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 disabled:cursor-wait text-white font-body font-bold text-[15px] py-4 rounded-sm transition-colors active:scale-[0.98]"
        >
          {formState === "sending" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={3} strokeLinecap="round" className="opacity-25"/>
                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth={3} strokeLinecap="round" className="opacity-75"/>
              </svg>
              Enviando…
            </span>
          ) : (
            "Solicitar presupuesto"
          )}
        </button>
      </div>
    </form>
  );
}
