/** @type {import('next').NextConfig} */
const nextConfig = {
  // Görüntü optimizasyonu ayarları
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    remotePatterns: [],
    minimumCacheTTL: 60,
  },

  // Webpack konfigürasyonu
  webpack: (config) => {
    // CSS optimizasyonları
    config.optimization.splitChunks.cacheGroups = {
      ...config.optimization.splitChunks.cacheGroups,
      styles: {
        name: "styles",
        test: /\.(css|scss|sass)$/,
        chunks: "all",
        enforce: true,
      },
    };

    return config;
  },

  // Sayfa önbelleğe alma stratejisi
  // Statik sayfalar için ISR (Incremental Static Regeneration)
  experimental: {
    scrollRestoration: true,
  },

  // Gzip sıkıştırması
  compress: true,

  // Canlı performans ölçümleri
  productionBrowserSourceMaps: false,

  // Siteleri daha hızlı yüklemek için ReactStrictMode etkinleştir
  reactStrictMode: true,

  // Performans için büyük sayfaları parçalara böl
  swcMinify: true,
};

module.exports = nextConfig;
