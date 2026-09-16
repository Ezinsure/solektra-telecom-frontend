import type { Metadata } from "next";
import FiberInternetPage from "./FiberInternet";
import JsonLd from "@/components/JsonLd";

const fiberProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Fiber Internet",
  description: "Gigabit-speed fiber internet delivered to homes and businesses in Kigali, Rwanda.",
  brand: {
    "@type": "Brand",
    name: "Solektra Telecom",
  }
};

export const metadata: Metadata = {
  title: "Fiber Internet in Rwanda — Home & Business Packages",
  description: "Get gigabit-speed fiber internet for your home or business in Kigali, Rwanda. Reliable, high-speed connectivity with easy installation.",
};

export default function FiberInternetHomePage() {
  <JsonLd data={fiberProductSchema} />
  return <FiberInternetPage />;
}