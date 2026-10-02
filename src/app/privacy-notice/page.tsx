import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Solektra Telecom collects, uses and protects your personal data .",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" >
      <p>
        Solektra Telecom (“Solektra,” “we,” “our,” or “us”) respects clients&apos; privacy and is committed to protecting clients&apos; personal information.
        This Privacy Policy explains how information is collected, used, disclosed, stored, and protected when clients access or use the Solektra Telecom website  and its related services.
      </p>

      <h2> Who We Are </h2>
      <p>
        Solektra Telecom is a telecommunications company registered in Rwanda. We provide mobile and internet services, including voice, data, and digital devices.
      </p>
      <ul>
        <li>Legal entity: SOLEKTRA Telecom</li>
        <li>Registered address: Kigali, Rwanda</li>
        <li>Customer support: info@solektra.co</li>
      </ul>

      <h2>Information Solektra May Collect</h2>
      <ul>
        <li>Contact details: phone number, email address, physical address and installation location.</li>
        <li>Account and service data: packages purchased, recharges, data and call usage, device and SIM identifiers.</li>
        <li>Installment data: information needed to assess and manage smartphone installment plans.</li>
        <li>Website data: login details, pages visited, device and browser information, and cookies.</li>
        <li>Communications: messages and calls with customer care, including WhatsApp.</li>
      </ul>

      <h2>How Solektra Obtains Information</h2>
      <p> In most circumstances we collect informations directly from clients, for instance, when clients interact with our customer support department, when clients buy or use any of our products or services, or when clients visit our website.</p>

      <h2> Why Solektra uses clients&apos; data</h2>
      <ul>
        <li>To register, install, provide and support clients&apos; services.</li>
        <li>To process payments, recharges and installment plans.</li>
        <li>To meet legal and regulatory obligations, including subscriber registration requirements.</li>
        <li>To keep our network and website secure and prevent fraud.</li>
        <li>To improve our services and website.</li>
        <li>To send you service messages and, with your consent, offers. You can opt out of offers at any time.</li>
      </ul>

      <h2>Legal Basis for Processing</h2>
      <p>  Where applicable, we process personal information on one or more lawful bases, including:
        <ul>
          <li>Your consent.</li>
          <li>The performance of a contract or steps necessary to provide a requested service.</li>
          <li>Compliance with legal obligations.</li>
          <li>Legitimate interests, where permitted by law and where your rights do not override those interests.</li>
        </ul>
      </p>
      <p>  Where processing relies on consent, you may withdraw that consent, subject to legal limitations and the consequences for features that depend on the information.</p>
      <h2>How long Solektra keeps data</h2>
      <p>
        We keep personal data only as long as needed for the purposes above, or as long as the law
        requires.
      </p>
      <h2>Your Privacy Rights</h2>
      <p>Under the privacy laws you have rights which may include the right to:</p>
      <ul>
        <li>Request access to your personal information.</li>
        <li>Request correction of inaccurate or incomplete information.</li>
        <li>Request erasure of information in appropriate circumstances.</li>
        <li>Object to certain processing activities.</li>
        <li>Withdraw consent where processing is based on consent.</li>
        <li>Request a copy of eligible information in a portable format.</li>
        <li>Lodge a complaint with the competent data protection authority.</li>
      </ul>
      <p>
        To exercise your rights, email <a href="mailto:info@solektra.co">info@solektra.co</a> or visit our
        office. We may ask you to confirm your identity first.
      </p>

      <h2>Security</h2>
      <p>
        We use technical and organisational measures to protect your information data against loss, misuse and
        unauthorised access. If a personal data breach occurs, we will notify the authorities and
        affected customers as required by law.
      </p>

      <h2>Children</h2>
      <p>Our services are intended for adults. We do not knowingly collect data from children without parental consent.
        Where we know that personal information relates to a child, we will handle it in accordance with applicable law, including any parental or guardian consent requirements. We do not knowingly collect children&apos;s information beyond what is lawfully permitted and necessary for the service.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy to reflect changes in  our services, legal requirements, or data-handling practices.
        The latest version will be made available through our website or an appropriate publication channel, with the updated effective date. Where required by law, we will notify users or obtain consent before implementing relevant changes.
      </p>

      <h2>Contact Us</h2>
      <p>
        For privacy questions, access or correction requests, or complaints about our handling of personal information, please  contact us at:
      </p>
      <ul>
        <li>Email: info@solektra.co</li>
        <li>Telephone: +250 794 766 463</li>
      </ul>
    </LegalPage>
  );
}