import styles from "./legal.module.css";

type Props = { title: string; children?: React.ReactNode };

export default function LegalPage({ title, children }: Props) {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.body}>{children}</div>
            <nav className={styles.related} aria-label="Legal pages">
            </nav>
        </main>
    );
}