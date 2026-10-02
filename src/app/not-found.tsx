import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/notFound.module.css";
import SiteSearch from "@/components/siteSearch";

export const metadata: Metadata = {
    title: "Page not found",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <main className={styles.wrap}>
            <h1 className={styles.title}>The page you&apos;re looking for can&apos;t be found.</h1>
            <SiteSearch />
            <Link href="/site-map" className={styles.siteMapLink}>
                Or see our site map ›
            </Link>
        </main>
    );
}