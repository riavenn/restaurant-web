// src/app/order/page.js
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

import styles from "../styles/OrderPage.module.css";

export default function OrderPage() {
  return (
    <div className={styles.orderPage}>
      <div className="container">
        <header className={styles.pageHeader}>
          <Image
            src="/motorcycle-icon.svg"
            alt="Motorcycle Icon"
            width={80}
            height={80}
            className={styles.platformLogo}
          />
          <h1 className={styles.pageTitle}>Hemen Sipariş Verin!</h1>
          <p className={styles.pageSubtitle}>
            Enfes lezzetlerimizi kapınıza kadar getirelim! Aşağıdaki kolay ve
            hızlı yöntemlerle siparişinizi oluşturabilirsiniz.
          </p>
        </header>

        <div className={styles.platformsContainer}>
          {/* Telefonla Sipariş Kartı */}
          <div className={styles.platformCard}>
            <div className={styles.platformLogoContainer}>
              <Image
                src="/phone-icon.svg"
                alt="Phone Icon"
                width={80}
                height={80}
                style={{ color: "#2ecc71" }}
                className={styles.platformLogo}
              />
              {/* Green color for phone */}
            </div>
            <h2 className={styles.platformName}>Telefonla Sipariş</h2>
            <p className={styles.platformDescription}>
              Hızlı ve pratik bir şekilde sipariş vermek için bizi arayın:
            </p>
            <a href="tel:+901234567890" className={styles.orderButton}>
              +90 123 456 78 90
              <FaExternalLinkAlt size={16} />
            </a>
          </div>

          {/* Yemeksepeti Kartı */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.platformCard}>
            <div className={styles.platformLogoContainer}>
              <Image
                src="/yemeksepeti-logo.svg"
                alt="Yemeksepeti Logosu"
                width={200}
                height={100}
                className={styles.platformLogo}
              />
            </div>
            <h2 className={styles.platformName}>Yemeksepeti</h2>
            <p className={styles.platformDescription}>
              Favori yemek sipariş uygulamanız üzerinden bize ulaşın.
            </p>
            <span className={styles.orderButton}>
              Sipariş Ver
              <FaExternalLinkAlt size={16} />
            </span>
          </a>

          {/* GetirYemek Kartı (Örnek) */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.platformCard}>
            <div className={styles.platformLogoContainer}>
              {/* GetirYemek logosunu public klasörüne eklediğinizi varsayıyorum */}
              <Image
                src="/getiryemek-logo.svg"
                alt="GetirYemek Logosu"
                width={180}
                height={60}
                className={styles.platformLogo}
              />{" "}
              {/* Placeholder if no logo */}
            </div>
            <h2 className={styles.platformName}>GetirYemek</h2>
            <p className={styles.platformDescription}>
              GetirYemek üzerinden kolayca siparişinizi verin.
            </p>
            <span className={styles.orderButton}>
              Sipariş Ver
              <FaExternalLinkAlt size={16} />
            </span>
          </a>
        </div>

        <div className={styles.infoBox}>
          <p>
            Menümüzü henüz incelemediyseniz,{" "}
            <Link href="/menu" className={styles.menuLink}>
              buradan
            </Link>{" "}
            tüm lezzetlerimize göz atabilirsiniz.
          </p>
          <p>
            Paket servisimiz her gün <strong>11:00 - 22:30</strong> saatleri
            arasında hizmetinizdedir.
          </p>
        </div>
      </div>
    </div>
  );
}
