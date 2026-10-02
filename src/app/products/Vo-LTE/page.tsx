import type { Metadata } from "next";
import VoLTEPage from "./Volte";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, breadcrumb, aggregateOffer, SITE, ORG_ID } from "@/lib/seo";

const PATH = "/products/Vo-LTE";

export const metadata: Metadata = pageMetadata({
  title: "VoLTE in Rwanda: HD Voice Call Packages from 500 RWF",
  description:
    "Make crystal-clear HD voice calls over 4G with Solektra VoLTE. Daily, weekly and monthly call and data packs from 500 RWF, including 30 GB + 1000 minutes for 9,900 RWF.",
  path: PATH,
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Solektra VoLTE",
      serviceType: "VoLTE HD voice calling over 4G LTE",
      description:
        "HD voice calls over the Solektra 4G LTE network, with daily, weekly and monthly packages combining minutes, SMS and data.",
      url: `${SITE}${PATH}`,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "Rwanda" },
      offers: aggregateOffer("volte-", "/packages?cat=volte&sub=packages"),
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: "VoLTE", path: PATH },
    ]),
  ],
};

export default function VoLTEHomePage() {
  return (
    <>
      <JsonLd data={schema} />
      <VoLTEPage />
    </>
  );
}