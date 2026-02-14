import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/components/ServicesSection'

export const metadata: Metadata = {
  title: 'Alle Computerhulp Diensten aan Huis in Zuid-Holland',
  description: 'Bekijk al onze computerhulp diensten aan huis: laptop, WiFi, printer, e-mail, smartphone, smart home en meer. Binnen 24u, geen voorrijkosten. Bel 085-8002006.',

  openGraph: {
    title: 'Alle Computerhulp Diensten aan Huis',
    description: 'Computerhulp aan huis in Zuid-Holland. Van laptop reparatie tot smart home installatie. Binnen 24u.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten'},
  robots: {
    index: true,
    follow: true},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten'}}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Computerhulp Diensten aan Huis Zuid-Holland',
  description: 'Overzicht van alle computerhulp diensten aan huis in Zuid-Holland',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: `${service.title} aan huis in Zuid-Holland. Professionele hulp bij u thuis.`,
      url: `https://computerhulpzh.nl${service.slug}`
    }
  }))
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
      name: 'Diensten',
      item: 'https://computerhulpzh.nl/diensten'
    }
  ]
}

// Map services to images
const serviceImages: Record<string, string> = {
  'Computer & Laptop Hulp': '/Computer & Laptop Hulp.webp',
  'Laptop & Computer Reparatie': '/Reparatie.webp',
  'Printer & Randapparatuur': '/Printer & Randapparatuur.webp',
  'E-mail Hulp': '/E-mail Hulp.webp',
  'WiFi & Netwerk Hulp': '/WiFi & Netwerk Hulp.webp',
  'Tablet & Smartphone Hulp': '/Tablet & Smartphone Hulp.webp',
  'Smart Home': '/Smart Home.webp',
  'Dataherstel': '/Data herstel.webp',
  'Persoonlijke Training': '/Student aan huis.webp',
  'Website Laten Maken': '/Computer & Laptop Hulp.webp',
  'Televisie & Radio': '/Student aan huis.webp'}

export default function DienstenPage() {
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

      {/* Premium Hero with Photo Background */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/Student aan huis.webp" alt="Computerhulp diensten aan huis in Zuid-Holland" fill sizes="100vw" className="object-cover" priority />
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-white/80 md:hidden" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-white/30 via-transparent to-white/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24 min-h-screen flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Alle Computerhulp <span className="text-blue-600">Diensten</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Professionele <strong className="text-gray-900 font-semibold">computerhulp aan huis</strong> in heel Zuid-Holland. Van laptop hulp tot smart home installatie - wij lossen het vakkundig op.
            </p>

            {/* USPs */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { label: '10+ Diensten', icon: '🛠️' },
                { label: '7 Dagen', icon: '📅' },
                { label: 'Binnen 24u', icon: '⚡' },
                { label: '€0 Voorrijkosten', icon: '🚗' },
              ].map((usp, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                  <span className="text-lg">{usp.icon}</span>
                  <span className="font-medium text-gray-700 text-sm">{usp.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+31858002006"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>Bel Direct</a>
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all"
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

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onze Computerhulp Diensten
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Selecteer de dienst die u nodig heeft voor meer informatie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={serviceImages[service.title] || '/Computer & Laptop Hulp.webp'}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Meer informatie
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Transparante Prijzen voor Alle Diensten
            </h2>
            <p className="text-lg text-gray-600">
              Dezelfde eerlijke prijs voor al onze computerhulp diensten
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 border-2 border-blue-200 shadow-xl">
            <div className="text-6xl font-bold text-blue-600 mb-2 text-center">€14,50</div>
            <div className="text-2xl text-gray-700 mb-1 text-center">per kwartier</div>
            <div className="text-lg text-gray-600 mb-8 text-center">Minimaal 3 kwartier (€43,50)</div>

            <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Geen voorrijkosten in heel Zuid-Holland',
                  'Alle diensten dezelfde prijs',
                  'Diagnose ter plekke inbegrepen',
                  'Betalen na afloop',
                  'Pin, contant of Tikkie',
                  'Ook avonden en weekenden'
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
              href="tel:+31858002006"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-8 py-4 rounded-xl font-bold text-xl shadow-lg shadow-blue-600/25 hover:scale-105 transition-all"
            >Bel Direct</a>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Computerhulp aan Huis in Zuid-Holland
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Zoekt u betrouwbare <strong>computerhulp aan huis</strong>? Wij bieden een compleet pakket aan IT-diensten voor particulieren en bedrijven in heel Zuid-Holland. Van computer en laptop hulp tot WiFi installatie, van printer problemen tot smart home oplossingen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Onze ervaren technici komen bij u thuis of op kantoor en lossen uw technische problemen ter plekke op. Of het nu gaat om een trage computer, internetproblemen, e-mail instellingen of smartphone hulp - wij helpen u vakkundig en persoonlijk.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Alle diensten voor dezelfde transparante prijs van €14,50 per kwartier, zonder voorrijkosten. Bel <a href="tel:+31858002006" className="text-blue-600 font-semibold">085-8002006</a> en wij komen binnen 24 uur bij u langs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Hulp Nodig met Computer of Techniek?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Bel ons of maak een afspraak - wij helpen u graag met al uw computerproblemen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+31858002006"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-2xl shadow-xl shadow-blue-600/25 hover:scale-105 transition-all"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>Bel Direct</a>
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-blue-600 px-10 py-5 rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition-all border-2 border-blue-200"
            >
              Afspraak Maken
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
