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
                This Cookie Policy explains how the Solektra Telecom website (solektratelecom.com) uses
                cookies and similar technologies.
            </p>

            <h2> What cookies are </h2>
            <p>
                Cookies are small text files stored in your browser when you visit a website.  Cookies can be used to collect, store, and share bits of information about your activities across websites, including on Solektra Telecom’s website.
            </p>

            <h2>2. Cookies we use</h2>
            <ul>
                <li>
                    <strong>Strictly necessary:</strong> keep you logged in to your account, keep the site
                    secure and make features like recharge and balance checks work. The site cannot work
                    properly without them, so they cannot be turned off.
                </li>
                <li>
                    <strong>Preferences:</strong> remember choices such as your language.
                </li>
                <li>
                    <strong>Analytics:</strong> [TODO: list your analytics tool, e.g. Google Analytics or Vercel
                    Analytics, or delete this item if you use none.] These help us understand which pages are
                    visited so we can improve the site.
                </li>
            </ul>
            <p>We do not use cookies to sell your data. [TODO: confirm you use no advertising cookies.]</p>

            <h2>3. Managing cookies</h2>
            <p>
                You can block or delete cookies in your browser settings (Chrome, Safari, Firefox, Edge and
                others). If you block strictly necessary cookies, parts of the site such as login may stop
                working.
            </p>

            <h2>4. More information</h2>
            <p>
                For how we handle personal data, see our <a href="/privacy-policy">Privacy Policy</a>.
                Questions: <a href="mailto:info@solektra.co">info@solektra.co</a>.
            </p>
        </LegalPage>
    );
}