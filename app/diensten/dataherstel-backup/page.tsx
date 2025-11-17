import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dataherstel & Backup aan Huis | Computerhulp ZH',
  description: 'Belangrijke bestanden kwijt? Computer crash? We redden uw foto\'s en documenten en maken automatische backups. Binnen 24 uur bij u thuis in Zuid-Holland. Bel 06-42548451.',
  keywords: [
    'dataherstel',
    'data recovery',
    'backup maken',
    'bestanden terughalen',
    'foto\'s redden',
    'data verloren',
    'harde schijf kapot',
    'backup specialist zuid-holland'
  ],
  openGraph: {
    title: 'Dataherstel & Backup aan Huis | Computerhulp Zuid-Holland',
    description: 'Belangrijke bestanden kwijt? We redden uw foto\'s en maken automatische backups. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/dataherstel-backup',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/dataherstel-backup',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Dataherstel & Backup',
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
  description: 'Professionele dataherstel en backup service aan huis. Verloren bestanden terughalen, foto\'s redden en automatische backups instellen. We komen bij u thuis in Zuid-Holland.',
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
      name: 'Dataherstel & Backup',
      item: 'https://computerhulpzh.nl/diensten/dataherstel-backup'
    }
  ]
}

export default function DataherstelBackupPage() {
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
              <span className="text-4xl">💾</span>
              <span className="text-sm font-medium text-blue-100">
                Dataherstel Specialist
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
              Dataherstel & Backup<br/>
              Direct Bij U Thuis Opgelost
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              Belangrijke bestanden kwijt, foto&apos;s verloren of computer crash? We redden uw waardevolle data en zorgen dat u nooit meer iets kwijtraakt met automatische backups. Binnen 24 uur geholpen.
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

      {/* What we do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hoe We Uw Data Redden en Beschermen
            </h2>
            <p className="text-lg text-gray-600">
              Van dataherstel tot automatische backup oplossingen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Verloren Bestanden Terughalen',
                description: 'Per ongeluk verwijderd? We kunnen veel data nog terughalen'
              },
              {
                icon: '📸',
                title: 'Foto&apos;s en Video&apos;s Redden',
                description: 'Onvervangbare herinneringen veilig terughalen van defecte apparaten'
              },
              {
                icon: '💼',
                title: 'Documenten Recovery',
                description: 'Belangrijke Word, Excel en andere documenten terughalen'
              },
              {
                icon: '☁️',
                title: 'Cloud Backup Instellen',
                description: 'Automatische backup naar OneDrive, Google Drive of Dropbox'
              },
              {
                icon: '🖥️',
                title: 'Lokale Backup Maken',
                description: 'Externe schijf of NAS instellen voor automatische backup'
              },
              {
                icon: '🔄',
                title: 'Data Overzetten',
                description: 'Alles veilig overzetten van oude naar nieuwe computer'
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

      {/* Why backup important */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Waarom Een Backup Zo Belangrijk Is
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Computer Crash</h3>
                  <p className="text-gray-600">Harde schijven kunnen onverwacht kapot gaan. Zonder backup is alles weg.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🦠</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Virus of Ransomware</h3>
                  <p className="text-gray-600">Virussen kunnen al uw bestanden versleutelen. Met een backup bent u veilig.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🗑️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Per Ongeluk Verwijderd</h3>
                  <p className="text-gray-600">Snel op delete geklikt? Met automatische backup is niets definitief weg.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Onze Oplossing</h3>
                  <p className="text-gray-600">Wij zorgen voor automatische backup die altijd op de achtergrond werkt. Zonder omkijken.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
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
                  'Data terughalen waar mogelijk',
                  'Backup direct werkend en automatisch',
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
            Data Kwijt of Backup Nodig?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            We helpen u direct. Bel nu en we komen vandaag of morgen al langs!
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
