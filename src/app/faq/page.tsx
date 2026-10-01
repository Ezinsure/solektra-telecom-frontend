import type { Metadata } from "next";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, breadcrumb } from "@/lib/seo";
import { faqEn } from "@/datas/faq";

export const metadata: Metadata = pageMetadata({
    title: "FAQ: Internet Prices, Coverage & Installation in Rwanda",
    description:
        "Answers about Solektra Telecom: coverage in all 30 districts, unlimited home internet from 20,000 RWF, same-day installation, MTN MoMo payment and no contracts.",
    path: "/faq",
});

export default function FaqPage() {
    return (
        <main>
            <Faq items={faqEn} heading="Frequently asked questions" withSchema />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    ...breadcrumb([
                        { name: "Home", path: "/" },
                        { name: "FAQ", path: "/faq" },
                    ]),
                }}
            />
        </main>
    );
}