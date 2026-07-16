import type { Metadata } from "next";
import Internet4GPage from "./FourGIInternet";
import JsonLd from "@/components/JsonLd";

const RouterProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "4G/5G Internet Package",
    description: "Affordable 4G and 5G internet packages for home and mobile use in Rwanda.",
    brand: {
        "@type": "Brand",
        name: "Solektra Telecom",
    }
};

export const metadata: Metadata = {
    title: "4G/5G Internet Packages in Rwanda",
    description: "Affordable 4G and 5G internet packages for home and mobile use in Rwanda. Fast, reliable coverage nationwide. Buy your router and data plan online.",
};

export default function FourGInternetPage() {
    <JsonLd data={RouterProductSchema} />
    return <Internet4GPage />;
}