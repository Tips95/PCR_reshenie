/** @type {import('next').NextConfig} */
const nextConfig = {
  // Статический экспорт для деплоя на Timeweb App Platform (только статика)
  output: 'export',

  // Изображения: при static export серверная оптимизация недоступна
  images: {
    unoptimized: true,
  },
  
  // Оптимизация сборки
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  
  compress: true,
  swcMinify: true,
}

module.exports = nextConfig 