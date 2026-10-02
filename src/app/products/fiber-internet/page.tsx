import type { Metadata } from "next";
import FiberInternetPage from "./FiberInternet";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, breadcrumb, SITE, ORG_ID } from "@/lib/seo";

const PATH = "/products/fiber-internet";

export const metadata: Metadata = pageMetadata({
  title: "Dedicated Fiber Internet for Businesses in Kigali & Rwanda",
  description:
    "Dedicated fiber up to 1 Gbps for offices, schools, hotels and institutions in Rwanda. 99.9% uptime SLA, flexible bandwidth and professional installation. Request a quote.",
  path: PATH,
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Solektra Dedicated Fiber Internet",
      serviceType: "Dedicated fiber-optic internet access",
      description:
        "Dedicated fiber internet with customizable bandwidth up to 1 Gbps, under 20 ms latency and a 99.9% uptime SLA for businesses, schools and institutions in Rwanda. Pricing is quoted per customer.",
      url: `${SITE}${PATH}`,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "Rwanda" },
      audience: { "@type": "BusinessAudience", name: "Businesses, schools and institutions" },
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: "Fiber Internet", path: PATH },
    ]),
  ],
};

export default function FiberInternetHomePage() {
  return (
    <>
      <JsonLd data={schema} />
      <FiberInternetPage />
    </>
  );
}