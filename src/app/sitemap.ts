import { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devjulialeticia.vercel.app";

  // Rota Principal
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Rotas Individuais de Cases / Projetos
  const projectRoutes: MetadataRoute.Sitemap = siteConfig.projects.map((project) => ({
    url: `${baseUrl}/projetos/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
