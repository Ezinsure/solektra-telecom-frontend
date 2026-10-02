import JsonLd from "@/components/JsonLd";
import styles from "./faq.module.css";
import { FaqItem } from "@/datas/faq";

type Props = { items: FaqItem[]; heading?: string; withSchema?: boolean };

export default function Faq({ items, heading, withSchema = false }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className={styles.faq}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      {items.map((item) => (
        <details key={item.q} className={styles.item}>
          <summary className={styles.question}>{item.q}</summary>
          <p className={styles.answer}>{item.a}</p>
        </details>
      ))}
      {withSchema && <JsonLd data={schema} />}
    </section>
  );
}