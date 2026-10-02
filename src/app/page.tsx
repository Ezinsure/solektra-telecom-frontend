import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import LandingPage from "./homepage/landing/page";

export const metadata: Metadata = {
  title: {
    absolute: "Solektra Telecom | 4G, Fiber Internet & VoLTE , Digital devices in Rwanda",
  },
  description:
    "Unlimited 4G home internet from 20,000 RWF/month, data bundles from 100 RWF, dedicated fiber for businesses, VoLTE calls and smartphones on instalment in Rwanda.",
  alternates: {
    canonical: "/",
    languages: { en: "/", rw: "/rw", "x-default": "/" },
  },
};

export default function HomePage() {
  return <LandingPage />;
}
