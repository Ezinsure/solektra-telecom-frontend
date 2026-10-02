import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Cookie Policy",
    description:
        "Which cookies the Solektra Telecom website uses, why we use them, and how you can control or delete them in your browser.",
    path: "/cookie-policy",
});

export default function CookiePolicyPage() {
    return (
        <LegalPage title="Cookie Policy" >
            <p>
                This Cookie Policy explains how the Solektra Telecom website  uses
                cookies and similar technologies.
            </p>

            <h2> What cookies are </h2>
            <p>
                Cookies are small text files stored in  browser when user visit a website.  Cookies can be used to collect, store, and share bits of information about  activities across websites, including on Solektra Telecom’s website.
            </p>

            <h2> Cookies we use</h2>
            <ul>
                <ul>
                    <li><strong>Necessary:</strong> keep the website secure and working. These are always on.</li>
                    <li><strong>Analytics:</strong> show us which pages are visited and how the site performs.</li>
                    <li> <strong>Preferences:</strong> remember choices such as your language.</li>
                    <li><strong>Personalization:</strong> remember preferences such as your language.</li>
                </ul>
            </ul>

            <h2> Managing cookies</h2>
            <p>
                Users can block or delete cookies in their browser settings .
            </p>

            <h2>More information</h2>
            <p>
                For how we handle personal data, see our <a href="/privacy-notice">Privacy Policy</a>.
                Questions: <a href="mailto:info@solektra.co">info@solektra.co</a>.
            </p>
        </LegalPage>
    );
}