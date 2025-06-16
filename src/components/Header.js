"use client"; // For onClick event handlers
import Image from "next/image";
import Link from "next/link";
import styles from "../app/styles/Header.module.css";
import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa"; // Example arrow icon

export default function Header() {
  const [showArrow, setShowArrow] = useState(true);

  const scrollToFooter = () => {
    const footerElement = document.getElementById("site-footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
      setShowArrow(false); // Hide arrow after click
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowArrow(true); // Show arrow if scrolled to top
      } else {
        setShowArrow(false); // Hide arrow if not at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Image
        src="/restaurant-background.jpg" // Arka plan resmi
        alt="Restoranın içinden bir görünüm"
        layout="fill"
        objectFit="cover"
        quality={85}
        priority // Önemli resimler için
        className={styles.backgroundImage}
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Lezzet Durağı</h1>
        <p className={styles.slogan}>
          Damaklarda İz Bırakan Tatlar, Unutulmaz Anlar...
        </p>
        <Link href="/menu" className={styles.ctaButton}>
          Menüye Göz At
        </Link>
      </div>
      {showArrow && (
        <div
          className={styles.scrollDownArrow}
          onClick={scrollToFooter}
          title="Aşağı Kaydır">
          <FaArrowDown size={30} />
        </div>
      )}
    </header>
  );
}
