import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
    title: "About Solektra Telecom | Rwanda's Digital Connectivity Partner",
    description: "Learn about Solektra Telecom's mission to power homes, businesses, and communities across Rwanda with reliable internet and digital solutions.",
};

export default function AboutHomePage() {
    return <AboutPage />;
}