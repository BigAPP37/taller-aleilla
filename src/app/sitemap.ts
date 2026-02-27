import { config } from "@/config";
import { municipioSlugs } from "@/config/municipios";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = config.services.map(s => ({
    url: `${config.domain}/servicios/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const municipioUrls = municipioSlugs.map(slug => ({
    url: `${config.domain}/taller-mecanico/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: config.domain,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${config.domain}/servicios`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${config.domain}/contacto`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...serviceUrls,
    ...municipioUrls,
  ];
}
