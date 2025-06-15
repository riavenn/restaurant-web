// src/app/contact/page.js
"use client"; // Form etkileşimi için

import { useState } from "react";

import styles from "../styles/ContactPage.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
    setSubmitError("");
    console.log("Form Data:", formData);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simülasyon
      // throw new Error('Sunucuya ulaşılamadı, lütfen daha sonra tekrar deneyin.'); // Hata testi
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitError(
        error.message ||
          "Mesaj gönderilirken bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyin."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>İletişime Geçin</h1>
          <p className={styles.pageSubtitle}>
            Soru, öneri veya rezervasyonlarınız için bize aşağıdaki formdan veya
            iletişim bilgilerimizden ulaşabilirsiniz.
          </p>
        </header>

        <div className={styles.contentWrapper}>
          {/* İletişim Formu */}
          <div className={styles.contactFormContainer}>
            <h2>Bize Yazın</h2>
            {isSubmitted && (
              <div className={`${styles.alert} ${styles.alertSuccess}`}>
                <p>Mesajınız başarıyla gönderildi!</p>
                <p>En kısa sürede size geri dönüş yapacağız.</p>
              </div>
            )}
            {submitError && (
              <div className={`${styles.alert} ${styles.alertError}`}>
                <p>Gönderim Başarısız!</p>
                <p>{submitError}</p>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Adınız Soyadınız</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">E-posta Adresiniz</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Konu</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Rezervasyon / Öneri / Diğer"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Merhaba, ..."></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}>
                  {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
                </button>
              </div>
            </form>
          </div>
          {/* Harita contentWrapper'ın doğrudan çocuğu olarak kalır */}
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.3289999999997!2d28.978359!3d41.017974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9c8a7b9d1af%3A0x4a4b8e8b8e8b8e8b!2sSultanahmet%20Meydan%C4%B1!5e0!3m2!1str!2str!4v1678886655444!5m2!1str!2str"
              className={styles.mapFrame}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restoran Konumu"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
