import styles from "@/styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <img src="/logo.png" alt="Grapn PreQL" className={styles.image} />
        <Link className={styles.link} href="/api/graphql">
          GraphPreQLを試す
        </Link>
        <img src="/graph-preql.gif" alt="Demo" className={`${styles.image} ${styles.demo}`} />
      </main>
    </>
  );
}
