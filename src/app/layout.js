// "./globals.css"; // Bu satırın yeri önemli değil, burada kalabilir.
import "./globals.css";

// "use client"; yönergesini buradan kaldırdık!
// Bu dosya artık varsayılan olarak bir sunucu bileşenidir.

import TopNavbar from "@/components/TopNavbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Restoran Adı",
  description: "Harika yemekler ve sıcak bir atmosfer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <TopNavbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
