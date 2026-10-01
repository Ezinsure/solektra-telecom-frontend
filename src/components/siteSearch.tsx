"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { sitePages } from "@/datas/sitePages";
import styles from "./notFound.module.css";

export default function SiteSearch() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const results = useMemo(() => {
        const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
        if (words.length === 0) return [];
        return sitePages
            .filter((p) => {
                const text = `${p.name} ${p.section} ${p.keywords}`.toLowerCase();
                return words.every((w) => text.includes(w));
            })
            .slice(0, 6);
    }, [query]);

    return (
        <form
            role="search"
            className={styles.searchBox}
            onSubmit={(e) => {
                e.preventDefault();
                if (results[0]) router.push(results[0].href);
            }}
        >
            <label htmlFor="site-search" className={styles.srOnly}>
                Search solektratelecom.com
            </label>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
            </svg>
            <input
                id="site-search"
                className={styles.input}
                type="search"
                placeholder="Search solektratelecom.com"
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Escape" && setQuery("")}
            />

            <p className={styles.srOnly} aria-live="polite">
                {query ? `${results.length} results` : ""}
            </p>

            {results.length > 0 && (
                <ul className={styles.results}>
                    {results.map((p) => (
                        <li key={p.href}>
                            <Link href={p.href}>
                                <span>{p.name}</span>
                                <span className={styles.section}>{p.section}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            {query && results.length === 0 && (
                <p className={styles.empty}>
                    No results for &quot;{query}&quot;. Try &quot;fiber&quot;, &quot;bundles&quot; or &quot;phones&quot;, or call 1150.
                </p>
            )}
        </form>
    );
}