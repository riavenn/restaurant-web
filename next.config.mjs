/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bu ayar, Next.js'in 'next build' komutu çalıştırıldığında statik HTML, CSS ve JavaScript dosyalarını
  // projenizin 'out' klasörüne çıkarmasını sağlar. GitHub Pages sadece statik dosyaları barındırabilir.
  output: "export",

  // GitHub Pages gibi statik barındırma ortamlarında Next.js'in yerleşik görüntü optimizasyonu çalışmaz.
  // Bu ayar, Next.js'in görüntüleri optimize etmeye çalışmasını engeller,
  // böylece sitenizdeki resimler düzgün şekilde yüklenir.
  images: {
    unoptimized: true,
  },

  // Sitenizin GitHub Pages adresi 'https://riavenn.github.io/restaurant-web/' olduğu için,
  // 'basePath' ve 'assetPrefix' ayarlarını depo adınızla ('restaurant-web') eşleşecek şekilde
  // aşağıdaki gibi etkinleştirmeniz GEREKLİDİR.
  // Bu ayarlar, projenizdeki tüm URL'lerin ve varlıkların doğru şekilde yüklenmesini sağlar.
  basePath: "/restaurant-web",
  assetPrefix: "/restaurant-web/",
};

// Next.js'in .mjs uzantılı yapılandırma dosyalarını okuyabilmesi için
// CommonJS'deki 'module.exports' yerine ES modüllerine uygun 'export default' kullanılır.
export default nextConfig;
