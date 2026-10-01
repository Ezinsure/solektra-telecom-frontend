// src/app/terms-of-service/page.tsx  →  /terms-of-service
// DRAFT — have a lawyer review before publishing. Search this file for "TODO".
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
        These Terms apply when you use services from [TODO: company legal name] (&quot;Solektra
        Telecom&quot;, &quot;we&quot;, &quot;us&quot;), including 4G internet, fiber internet, VoLTE,
        device sales and installment plans, and this website. By buying or using our services, you
        accept these Terms.
      </p>

      <h2>1. Our services</h2>
      <p>
        We provide 4G and fiber internet, VoLTE voice services, and smartphones and routers in all
        districts of Rwanda. Package details, speeds, data volumes and prices are shown on our{" "}
        <a href="/packages">Packages</a> page. Speeds are &quot;up to&quot; speeds and can vary with
        location, network load, building structure and the device you use.
      </p>

      <h2>2. Registration</h2>
      <p>
        You must give accurate identity and contact details when you subscribe, as required by law.
        You are responsible for your account, SIM card and login details.
      </p>

      <h2>3. Packages, prices and payment</h2>
      <ul>
        <li>Packages are prepaid and paid with MTN Mobile Money (MoMo).</li>
        <li>Each package is valid for the period stated (for example 1, 7 or 30 days). [TODO: confirm whether unused data expires at the end of the validity period.]</li>
        <li>Prices include VAT unless stated otherwise. [TODO: confirm.]</li>
        <li>We may change prices or packages. Changes do not affect a package you have already paid for.</li>
      </ul>

      <h2>4. Installation</h2>
      <p>
        We install home and business connections on the same day you request them, subject to
        access to your premises. A one-time installation fee applies. [TODO: state the fee or refer
        to the current price list.] Equipment provided with your service is [TODO: included and
        remains our property / becomes yours — confirm which].
      </p>

      <h2>5. Cancellation</h2>
      <p>
        There is no minimum contract period. You can cancel your service at any time by contacting
        customer care. Fees already paid for the current package period are not refunded unless
        required by law. [TODO: confirm refund policy and whether equipment must be returned.]
      </p>

      <h2>6. Fiber service level agreements</h2>
      <p>
        Dedicated fiber is provided under a separate quote and service level agreement (SLA), which
        sets the bandwidth, price and availability commitment (up to 99.9% uptime). If the SLA and
        these Terms differ, the SLA applies.
      </p>

      <h2>7. Device installment plans</h2>
      <ul>
        <li>Smartphones can be paid in installments over up to 24 months. The deposit depends on the device.</li>
        <li>You agree to make each payment on time. [TODO: describe what happens if a payment is missed, e.g. device locking or suspension.]</li>
        <li>[TODO: state when ownership of the device passes to the customer, e.g. after the final payment.]</li>
        <li>Manufacturer warranty terms apply to devices. [TODO: warranty period.]</li>
      </ul>

      <h2>8. Acceptable use</h2>
      <p>You must not use our services to:</p>
      <ul>
        <li>break the law or infringe other people&apos;s rights;</li>
        <li>send spam, spread malware or attack networks and systems;</li>
        <li>resell our services without our written agreement;</li>
        <li>interfere with our network or other customers&apos; use of it.</li>
      </ul>
      <p>We may suspend services that are used in breach of these rules.</p>

      <h2>9. Service availability</h2>
      <p>
        We work to keep our network available, but interruptions can happen because of maintenance,
        power cuts, damage or events outside our control. Except where an SLA says otherwise, we are
        not liable for indirect losses caused by interruptions.
      </p>

      <h2>10. Complaints</h2>
      <p>
        Contact customer care first: 1150, +250 794 766 463 (call or WhatsApp) or{" "}
        <a href="mailto:info@solektra.co">info@solektra.co</a>, Monday to Saturday, 8:00 to 17:00. If
        your complaint is not resolved, you may contact the Rwanda Utilities Regulatory Authority (RURA).
      </p>

      <h2>11. Privacy</h2>
      <p>
        We handle your personal data as described in our <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>12. Governing law</h2>
      <p>These Terms are governed by the laws of the Republic of Rwanda.</p>

      <h2>13. Changes</h2>
      <p>
        We may update these Terms. The date at the top shows the latest version. Continuing to use
        our services after a change means you accept the updated Terms.
      </p>
    </LegalPage>
  );
}