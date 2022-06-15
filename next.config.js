/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de',
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig
