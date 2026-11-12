import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, breadcrumb, aggregateOffer, SITE, ORG_ID } from "@/lib/seo";
import StarlinkPage from "./starlinkInternet";

const PATH = "https://www.solektratelecom.com/products/starlink-rwanda";

export const metadata: Metadata = pageMetadata({
    title: "Starlink Internet Rwanda – Fast Setup | Solektra Telecom",
    description:
        "Get Starlink internet anywhere in Rwanda with Solektra Telecom. Connection in eight hours or less, subject to availability. Call for plans and a quote.",
    path: PATH,
});

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Starlink Internet in Rwanda",
            serviceType: "Starlink Internet and home broadband internet",
            description:
                "Get Starlink internet anywhere in Rwanda with Solektra Telecom. Connection in eight hours or less, subject to availability. Call for plans and a quote.",
            url: `${SITE}${PATH}`,
            provider: { "@id": ORG_ID },
            areaServed: { "@type": "Country", name: "Rwanda" },
            offers: aggregateOffer("starlink-", "/packages?cat=starlink&sub=volume"),
        },
        breadcrumb([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Starlink Internet", path: PATH },
        ]),
    ],
};

export default function StarlinkInternetPage() {
    return (
        <>
            <JsonLd data={schema} />
            <StarlinkPage />
        </>
    );
}