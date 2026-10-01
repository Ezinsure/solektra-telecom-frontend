import PackagesSchema from "@/components/PackageSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Internet & VoLTE Packages and Prices in Rwanda | Solektra Telecom",
    description:
        "4G bundles from 100 RWF, unlimited 4G home internet from 20,000 RWF/month, and VoLTE call and data packs from 500 RWF. See all Solektra prices.",
    alternates: { canonical: "/packages" },
};
export default function PackagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <PackagesSchema />
        </>
    );
}