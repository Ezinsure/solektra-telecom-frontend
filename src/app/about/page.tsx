import type { Metadata } from "next";
import AboutPage from "./AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "About Solektra Telecom: Internet Provider in All 30 Districts of Rwanda",
    description:
        "Solektra Telecom is a Kigali-based provider of 4G internet, dedicated fiber, VoLTE and smartphones on installment, serving homes and businesses in all 30 districts of Rwanda.",
    path: "/about",
});

export default function Page() {
    return <AboutPage />;
}