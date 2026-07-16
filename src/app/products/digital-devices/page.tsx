import type { Metadata } from "next";
import DigitalDevice from "./DigitalDevices";
import JsonLd from "@/components/JsonLd";

const digitalDeviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Digital Device",
    description: "Latest smartphones and devices available for purchase on installment plans in Rwanda.",
    brand: {
        "@type": "Brand",
        name: "Solektra Telecom",
    }
};

export const metadata: Metadata = {
    title: "Buy Smartphones on Installment in Rwanda",
    description: "Own the latest smartphones with affordable Pay-As-You-Go installment plans. Shop routers and devices at Solektra Telecom, Kigali.",
};

export default function DigitalDevicesHomePage() {
    <JsonLd data={digitalDeviceSchema} />
    return <DigitalDevice />;
}