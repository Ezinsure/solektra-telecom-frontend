import type { Metadata } from "next";
import FiberInternetPage from "./FiberInternet";
import JsonLd from "@/components/JsonLd";

const fiberProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Fiber Internet",
  description: "Gigabit-speed fiber internet delivered to homes and businesses in Kigali, Rwanda. Dedicated fiber internet Kigali, fiber internet for companies Rwanda, fiber quote Rwanda",
  brand: {
    "@type": "Brand",
    name: "Solektra Telecom",
  }
};

export const metadata: Metadata = {
  title: "Fiber Internet in Kigali, Rwanda — Home & Business Packages . 4G Home Broadband, unlimited 20 Mbps for 20,000 RWF/month",
  description: "Get gigabit-speed fiber internet for your home or business in Kigali, Rwanda. Reliable, high-speed connectivity with easy installation.",
  alternates: { canonical: "/products/fiber-internet" },
};

export default function FiberInternetHomePage() {
  <JsonLd data={fiberProductSchema} />
  return <FiberInternetPage />;
}