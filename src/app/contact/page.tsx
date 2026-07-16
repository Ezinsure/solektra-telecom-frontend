import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
    title: "Contact Solektra Telecom | Rwanda's Digital Connectivity Partner",
    description: "Get in touch with Solektra Telecom for any inquiries or support. We're here to help you with our reliable internet and digital solutions.",
};

export default function ContactHomePage() {
    return <ContactPage />;
}