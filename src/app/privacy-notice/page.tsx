// src/app/privacy-policy/page.tsx  →  /privacy-policy
// DRAFT — have a lawyer review before publishing. Search this file for "TODO".
import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Solektra Telecom collects, uses and protects your personal data under Rwanda's Law No. 058/2021 on the protection of personal data and privacy.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" >
      <p>
        This Privacy Policy explains how [TODO: company legal name] (&quot;Solektra Telecom&quot;,
        &quot;we&quot;, &quot;us&quot;) collects, uses, stores and protects personal data when you use
        our website, our 4G, fiber and VoLTE services, and our device installment plans. We process
        personal data in line with Law No. 058/2021 of 13/10/2021 relating to the protection of
        personal data and privacy.
      </p>

      <h2>1. Who is responsible for your data</h2>
      <p>
        Solektra Telecom is the data controller. Contact: KABC Building, 6th Floor, KN 5 Rd, Kigali,
        Rwanda · <a href="mailto:info@solektra.co">info@solektra.co</a> · 1150 or +250 794 766 463.
        [TODO: name or email of your Data Protection Officer, if you have appointed one.]
      </p>

      <h2>2. Personal data we collect</h2>
      <ul>
        <li>Identity details: name, national ID or passport number (required for SIM and service registration).</li>
        <li>Contact details: phone number, email address, physical address and installation location.</li>
        <li>Account and service data: packages purchased, recharges, data and call usage, device and SIM identifiers.</li>
        <li>Payment data: MTN Mobile Money transaction references. We do not store your MoMo PIN.</li>
        <li>Installment data: information needed to assess and manage smartphone installment plans.</li>
        <li>Website data: login details, pages visited, device and browser information, and cookies (see our <a href="/cookie-policy">Cookie Policy</a>).</li>
        <li>Communications: messages and calls with customer care, including WhatsApp.</li>
      </ul>

      <h2>3. Why we use your data</h2>
      <ul>
        <li>To register, install, provide and support your services.</li>
        <li>To process payments, recharges and installment plans.</li>
        <li>To meet legal and regulatory obligations, including subscriber registration requirements.</li>
        <li>To keep our network and website secure and prevent fraud.</li>
        <li>To improve our services and website.</li>
        <li>To send you service messages and, with your consent, offers. You can opt out of offers at any time.</li>
      </ul>

      <h2>4. Who we share data with</h2>
      <p>
        We do not sell your personal data. We share it only when needed with: payment providers (MTN
        Mobile Money), installation and technical partners working on our behalf, IT and hosting
        providers, and public authorities when the law requires it. Anyone processing data for us
        must protect it and use it only for our instructions.
      </p>

      <h2>5. Where your data is stored</h2>
      <p>
        [TODO: confirm with your IT team and lawyer where customer data is stored. Rwandan law requires
        personal data to be stored in Rwanda unless an authorisation from the National Cyber Security
        Authority (NCSA) allows storage or transfer abroad. Describe your situation here.]
      </p>

      <h2>6. How long we keep data</h2>
      <p>
        We keep personal data only as long as needed for the purposes above, or as long as the law
        requires. [TODO: add your retention periods, e.g. account data for X years after the end of
        service.]
      </p>

      <h2>7. Your rights</h2>
      <p>Under Rwandan law, you have the right to:</p>
      <ul>
        <li>be informed about how your data is used and access a copy of it;</li>
        <li>ask us to correct inaccurate data or delete data we no longer need;</li>
        <li>object to processing, including for marketing;</li>
        <li>withdraw your consent at any time where we rely on consent;</li>
        <li>complain to the National Cyber Security Authority (NCSA).</li>
      </ul>
      <p>
        To use these rights, email <a href="mailto:info@solektra.co">info@solektra.co</a> or visit our
        office. We may ask you to confirm your identity first.
      </p>

      <h2>8. Security</h2>
      <p>
        We use technical and organisational measures to protect your data against loss, misuse and
        unauthorised access. If a personal data breach occurs, we will notify the authorities and
        affected customers as required by law.
      </p>

      <h2>9. Children</h2>
      <p>Our services are intended for adults. We do not knowingly collect data from children without parental consent.</p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy. The date at the top shows the latest version, and we will inform
        customers of important changes.
      </p>
    </LegalPage>
  );
}