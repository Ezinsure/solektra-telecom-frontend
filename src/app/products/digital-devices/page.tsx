import type { Metadata } from "next";
import DigitalDevice from "./DigitalDevices";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, breadcrumb, SITE, ORG_ID } from "@/lib/seo";

const PATH = "/products/digital-devices";

export const metadata: Metadata = pageMetadata({
  title: "Buy Smartphones on Installment in Rwanda: Samsung, Tecno, Infinix",
  description:
    "Get a Samsung, Tecno, Infinix or itel smartphone and pay in installments with Solektra Telecom in Kigali. 4G home routers and pocket Wi-Fi also available.",
  path: PATH,
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Smartphones and routers on installment",
      serviceType: "Smartphone and 4G router sales with pay-as-you-go installment plans",
      description:
        "Samsung Galaxy A06, A07, A56, Tecno Camon 50, Spark 50, Spark 40, Pop 20, Infinix Hot 50i, Hot 70, itel A06 and 4G routers, available with installment plans in Rwanda.",
      url: `${SITE}${PATH}`,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "Rwanda" },
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: "Digital Devices", path: PATH },
    ]),
  ],
};

export default function DigitalDevicesHomePage() {
  return (
    <>
      <JsonLd data={schema} />
      <DigitalDevice />
    </>
  );
}