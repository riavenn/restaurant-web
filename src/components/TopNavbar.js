import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import styles from "../app/styles/TopNavbar.module.css";

export default function TopNavbar() {
  return (
    <div className={styles.topNavbar}>
      {/* Çalışma Saatleri - Sola Hizalı */}
      <div className={styles.workingHours}>
        <p>Her gün: 09:00 - 23:00</p>
      </div>

      {/* Telefon Bilgisi - Ortada */}
      <div className={styles.contactInfo}>
        <FaPhoneAlt size={16} />
        <a href="tel:+901234567890">+90 123 456 78 90</a>
      </div>

      {/* Sosyal Medya İkonları - Sağa Hizalı */}
      <div className={styles.socialIcons}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook">
          <FaFacebookF size={16} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter">
          <FaTwitter size={16} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram">
          <FaInstagram size={16} />
        </a>
      </div>
    </div>
  );
}
