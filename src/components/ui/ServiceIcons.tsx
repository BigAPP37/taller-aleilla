// Iconos SVG profesionales para cada servicio
// Estilo: line/stroke, detallado, reconocible al instante

export function IconOil({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Oil can */}
      <path d="M5 10h10a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8a1 1 0 011-1z" fill="currentColor" fillOpacity={0.15} stroke="currentColor" />
      <path d="M7 10V8a1 1 0 011-1h4a1 1 0 011 1v2" />
      {/* Spout */}
      <path d="M16 13l3-2v4l-3-2z" fill="currentColor" fillOpacity={0.3} stroke="currentColor" />
      {/* Oil drop */}
      <path d="M10 15.5a1.5 1.5 0 11-3 0c0-1.5 1.5-3 1.5-3s1.5 1.5 1.5 3z" fill="currentColor" fillOpacity={0.4} />
      {/* Handle */}
      <path d="M8 7V5h4v2" />
    </svg>
  );
}

export function IconBrakes({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Brake disc outer */}
      <circle cx="12" cy="12" r="9.5" strokeWidth={1.5} />
      {/* Ventilation slots */}
      <circle cx="12" cy="12" r="6.5" strokeWidth={1} strokeDasharray="3 2.5" />
      {/* Hub */}
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity={0.15} strokeWidth={1.5} />
      {/* Center bolt */}
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      {/* Brake caliper */}
      <path d="M18.5 8.5a2 2 0 012 2v3a2 2 0 01-2 2" strokeWidth={2} stroke="currentColor" fill="currentColor" fillOpacity={0.2} />
    </svg>
  );
}

export function IconDiagnosis({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* OBD scanner body */}
      <rect x="3" y="4" width="13" height="9" rx="1.5" fill="currentColor" fillOpacity={0.1} stroke="currentColor" />
      {/* Screen */}
      <rect x="5" y="6" width="9" height="4" rx="0.5" fill="currentColor" fillOpacity={0.2} />
      {/* Screen wave / signal */}
      <path d="M6.5 8.5l1.5-1.5 1 2 1.5-2.5 1 2 1-1.5" strokeWidth={1} />
      {/* Cable */}
      <path d="M16 9c2 0 3 0 4 1s2 2 2 3.5" strokeWidth={1.5} />
      {/* Connector plug */}
      <rect x="20" y="13" width="2.5" height="4" rx="0.5" fill="currentColor" fillOpacity={0.3} stroke="currentColor" strokeWidth={1} />
      {/* Buttons */}
      <circle cx="6" cy="15" r="0.8" fill="currentColor" />
      <circle cx="9" cy="15" r="0.8" fill="currentColor" />
      <circle cx="12" cy="15" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function IconTyres({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Tyre outer */}
      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
      {/* Tyre inner wall */}
      <circle cx="12" cy="12" r="7" strokeWidth={1.5} />
      {/* Rim */}
      <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity={0.15} strokeWidth={1.5} />
      {/* Center hub */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" fillOpacity={0.4} />
      {/* Tread pattern */}
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" strokeWidth={1.5} />
      {/* Spoke lines */}
      <path d="M12 8v-1M12 17v-1M8 12H7M17 12h-1M9.2 9.2l-.7-.7M15.5 15.5l-.7-.7M14.8 9.2l.7-.7M8.5 15.5l.7-.7" strokeWidth={0.8} opacity={0.5} />
    </svg>
  );
}

export function IconITV({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Clipboard */}
      <path d="M8 3h8a1 1 0 011 1v1H7V4a1 1 0 011-1z" fill="currentColor" fillOpacity={0.2} />
      <rect x="4" y="4" width="16" height="17" rx="1.5" fill="currentColor" fillOpacity={0.08} stroke="currentColor" />
      {/* Clip */}
      <path d="M9 2h6v3H9z" fill="currentColor" fillOpacity={0.3} stroke="currentColor" strokeWidth={1} />
      {/* Check marks */}
      <path d="M7.5 9.5l1.5 1.5 3-3" strokeWidth={1.8} />
      <path d="M7.5 14l1.5 1.5 3-3" strokeWidth={1.8} />
      {/* Text lines */}
      <path d="M14 9h4M14 14h4" strokeWidth={1} opacity={0.4} />
      {/* ITV stamp */}
      <circle cx="16" cy="18" r="2.5" fill="currentColor" fillOpacity={0.15} strokeWidth={1} />
      <path d="M15 18l0.8 0.8 1.7-1.8" strokeWidth={1} />
    </svg>
  );
}

