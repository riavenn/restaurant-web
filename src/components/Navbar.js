"use client"; // useState kullanıldığı için

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger ve kapatma ikonu
import styles from '../app/styles/Navbar.module.css';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Sayfa değiştiğinde mobil menüyü kapat
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Anasayfa" },
    { href: "/about", label: "Hakkında" },
    { href: "/menu", label: "Menü" },
    { href: "/contact", label: "İletişim" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/logo-placeholder.png"
              alt="Restoran Logosu"
              width={140}
              height={45}
              className={styles.logo}
            />
          </Link>
        </div>

        {/* Desktop Navigasyon Linkleri */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLinkItem} ${pathname === link.href ? styles.active : ''}`}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/order" className={`${styles.navLinkItem} ${styles.orderButton}`}>
              Sipariş Ver
            </Link>
          </li>
        </ul>

        {/* Mobil Menü Butonu */}
        <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu} aria-label="Menüyü aç/kapat">
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      {/* Mobil Menü Açılır Penceresi */}
      <div className={`${styles.mobileNavLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.mobileNavLinkItem} ${pathname === link.href ? styles.active : ''}`}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/order" className={`${styles.mobileNavLinkItem} ${styles.mobileOrderButton}`}>
              Sipariş Ver
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
