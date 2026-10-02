import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Terms for using Solektra Telecom 4G internet, fiber, VoLTE and device installment services in Rwanda: payments, installation, cancellation and support.",
  path: "/terms-of-service",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        These Terms apply when clients use services from Solektra Telecom (&quot;Solektra&quot;, &quot;we&quot;, &quot;us&quot;), by buying or using our services, clients accept these Terms.
      </p>

      <h2> Services</h2>
      <p>
        We provide 4G and fiber internet, VoLTE voice services, and smartphones and routers in all
        districts of Rwanda. Package details, speeds, data volumes and prices are shown on our{" "}
        <a href="/packages">Packages</a> page. Speeds are &quot;up to&quot; speeds and can vary with
        location, network load, building structure and the device clients use.
      </p>

      <h2>Registration</h2>
      <p>
        clients must give accurate identity and contact details when clients subscribe, and keep them up to date. We may suspend or cancel services if we cannot verify clients&apos; identity.
        clients are responsible for their account, SIM card and login details.
      </p>

      <h2>Packages, prices and payment</h2>
      <ul>
        <li>Packages are prepaid and paid with MTN Mobile Money (MoMo).</li>
        <li>Each package is valid for the period stated .</li>
        <li>We may change prices or packages. Changes do not affect a package clients have already paid for.</li>
      </ul>

      <h2>Installation</h2>
      <p>
        We install home and business connections on the same day clients request them, subject to
        access to their premises. A one-time installation fee applies.
      </p>

      <h2> Fiber service level agreements</h2>
      <p>
        Dedicated fiber is provided under a separate quote and service level agreement (SLA), which
        sets the bandwidth, price and availability commitment . If the SLA and these Terms differ, the SLA applies.
      </p>

      <h2>Device installment plans</h2>
      <ul>
        <li>Smartphones can be paid in installments over up to 24 months. The deposit depends on the device.</li>
        <li>Clients agree to make each payment on time. </li>
        <li>The ownership of the device passes to the customer after the final payment .</li>
      </ul>

      <h2>Complaints</h2>
      <p>
        Contact customer care first: 1150, +250 794 766 463 (call or WhatsApp) or{" "}
        <a href="mailto:info@solektra.co">info@solektra.co</a>, Monday to Saturday, 8:00 to 17:00.
      </p>

      <h2>Privacy</h2>
      <p>
        We handle your personal data as described in our <a href="/privacy-notice">Privacy Policy</a>.
      </p>
      <h2>Changes</h2>
      <p>
        We may update these Terms. The latest Terms will be made available through the web or another appropriate channel. Continuing to use
        our services after a change means you accept the updated Terms.
      </p>
    </LegalPage>
  );
}