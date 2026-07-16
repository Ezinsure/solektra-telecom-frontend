import type { Metadata } from "next";
import VoLTEPage from "./Volte";
import JsonLd from "@/components/JsonLd";

const fiberProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "voLTE Service",
    description: "Crystal-clear HD voice calls with Solektra's VoLTE service over our advanced 4G LTE network in Rwanda.",
    brand: {
        "@type": "Brand",
        name: "Solektra Telecom",
    }
};

export const metadata: Metadata = {
    title: "VoLTE — HD Voice Calls Over 4G LTE",
    description: "Crystal-clear HD voice calls with Solektra's VoLTE service over our advanced 4G LTE network in Rwanda.",
};

export default function VoLTEHomePage() {
    <JsonLd data={fiberProductSchema} />
    return <VoLTEPage />;
}