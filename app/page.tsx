import Image from "next/image";
import styles from "./page.module.css";

import landingPage from "/public/images/landing-page-001.jpg";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className="img-fluid"
          src={landingPage}
          width={1200}
          alt="logo"
          priority
        />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
