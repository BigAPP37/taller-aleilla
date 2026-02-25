"use client";

import { useEffect, useState } from "react";

const GA_ID = "G-32894MD9VZ";

function loadGA() {
  if (document.getElementById("ga-script")) return;
  const s = document.createElement("script");
  s.id = "ga-script";
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  s.async = true;
  document.head.appendChild(s);
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
  (window as any).gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: true });
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      loadGA();
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
    loadGA();
  }

  function reject() {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5">
      <div className="max-w-4xl mx-auto bg-zinc-900 border border-white/10 rounded-sm shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5">
          {/* Icono */}
          <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/>
            </svg>
          </div>

          {/* Texto */}
          <div className="flex-1 min-w-0">
            <p className="text-white font-body text-sm font-medium mb-1">
              Usamos cookies de análisis
            </p>
            <p className="text-white/45 font-body text-xs leading-relaxed">
              Usamos Google Analytics para entender cómo se usa la web y mejorarla. No vendemos tus datos.{" "}
              <a href="/politica-cookies" className="text-red-400 hover:text-red-300 underline underline-offset-2 transition-colors">
                Política de cookies
              </a>
            </p>
          </div>

          {/* Botones */}
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={reject}
              className="flex-1 sm:flex-none px-4 py-2 text-white/40 hover:text-white font-body text-xs border border-white/10 hover:border-white/25 transition-all rounded-sm"
            >
              Rechazar
            </button>
            <button
              onClick={accept}
              className="flex-1 sm:flex-none px-5 py-2 bg-red-600 hover:bg-red-500 text-white font-body text-xs font-medium transition-colors rounded-sm"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
