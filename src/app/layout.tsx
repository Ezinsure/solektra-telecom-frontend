import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import FooterPage from "@/components/layout/footer/page";
import { cn } from "@/lib/utils";
import HeaderPage from "@/components/layout/header/page";
import AOSInitializer from "@/components/AOSinitializer";
import CookieConsent from "@/components/cookie-consent/CookieConsent";
import JsonLd from "@/components/JsonLd";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.solektratelecom.com"),

  title: {
    default: "Solektra Telecom | 4G, Fiber Internet & VoLTE in Rwanda",
    template: "%s | Solektra Telecom",
  },

  description:
    "Unlimited 4G home internet from 20,000 RWF/month, data bundles from 100 RWF, dedicated fiber for businesses, VoLTE calls and smartphones on instalment in Rwanda.",

  applicationName: "Solektra Telecom",
  category: "telecommunications",

  openGraph: {
    type: "website",
    siteName: "Solektra Telecom",
    locale: "en_RW",
    url: "/",
    title: "Solektra Telecom | 4G, Fiber Internet & VoLTE , Digital Services in Rwanda",
    description:
      "Fast, affordable internet for homes and businesses across Kigali, Rwanda. Unlimited 4G home internet from 20,000 RWF/month and data bundles from 100 RWF.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solektra Telecom 4G and fiber internet in Rwanda",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@solektra_rwanda",
    title: "Solektra Telecom | 4G, Fiber Internet & VoLTE in Rwanda",
    description:
      "Unlimited 4G home internet from 20,000 RWF/month, data bundles from 100 RWF, and dedicated fiber for businesses in Rwanda.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },

  verification: {
    google: "u3Z1LeEZGpynyCBNX2ZfmkUAHPbDsTqQoLmf2B98dBU",
  },
};

const data = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.solektratelecom.com/#organization",
      name: "Solektra Telecom",
      alternateName: ["Solektra", "Solektra Rwanda"],
      url: "https://www.solektratelecom.com/",
      logo: "https://www.solektratelecom.com/logo.png",
      email: "info@solektra.co",
      description:
        "Internet and telecom provider in Rwanda offering fiber internet, 4G internet, VoLTE calling, routers and smartphones on instalment plans. Unlimited home internet without a fiber line, anywhere with 4G coverage, from 20,000 RWF/month.",
      sameAs: [
        "https://www.instagram.com/solektra_telecom/",
        "https://x.com/solektra_rwanda",
        "https://www.linkedin.com/company/solektra-rwanda/",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+250794766463",
          contactType: "customer service",
          areaServed: "RW",
          availableLanguage: ["en", "rw", "fr"],
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.solektratelecom.com/#localbusiness",
      name: "Solektra Telecom",
      parentOrganization: { "@id": "https://www.solektratelecom.com/#organization" },
      url: "https://www.solektratelecom.com/",
      image: "https://www.solektratelecom.com/logo.png",
      telephone: "+250794766463",
      email: "info@solektra.co",
      address: {
        "@type": "PostalAddress",
        streetAddress: "KABC Building, 6th Floor, KN 5 Rd",
        addressLocality: "Kigali",
        addressCountry: "RW",
      },
      geo: { "@type": "GeoCoordinates", latitude: -1.9523913648697417, longitude: 30.091511373702126 },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "24:00",
        },
      ],
      areaServed: { "@type": "Country", name: "Rwanda" },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.solektratelecom.com/#website",
      url: "https://www.solektratelecom.com/",
      name: "Solektra Telecom",
      publisher: { "@id": "https://www.solektratelecom.com/#organization" },
    },
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
        <JsonLd data={data} />
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
