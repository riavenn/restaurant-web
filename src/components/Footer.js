import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import styles from "../app/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Hakkımızda Kısa Bilgi */}
        <div className={styles.footerSection}>
          <h3>Lezzet Durağı</h3>
          <p>
            Şehrin kalbinde, unutulmaz lezzetler ve samimi bir atmosfer
            sunuyoruz. Misafirlerimize en taze malzemelerle özenle hazırlanmış,
            damak çatlatan yemeklerimizi sunmaktan büyük keyif alıyoruz.
          </p>
        </div>

        {/* Hızlı Linkler */}
        <div className={styles.footerSection}>
          <h3>Hızlı Erişim</h3>
          <ul>
            <li>
              <Link href="/about">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/menu">Menümüz</Link>
            </li>
            <li>
              <Link href="/contact">İletişim</Link>
            </li>
            <li>
              <Link href="/order">Sipariş Ver</Link>
            </li>
          </ul>
        </div>

        {/* İletişim ve Sosyal Medya */}
        <div className={styles.footerSection}>
          <h3>Bize Ulaşın</h3>
          <div className={styles.contactInfoItem}>
            <FaMapMarkerAlt />
            <p>Örnek Mah. Lezzet Cad. No:123, Gurmeşehir</p>
          </div>
          <div className={styles.contactInfoItem}>
            <FaPhoneAlt />
            <p>
              <a href="tel:+901234567890">+90 123 456 78 90</a>
            </p>
          </div>
          <div className={styles.contactInfoItem}>
            <FaEnvelope />
            <p>
              <a href="mailto:info@restoranadiniz.com">
                info@restoranadiniz.com
              </a>
            </p>
          </div>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.socialIcon}>
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialIcon}>
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialIcon}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} Lezzet Durağı. Tüm Hakları Saklıdır.
        </p>
        <p>This website was designed and developed by Mert Saykal.</p>
      </div>
    </footer>
  );
}
