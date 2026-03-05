"use client";

import { useState, useRef, useEffect } from "react";
import { config } from "@/config";

// ─── Types ────────────────────────────────────────────────
interface Message {
  role: "assistant" | "user";
  text: string;
  buttons?: { label: string; value: string }[];
}

interface ClientData {
  nombre?: string;
  telefono?: string;
  coche?: string;
  matricula?: string;
  servicio?: string;
  detalles?: string;
}

// ─── System prompt for Claude ─────────────────────────────
const SYSTEM_PROMPT = `Eres el asistente virtual de Aelia Motor, un taller mecánico oficial Motrio en Ripollet, Barcelona.

PERSONALIDAD: Eres cercano, profesional y directo. Hablas como un mecánico de confianza, no como un robot. Usas un tono amable pero eficiente. Tuteas al cliente. No uses emojis excesivos (máximo 1 por mensaje). Respuestas CORTAS: máximo 2-3 frases por mensaje.

TU OBJETIVO: Recoger los datos del cliente para que el taller pueda contactarle rápidamente. Necesitas:
1. Nombre
2. Teléfono
3. Coche (marca, modelo y año aproximado)
4. Qué necesita (servicio)
5. Detalles adicionales si los hay

INFORMACIÓN DEL TALLER:
- Nombre: Aelia Motor (red Motrio, grupo Renault)
- Dirección: Carrer de la Indústria, 19, 08291 Ripollet, Barcelona
- Teléfono: 608 20 55 12
- Horario: Lunes a Viernes 08:00-19:30, Sábado 09:00-14:00, Domingo cerrado
- Trabajamos con TODAS las marcas
- Presupuestos siempre gratuitos y sin compromiso
- Coche de cortesía disponible
- Garantía de 12 meses en piezas y mano de obra

SERVICIOS Y PRECIOS ORIENTATIVOS:
- Cambio de aceite + filtro: desde 59€
- Pastillas de freno delanteras: desde 89€
- Pastillas + discos delanteros: desde 189€
- Revisión pre-ITV: consultar
- Neumáticos: según medida, desde 50€/unidad montado
- Diagnosis electrónica: desde 35€
- Climatización (recarga AC): desde 59€
- Embrague: desde 450€ (depende mucho del modelo)
- Distribución: desde 350€ (depende mucho del modelo)

REGLAS IMPORTANTES:
- Si preguntan por un precio, da el orientativo con "desde X€" y aclara que el presupuesto exacto es gratuito
- Si preguntan algo que no sabes, di que el mecánico le dará más detalles y recoge sus datos
- NUNCA inventes precios que no están en tu lista
- Cuando tengas nombre + teléfono + coche + servicio, resume los datos y pregunta si quiere que el taller le contacte
- Si el cliente tiene prisa, ve directo a recoger datos sin rodeos
- Si el cliente solo tiene una duda rápida, respóndela y luego ofrece recoger datos por si necesita algo más

FORMATO: Responde SOLO en texto plano. Sin markdown, sin asteriscos, sin guiones. Frases cortas y naturales.`;

