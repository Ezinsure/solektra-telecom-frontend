import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import styles from "@/components/legal.module.css";
import { sitePages } from "@/datas/sitePages";

export const metadata: Metadata = pageMetadata({
    title: "Site Map",
    description: "All pages on the Solektra Telecom website: 4G internet, fiber, VoLTE, smartphones, packages and prices, support and legal pages.",
    path: "/site-map",
});

export default function SiteMapPage() {
    const sections = [...new Set(sitePages.map((p) => p.section))];

    return (
        <main className={styles.page}>
            <h1 className={styles.title}>Site map</h1>
            <div className={styles.body}>
                {sections.map((section) => (
                    <section key={section}>
                        <h2>{section}</h2>
                        <ul>
                            {sitePages
                                .filter((p) => p.section === section)
                                .map((p) => (
                                    <li key={p.href}>
                                        <Link href={p.href}>{p.name}</Link>
                                    </li>
                                ))}
                        </ul>
                    </section>
                ))}
            </div>
        </main>
    );
}