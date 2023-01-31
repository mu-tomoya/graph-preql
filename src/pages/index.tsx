import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <img src="/logo.png" alt="Grapn PreQL" className={styles.image} />
        <a
          className={styles.link}
          href="https://graph-preql.vercel.app/api/graphql"
        >
          GraphPreQLを試す
        </a>
        <img
          src="/graph-preql.gif"
          alt="Demo"
          className={`${styles.image} ${styles.demo}`}
        />
      </main>
    </>
  );
}
