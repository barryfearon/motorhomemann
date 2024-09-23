import Image from "next/image";
import styles from "./page.module.css";

import landingPage from "/public/images/background-001.jpg";
import vanOne from "/public/images/mhm-van-001.png";
import logo from "/public/images/motorhomemann-logo.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          className="position-absolute d-flex justify-content-center align-items-center"
          style={{ top: "0", right: "0", bottom: "0", left: "0" }}
        >
          <div className="position-absolute">
            <Image
              className="img-fluid"
              width={1200}
              src={landingPage}
              alt="logo"
              priority
            />
          </div>
          <div
            className="position-absolute d-flex flex-column justify-content-center align-items-center"
            style={{ top: "0", right: "0", bottom: "0", left: "0" }}
          >
            <div className="pb-5">
              <Image
                className="img-fluid"
                width={400}
                src={logo}
                alt="logo"
                priority
              />
            </div>
            <div className="pt-5">
              <Image
                width={500}
                className="img-fluid"
                src={vanOne}
                alt="logo"
                priority
              />
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
