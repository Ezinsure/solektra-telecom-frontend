import type { Metadata } from "next";
import Internet4GPage from "./FourGIInternet";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, breadcrumb, aggregateOffer, SITE, ORG_ID } from "@/lib/seo";

const PATH = "/products/4G-internet";

export const metadata: Metadata = pageMetadata({
    title: "4G Internet Bundles & Unlimited Home Broadband in Rwanda",
    description:
        "4G data bundles from 100 RWF and unlimited 4G home internet from 20,000 RWF/month. No fiber line needed: plug in your router and get online wherever Solektra 4G reaches.",
    path: PATH,
});

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Solektra 4G Internet",
            serviceType: "4G LTE mobile and home broadband internet",
            description:
                "Daily, weekly and monthly 4G data bundles, unlimited 4G home broadband, office and SME plans, and education plans for schools in Rwanda.",
            url: `${SITE}${PATH}`,
            provider: { "@id": ORG_ID },
            areaServed: { "@type": "Country", name: "Rwanda" },
            offers: aggregateOffer("4g-", "/packages?cat=4g&sub=volume"),
        },
        breadcrumb([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "4G Internet", path: PATH },
        ]),
    ],
};

export default function FourGInternetPage() {
    return (
        <>
            <JsonLd data={schema} />
            <Internet4GPage />
        </>
    );
}