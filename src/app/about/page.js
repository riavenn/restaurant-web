// src/app/about/page.js
import Image from "next/image";
import styles from "../styles/AboutPage.module.css";
import { FaStar, FaRegSmile, FaFire, FaLightbulb } from 'react-icons/fa'; // Icons for values

export default function AboutPage() {
  const coreValues = [
    { name: "Kalite", Icon: FaStar, description: "Her zaman en taze ve en iyi malzemeleri kullanırız." },
    { name: "Misafirperverlik", Icon: FaRegSmile, description: "Her misafirimizi evimizde ağırlar gibi karşılarız." },
    { name: "Tutku", Icon: FaFire, description: "Yaptığımız işe ve sunduğumuz lezzetlere tutkuyla bağlıyız." },
    { name: "Yenilikçilik", Icon: FaLightbulb, description: "Sürekli olarak kendimizi ve menümüzü geliştiririz." },
  ];

  return (
    <div className={styles.aboutPage}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Hikayemiz ve Değerlerimiz</h1>
          <p className={styles.pageSubtitle}>
            [Restoran Adınız] olarak, lezzeti sanatla buluşturduğumuz
            mutfağımızda sizleri ağırlamaktan gurur duyuyoruz. Misyonumuz,
            vizyonumuz ve temel değerlerimizle tanışın.
          </p>
        </header>

        {/* Biz Kimiz? Bölümü */}
        <section className={styles.contentGrid}>
          <div className={styles.imageContainer}>
            <Image
              src="/restaurant-interior.jpg"
              alt="Restoran İç Mekanı"
              width={500}
              height={375}
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.textContent}>
            <h2>Biz Kimiz?</h2>
            <p>
              [Restoran Adınız] olarak, misafirlerimize sadece yemek değil,
              unutulmaz bir deneyim sunmayı hedefliyoruz. Yılların verdiği
              tecrübe ve mutfak tutkumuzla, en taze ve kaliteli malzemeleri
              kullanarak eşsiz lezzetler yaratıyoruz. Sıcak ve samimi
              atmosferimizde, sevdiklerinizle keyifli anlar geçirmeniz için
              çalışıyoruz.
            </p>
            <p>
              Mutfak ekibimiz, geleneksel tatları modern dokunuşlarla
              birleştirerek her damak zevkine uygun seçenekler sunar. Misafir
              memnuniyeti bizim için her zaman önceliklidir ve bu doğrultuda
              hizmet kalitemizi sürekli olarak geliştirmekteyiz.
            </p>
          </div>
        </section>

        {/* Misyon & Vizyon Bölümü */}
        <section className={`${styles.contentGrid} ${styles.missionVision}`}>
          <div className={styles.textContent}>
            <h3>Misyonumuz</h3>
            <p>
              En yüksek kalitede yiyecek ve içecekleri, hijyenik bir ortamda,
              güler yüzlü ve profesyonel bir hizmet anlayışıyla sunarak
              misafirlerimizin beklentilerini aşmak ve onlara keyifli bir
              gastronomi deneyimi yaşatmaktır.
            </p>
            <h3>Vizyonumuz</h3>
            <p>
              Bölgemizde ve ulusal çapta tanınan, yenilikçi ve öncü bir restoran
              markası olmak; sürdürülebilir kalite anlayışımızla sektörde örnek
              gösterilen bir kurum haline gelmektir.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/chef-preparing-food.jpg"
              alt="Şef Yemek Hazırlarken"
              width={500}
              height={375}
              className={styles.aboutImage}
            />
          </div>
        </section>

        {/* Değerlerimiz Bölümü Revamped */}
        <section className={styles.valuesSectionRevamped}>
          <h2 className={styles.valuesSectionTitleCentered}>Temel Değerlerimiz</h2>
          <div className={styles.coreValuesContainer}>
            {coreValues.map((value) => (
              <div key={value.name} className={styles.coreValueItem}>
                <div className={styles.coreValueIconContainer}>
                  <value.Icon size={40} />
                </div>
                <h3 className={styles.coreValueName}>{value.name}</h3>
                {/* Optional: Description can be added here if needed, or removed if only icon and name are required */}
                {/* <p className={styles.coreValueDescription}>{value.description}</p> */}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
