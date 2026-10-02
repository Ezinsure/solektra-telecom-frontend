import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internet, VoLTE & Smartphone Solutions in Rwanda",
  description:
    "Explore Solektra Telecom products in Rwanda: 4G data bundles, unlimited 4G home internet, dedicated business fiber, VoLTE call packages, and smartphones on installment.",
};
export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}