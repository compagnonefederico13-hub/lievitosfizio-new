import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { menu } from "@/data/menu";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/cookie`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
  // Il menu entra nella sitemap solo quando contiene i dati reali
  if (!menu.isDemo) {
    routes.splice(1, 0, { url: `${site.url}/menu`, lastModified: now, changeFrequency: "weekly", priority: 0.9 });
  }
  return routes;
}
