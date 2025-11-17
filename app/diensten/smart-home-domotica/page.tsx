import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Smart Home & Domotica Hulp | Computerhulp ZH',
  description: 'Slimme apparaten installeren? Philips Hue, Nest, Google Home of Alexa hulp nodig? We komen bij u thuis in Zuid-Holland en koppelen alles. Binnen 24 uur geholpen. Bel 06-42548451.',
  keywords: [
    'smart home hulp',
    'domotica installatie',
    'philips hue installeren',
    'google home hulp',
    'alexa instellen',
    'nest thermostaat',
    'slimme verlichting',
    'smart home specialist zuid-holland'
  ],
  openGraph: {
    title: 'Smart Home & Domotica Hulp aan Huis | Computerhulp Zuid-Holland',
    description: 'Slimme apparaten installeren? Philips Hue, Google Home of Alexa hulp? We komen bij u thuis. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/smart-home-domotica',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/smart-home-domotica',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Smart Home & Domotica Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31642548451',
    email: 'info@computerhulpzh.nl',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Zuid-Holland',
      addressCountry: 'NL'
    }
  },
  areaServed: {
    '@type': 'State',
    name: 'Zuid-Holland'
  },
  offers: {
    '@type': 'Offer',
    price: '14.50',
    priceCurrency: 'EUR'
  },
  description: 'Professionele smart home en domotica hulp aan huis. Slimme apparaten installeren, koppelen en automatiseren. Van Philips Hue tot Google Home. We komen bij u thuis in Zuid-Holland.',
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://computerhulpzh.nl'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Smart Home & Domotica',
      item: 'https://computerhulpzh.nl/diensten/smart-home-domotica'
    }
  ]
}

export default function SmartHomeDomoticaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <span className="text-4xl">🏠</span>
              <span className="text-sm font-medium text-blue-100">
                Smart Home Specialist
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{
                color: 'white',
                background: 'none',
                WebkitTextFillColor: 'white',
                backgroundClip: 'unset',
                WebkitBackgroundClip: 'unset'
              }}
            >
              Smart Home & Domotica<br/>
              Direct Bij U Thuis Opgelost
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              Slimme apparaten koppelen, automatiseren en bedienen met uw stem? We installeren en koppelen alles bij u thuis in Zuid-Holland. Van verlichting tot thermostaat. Binnen 24 uur geholpen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
              >
                Hulp Vragen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+31642548451"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wat We Voor U Installeren
            </h2>
            <p className="text-lg text-gray-600">
              Van slimme verlichting tot complete domotica systemen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '💡',
                title: 'Slimme Verlichting',
                description: 'Philips Hue, IKEA Trådfri en andere slimme lampen installeren en koppelen'
              },
              {
                icon: '🌡️',
                title: 'Slimme Thermostaat',
                description: 'Nest, Tado, Honeywell Evohome installeren en optimaal instellen'
              },
              {
                icon: '🔊',
                title: 'Spraakassistent',
                description: 'Google Home, Amazon Alexa of Apple HomePod koppelen met apparaten'
              },
              {
                icon: '🚪',
                title: 'Slimme Deurbel',
                description: 'Ring, Nest Hello of andere slimme deurbellen installeren'
              },
              {
                icon: '📹',
                title: 'Beveiligingscamera\'s',
                description: 'Binnen- en buitencamera\'s installeren en koppelen met app'
              },
              {
                icon: '⚡',
                title: 'Automatisering',
                description: 'Schema\'s maken, apparaten koppelen en slimme routines instellen'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Wat Kost Het?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Transparante prijzen zonder verrassingen
          </p>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-blue-500">
            <div className="text-6xl font-bold text-blue-600 mb-2 text-center">€14,50</div>
            <div className="text-2xl text-gray-700 mb-1 text-center">per kwartier</div>
            <div className="text-lg text-gray-600 mb-8 text-center">Minimaal 3 kwartier (€43,50)</div>

            <div className="bg-white rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                {[
                  'Geen voorrijkosten in heel Zuid-Holland',
                  'Apparaten direct werkend en gekoppeld',
                  'Uitleg hoe alles werkt',
                  'Betalen na afloop via pin, contant of Tikkie'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-left">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/afspraak-maken"
              className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Hulp Vragen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Klaar Voor Een Slim Huis?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            We installeren en koppelen alles voor u. Bel nu!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-2xl shadow-2xl hover:scale-105 transition-all"
            >
              Hulp Vragen
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+31642548451"
              className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:scale-105 transition-all border-2 border-white/30"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel Direct
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
