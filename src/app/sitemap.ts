import type { MetadataRoute } from "next";

const baseUrl = "https://www.solektratelecom.com";

const routes: { path: string; lastModified: string }[] = [
  { path: "", lastModified: "2026-09-30" },
  { path: "/products", lastModified: "2026-09-30" },
  { path: "/products/4G-internet", lastModified: "2026-09-30" },
  { path: "/products/fiber-internet", lastModified: "2026-09-30" },
  { path: "/products/Vo-LTE", lastModified: "2026-09-30" },
  { path: "/products/digital-devices", lastModified: "2026-09-30" },
  { path: "/packages", lastModified: "2026-09-30" },
  { path: "/about", lastModified: "2026-09-30" },
  { path: "/contact", lastModified: "2026-09-30" },
  { path: "/faq", lastModified: "2026-10-01" },
  { path: "/rw", lastModified: "2026-10-01" },
  { path: "/privacy-notice", lastModified: "2026-10-01" },
  { path: "/terms-of-service", lastModified: "2026-10-01" },
  { path: "/cookie-policy", lastModified: "2026-10-01" },
  { path: "/site-map", lastModified: "2026-10-01" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(lastModified),
  }));
}
