import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tablet & Smartphone Hulp | Computerhulp ZH',
  description: 'Tablet instellen, WhatsApp hulp of foto\'s overzetten? We komen bij u thuis in Zuid-Holland en helpen met uw tablet en smartphone. iPhone, Android, alles werkend. Bel 06-42548451.',
  keywords: [
    'tablet hulp',
    'smartphone hulp',
    'iphone setup',
    'android instellen',
    'whatsapp hulp',
    'tablet aan huis',
    'foto\'s overzetten',
    'tablet hulp zuid-holland'
  ],
  openGraph: {
    title: 'Tablet & Smartphone Hulp aan Huis | Computerhulp Zuid-Holland',
    description: 'Tablet instellen of WhatsApp hulp nodig? We komen bij u thuis. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/tablet-smartphone-hulp',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/tablet-smartphone-hulp',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Tablet & Smartphone Hulp',
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
  description: 'Professionele tablet en smartphone hulp aan huis. Van nieuwe apparaat setup tot WhatsApp installatie en foto\'s overzetten. We komen bij u thuis in Zuid-Holland.',
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
      name: 'Tablet & Smartphone Hulp',
      item: 'https://computerhulpzh.nl/diensten/tablet-smartphone-hulp'
    }
  ]
}

export default function TabletSmartphoneHulpPage() {
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
              <span className="text-4xl">📱</span>
              <span className="text-sm font-medium text-blue-100">
                Tablet & Smartphone Specialist
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
              Tablet & Smartphone Hulp<br/>
              Direct Bij U Thuis Opgelost
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              Tablet instellen, WhatsApp hulp nodig, apps installeren of foto&apos;s overzetten? We komen bij u thuis in Zuid-Holland en helpen met uw tablet en smartphone. Binnen 24 uur geholpen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+31642548451"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Direct: 06-42548451
              </a>
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                Afspraak Maken
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problemen die we oplossen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veelvoorkomende Tablet & Smartphone Problemen
            </h2>
            <p className="text-lg text-gray-600">
              We lossen alle tablet en smartphone problemen op bij u thuis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-500 transition-all">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat we doen */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Wat We Voor U Doen
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Van nieuwe tablet setup tot WhatsApp installatie en foto&apos;s overzetten - wij komen bij u thuis en lossen het op
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">{service.icon}</span>
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wat Kost Tablet & Smartphone Hulp?
            </h2>
            <p className="text-lg text-gray-600">
              Transparante prijzen, geen verborgen kosten
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 border-4 border-blue-500">
            <div className="text-6xl font-bold text-blue-600 mb-2 text-center">€14,50</div>
            <div className="text-2xl text-gray-700 mb-1 text-center">per kwartier</div>
            <div className="text-lg text-gray-600 mb-8 text-center">Minimaal 3 kwartier (€43,50)</div>

            <div className="bg-white rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                {[
                  'Geen voorrijkosten in heel Zuid-Holland',
                  'We komen bij u thuis met alle kennis',
                  'Tablet en smartphone direct werkend',
                  'Alles uitgelegd in begrijpelijke taal',
                  'Betalen na afloop via pin, contant of Tikkie'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="tel:+31642548451"
              className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center px-8 py-4 rounded-xl font-bold text-xl shadow-xl hover:scale-105 transition-all"
            >
              Bel Nu: 06-42548451
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Tablet of Smartphone Probleem?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bel nu en we komen vandaag of morgen al bij u langs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+31642548451"
              className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-2xl shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06-42548451
            </a>
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:scale-105 transition-all border-2 border-white/30"
            >
              Of Plan een Afspraak
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

const problems = [
  {
    icon: '⚙️',
    title: 'Tablet Instellen',
    description: 'Nieuwe tablet uit de doos, moet ingesteld worden, maar weet niet hoe te beginnen.',
    solution: 'We stellen uw tablet volledig in, maken accounts aan, en leggen alles rustig uit.'
  },
  {
    icon: '💬',
    title: 'WhatsApp Hulp',
    description: 'WhatsApp installeren, contacten toevoegen, foto\'s versturen of videobellen lukt niet.',
    solution: 'WhatsApp volledig instellen, gebruik uitleggen, en veelgebruikte functies laten zien.'
  },
  {
    icon: '📲',
    title: 'Apps Installeren',
    description: 'Weet niet hoe apps te downloaden, Play Store of App Store is onduidelijk.',
    solution: 'Apps installeren die u nodig heeft, uitleggen hoe het werkt, en shortcuts maken.'
  },
  {
    icon: '💾',
    title: 'Geheugen Vol',
    description: 'Apparaat geeft aan dat geheugen vol is, kan geen foto\'s meer maken of apps installeren.',
    solution: 'Geheugen opruimen, onnodige bestanden verwijderen, en ruimte vrijmaken voor nieuwe data.'
  },
  {
    icon: '🔗',
    title: 'Koppelen met Computer',
    description: 'Tablet of telefoon koppelen aan computer, bestanden overzetten lukt niet.',
    solution: 'Apparaten correct koppelen, bestandsoverdracht instellen, en synchronisatie werkend maken.'
  },
  {
    icon: '📸',
    title: 'Foto\'s Overzetten',
    description: 'Foto\'s van telefoon naar computer, of van oude naar nieuwe telefoon overzetten.',
    solution: 'Al uw foto\'s veilig overzetten, backup maken, en toegankelijk maken op alle apparaten.'
  }
]

const services = [
  {
    icon: '🎁',
    title: 'Nieuwe Apparaat Setup',
    items: [
      'iPad, Samsung tablet of andere tablet instellen',
      'iPhone of Android smartphone configureren',
      'Google of Apple account aanmaken',
      'WiFi, Bluetooth en alle instellingen',
      'Direct klaar voor gebruik na setup'
    ]
  },
  {
    icon: '📱',
    title: 'App Installatie',
    items: [
      'WhatsApp, Facebook, Instagram installeren',
      'Banking apps veilig instellen',
      'Email apps configureren',
      'Nuttige apps voor senioren',
      'App gebruik en bediening uitleggen'
    ]
  },
  {
    icon: '🔄',
    title: 'Data Overzetten',
    items: [
      'Contacten overzetten naar nieuwe apparaat',
      'Foto\'s en video\'s veilig migreren',
      'WhatsApp chats behouden',
      'Apps en instellingen kopiëren',
      'Oude telefoon data naar nieuwe'
    ]
  },
  {
    icon: '🧹',
    title: 'Geheugen Opruimen',
    items: [
      'Onnodige bestanden verwijderen',
      'Cache en tijdelijke data opschonen',
      'Apps die u niet gebruikt verwijderen',
      'Foto\'s naar cloud of computer',
      'Apparaat weer snel en ruimte vrij'
    ]
  }
]
