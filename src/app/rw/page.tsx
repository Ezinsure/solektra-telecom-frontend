import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import styles from "./rw.module.css";
import { faqRw } from "@/datas/faq";

const title = "Solektra Telecom | Interineti ya 4G na Fibre mu Rwanda";
const description =
  "Interineti itagira umupaka yo mu rugo guhera ku 20,000 RWF ku kwezi, router irimo. Amapaki ya 4G guhera ku 100 RWF. Tuyishyiraho uwo munsi, wishyura na MTN MoMo.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/rw",
    languages: { en: "/", rw: "/rw", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: "Solektra Telecom",
    locale: "rw_RW",
    url: "/rw",
    title,
    description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Solektra Telecom" }],
  },
};

const products = [
  { name: "Amapaki ya 4G", text: "Guhera ku 100 RWF ku munsi, kugeza kuri 30 GB ku 8,900 RWF ku kwezi." },
  { name: "Fibre y'ibigo", text: "Kugeza kuri 1 Gbps ku biro, amashuri n'ibigo. Igiciro kiganirwaho." },
  { name: "VoLTE", text: "Hamagara mu majwi asobanutse kuri 4G, guhera ku 500 RWF." },
  { name: "Telefoni mu byiciro", text: "Samsung, Tecno, Infinix na itel, wishyura mu gihe kigera ku mezi 24." },
];

export default function RwHomePage() {
  return (
    <main className={styles.page}>
      <p className={styles.switch}>
        <Link href="/" hrefLang="en" lang="en">English</Link>
      </p>

      <section className={styles.hero}>
        <h1>Interineti yihuta kandi yizewe mu turere twose tw&apos;u Rwanda</h1>
        <p>
          Solektra Telecom iguha interineti ya 4G na Fibre, guhamagara kwa VoLTE, na telefoni
          zigezweho wishyura buhoro buhoro.
        </p>
      </section>

      <section className={styles.offer}>
        <h2>Interineti yo mu rugo itagira umupaka</h2>
        <p className={styles.price}>20,000 RWF / ukwezi</p>
        <ul>
          <li>Router irimo</li>
          <li>Tuyigushyirira ku munsi umwe usabye</li>
          <li>Nta masezerano: uhagarika igihe ushakiye</li>
          <li>Wishyura na MTN MoMo</li>
        </ul>
      </section>

      <section className={styles.grid}>
        {products.map((p) => (
          <div key={p.name} className={styles.card}>
            <h3>{p.name}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </section>

      <div className={styles.cta}>
        <a href="tel:1150">Hamagara 1150</a>
        <a href="https://wa.me/250794766463">Twandikire kuri WhatsApp</a>
        <Link href="/packages">Reba amapaki yose</Link>
      </div>

      <Faq items={faqRw} heading="Ibibazo bikunze kubazwa" withSchema />
    </main>
  );
}