export function IconAC({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Snowflake center */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" fillOpacity={0.3} />
      {/* Main axes */}
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" strokeWidth={1.2} />
      {/* Branch details */}
      <path d="M12 3l-2 2M12 3l2 2M12 21l-2-2M12 21l2-2" strokeWidth={1.2} />
      <path d="M3 12l2-2M3 12l2 2M21 12l-2-2M21 12l-2 2" strokeWidth={1.2} />
      {/* Cold waves */}
      <path d="M6.5 5.5l.5 2M17.5 5.5l-.5 2M17.5 18.5l-.5-2M6.5 18.5l.5-2" strokeWidth={1} opacity={0.5} />
    </svg>
  );
}

export function IconSuspension({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Top mount */}
      <rect x="8" y="2" width="8" height="3" rx="1" fill="currentColor" fillOpacity={0.2} stroke="currentColor" />
      {/* Shock body */}
      <rect x="10" y="5" width="4" height="7" rx="0.5" fill="currentColor" fillOpacity={0.15} stroke="currentColor" />
      {/* Piston rod */}
      <line x1="12" y1="12" x2="12" y2="15" strokeWidth={2} />
      {/* Spring coils */}
      <path d="M8 8l8 2M8 10.5l8 2M8 13l8 2M8 15.5l8 2" strokeWidth={1.5} />
      {/* Bottom mount */}
      <rect x="8" y="19" width="8" height="3" rx="1" fill="currentColor" fillOpacity={0.2} stroke="currentColor" />
      <line x1="12" y1="17.5" x2="12" y2="19" strokeWidth={2} />
    </svg>
  );
}

export function IconClutch({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Clutch disc outer */}
      <circle cx="12" cy="12" r="9.5" strokeWidth={1.5} />
      {/* Friction surface */}
      <circle cx="12" cy="12" r="7" strokeWidth={1} fill="currentColor" fillOpacity={0.08} />
      {/* Inner hub */}
      <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity={0.15} strokeWidth={1.5} />
      {/* Spline center */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" fillOpacity={0.4} />
      {/* Friction pad segments */}
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2" strokeWidth={2} opacity={0.3} />
      <path d="M7.1 7.1l1.4 1.4M15.5 15.5l1.4 1.4M16.9 7.1l-1.4 1.4M8.5 15.5l-1.4 1.4" strokeWidth={2} opacity={0.3} />
      {/* Springs */}
      <path d="M9.5 9.5l-1-1M14.5 9.5l1-1M14.5 14.5l1 1M9.5 14.5l-1 1" strokeWidth={1} opacity={0.6} />
    </svg>
  );
}

export function IconTiming({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Large gear */}
      <circle cx="9" cy="9" r="5.5" fill="currentColor" fillOpacity={0.1} strokeWidth={1.5} />
      <circle cx="9" cy="9" r="2" fill="currentColor" fillOpacity={0.3} />
      {/* Large gear teeth */}
      <path d="M9 3.5v-1M9 15.5v-1M3.5 9h-1M15.5 9h-1M5.1 5.1l-.7-.7M13.6 13.6l-.7-.7M12.9 5.1l.7-.7M4.4 13.6l.7-.7" strokeWidth={1.8} />
      {/* Small gear */}
      <circle cx="17" cy="16" r="3.5" fill="currentColor" fillOpacity={0.1} strokeWidth={1.5} />
      <circle cx="17" cy="16" r="1.3" fill="currentColor" fillOpacity={0.3} />
      {/* Small gear teeth */}
      <path d="M17 12.5v-.8M17 20.3v-.8M13.5 16h-.8M21.3 16h-.8" strokeWidth={1.5} />
      {/* Belt/chain connecting */}
      <path d="M13.5 6.5l2 5.5" strokeWidth={1} strokeDasharray="2 1.5" opacity={0.5} />
      <path d="M4 12l6 5.5" strokeWidth={1} strokeDasharray="2 1.5" opacity={0.5} />
    </svg>
  );
}

