// src/app/menu/page.js
"use client"; // Required for useState
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/MenuPage.module.css";

const menuItemsData = {
  Başlangıçlar: [
    {
      id: 1,
      name: "Mercimek Çorbası",
      description: "Geleneksel lezzet, taze sıkılmış limon ile.",
      price: "25 ₺",
      image: "/menu/mercimek-corbasi.jpg",
    },
    {
      id: 2,
      name: "Sigara Böreği",
      description: "Çıtır çıtır, peynirli iç harcıyla.",
      price: "30 ₺",
      image: "/menu/sigara-boregi.jpg",
    },
  ],
  "Ana Yemekler": [
    {
      id: 3,
      name: "Adana Kebap",
      description: "Acılı, közlenmiş domates ve biber eşliğinde.",
      price: "85 ₺",
      image: "/menu/adana-kebap.jpg",
    },
    {
      id: 4,
      name: "Izgara Somon",
      description: "Taze mevsim yeşillikleri ve limon sosu ile.",
      price: "120 ₺",
      image: "/menu/izgara-somon.jpg",
    },
    {
      id: 5,
      name: "Mantarlı Tavuk Sote",
      description: "Kremalı mantar sosu ve pilav ile.",
      price: "75 ₺",
      image: "/menu/mantarli-tavuk.jpg",
    },
  ],
  Tatlılar: [
    {
      id: 6,
      name: "Sütlaç",
      description: "Fırınlanmış, tarçınlı geleneksel sütlaç.",
      price: "35 ₺",
      image: "/menu/sutlac.jpg",
    },
    {
      id: 7,
      name: "Künefe",
      description: "Sıcak, şerbetli ve peynirli.",
      price: "45 ₺",
      image: "/menu/kunefe.jpg",
    },
  ],
  İçecekler: [
    {
      id: 8,
      name: "Ayran",
      description: "Ev yapımı, serinletici.",
      price: "15 ₺",
      image: "/menu/ayran.jpg",
    },
    {
      id: 9,
      name: "Türk Kahvesi",
      description: "Bol köpüklü, geleneksel.",
      price: "20 ₺",
      image: "/menu/turk-kahvesi.jpg",
    },
  ],
};

const MenuCard = ({ item }) => (
  <div className={styles.menuCard}>
    <div className={styles.cardImageContainer}>
      <Image
        src={item.image || "/menu/placeholder-yemek.jpg"}
        alt={item.name}
        layout="fill"
        objectFit="cover"
        className={styles.cardImage}
      />
    </div>
    <div className={styles.cardContent}>
      <h3 className={styles.itemName}>{item.name}</h3>
      <p className={styles.itemDescription}>{item.description}</p>
      <p className={styles.itemPrice}>{item.price}</p>
    </div>
  </div>
);

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("Hepsi");
  const categories = ["Hepsi", ...Object.keys(menuItemsData)];

  const filteredItems =
    selectedCategory === "Hepsi"
      ? Object.values(menuItemsData).flat()
      : menuItemsData[selectedCategory] || [];

  // If a specific category is selected, we display its items under its title.
  // If 'All' is selected, we iterate through all categories and display them.

  return (
    <div className={styles.menuPage}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Lezzet Dolu Menümüz</h1>
          <p className={styles.pageDescription}>
            Özenle seçilmiş malzemelerle, usta şeflerimizin elinden çıkan eşsiz
            tatlarımızı keşfedin. Her bir tabak, bir lezzet şöleni vaat ediyor.
          </p>
        </header>

        {/* Category Filter Buttons */}
        <div className={styles.categoryFilterContainer}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryFilterButton} ${
                selectedCategory === category ? styles.activeCategory : ""
              }`}
              onClick={() => setSelectedCategory(category)}>
              {category}
            </button>
          ))}
        </div>

        {/* Displaying Menu Items based on selection */}
        {selectedCategory === "Hepsi"
          ? Object.entries(menuItemsData).map(([category, items]) => (
              <section key={category} className={styles.categorySection}>
                <div className={styles.categoryTitleContainer}>
                  <span className={styles.categoryTitleLine}></span>
                  <h2 className={styles.categoryTitle}>{category}</h2>
                  <span className={styles.categoryTitleLine}></span>
                </div>
                <div className={styles.menuGrid}>
                  {items.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))
          : menuItemsData[selectedCategory] && (
              <section className={styles.categorySection}>
                <div className={styles.categoryTitleContainer}>
                  <span className={styles.categoryTitleLine}></span>
                  <h2 className={styles.categoryTitle}>{selectedCategory}</h2>
                  <span className={styles.categoryTitleLine}></span>
                </div>
                <div className={styles.menuGrid}>
                  {menuItemsData[selectedCategory].map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            )}
      </div>
    </div>
  );
}
