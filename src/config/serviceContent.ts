// Contenido SEO específico para cada página de servicio

export const serviceContent: Record<string, {
  title: string;
  metaDescription: string;
  intro: string;
  whatWeOffer: { heading: string; text: string }[];
  whyUs: string;
  faq: { q: string; a: string }[];
  keywords: string[];
}> = {
  "cambio-aceite-y-filtros": {
    title: "Cambio de Aceite y Filtros en Ripollet | Motrio Aelia Motor",
    metaDescription: "Cambio de aceite y filtros en Ripollet desde 39€. Aceites homologados, filtros originales. Taller Motrio certificado. Presupuesto gratuito en 30 min.",
    intro: "El aceite del motor es la sangre de tu coche. Un cambio regular protege el motor, reduce el consumo y evita averías costosas. En Aelia Motor usamos aceites homologados por el fabricante y filtros de calidad original para que tu motor rinda al máximo.",
    whatWeOffer: [
      { heading: "Aceites homologados para cada motor", text: "Seleccionamos el aceite correcto según la especificación de tu fabricante: 5W30, 5W40, 0W20... Trabajamos con marcas líderes compatibles con motores de gasolina, diésel e híbridos." },
      { heading: "Filtros originales o equivalentes", text: "Cambiamos el filtro de aceite, el filtro de aire y el filtro de habitáculo si es necesario. Usamos recambios que cumplen o superan las especificaciones del fabricante." },
      { heading: "Revisión visual incluida", text: "Con cada cambio de aceite hacemos una inspección visual gratuita de niveles (refrigerante, frenos, dirección), estado de correas y posibles fugas." },
    ],
    whyUs: "Hacemos cambios de aceite para todas las marcas: Seat, Volkswagen, Ford, Opel, Renault, Peugeot, Toyota, BMW, Mercedes y más. Somos taller certificado Motrio en Ripollet, Barcelona.",
    faq: [
      { q: "¿Cada cuánto hay que cambiar el aceite?", a: "Depende del fabricante y el tipo de aceite. En general, entre 10.000 y 20.000 km o una vez al año. Te consultamos el intervalo exacto para tu modelo." },
      { q: "¿Cuánto tiempo tarda el cambio de aceite?", a: "Unos 30-45 minutos. En muchos casos puedes esperar en el taller mientras lo hacemos." },
      { q: "¿Qué incluye el servicio?", a: "Vaciado y llenado de aceite, cambio de filtro de aceite, revisión de niveles y una inspección visual básica del vehículo." },
    ],
    keywords: ["cambio aceite Ripollet", "cambio aceite Barcelona", "cambio filtros coche", "taller aceite Ripollet"],
  },

  "frenos": {
    title: "Reparación de Frenos en Ripollet | Motrio Aelia Motor",
    metaDescription: "Revisión y reparación de frenos en Ripollet. Pastillas, discos, líquido de frenos. Taller Motrio certificado. Seguridad ante todo. Presupuesto gratis.",
    intro: "Los frenos son el sistema de seguridad más importante de tu coche. No esperes a notar ruidos o vibraciones para revisarlos. En Aelia Motor realizamos diagnósticos completos del sistema de frenado y reparamos cualquier componente con piezas de calidad.",
    whatWeOffer: [
      { heading: "Pastillas y discos de freno", text: "Sustituimos pastillas y discos desgastados o dañados. Trabajamos con recambios de calidad equivalente a los originales, adaptados a cada modelo y uso del vehículo." },
      { heading: "Líquido de frenos", text: "El líquido de frenos absorbe humedad con el tiempo y pierde efectividad. Recomendamos cambiarlo cada 2 años o según especificación del fabricante. Lo hacemos con purga completa del circuito." },
      { heading: "Freno de mano y ABS", text: "Revisamos el freno de mano mecánico o electrónico y el correcto funcionamiento del sistema ABS. Reseteamos el sistema electrónico si es necesario tras la reparación." },
    ],
    whyUs: "Reparamos frenos de todas las marcas en Ripollet. Cada reparación incluye prueba en carretera para verificar el correcto funcionamiento antes de entregarte el vehículo.",
    faq: [
      { q: "¿Cuándo hay que cambiar las pastillas de freno?", a: "Cuando el grosor sea inferior a 2-3mm, notes ruidos al frenar, el coche tire hacia un lado o el pedal esté blando. Revisamos el estado gratuitamente." },
      { q: "¿Hay que cambiar discos y pastillas a la vez?", a: "No siempre. Depende del estado de los discos. Si tienen marcas profundas o están deformados, sí es recomendable cambiarlos juntos para garantizar el rendimiento." },
      { q: "¿Cuánto tarda la reparación de frenos?", a: "Entre 1 y 3 horas según lo que haya que reparar. La mayoría de los días podemos hacerlo en el día." },
    ],
    keywords: ["frenos Ripollet", "pastillas freno Barcelona", "cambio discos freno", "reparación frenos Ripollet"],
  },

  "diagnosis-electronica": {
    title: "Diagnosis Electrónica en Ripollet | Motrio Aelia Motor",
    metaDescription: "Diagnosis electrónica profesional en Ripollet. Lectura de códigos de error, diagnosis multimarca. Equipo oficial Motrio. Detectamos cualquier avería.",
    intro: "El testigo del motor encendido, un fallo en el ABS o un problema con el sistema de emisiones puede tener múltiples causas. En Aelia Motor disponemos de equipos de diagnosis multimarca de última generación que nos permiten leer todos los módulos electrónicos de tu vehículo y localizar la avería con precisión.",
    whatWeOffer: [
      { heading: "Diagnosis multimarca completa", text: "Conectamos nuestro equipo a la toma OBD de tu vehículo y leemos todos los módulos: motor, transmisión, ABS, airbag, climatización, carrocería y más. Compatible con todas las marcas." },
      { heading: "Lectura y borrado de códigos de error", text: "Identificamos los códigos DTC almacenados, explicamos qué significan y trazamos el plan de reparación. También borramos códigos residuales una vez reparada la avería." },
      { heading: "Actualizaciones y calibraciones", text: "Realizamos calibraciones de sensores, actualizaciones de software de centralitas y adaptaciones de componentes nuevos (inyectores, DPF, freno de mano electrónico)." },
    ],
    whyUs: "Disponemos del equipo de diagnosis oficial de la red Motrio, con acceso a las bases de datos técnicas de los fabricantes. No disparamos a ciegas: diagnosticamos primero y presupuestamos después.",
    faq: [
      { q: "¿Qué significa que se enciende el testigo del motor?", a: "Puede indicar desde un fallo en el sensor de oxígeno hasta un problema en el sistema de inyección. La única forma de saberlo con seguridad es con una diagnosis electrónica." },
      { q: "¿Cuánto cuesta la diagnosis?", a: "Consúltanos. En muchos casos la diagnosis es gratuita si realizas la reparación en nuestro taller." },
      { q: "¿Podéis hacer diagnosis de coches de cualquier marca?", a: "Sí, nuestro equipo es multimarca y cubre la mayoría de vehículos del mercado desde 1996 (protocolo OBD2)." },
    ],
    keywords: ["diagnosis electronica Ripollet", "diagnosis coche Barcelona", "lectura códigos error OBD", "avería motor Ripollet"],
  },

  "neumaticos": {
    title: "Neumáticos en Ripollet | Venta y Montaje | Motrio Aelia Motor",
    metaDescription: "Venta, montaje y equilibrado de neumáticos en Ripollet. Todas las marcas y medidas. Cambio de ruedas, revisión de presión. Presupuesto gratis.",
    intro: "Los neumáticos son el único punto de contacto entre tu coche y el asfalto. Un neumático desgastado o con la presión incorrecta compromete la seguridad y aumenta el consumo. En Aelia Motor ofrecemos venta y montaje de neumáticos de todas las marcas y medidas para cualquier tipo de vehículo.",
    whatWeOffer: [
      { heading: "Todas las marcas y medidas", text: "Trabajamos con marcas premium (Michelin, Continental, Bridgestone) y económicas de calidad. Buscamos la mejor opción para tu vehículo y presupuesto." },
      { heading: "Montaje y equilibrado", text: "Desmontamos, montamos y equilibramos los neumáticos con maquinaria de última generación. El equilibrado correcto evita vibraciones y desgaste irregular." },
      { heading: "Alineación de dirección", text: "Comprobamos y corregimos la geometría de la dirección para evitar desgastes irregulares y mejorar el comportamiento del vehículo en carretera." },
    ],
    whyUs: "Gestionamos el cambio completo de ruedas: desmontaje, montaje, equilibrado y eliminación de neumáticos usados según la normativa vigente. Rápido, limpio y profesional.",
    faq: [
      { q: "¿Cuándo hay que cambiar los neumáticos?", a: "Cuando el dibujo sea inferior a 1.6mm (mínimo legal), tengan más de 5-6 años, presenten grietas o deformaciones, o después de un impacto fuerte." },
      { q: "¿Qué presión deben tener los neumáticos?", a: "Depende del vehículo. Está indicado en la etiqueta del pilar de la puerta del conductor. Una presión incorrecta aumenta el consumo y el desgaste." },
      { q: "¿Hacéis el cambio de ruedas de verano a invierno?", a: "Sí, realizamos el cambio estacional de ruedas y podemos guardar las que no usas si lo necesitas." },
    ],
    keywords: ["neumáticos Ripollet", "cambio ruedas Barcelona", "montaje neumáticos Ripollet", "equilibrado ruedas"],
  },

  "revision-pre-itv": {
    title: "Revisión Pre-ITV en Ripollet | Pasa la ITV a la Primera",
    metaDescription: "Revisión pre-ITV en Ripollet. Comprobamos todo antes de llevar tu coche a la ITV. Sin sorpresas. Taller Motrio certificado en Ripollet, Barcelona.",
    intro: "Ir a la ITV sin revisar el coche es un riesgo innecesario. Un defecto leve puede convertirse en una desfavorable y obligarte a volver. En Aelia Motor hacemos una revisión completa pre-ITV para detectar y solucionar cualquier problema antes de la inspección oficial.",
    whatWeOffer: [
      { heading: "Revisión completa de seguridad", text: "Comprobamos luces, frenos, dirección, suspensión, neumáticos, niveles, cinturones de seguridad, limpiaparabrisas y todos los elementos que revisa la ITV." },
      { heading: "Diagnosis electrónica incluida", text: "Leemos la centralita del vehículo para detectar códigos de error que puedan dar lugar a un defecto en la ITV, especialmente relacionados con emisiones y sistemas de seguridad." },
      { heading: "Reparación antes de la ITV", text: "Si detectamos algún problema, te damos presupuesto para repararlo antes de la inspección. Así llevas el coche en perfectas condiciones y pasas a la primera." },
    ],
    whyUs: "Conocemos exactamente qué revisan en la ITV y cómo preparar el vehículo. La mayoría de nuestros clientes pasan la ITV a la primera tras nuestra revisión previa.",
    faq: [
      { q: "¿Cuánto cuesta la revisión pre-ITV?", a: "Consúltanos. Es una inversión pequeña comparada con el coste de tener que repetir la ITV o reparar in situ." },
      { q: "¿Con cuánta antelación debo hacer la revisión?", a: "Recomendamos hacerla 1-2 semanas antes de la ITV para tener tiempo de reparar lo que sea necesario." },
      { q: "¿Cada cuántos años hay que pasar la ITV?", a: "Los primeros 4 años no es obligatoria. Del año 4 al 10, cada 2 años. A partir del año 10, cada año." },
    ],
    keywords: ["revisión pre-ITV Ripollet", "preparar ITV Barcelona", "ITV coche Ripollet", "pasar ITV primera vez"],
  },

  "climatizacion": {
    title: "Climatización y Aire Acondicionado en Ripollet | Motrio Aelia Motor",
    metaDescription: "Recarga y reparación de aire acondicionado en Ripollet. Gas refrigerante, diagnosis climatización. Taller Motrio. Frío en verano garantizado.",
    intro: "Un sistema de climatización que no funciona bien no es solo un problema de confort: también afecta a la seguridad (desempañado) y puede dañar componentes caros si no se trata a tiempo. En Aelia Motor reparamos y mantenemos el sistema de aire acondicionado de tu vehículo.",
    whatWeOffer: [
      { heading: "Recarga de gas refrigerante", text: "Recuperamos el gas existente, hacemos vacío para detectar fugas y recargamos con la cantidad exacta de refrigerante (R134a o R1234yf) según las especificaciones del fabricante." },
      { heading: "Diagnosis del sistema", text: "Comprobamos el compresor, el condensador, el evaporador, el presostato y las válvulas de expansión. Detectamos fugas con equipo de detección específico." },
      { heading: "Limpieza y desinfección", text: "Limpiamos el filtro de habitáculo y desinfectamos el circuito de ventilación para eliminar bacterias y malos olores. Recomendado una vez al año." },
    ],
    whyUs: "Disponemos de máquina de recarga homologada para gases R134a y R1234yf (el más moderno). Trabajamos con todas las marcas y modelos.",
    faq: [
      { q: "¿Por qué el aire acondicionado ya no enfría?", a: "Puede ser por falta de gas (normal perder un 10-15% al año), una fuga, el compresor averiado u otros componentes. Con una diagnosis lo sabemos exactamente." },
      { q: "¿Cada cuánto hay que recargar el gas?", a: "Si no hay fugas, el sistema no debería necesitar recarga frecuente. Si pierdes gas regularmente, hay una fuga que hay que reparar." },
      { q: "¿Cuándo hay que cambiar el filtro de habitáculo?", a: "Cada 15.000-20.000 km o una vez al año. Un filtro sucio reduce el rendimiento del climatizador y puede causar malos olores." },
    ],
    keywords: ["aire acondicionado Ripollet", "recarga gas AC Barcelona", "climatización coche Ripollet", "reparación AC coche"],
  },

  "suspension-y-direccion": {
    title: "Suspensión y Dirección en Ripollet | Motrio Aelia Motor",
    metaDescription: "Reparación de suspensión y dirección en Ripollet. Amortiguadores, rótulas, dirección asistida. Taller Motrio certificado. Presupuesto gratuito.",
    intro: "Una suspensión en mal estado no solo hace el viaje incómodo: afecta directamente a la seguridad, al desgaste de los neumáticos y al consumo de combustible. En Aelia Motor revisamos y reparamos todos los componentes del tren delantero y trasero.",
    whatWeOffer: [
      { heading: "Amortiguadores y muelles", text: "Diagnosticamos el estado de los amortiguadores y muelles. Un amortiguador gastado aumenta la distancia de frenado y reduce el control del vehículo. Los sustituimos por pares para mantener el equilibrio." },
      { heading: "Rótulas, silentblocks y trapecios", text: "Revisamos todos los elementos de la articulación: rótulas de dirección y suspensión, silentblocks de los brazos y los trapecios. Piezas desgastadas causan ruidos y juego en la dirección." },
      { heading: "Dirección asistida eléctrica e hidráulica", text: "Reparamos fallos en la dirección asistida: falta de asistencia, ruidos, fugas de líquido en sistemas hidráulicos o problemas eléctricos en sistemas EPS." },
    ],
    whyUs: "Tras cada reparación de suspensión realizamos una comprobación de la geometría de la dirección para garantizar que el vehículo circula recto y los neumáticos no se desgastan irregularmente.",
    faq: [
      { q: "¿Cómo sé si tengo los amortiguadores gastados?", a: "El coche rebota en badenes, se inclina mucho en curvas, los neumáticos se desgastan irregularmente o notas pérdida de control en frenadas fuertes." },
      { q: "¿Qué ruidos indica un problema de suspensión?", a: "Golpes o clacs al pasar por badenes, crujidos al girar el volante o ruidos de roce al subir y bajar el vehículo son señales típicas." },
      { q: "¿Hay que cambiar los amortiguadores en pareja?", a: "Sí, siempre se cambian por pares (ambos delanteros o ambos traseros) para mantener el comportamiento simétrico del vehículo." },
    ],
    keywords: ["suspensión Ripollet", "amortiguadores Barcelona", "dirección asistida Ripollet", "rótulas coche"],
  },

  "embrague": {
    title: "Cambio de Embrague en Ripollet | Motrio Aelia Motor",
    metaDescription: "Sustitución de embrague en Ripollet. Kit completo: disco, plato y rodamiento. Todas las marcas. Taller Motrio certificado. Presupuesto sin compromiso.",
    intro: "El embrague es uno de los componentes con mayor desgaste en vehículos con cambio manual. Una vez que empieza a patinar o no desemboca correctamente, hay que actuar antes de que dañe otros componentes de la transmisión. En Aelia Motor hacemos el cambio completo del kit de embrague con garantía.",
    whatWeOffer: [
      { heading: "Kit completo de embrague", text: "Sustituimos el disco de embrague, el plato de presión y el rodamiento de desembrague (kit completo). Cambiar solo el disco sin renovar el plato es un error que acorta la vida útil del nuevo embrague." },
      { heading: "Volante motor bimasa", text: "En muchos vehículos modernos el volante bimasa se deteriora junto con el embrague. Lo inspeccionamos y, si es necesario, lo sustituimos para evitar una segunda intervención costosa." },
      { heading: "Ajuste y prueba", text: "Tras el montaje ajustamos el pedal de embrague y realizamos una prueba en carretera para verificar el correcto funcionamiento antes de entregarte el vehículo." },
    ],
    whyUs: "Tenemos experiencia en embragues de todo tipo de vehículos: utilitarios, berlinas, SUVs y furgonetas. Trabajamos con kits de embrague de calidad equivalente al original con garantía de 12 meses.",
    faq: [
      { q: "¿Cómo sé que el embrague se está gastando?", a: "El motor revoluciona pero el coche no acelera (patinaje), cuesta meter marchas, notas olor a quemado al arrancar en pendiente o el pedal está muy alto o muy bajo." },
      { q: "¿Cuánto dura un embrague?", a: "Entre 100.000 y 200.000 km dependiendo del estilo de conducción. La conducción en ciudad con mucho tráfico lo desgasta más rápido." },
      { q: "¿Cuánto tarda el cambio de embrague?", a: "Entre 4 y 8 horas según el modelo. Normalmente entregamos el vehículo el mismo día o al día siguiente." },
    ],
    keywords: ["cambio embrague Ripollet", "embrague coche Barcelona", "kit embrague Ripollet", "embrague patina"],
  },

  "correa-de-distribucion": {
    title: "Cambio de Correa de Distribución en Ripollet | Motrio Aelia Motor",
    metaDescription: "Cambio de correa de distribución en Ripollet. Kit completo con bomba de agua. Todas las marcas. Taller Motrio. No esperes a que se rompa.",
    intro: "La correa de distribución es la pieza más crítica del motor. Si se rompe en marcha puede destrozar el motor por completo, con reparaciones que superan el valor del vehículo. Respetar el intervalo de cambio marcado por el fabricante es la mejor inversión que puedes hacer.",
    whatWeOffer: [
      { heading: "Kit completo de distribución", text: "Sustituimos la correa, las tensoras, los rodillos guía y la bomba de agua (si es accionada por la correa). Cambiar solo la correa sin renovar los rodillos es un riesgo innecesario." },
      { heading: "Cadena de distribución", text: "Algunos motores llevan cadena en lugar de correa. Aunque más duradera, también tiene un intervalo de sustitución. Reparamos cadenas, patines y tensores." },
      { heading: "Control del punto de encendido", text: "Tras el cambio verificamos que el punto de distribución es correcto con equipo de diagnosis. Un punto incorrecto afecta al rendimiento y puede dañar el motor." },
    ],
    whyUs: "Somos especialistas en distribución de todas las marcas. Consultamos los datos técnicos del fabricante para usar el kit adecuado y respetar el par de apriete correcto en cada punto.",
    faq: [
      { q: "¿Cada cuántos km hay que cambiar la correa de distribución?", a: "Depende del fabricante: entre 60.000 y 120.000 km, o cada 4-6 años. Consúltanos y buscamos el intervalo exacto para tu modelo." },
      { q: "¿Qué pasa si se rompe la correa?", a: "En motores de interferencia (la mayoría), las válvulas chocan con los pistones y el motor queda destruido. La reparación puede costar más que el valor del coche." },
      { q: "¿Hay que cambiar la bomba de agua con la correa?", a: "Si la bomba de agua es accionada por la correa de distribución, sí. La mano de obra es la misma y si la bomba falla poco después, habría que desmontar todo otra vez." },
    ],
    keywords: ["correa distribución Ripollet", "cambio distribución coche Barcelona", "cadena distribución Ripollet", "kit distribución"],
  },

  "electricidad": {
    title: "Electricidad del Coche en Ripollet | Motrio Aelia Motor",
    metaDescription: "Reparación eléctrica del coche en Ripollet. Batería, alternador, motor de arranque, centralitas. Diagnosis eléctrica. Taller Motrio certificado.",
    intro: "Los problemas eléctricos son cada vez más frecuentes en los vehículos modernos y pueden ser difíciles de diagnosticar sin el equipo adecuado. En Aelia Motor disponemos de herramientas específicas para localizar fallos eléctricos y electrónicos con precisión.",
    whatWeOffer: [
      { heading: "Batería y sistema de carga", text: "Comprobamos el estado de la batería (test de carga), el alternador y el regulador. Sustituimos baterías de todos los tipos: plomo-ácido, AGM y EFB para vehículos con Start&Stop." },
      { heading: "Motor de arranque y alternador", text: "Diagnosticamos y sustituimos el motor de arranque y el alternador. Son componentes que suelen fallar con el tiempo y provocan que el coche no arranque o se quede sin batería." },
      { heading: "Instalación eléctrica y centralitas", text: "Localizamos cortocircuitos, fallos de tierra y problemas en el cableado. También programamos y codificamos centralitas nuevas cuando es necesario." },
    ],
    whyUs: "Combinamos diagnosis electrónica avanzada con experiencia en electricidad del automóvil para resolver fallos que otros talleres no encuentran. Sin disparar a ciegas.",
    faq: [
      { q: "¿Por qué se descarga la batería si el coche está parado?", a: "Puede haber una corriente de fuga (algo conectado que consume aunque el coche esté apagado). Lo localizamos con un polímetro y diagnosis." },
      { q: "¿Cuánto dura una batería de coche?", a: "Entre 4 y 7 años dependiendo del uso y el tipo de batería. Los vehículos con Start&Stop necesitan baterías específicas AGM o EFB." },
      { q: "¿Qué pasa si el alternador falla?", a: "La batería se descarga mientras conduces. Notarás que las luces parpadean o se apagan. Si no lo reparan a tiempo, el coche se quedará parado en marcha." },
    ],
    keywords: ["electricidad coche Ripollet", "batería coche Barcelona", "alternador Ripollet", "motor arranque coche"],
  },

  "escape": {
    title: "Reparación del Escape en Ripollet | Motrio Aelia Motor",
    metaDescription: "Reparación y sustitución del sistema de escape en Ripollet. Catalizador, DPF, silencioso. Todas las marcas. Taller Motrio certificado.",
    intro: "El sistema de escape no es solo el tubo y el silencioso. Incluye el catalizador, el filtro de partículas (DPF en diésel) y los sensores de oxígeno. Un escape en mal estado aumenta las emisiones, hace más ruido y puede provocar que el coche suspenda la ITV.",
    whatWeOffer: [
      { heading: "Silenciosos y tubos de escape", text: "Sustituimos silenciosos intermedios y traseros dañados por corrosión o golpes. Usamos piezas de acero inoxidable de alta durabilidad cuando es posible." },
      { heading: "Catalizador y sonda lambda", text: "El catalizador tiene una vida útil limitada. Su deterioro hace que el coche consuma más y emita más gases. La sonda lambda controla la mezcla aire-combustible y su fallo afecta al rendimiento." },
      { heading: "Filtro de partículas (DPF)", text: "Limpiamos y regeneramos el filtro de partículas diésel mediante procesos químicos y forzando regeneraciones activas. Cuando ya no es recuperable, lo sustituimos." },
    ],
    whyUs: "Diagnosticamos el escape con equipo de análisis de gases y diagnosis electrónica antes de proponer cualquier sustitución. Solo cambiamos lo que es necesario.",
    faq: [
      { q: "¿Por qué hace ruido el escape?", a: "Generalmente por una fuga en alguna unión, una perforación por corrosión o un silencioso dañado. Con el motor en marcha lo localizamos fácilmente." },
      { q: "¿Qué es la luz del DPF en el cuadro?", a: "Indica que el filtro de partículas está saturado. Hay que hacer una regeneración activa. Si llevas mucho tiempo con la luz encendida, el filtro puede estar dañado." },
      { q: "¿Puedo pasar la ITV con el catalizador averiado?", a: "No. Un catalizador defectuoso hace que el coche emita más de lo permitido y suspendes por emisiones. Hay que repararlo antes." },
    ],
    keywords: ["escape coche Ripollet", "filtro partículas DPF Barcelona", "catalizador coche Ripollet", "silencioso escape"],
  },

  "mantenimiento-general": {
    title: "Mantenimiento General del Coche en Ripollet | Motrio Aelia Motor",
    metaDescription: "Revisión y mantenimiento completo del coche en Ripollet. Seguimos el plan de mantenimiento del fabricante. Taller Motrio certificado. Presupuesto gratis.",
    intro: "El mantenimiento regular es la mejor forma de proteger tu inversión y evitar averías costosas. En Aelia Motor seguimos el plan de mantenimiento del fabricante para tu vehículo y te recordamos cuándo toca cada revisión para que no tengas que preocuparte.",
    whatWeOffer: [
      { heading: "Revisión según el plan del fabricante", text: "Consultamos el libro de mantenimiento de tu vehículo y realizamos todas las operaciones del servicio correspondiente: aceite, filtros, bujías, correas auxiliares, líquidos y más." },
      { heading: "Inspección de 30 puntos", text: "Con cada revisión hacemos una inspección visual completa de frenos, suspensión, neumáticos, niveles, luces, correas y todos los sistemas del vehículo. Si detectamos algo, te avisamos." },
      { heading: "Historial de mantenimiento", text: "Guardamos el historial de todas las intervenciones realizadas en tu vehículo. Esto mantiene la garantía del fabricante y aumenta el valor de reventa del coche." },
    ],
    whyUs: "Somos taller certificado Motrio, lo que nos permite realizar el mantenimiento oficial sin perder la garantía del fabricante. Esto es válido para vehículos de todas las marcas en garantía.",
    faq: [
      { q: "¿Pierdo la garantía si no llevo el coche al concesionario?", a: "No. El Reglamento Europeo permite llevar el coche a cualquier taller independiente para el mantenimiento sin perder la garantía de fábrica, siempre que se usen recambios de calidad equivalente." },
      { q: "¿Cada cuánto hay que hacer una revisión?", a: "Depende del fabricante y el modelo. En general, entre 10.000 y 30.000 km, o una vez al año. Te consultamos el intervalo exacto para tu coche." },
      { q: "¿Qué incluye una revisión completa?", a: "Cambio de aceite y filtro, inspección de frenos, revisión de neumáticos, comprobación de niveles, diagnosis electrónica y una inspección visual de 30 puntos." },
    ],
    keywords: ["mantenimiento coche Ripollet", "revisión coche Barcelona", "servicio mantenimiento Ripollet", "revisión completa coche"],
  },
};
