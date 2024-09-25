import Image from "next/image";
import styles from "./page.module.css";

import landingPage from "/public/images/landing-page-001.jpg";
import mobileLandingPage from "/public/images/mobile-landing-page-001.jpg";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.landing_page_img}>
          <Image
            className="img-fluid d-none d-md-block"
            src={landingPage}
            width={1200}
            alt="logo"
            priority
          />
          <Image
            className="img-fluid d-block d-md-none"
            src={mobileLandingPage}
            width={1200}
            alt="logo"
            priority
          />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
