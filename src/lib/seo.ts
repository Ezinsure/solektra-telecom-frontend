import { plansData } from "@/app/packages/plans";
import type { Metadata } from "next";

export const SITE = "https://www.solektratelecom.com";
export const ORG_ID = `${SITE}/#organization`;

type PageSeo = { title: string; description: string; path: string };

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const fullTitle = `${title} | Solektra Telecom`;
  return {
    title, 
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Solektra Telecom",
      locale: "en_RW",
      url: path,
      title: fullTitle,
      description,
      images: [
        { url: "/og-image.jpg", width: 1200, height: 630, alt: "Solektra Telecom internet in Rwanda" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@solektra_rwanda",
      title: fullTitle,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

export function priceRange(prefix: string) {
  const prices: number[] = [];
  for (const [key, section] of Object.entries(plansData)) {
    if (!key.startsWith(prefix)) continue;
    const s = section as unknown as Record<string, { priceRaw?: number }[] | undefined>;
    for (const group of [s.daily, s.weekly, s.monthly]) {
      for (const plan of group ?? []) if (plan.priceRaw) prices.push(plan.priceRaw);
    }
  }
  return { low: Math.min(...prices), high: Math.max(...prices), count: prices.length };
}

export function aggregateOffer(prefix: string, path: string) {
  const { low, high, count } = priceRange(prefix);
  return {
    "@type": "AggregateOffer",
    priceCurrency: "RWF",
    lowPrice: low,
    highPrice: high,
    offerCount: count,
    url: `${SITE}${path}`,
  };
}