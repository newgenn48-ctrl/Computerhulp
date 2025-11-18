import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Printer & Scanner Hulp aan Huis | Computerhulp ZH',
  description: 'Printer print niet, papier loopt vast of WiFi printer koppelen? We komen bij u thuis in Zuid-Holland en maken uw printer en scanner weer werkend. Binnen 24.',
  openGraph: {
    title: 'Printer & Scanner Hulp aan Huis | Computerhulp Zuid-Holland',
    description: 'Printer print niet of WiFi printer koppelen? We komen bij u thuis. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/printer-scanner-hulp',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/printer-scanner-hulp',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Printer & Scanner Hulp',
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
  description: 'Professionele printer en scanner hulp aan huis. Van WiFi printer koppelen tot cartridge vervangen en scanner configuratie. We komen bij u thuis in Zuid-Holland.',
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
      name: 'Printer & Scanner Hulp',
      item: 'https://computerhulpzh.nl/diensten/printer-scanner-hulp'
    }
  ]
}

export default function PrinterScannerHulpPage() {
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
              <span className="text-4xl">🖨️</span>
              <span className="text-sm font-medium text-blue-100">
                Printer & Scanner Specialist
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
              Printer & Scanner Hulp<br/>
              Direct Bij U Thuis Opgelost
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              Printer print niet, papier loopt vast, WiFi printer koppelen lukt niet of scanner werkt niet? We komen bij u thuis in Zuid-Holland en maken het weer werkend. Binnen 24 uur geholpen.
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
              Veelvoorkomende Printer & Scanner Problemen
            </h2>
            <p className="text-lg text-gray-600">
              We lossen alle printer en scanner problemen op bij u thuis
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
              Van printer installatie tot WiFi setup en cartridge vervangen - wij komen bij u thuis en lossen het op
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
              Wat Kost Printer & Scanner Hulp?
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
                  'Diagnose en oplossing ter plekke',
                  'Printer en scanner direct werkend',
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
            Printer of Scanner Probleem?
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


      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professionele Printer & Scanner Hulp
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Print uw printer niet meer? Scanner doet het niet? Wij helpen u met <strong>printer installatie, reparatie en netwerkinstellingen</strong>. Of het nu gaat om een HP, Canon, Epson, Brother of Samsung printer - onze technici kennen alle merken en modellen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We installeren uw printer op al uw apparaten (Windows, Mac, tablets), verbinden hem met WiFi, lossen papierstoringen op, vervangen cartridges en printheads, en zorgen ervoor dat scannen werkt. Ook voor bedrijven met meerdere printers zijn we uw partner.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Binnen 24 uur bij u thuis of op kantoor. €14,50 per kwartier, geen voorrijkosten. Printer werkt niet? Dan betaalt u niet! Bel direct <a href="tel:+31642548451" className="text-blue-600 font-semibold">06-42548451</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

const problems = [
  {
    icon: '🚫',
    title: 'Printer Print Niet',
    description: 'Opdrachten worden niet afgedrukt, printer reageert niet, of blijft offline staan.',
    solution: 'We controleren verbinding, installeren juiste drivers, en zorgen dat uw printer weer print.'
  },
  {
    icon: '📄',
    title: 'Papier Loopt Vast',
    description: 'Papierstoringen, papier scheurt, of printer trekt geen papier meer.',
    solution: 'We verwijderen vastgelopen papier, reinigen rollen en stellen papierlade correct in.'
  },
  {
    icon: '📶',
    title: 'WiFi Printer Koppelen',
    description: 'Printer via WiFi verbinden lukt niet, verliest verbinding, of wordt niet gevonden.',
    solution: 'WiFi printer volledig instellen, koppelen aan netwerk, en op alle apparaten beschikbaar maken.'
  },
  {
    icon: '🔍',
    title: 'Scanner Werkt Niet',
    description: 'Scannen lukt niet, scanner wordt niet herkend, of scans zijn niet te vinden.',
    solution: 'Scanner software installeren, apparaat configureren, en scanfunctie werkend maken.'
  },
  {
    icon: '🎨',
    title: 'Cartridge Problemen',
    description: 'Inkt wordt niet herkend, cartridges leeg terwijl ze nieuw zijn, of printkop verstopt.',
    solution: 'Cartridges correct installeren, printkop reinigen, en inktprobleempjes oplossen.'
  },
  {
    icon: '⚙️',
    title: 'Drivers Ontbreken',
    description: 'Printer niet geinstalleerd op computer, verkeerde driver, of updates nodig.',
    solution: 'Correcte drivers installeren voor Windows/Mac, updates uitvoeren, en printer volledig instellen.'
  }
]

const services = [
  {
    icon: '🔧',
    title: 'Printer Installatie',
    items: [
      'Nieuwe printer volledig installeren',
      'Oude printer vervangen door nieuwe',
      'Correcte drivers voor Windows/Mac',
      'Printer koppelen aan meerdere computers',
      'Testpagina en kwaliteitscontrole'
    ]
  },
  {
    icon: '📡',
    title: 'WiFi Printer Setup',
    items: [
      'Printer verbinden met WiFi netwerk',
      'WiFi wachtwoord opnieuw instellen',
      'Printer delen met hele gezin',
      'Printen vanaf telefoon/tablet',
      'AirPrint en Google Cloud Print setup'
    ]
  },
  {
    icon: '🖨️',
    title: 'Scanner Configuratie',
    items: [
      'Scanner software installeren',
      'Scan-to-email instellen',
      'Scan-to-folder configureren',
      'Scankwaliteit optimaliseren',
      'Scanner koppelen aan computer'
    ]
  },
  {
    icon: '💡',
    title: 'Cartridge Vervangen',
    items: [
      'Originele cartridges installeren',
      'Alternatieve cartridges advies',
      'Printkop reinigen en onderhoud',
      'Inkt besparen tips',
      'Cartridge niet herkend oplossen'
    ]
  }
]
