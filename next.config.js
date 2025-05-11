/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin')
const { locales, defaultLocale } = require('./i18n')

const nextConfig = {
  i18n: {
    localeDetection: false,
    locales: ['en', 'ru'],

    defaultLocale: 'en',
  },
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-asia.bobo.tj",
      },
    ],
  },
};


module.exports = nextTranslate(nextConfig)