// Blog posts — contenido SEO para Aelia Motor
// Cada post está pensado para posicionar keywords de cola larga relevantes

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;       // ISO date
  readTime: number;   // minutos
  category: string;
  keywords: string[];
  image: string;      // reutilizamos bg- de servicios
  imageAlt: string;
  content: {
    type: "p" | "h2" | "h3" | "ul";
    text: string;
    items?: string[];  // solo para type: "ul"
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cada-cuanto-cambiar-aceite-coche",
    title: "¿Cada cuánto hay que cambiar el aceite del coche?",
    metaTitle: "¿Cada cuánto cambiar el aceite del coche? Guía 2026 | Aelia Motor Ripollet",
    metaDescription: "Descubre cada cuánto cambiar el aceite del coche según tu motor y uso. Intervalos recomendados, tipos de aceite y señales de que necesitas un cambio. Taller en Ripollet.",
    excerpt: "El aceite es la sangre de tu motor. Te explicamos los intervalos recomendados según tu tipo de motor, uso y fabricante para que no se te pase.",
    date: "2026-03-04",
    readTime: 5,
    category: "Mantenimiento",
    keywords: ["cambiar aceite coche", "cada cuánto cambiar aceite", "cambio aceite Ripollet", "aceite motor"],
    image: "/images/bg-cambio-aceite-y-filtros.jpg",
    imageAlt: "Mecánico realizando cambio de aceite en motor",
    content: [
      { type: "p", text: "El cambio de aceite es el mantenimiento más básico e importante que puedes hacer por tu coche. Un aceite en buen estado lubrica, refrigera y limpia el motor. Cuando se degrada, el motor sufre un desgaste acelerado que puede acabar en averías caras." },
      { type: "h2", text: "¿Cada cuántos kilómetros se cambia el aceite?" },
      { type: "p", text: "La respuesta corta: depende de tu coche, el tipo de aceite y cómo conduces. Pero como norma general:" },
      { type: "ul", text: "", items: [
        "Aceite mineral: cada 5.000 – 7.500 km",
        "Aceite semisintético: cada 7.500 – 10.000 km",
        "Aceite sintético: cada 10.000 – 20.000 km (o una vez al año)",
        "Coches diésel: intervalos más cortos, consulta tu libro de mantenimiento",
      ]},
      { type: "p", text: "Los coches modernos suelen usar aceite sintético y los intervalos son más largos. Pero si haces muchos trayectos cortos por ciudad (el tipo de conducción más exigente para el aceite), conviene acortarlos." },
      { type: "h2", text: "¿Qué tipo de aceite necesita mi coche?" },
      { type: "p", text: "Cada fabricante especifica una viscosidad y norma concreta. Los más habituales son 5W30, 5W40 y 0W20. Usar el aceite equivocado puede dañar el motor o anular la garantía. En Aelia Motor siempre consultamos la especificación exacta para tu modelo antes de realizar el cambio." },
      { type: "h2", text: "Señales de que necesitas cambiar el aceite" },
      { type: "ul", text: "", items: [
        "Testigo de aceite encendido en el cuadro",
        "El aceite en la varilla está negro y espeso",
        "Motor más ruidoso de lo habitual",
        "Has superado los kilómetros recomendados",
        "Hace más de un año desde el último cambio",
      ]},
      { type: "h2", text: "¿Cuánto cuesta un cambio de aceite en Ripollet?" },
      { type: "p", text: "En Aelia Motor, un cambio de aceite con filtro incluido parte desde 39€, dependiendo del tipo de aceite que necesite tu coche. Siempre usamos aceite homologado por el fabricante y filtros de calidad original. El servicio tarda unos 30 minutos y puedes esperar en el taller." },
      { type: "p", text: "Además, con cada cambio de aceite hacemos una inspección visual gratuita de niveles, correas y posibles fugas. Así te quedas tranquilo sabiendo que todo está en orden." },
    ],
  },

  {
    slug: "como-saber-si-necesito-cambiar-frenos",
    title: "¿Cómo saber si necesito cambiar los frenos del coche?",
    metaTitle: "¿Cuándo cambiar frenos del coche? 5 señales claras | Aelia Motor",
    metaDescription: "Aprende a detectar si los frenos de tu coche están desgastados. 5 señales que no debes ignorar. Revisión de frenos gratis en Ripollet, Barcelona.",
    excerpt: "Los frenos son el sistema de seguridad más importante de tu coche. Estas son las 5 señales que indican que necesitas revisarlos cuanto antes.",
    date: "2026-03-04",
    readTime: 4,
    category: "Seguridad",
    keywords: ["cambiar frenos coche", "pastillas frenos desgastadas", "frenos chirrían", "revisión frenos Ripollet"],
    image: "/images/bg-frenos.jpg",
    imageAlt: "Sistema de frenos de disco de coche",
    content: [
      { type: "p", text: "Los frenos son el sistema de seguridad número uno de tu vehículo. Un desgaste excesivo no solo es peligroso, sino que puede provocar daños más caros en discos y pinzas si no se atiende a tiempo." },
      { type: "h2", text: "5 señales de que tus frenos necesitan revisión" },
      { type: "h3", text: "1. Chirrido al frenar" },
      { type: "p", text: "Un chirrido agudo al pisar el freno es la señal más común. Las pastillas de freno tienen un indicador metálico que produce este sonido cuando el material de fricción está casi agotado. Si lo oyes, pide cita cuanto antes." },
      { type: "h3", text: "2. El coche tira hacia un lado" },
      { type: "p", text: "Si al frenar notas que el volante se desvía hacia un lado, puede que una pinza esté bloqueada o que las pastillas estén desgastadas de forma desigual." },
      { type: "h3", text: "3. Vibración en el pedal" },
      { type: "p", text: "Una vibración o pulsación al frenar suele indicar que los discos de freno están alabeados. Es habitual en coches que frenan mucho en bajadas o con frenazos bruscos frecuentes." },
      { type: "h3", text: "4. Recorrido largo del pedal" },
      { type: "p", text: "Si tienes que pisar el freno mucho más de lo normal para que el coche se detenga, puede haber aire en el circuito, una fuga de líquido o pastillas muy gastadas." },
      { type: "h3", text: "5. Testigo de freno encendido" },
      { type: "p", text: "El testigo en el cuadro de mandos no se enciende por capricho. Puede indicar nivel bajo de líquido de frenos, desgaste de pastillas o un problema en el sistema ABS." },
      { type: "h2", text: "¿Cada cuánto se cambian los frenos?" },
      { type: "p", text: "Las pastillas delanteras suelen durar entre 30.000 y 60.000 km, y las traseras algo más. Los discos entre 60.000 y 120.000 km. Pero depende mucho de tu estilo de conducción y si conduces más por ciudad o carretera." },
      { type: "h2", text: "Revisión de frenos en Aelia Motor" },
      { type: "p", text: "En nuestro taller de Ripollet revisamos el sistema de frenos completo: pastillas, discos, líquido, latiguillos y pinzas. Te damos un diagnóstico claro y un presupuesto cerrado antes de tocar nada. Pide tu cita por WhatsApp." },
    ],
  },

  {
    slug: "preparar-coche-para-pasar-itv",
    title: "Cómo preparar tu coche para pasar la ITV a la primera",
    metaTitle: "Cómo pasar la ITV a la primera: guía completa 2026 | Aelia Motor Ripollet",
    metaDescription: "Prepara tu coche para la ITV con esta guía paso a paso. Los puntos que más revisan, fallos comunes y cómo evitarlos. Revisión pre-ITV en Ripollet.",
    excerpt: "Cada año miles de coches suspenden la ITV por problemas que se podrían haber detectado antes. Te contamos qué revisan y cómo prepararte.",
    date: "2026-03-04",
    readTime: 6,
    category: "ITV",
    keywords: ["pasar ITV primera", "preparar coche ITV", "revisión pre-ITV Ripollet", "ITV Barcelona"],
    image: "/images/bg-revision-pre-itv.jpg",
    imageAlt: "Vehículo preparado para inspección ITV",
    content: [
      { type: "p", text: "La Inspección Técnica de Vehículos (ITV) es obligatoria y suspenderla implica una segunda visita, más gasto y perder tiempo. La buena noticia es que la mayoría de motivos de rechazo se pueden detectar y solucionar con una simple revisión previa." },
      { type: "h2", text: "¿Qué revisan en la ITV?" },
      { type: "p", text: "Los inspectores comprueban más de 400 puntos agrupados en estas categorías principales:" },
      { type: "ul", text: "", items: [
        "Luces: todas las luces deben funcionar correctamente, incluidas las de matrícula",
        "Frenos: eficacia, equilibrio y estado del sistema",
        "Dirección: holguras en rótulas, bieletas y cremallera",
        "Suspensión: estado de amortiguadores y silentblocks",
        "Neumáticos: profundidad mínima de 1,6 mm y sin deformaciones",
        "Emisiones: valores de gases dentro de los límites según el tipo de motor",
        "Carrocería: estado general, retrovisores, limpiaparabrisas",
        "Documentación: permiso de circulación y tarjeta ITV vigente",
      ]},
      { type: "h2", text: "Los 5 motivos más comunes de rechazo" },
      { type: "ul", text: "", items: [
        "Luces fundidas o mal reguladas (sobre todo las antiniebla traseras)",
        "Neumáticos con dibujo insuficiente o de diferente medida en el mismo eje",
        "Holguras en la dirección o suspensión",
        "Emisiones fuera de rango (especialmente en diésel antiguos)",
        "Frenos desequilibrados o con poca eficacia",
      ]},
      { type: "h2", text: "¿Qué es una revisión pre-ITV?" },
      { type: "p", text: "Es una inspección que replica los mismos puntos que revisa la estación ITV, pero en un taller. Así detectamos y corregimos los problemas antes de la cita oficial. Es la forma más segura de pasar a la primera y evitar rechazos." },
      { type: "h2", text: "Revisión pre-ITV en Ripollet" },
      { type: "p", text: "En Aelia Motor hacemos una revisión pre-ITV completa que cubre todos los puntos críticos. Si encontramos algo que no pasaría, te damos presupuesto para arreglarlo antes de ir a la estación. Sin sorpresas y con la tranquilidad de saber que vas preparado." },
    ],
  },
];
