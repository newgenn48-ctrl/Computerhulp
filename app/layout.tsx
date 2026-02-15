import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import LayoutShell from '@/components/layout/LayoutShell'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://computerhulpzh.nl'),
  title: {
    default: 'Computerhulp Zuid-Holland | IT-Problemen Snel Opgelost',
    template: '%s'
  },
  description: 'Problemen met computer, laptop, printer, e-mail of WiFi? Binnen 24 uur geholpen in heel Zuid-Holland. Transparant tarief: €14,50 per kwartier. Bel 085-8002006.',
  authors: [{ name: 'Computerhulp Zuid-Holland' }],
  creator: 'Computerhulp Zuid-Holland',
  publisher: 'Computerhulp Zuid-Holland',
  formatDetection: {
    email: true,
    address: true,
    telephone: true},
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://computerhulpzh.nl',
    siteName: 'Computerhulp Zuid-Holland',
    title: 'Computerhulp Zuid-Holland | IT-Problemen Snel Opgelost',
    description: 'Computer, laptop, printer of WiFi problemen? Binnen 24 uur bij u thuis in Zuid-Holland.',
    images: [
      {
        url: '/Computerhulp Zuid Holland Logo.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp Zuid-Holland - IT-Hulp aan Huis'},
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp Zuid-Holland | IT-Problemen Snel Opgelost',
    description: 'Binnen 24 uur computerhulp aan huis in Zuid-Holland. Vanaf €43,50, gratis voorrijkosten. Bel 085-8002006.',
    images: ['/Computerhulp Zuid Holland Logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1}},
  other: {
    'theme-color': '#2563eb',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ]}}

export default function RootLayout({
  children}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const gtmId = 'GTM-WBZ74G2V'

  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        {/* DNS Prefetch & Preconnect for Performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://www.googleadservices.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>

        {/* Google Ads Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16733341823"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16733341823');
          `}
        </Script>

        {/* Google Ads Click-to-Call Conversions */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callbackFired = false;
              var callback = function () {
                if (!callbackFired) {
                  callbackFired = true;
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-16733341823/KWVeCKj-u_gbEP-Qiqs-',
                'value': 1.0,
                'currency': 'EUR',
                'event_callback': callback
              });
              setTimeout(callback, 1000);
              return false;
            }

            // Auto-track all phone link clicks
            document.addEventListener('click', function(e) {
              var link = e.target.closest('a[href^="tel:"]');
              if (link) {
                e.preventDefault();
                gtag_report_conversion(link.href);
              }
            });
          `}
        </Script>


        {/* Google Analytics Tag */}
        {gaId && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              gtag('config', '${gaId}');
            `}
          </Script>
        )}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <LayoutShell>
          {children}
        </LayoutShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