export function IconElectric({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Battery body */}
      <rect x="3" y="7" width="16" height="11" rx="1.5" fill="currentColor" fillOpacity={0.1} stroke="currentColor" />
      {/* Battery terminal */}
      <rect x="19" y="10" width="2.5" height="4.5" rx="0.5" fill="currentColor" fillOpacity={0.3} stroke="currentColor" strokeWidth={1} />
      {/* Positive terminal marker */}
      <path d="M15 5v2M14 6h2" strokeWidth={1.5} />
      {/* Negative terminal marker */}
      <path d="M7 5.5h2" strokeWidth={1.5} />
      {/* Lightning bolt */}
      <path d="M12 10l-2 3h3.5l-2 3" strokeWidth={1.8} />
      {/* Cell divider */}
      <line x1="11" y1="8" x2="11" y2="17" strokeWidth={0.8} opacity={0.3} />
    </svg>
  );
}

export function IconExhaust({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Exhaust pipe */}
      <path d="M2 14h5" strokeWidth={2} />
      {/* Muffler body */}
      <rect x="7" y="10" width="8" height="8" rx="2" fill="currentColor" fillOpacity={0.1} stroke="currentColor" />
      {/* Tail pipe */}
      <path d="M15 14h3" strokeWidth={2} />
      {/* Tip */}
      <ellipse cx="19.5" cy="14" rx="1.5" ry="2.5" fill="currentColor" fillOpacity={0.15} stroke="currentColor" />
      {/* Smoke / emission clouds */}
      <path d="M20 10c1-1.5 2.5-1 2 0" strokeWidth={1} opacity={0.4} />
      <path d="M21 8c1-2 3-1 2.5 0.5" strokeWidth={1} opacity={0.3} />
      <path d="M19.5 6.5c0.5-1.5 2-1 1.5 0.5" strokeWidth={1} opacity={0.2} />
      {/* Internal baffle */}
      <line x1="10" y1="10.5" x2="10" y2="17.5" strokeWidth={0.8} opacity={0.3} />
      <line x1="13" y1="10.5" x2="13" y2="17.5" strokeWidth={0.8} opacity={0.3} />
    </svg>
  );
}

export function IconMaintenance({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Wrench */}
      <path d="M6.5 6.5a4 4 0 015.2-.5l-2 2 .3 2 2 .3 2-2a4 4 0 01-.5 5.2L7 20a1.5 1.5 0 01-2.1 0l-.9-.9a1.5 1.5 0 010-2.1l6.5-6.5" fill="currentColor" fillOpacity={0.08} stroke="currentColor" />
      {/* Screwdriver */}
      <path d="M17.5 6.5l-4 4" strokeWidth={1.8} />
      <path d="M18 3l3 3-1.5 1.5-3-3L18 3z" fill="currentColor" fillOpacity={0.2} stroke="currentColor" />
      <line x1="11.5" y1="12.5" x2="14" y2="15" strokeWidth={1.5} />
      {/* Bolt detail */}
      <circle cx="5.5" cy="18.5" r="1" fill="currentColor" fillOpacity={0.3} />
    </svg>
  );
}

// Mapa slug → icono
export const serviceIconMap: Record<string, React.FC<{ className?: string }>> = {
  "cambio-aceite-y-filtros":   IconOil,
  "frenos":                     IconBrakes,
  "diagnosis-electronica":      IconDiagnosis,
  "neumaticos":                 IconTyres,
  "revision-pre-itv":           IconITV,
  "climatizacion":              IconAC,
  "suspension-y-direccion":     IconSuspension,
  "embrague":                   IconClutch,
  "correa-de-distribucion":     IconTiming,
  "electricidad":               IconElectric,
  "escape":                     IconExhaust,
  "mantenimiento-general":      IconMaintenance,
};
