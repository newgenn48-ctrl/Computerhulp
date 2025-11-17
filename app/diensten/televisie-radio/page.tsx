import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Televisie & Radio Hulp aan Huis | Computerhulp ZH',
  description: 'TV of radio problemen? Zenders weg, storing, of installatie nodig? We komen bij u thuis in Zuid-Holland en helpen direct. Binnen 24 uur geholpen. Bel 06-42548451.',
  keywords: [
    'tv hulp',
    'televisie installatie',
    'tv zenders instellen',
    'digitale tv hulp',
    'decoder installeren',
    'tv reparatie aan huis',
    'radio hulp',
    'tv specialist zuid-holland'
  ],
  openGraph: {
    title: 'Televisie & Radio Hulp aan Huis | Computerhulp Zuid-Holland',
    description: 'TV of radio problemen? Zenders weg of installatie nodig? We komen bij u thuis. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/televisie-radio',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/televisie-radio',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Televisie & Radio Hulp',
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
  description: 'Professionele televisie en radio hulp aan huis. TV installeren, zenders instellen, decoder programmeren en problemen oplossen. We komen bij u thuis in Zuid-Holland.',
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
      name: 'Televisie & Radio Hulp',
      item: 'https://computerhulpzh.nl/diensten/televisie-radio'
    }
  ]
}

export default function TelevisieRadioPage() {
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
              <span className="text-4xl">📺</span>
              <span className="text-sm font-medium text-blue-100">
                TV & Radio Specialist
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
              Televisie & Radio<br/>
              Direct Bij U Thuis Opgelost
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              TV doet het niet meer, zenders weg, of nieuwe televisie installeren? We komen bij u thuis in Zuid-Holland en zorgen dat alles weer perfect werkt. Binnen 24 uur geholpen.
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

      {/* What we solve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wat We Voor U Oplossen
            </h2>
            <p className="text-lg text-gray-600">
              Van installatie tot reparatie - alle TV en radio problemen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '📺',
                title: 'TV Installatie',
                description: 'Nieuwe televisie aansluiten, ophangen en optimaal instellen'
              },
              {
                icon: '📡',
                title: 'Zenders Instellen',
                description: 'Alle zenders zoeken en in de juiste volgorde zetten'
              },
              {
                icon: '📦',
                title: 'Decoder & Ontvanger',
                description: 'Digitale TV decoder installeren en programmeren'
              },
              {
                icon: '🎮',
                title: 'Remote Programmeren',
                description: 'Afstandsbediening instellen voor TV, decoder en soundbar'
              },
              {
                icon: '🔊',
                title: 'Geluid & Beeld',
                description: 'Geluidsproblemen, geen beeld of verkeerd formaat oplossen'
              },
              {
                icon: '📻',
                title: 'Radio Hulp',
                description: 'DAB+ radio installeren en zenders instellen'
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
                  'TV en decoder direct werkend',
                  'Alle zenders perfect ingesteld',
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
            TV Problemen? We Helpen Direct!
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Bel nu en we komen vandaag of morgen al bij u langs
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
