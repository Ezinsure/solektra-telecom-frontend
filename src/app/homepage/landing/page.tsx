import type { Metadata } from "next";
import LandingPage from "./LandingPage";

export const metadata: Metadata = {
    title: "Fiber, 4G  Internet Provider in Rwanda",
    description: "Buy fast, affordable internet, routers, and smartphones in Rwanda. Fiber, 4G, and 5G packages with flexible payment plans. Get connected today."
};

export default function HomePage() {
    return <LandingPage />;
}