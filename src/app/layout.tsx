import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import FooterPage from "@/components/layout/footer/page";
import { cn } from "@/lib/utils";
import HeaderPage from "@/components/layout/header/page";
import AOSInitializer from "@/components/AOSinitializer";
import JsonLd from "@/components/JsonLd";
import CookieConsent from "@/components/cookie-consent/CookieConsent";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Solektra Telecom — Fiber, 4G & 5G Internet Provider in Rwanda",
    template: "%s | Solektra Telecom",
  },
  description:
    "Buy fast, affordable internet, routers, and smartphones in Rwanda. Fiber, 4G, and 5G packages with flexible payment plans. Get connected today.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TelecommunicationsCompany",
  name: "Solektra Telecom",
  url: "https://solektratelecom.com/",
  logo: "https://solektratelecom.com/logo.png",
  description: "Fiber, 4G, and 5G internet provider in Rwanda offering routers, smartphones, and internet packages.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "KABC Building, 6th Floor, KN 5 RD",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
  telephone: "+250794766463",
  email: "info@solektra.co",
  sameAs: [
    "https://www.instagram.com/solektra_telecom/",
    "https://x.com/solektra_rwanda",
    "https://www.linkedin.com/company/solektra-rwanda/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full ",
        "antialiased",
        poppins.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <JsonLd data={organizationSchema} />
        <HeaderPage />
        <AOSInitializer />
        <main className="flex-1">
          {children}</main>
        <FooterPage />
        <CookieConsent />
      </body>
    </html>
  );
}
