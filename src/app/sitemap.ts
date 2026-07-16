import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://solektratelecom.com";

  const routes = [
    "",
    "/products",
    "/products/4G-internet",
    "/products/fiber-internet",
    "/products/Vo-LTE",
    "/products/digital-devices",
    "/packages",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}