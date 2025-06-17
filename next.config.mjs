/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bu ayar, Next.js'in 'next build' komutu çalıştırıldığında statik HTML, CSS ve JavaScript dosyalarını
  // projenizin 'out' klasörüne çıkarmasını sağlar. GitHub Pages sadece statik dosyaları barındırabilir.
  output: "export",

  // 'actions/configure-pages@v5' GitHub Action'ı bu ayarları otomatik olarak yönettiği için
  // 'images' ve 'basePath' / 'assetPrefix' ayarlarını buradan kaldırdık.
  // Bu, çakışmaları önler ve Action'ın otomatik yapılandırmasının sorunsuz çalışmasını sağlar.
  images: {
    unoptimized: true,  
  },
};

// Next.js'in .mjs uzantılı yapılandırma dosyalarını okuyabilmesi için
// CommonJS'deki 'module.exports' yerine ES modüllerine uygun 'export default' kullanılır.
export default nextConfig;