// ─── Component ────────────────────────────────────────────
export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [clientData, setClientData] = useState<ClientData>({});
  const [dataSummary, setDataSummary] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasGreeted, setHasGreeted] = useState(false);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Greeting on first open
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      setMessages([
        {
          role: "assistant",
          text: "¡Hola! Soy el asistente de Aelia Motor. ¿En qué puedo ayudarte?",
          buttons: [
            { label: "Pedir presupuesto", value: "Quiero pedir un presupuesto" },
            { label: "Pedir cita", value: "Quiero pedir cita" },
            { label: "Tengo una duda", value: "Tengo una pregunta sobre un servicio" },
          ],
        },
      ]);
    }
  }, [isOpen, hasGreeted]);

  // Send message to Claude API
  async function sendMessage(userText: string) {
    const userMsg: Message = { role: "user", text: userText };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Build conversation history for Claude
      const apiMessages = updatedMessages.map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.text,
      }));

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 300,
          system: SYSTEM_PROMPT,
          messages: apiMessages,
        }),
      });

      const data = await response.json();
      const assistantText =
        data.content?.map((b: any) => b.text || "").join("") ||
        "Perdona, ha habido un error. ¿Puedes repetirme eso?";

      // Try to extract client data from conversation
      extractData(updatedMessages, assistantText);

      const assistantMsg: Message = { role: "assistant", text: assistantText };
      setMessages([...updatedMessages, assistantMsg]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          text: "Vaya, ha habido un problema de conexión. Puedes escribirnos directamente al 608 20 55 12.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  // Extract client data from conversation
  function extractData(msgs: Message[], latestAssistant: string) {
    const allText = msgs.map((m) => m.text).join(" ") + " " + latestAssistant;
    const updated = { ...clientData };

    // Simple extraction (the AI does the heavy lifting in conversation)
    const phoneMatch = allText.match(/(\d{3}[\s.-]?\d{2,3}[\s.-]?\d{2,3}[\s.-]?\d{0,2})/);
    if (phoneMatch && phoneMatch[1].replace(/\D/g, "").length >= 9) {
      updated.telefono = phoneMatch[1];
    }

    setClientData(updated);

    // Check if AI is summarizing (means it has all data)
    if (
      latestAssistant.toLowerCase().includes("resumen") ||
      latestAssistant.toLowerCase().includes("contacte") ||
      latestAssistant.toLowerCase().includes("datos que tengo")
    ) {
      setDataSummary(latestAssistant);
    }
  }

  // Generate WhatsApp link with collected data
  function getWhatsAppLink() {
    const allUserMsgs = messages
      .filter((m) => m.role === "user")
      .map((m) => m.text)
      .join(". ");

    const summary = dataSummary || allUserMsgs;
    const text = encodeURIComponent(
      `Hola, vengo del chat de la web. ${summary.substring(0, 300)}`
    );
    return `https://wa.me/34608205512?text=${text}`;
  }

  // Handle button click
  function handleButton(value: string) {
    sendMessage(value);
  }

  // Handle form submit
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input.trim());
  }

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-20 right-4 sm:right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen
            ? "bg-zinc-800 hover:bg-zinc-700 scale-90"
            : "bg-red-600 hover:bg-red-500 scale-100 animate-pulse hover:animate-none"
        }`}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-36 right-4 sm:right-5 z-50 w-[340px] sm:w-[380px] transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-zinc-900 border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col" style={{ height: "min(520px, calc(100vh - 200px))" }}>
          {/* Header */}
          <div className="bg-zinc-950 border-b border-white/6 px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center">
              <span className="font-display text-white text-sm">M</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-body text-sm font-semibold">Aelia Motor</p>
              <p className="text-green-400 font-body text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                En línea
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl font-body text-[13px] leading-relaxed ${
                    msg.role === "assistant"
                      ? "bg-zinc-800 text-white/80 rounded-tl-sm"
                      : "bg-red-600 text-white rounded-tr-sm ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
                {/* Quick action buttons */}
                {msg.buttons && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {msg.buttons.map((btn) => (
                      <button
                        key={btn.value}
                        onClick={() => handleButton(btn.value)}
                        className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-white/10 hover:border-red-600/40 text-white/70 hover:text-white font-body text-xs rounded-full transition-all"
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Loading dots */}
            {isLoading && (
              <div className="max-w-[85%] px-3.5 py-3 bg-zinc-800 rounded-2xl rounded-tl-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {/* WhatsApp CTA when data is collected */}
            {dataSummary && (
              <div className="bg-green-900/30 border border-green-500/20 rounded-lg p-3 mt-2">
                <p className="text-green-400 font-body text-xs font-semibold mb-2">¿Todo correcto? Habla con el taller:</p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-body font-bold text-sm px-4 py-2.5 rounded-lg transition-colors w-full"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.319 0-4.476-.672-6.32-1.823l-.452-.279-2.942.986.986-2.942-.279-.452A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                  Enviar por WhatsApp
                </a>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-white/6 px-3 py-2.5 flex gap-2 shrink-0 bg-zinc-950">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
              className="flex-1 bg-zinc-800 border border-white/6 rounded-full px-4 py-2 text-white font-body text-sm placeholder:text-white/25 focus:outline-none focus:border-red-600/40 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-9 h-9 bg-red-600 hover:bg-red-500 disabled:bg-zinc-700 rounded-full flex items-center justify-center transition-colors shrink-0"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
