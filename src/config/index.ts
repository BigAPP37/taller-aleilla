export const config = {
  // Identidad
  brandName: "Aelia Motor",
  legalName: "Aelia Motor S.L.",
  tagline: "Reparamos tu coche hoy.",
  network: "Motrio",

  // Contacto
  phone: "608205512",
  phoneFormatted: "608 20 55 12",
  email: "info@aeliamotor.es",
  whatsappNumber: "34608205512",

  // Ubicación
  address: "Carrer de la Indústria, 19, 08291 Ripollet, Barcelona",
  street: "Carrer de la Indústria, 19",
  city: "Ripollet",
  postalCode: "08291",
  province: "Barcelona",
  mapUrl: "https://maps.google.com/?q=Carrer+de+la+Ind%C3%BAstria,+19,+08291+Ripollet,+Barcelona",
  lat: 41.49373,
  lng: 2.16433,

  // Google
  googleRating: 5.0,
  googleReviewCount: 20,

  // Horario
  hours: [
    { day: "Lunes",     open: "08:00", close: "19:30", closed: false },
    { day: "Martes",    open: "08:00", close: "19:30", closed: false },
    { day: "Miércoles", open: "08:00", close: "19:30", closed: false },
    { day: "Jueves",    open: "08:00", close: "19:30", closed: false },
    { day: "Viernes",   open: "08:00", close: "19:30", closed: false },
    { day: "Sábado",    open: "09:00", close: "14:00", closed: false },
    { day: "Domingo",   open: "",      close: "",       closed: true  },
  ],

  // Redes
  social: {
    whatsapp: "https://wa.me/34608205512?text=Hola%2C%20quiero%20pedir%20cita",
    google: "https://g.page/r/aeliamotor",
    facebook: "",
  },

  // SEO
  domain: "https://aeliamotor.es",
  seoDescription: "Taller mecánico oficial Motrio en Ripollet, Barcelona. Cambio de aceite, frenos, neumáticos, ITV y más. Presupuesto gratis en 30 min.",

  // Servicios
  services: [
    { slug: "cambio-aceite-y-filtros",    name: "Cambio de Aceite",         icon: "🛢️",  shortDescription: "Aceite de calidad y filtros originales. Tu motor siempre a punto.", featured: true },
    { slug: "frenos",                      name: "Frenos",                   icon: "🔴",  shortDescription: "Revisión, sustitución y ajuste de frenos. Seguridad ante todo.", featured: true },
    { slug: "diagnosis-electronica",       name: "Diagnosis Electrónica",    icon: "💻",  shortDescription: "Equipo de diagnosis oficial. Detectamos cualquier avería.", featured: true },
    { slug: "neumaticos",                  name: "Neumáticos",               icon: "⭕",  shortDescription: "Venta, montaje y equilibrado de neumáticos de todas las marcas.", featured: true },
    { slug: "revision-pre-itv",            name: "Revisión Pre-ITV",         icon: "✅",  shortDescription: "Pasa la ITV a la primera. Revisamos todo antes.", featured: true },
    { slug: "climatizacion",               name: "Climatización",            icon: "❄️",  shortDescription: "Recarga y reparación de aire acondicionado.", featured: true },
    { slug: "suspension-y-direccion",      name: "Suspensión",               icon: "🔩",  shortDescription: "Amortiguadores, rótulas y dirección.", featured: false },
    { slug: "embrague",                    name: "Embrague",                 icon: "⚙️",  shortDescription: "Sustitución de embrague en todas las marcas.", featured: false },
    { slug: "correa-de-distribucion",      name: "Distribución",             icon: "🔗",  shortDescription: "Cambio de correa o cadena de distribución.", featured: false },
    { slug: "electricidad",                name: "Electricidad",             icon: "⚡",  shortDescription: "Batería, alternador, motor de arranque.", featured: false },
    { slug: "escape",                      name: "Escape",                   icon: "💨",  shortDescription: "Reparación y sustitución del sistema de escape.", featured: false },
    { slug: "mantenimiento-general",       name: "Mantenimiento",            icon: "🔧",  shortDescription: "Revisión completa según el plan del fabricante.", featured: false },
  ],

  // Reseñas
  reviews: [
    { author: "Carlos M.",    rating: 5, text: "Rápidos, profesionales y honestos. El presupuesto fue exacto, sin sorpresas. Volvería sin dudarlo.", date: "2024-12-01" },
    { author: "Ana García",   rating: 5, text: "Me atendieron el mismo día que llamé. Repararon los frenos en pocas horas. Muy recomendable.", date: "2024-11-15" },
    { author: "Pere Solà",    rating: 5, text: "Taller de confianza en Ripollet. Llevo años yendo y siempre quedan perfectos.", date: "2024-10-20" },
    { author: "María López",  rating: 5, text: "Pasé la ITV a la primera gracias a su revisión previa. Servicio excelente.", date: "2024-09-05" },
  ],

  // FAQs
  faqs: [
    { question: "¿Necesito cita previa?", answer: "Para la mayoría de servicios recomendamos pedir cita por WhatsApp o teléfono. Para urgencias intentamos atenderte el mismo día." },
    { question: "¿El presupuesto es gratuito?", answer: "Sí, el presupuesto siempre es gratuito y sin compromiso. Te lo enviamos antes de empezar cualquier trabajo." },
    { question: "¿Trabajáis con todas las marcas?", answer: "Sí, trabajamos con todas las marcas y modelos, tanto gasolina como diésel e híbridos." },
    { question: "¿Tenéis coche de cortesía?", answer: "Sí, disponemos de vehículo de cortesía gratuito para reparaciones que requieran dejar el coche más de un día." },
    { question: "¿Qué garantía tienen las reparaciones?", answer: "Todas nuestras reparaciones incluyen garantía de 12 meses en piezas y mano de obra." },
    { question: "¿Hacéis revisiones pre-ITV?", answer: "Sí, realizamos revisiones pre-ITV completas para que pases la inspección a la primera." },
  ],
};
