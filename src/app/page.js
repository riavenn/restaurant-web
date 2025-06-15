import Header from "@/components/Header";
// Link import might be removed if Header handles the menu button link internally
// import styles from './styles/HomePage.module.css'; // Styles might be removed or adjusted if sections are gone

export default function HomePage() {
  return (
    <main>
      {" "}
      {/* className={styles.homePage} might be removed or adjusted */}
      <Header />
      {/* The welcomeSection and futureSection are removed as per requirements. */}
      {/* The "Browse Menu" button and scroll-to-footer arrow will be part of the Header component. */}
    </main>
  );
}
