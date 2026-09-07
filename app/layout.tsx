import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import LayoutShell from '@/components/layout/LayoutShell'
import { SvgSprite } from '@/components/icons'
import { BUSINESS, PRICING, OG_IMAGE } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || BUSINESS.URL),
  title: {
    default: `${BUSINESS.NAME} | IT-Problemen Snel Opgelost`,
    template: '%s',
  },
  description: `Problemen met computer, laptop, printer, e-mail of WiFi? Binnen 24 uur geholpen in heel ${BUSINESS.REGION}. Transparant tarief: ${PRICING.PER_QUARTER} per kwartier. Bel ${BUSINESS.PHONE}.`,
  authors: [{ name: BUSINESS.NAME }],
  creator: BUSINESS.NAME,
  publisher: BUSINESS.NAME,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    images: OG_IMAGE,
    type: 'website',
    locale: 'nl_NL',
    url: BUSINESS.URL,
    siteName: BUSINESS.NAME,
    title: `${BUSINESS.NAME} | IT-Problemen Snel Opgelost`,
    description: `Computer, laptop, printer of WiFi problemen? Binnen 24 uur bij u thuis in ${BUSINESS.REGION}.`,
  },
  /* Alleen het kaarttype; titel en beschrijving erven per pagina uit Open Graph. */
  twitter: {
    card: 'summary_large_image',
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
    /* suppressHydrationWarning hoort hier: het inline script hieronder zet
       data-consent op <html> vóór React hydrateert, dus dat attribuut staat
       per definitie wél in de client-DOM en niet in de server-HTML. Zonder
       deze vlag meldt React dat als mismatch. Geldt alleen voor dit element,
       niet voor de rest van de boom. */
    <html lang="nl" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* DNS Prefetch & Preconnect for Performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://www.googleadservices.com" />

        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />

        {/* Consent Mode v2 default — MOET vóór GTM laden. Alles default 'denied',
            CookieConsent component upgradet naar 'granted' bij accept.

            Geen wait_for_update: een eerdere keuze wordt hieronder synchroon
            hersteld, dus er valt niets te wachten. Een wachtvenster zou alleen
            het conversie-event vertragen dat op een tel:-klik afgaat. */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'granted',
              'personalization_storage': 'denied',
              'security_storage': 'granted'
            });
            // Eerdere keuze herstellen vóór GTM evalueert, en vóór de eerste
            // paint markeren op <html> zodat de banner niet flitst bij
            // terugkerende bezoekers.
            try {
              var stored = localStorage.getItem('cookie-consent');
              if (stored) {
                document.documentElement.setAttribute('data-consent', stored);
              }
              if (stored === 'accepted') {
                gtag('consent', 'update', {
                  'ad_storage': 'granted',
                  'ad_user_data': 'granted',
                  'ad_personalization': 'granted',
                  'analytics_storage': 'granted',
                  'personalization_storage': 'granted'
                });
              }
            } catch(e) {}
          `}
        </Script>

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
            // Bel-conversie: meet de klik als beacon en laat de telefoon direct openen.
            // Geen preventDefault en geen wachttijd meer: de klant wacht niet op de meting.
            // Maximaal één telling per bezoek, zodat herhaald tikken niet dubbel telt.
            var chzhCallCounted = false;
            document.addEventListener('click', function(e) {
              var link = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
              if (!link || chzhCallCounted) return;
              chzhCallCounted = true;
              if (typeof gtag === 'function') {
                // Zelfde klik ook als GA4-gebeurtenis (belangrijke gebeurtenis 'tel_click')
                gtag('event', 'tel_click', { 'event_category': 'contact', 'transport_type': 'beacon' });
                gtag('event', 'conversion', {
                  'send_to': 'AW-16733341823/KWVeCKj-u_gbEP-Qiqs-',
                  'value': 1.0,
                  'currency': 'EUR',
                  'transport_type': 'beacon'
                });
              }
            }, true);
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
      <body className="font-sans antialiased">
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
        <SvgSprite />
        <LayoutShell>
          {children}
        </LayoutShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
