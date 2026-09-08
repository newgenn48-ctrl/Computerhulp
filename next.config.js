/** @type {import('next').NextConfig} */
// Dorpspagina's zijn samengevoegd in hun gemeentepagina; oude URL's sturen permanent door.
const villageRedirects = require('./lib/village-redirects.json')

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      // Eén host: www → hoofddomein (308), zodat Ads, analytics en canonicals dezelfde URL zien
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.computerhulpzh.nl' }],
        destination: 'https://computerhulpzh.nl/:path*',
        permanent: true,
      },
      // Oude WordPress-URL's die nog in Google staan (Search Console toont er nog vertoningen op):
      // permanent doorsturen zodat linkwaarde en bezoekers niet op een 404 landen
      // Oude blogposts (/index.php/2025/08/07/hello-world/) hebben geen tegenhanger: naar de homepage
      { source: '/index.php/:year(\\d{4})/:path*', destination: '/', permanent: true },
      { source: '/index.php/:path*', destination: '/:path*', permanent: true },
      { source: '/hello-world', destination: '/', permanent: true },
      { source: '/category/:path*', destination: '/', permanent: true },
      { source: '/computerhulp-aan-huis-in-den-haag', destination: '/computerhulp-aan-huis-den-haag', permanent: true },
      { source: '/wp-content/uploads/2024/10/Algemene-voorwaarden.pdf', destination: '/voorwaarden', permanent: true },
      { source: '/wp-content/uploads/2024/10/Privacyverklaring-AVG.pdf', destination: '/privacy', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      // Dienstpagina's die in september 2026 zijn samengevoegd tot één sterke pagina per onderwerp
      { source: '/diensten/pc-hulp-aan-huis', destination: '/diensten/computer-laptop-hulp', permanent: true },
      { source: '/diensten/hulp-bij-computerproblemen', destination: '/diensten/computer-laptop-hulp', permanent: true },
      { source: '/diensten/laptop-computer-reparatie', destination: '/diensten/computer-laptop-hulp', permanent: true },
      { source: '/diensten/monteur-aan-huis', destination: '/diensten/computer-laptop-hulp', permanent: true },
      { source: '/diensten/tablet-smartphone-hulp', destination: '/diensten/smartphone-hulp-aan-huis', permanent: true },
      { source: '/diensten/televisie-radio', destination: '/diensten/tv-installatie', permanent: true },
      { source: '/diensten/persoonlijke-training', destination: '/diensten/computercursus-ouderen', permanent: true },
      ...villageRedirects,
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [65, 75],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['@/components'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Link',
            value: '<https://www.googletagmanager.com>; rel=preconnect; crossorigin'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.gstatic.com https://*.googletagmanager.com https://*.google-analytics.com https://*.doubleclick.net",
              "script-src-elem 'self' 'unsafe-inline' https://*.google.com https://*.gstatic.com https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://*.doubleclick.net https://*.googlesyndication.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: https://*.google.com https://*.google-analytics.com https://*.googletagmanager.com https://*.googleadservices.com https://*.gstatic.com https://*.ggpht.com https://*.googleapis.com https://*.doubleclick.net",
              // googlesyndication en google.nl: daar stuurt de Ads-tag zijn cookieloze metingen naartoe
              // (consent mode); zonder deze regel blokkeert de browser die pings en telt Google Ads te weinig.
              "connect-src 'self' https://*.google.com https://*.google.nl https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.doubleclick.net https://*.googleadservices.com https://*.googlesyndication.com",
              "frame-src 'self' https://*.google.com https://*.doubleclick.net https://*.googletagmanager.com https://*.googlesyndication.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ]
      },
      // Cache static assets aggressively
      {
        source: '/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|avif)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*)\\.(woff|woff2|eot|ttf|otf)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/(.*)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
