import { config } from "@/config";

export interface Municipio {
  slug: string;
  name: string;
  nameShort: string;
  comarca: string;
  distanceKm: string;
  distanceMin: string;
  population: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  intro: string;
  whyUs: string;
  localInfo: string;
  keywords: string[];
}

export const municipios: Record<string, Municipio> = {
  cerdanyola: {
    slug: "cerdanyola",
    name: "Cerdanyola del Vallès",
    nameShort: "Cerdanyola",
    comarca: "Vallès Occidental",
    distanceKm: "4",
    distanceMin: "8",
    population: "58.000",
    metaTitle: `Taller Mecánico cerca de Cerdanyola del Vallès | Motrio ${config.brandName}`,
    metaDescription:
      "Taller mecánico Motrio a 8 minutos de Cerdanyola del Vallès. Cambio de aceite, frenos, ITV, neumáticos y más. Presupuesto gratis. ☎ 608 20 55 12.",
    heroTitle: "Tu taller de confianza",
    heroHighlight: "cerca de Cerdanyola",
    heroSubtitle: `A solo 8 minutos por la C-58. ${config.brandName} es tu taller Motrio más cercano en Ripollet.`,
    intro:
      "¿Buscas un taller mecánico de confianza cerca de Cerdanyola del Vallès? Aelia Motor, taller certificado Motrio en Ripollet, está a solo 4 km por la C-58. Ofrecemos todos los servicios de mantenimiento y reparación para tu vehículo con la garantía de la red Motrio.",
    whyUs:
      "Muchos de nuestros clientes vienen desde Cerdanyola porque combinamos la calidad de un taller oficial Motrio con precios competitivos y un trato cercano. Además, disponemos de coche de cortesía gratuito para que no te quedes sin movilidad.",
    localInfo:
      "Desde Cerdanyola del Vallès, llegar a nuestro taller es rápido y sencillo: toma la C-58 dirección Ripollet y en apenas 8 minutos estarás en nuestras instalaciones del Carrer de la Indústria. También puedes llegar fácilmente por la B-30 o la AP-7.",
    keywords: [
      "taller mecánico Cerdanyola del Vallès",
      "taller Motrio Cerdanyola",
      "mecánico cerca de Cerdanyola",
      "cambio aceite Cerdanyola",
      "revisión ITV Cerdanyola",
      "taller coches Cerdanyola del Vallès",
      "reparación coche Cerdanyola",
      "neumáticos Cerdanyola",
      "frenos Cerdanyola del Vallès",
    ],
  },
  barbera: {
    slug: "barbera",
    name: "Barberà del Vallès",
    nameShort: "Barberà",
    comarca: "Vallès Occidental",
    distanceKm: "3",
    distanceMin: "6",
    population: "33.000",
    metaTitle: `Taller Mecánico cerca de Barberà del Vallès | Motrio ${config.brandName}`,
    metaDescription:
      "Taller mecánico Motrio a 6 minutos de Barberà del Vallès. Cambio de aceite, frenos, ITV, neumáticos y más. Presupuesto gratis. ☎ 608 20 55 12.",
    heroTitle: "Tu taller de confianza",
    heroHighlight: "cerca de Barberà",
    heroSubtitle: `A solo 6 minutos por la C-58. ${config.brandName} es tu taller Motrio más cercano en Ripollet.`,
    intro:
      "¿Buscas un taller mecánico de confianza cerca de Barberà del Vallès? Aelia Motor, taller certificado Motrio en Ripollet, está a solo 3 km por la C-58. Ofrecemos todos los servicios de mantenimiento y reparación para tu vehículo con la garantía de la red Motrio.",
    whyUs:
      "Somos el taller Motrio más cercano a Barberà del Vallès. Nuestros clientes de Barberà valoran especialmente nuestro presupuesto cerrado sin sorpresas, la rapidez del servicio (la mayoría de reparaciones en el día) y el coche de cortesía gratuito.",
    localInfo:
      "Desde Barberà del Vallès, nuestro taller está a solo 6 minutos: toma la C-58 dirección Ripollet o la carretera de Sabadell. Nos encontrarás en el Carrer de la Indústria, 19, en la zona industrial de Ripollet, con fácil aparcamiento.",
    keywords: [
      "taller mecánico Barberà del Vallès",
      "taller Motrio Barberà",
      "mecánico cerca de Barberà",
      "cambio aceite Barberà",
      "revisión ITV Barberà",
      "taller coches Barberà del Vallès",
      "reparación coche Barberà",
      "neumáticos Barberà",
      "frenos Barberà del Vallès",
    ],
  },
};

export const municipioSlugs = Object.keys(municipios);
