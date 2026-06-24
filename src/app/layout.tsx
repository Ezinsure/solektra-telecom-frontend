import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import FooterPage from "@/components/layout/footer/page";
import { cn } from "@/lib/utils";
import HeaderPage from "@/components/layout/header/page";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SOLEKTRA TELECOM",
  description: "Empowering Communities Through Connectivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full ", "antialiased", poppins.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <HeaderPage />
        <main className="flex-1">{children}</main>
        <FooterPage />
      </body>
    </html>
  );
}