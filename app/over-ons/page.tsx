import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Over Ons | Computerhulp Zuid-Holland',
  description: 'Meer dan 10 jaar ervaring in computerhulp aan huis. Ontmoet het team achter Computerhulp Zuid-Holland en ontdek waarom duizenden klanten voor ons kiezen.',
  openGraph: {
    title: 'Over Ons | Computerhulp Zuid-Holland',
    description: 'Meer dan 10 jaar ervaring in computerhulp aan huis in Zuid-Holland.',
    type: 'website',
    url: 'https://computerhulpzh.nl/over-ons',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/over-ons',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://computerhulpzh.nl/#organization',
  name: 'Computerhulp Zuid-Holland',
  url: 'https://computerhulpzh.nl',
  logo: {
    '@type': 'ImageObject',
    url: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
    width: '250',
    height: '60'
  },
  image: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Over%20ons.webp',
  description: 'Professionele computerhulp aan huis in heel Zuid-Holland. Meer dan 10 jaar ervaring, 500+ tevreden klanten. Specialist in computer, laptop, printer en WiFi.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Zuid-Holland',
    addressCountry: 'NL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '52.0705',
    longitude: '4.3007'
  },
  telephone: '+31642548451',
  email: 'info@computerhulpzh.nl',
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00'
    }
  ],
  areaServed: [
    {
      '@type': 'State',
      name: 'Zuid-Holland',
      '@id': 'https://www.wikidata.org/wiki/Q694'
    },
    {
      '@type': 'City',
      name: 'Den Haag'
    },
    {
      '@type': 'City',
      name: 'Rotterdam'
    },
    {
      '@type': 'City',
      name: 'Leiden'
    },
    {
      '@type': 'City',
      name: 'Delft'
    },
    {
      '@type': 'City',
      name: 'Zoetermeer'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '847',
    bestRating: '5',
    worstRating: '1'
  },
  foundingDate: '2013',
  slogan: 'IT-Problemen? Snel Opgelost, Aan Huis',
  knowsAbout: [
    'Computer Reparatie',
    'Laptop Hulp',
    'Printer Installatie',
    'WiFi Netwerk Installatie',
    'Email Configuratie',
    'Virus Verwijdering',
    'Data Herstel',
    'Software Installatie',
    'Hardware Reparatie',
    'Netwerk Beveiliging'
  ]
}

export default function OverOnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="pt-24 pb-20">
        {/* Hero met achtergrond */}
        <section className="relative text-white py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/Computerhulp%20Zuid%20Holland%20Over%20ons.webp)',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-slate-900/90"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{
                color: 'white',
                background: 'none',
                WebkitTextFillColor: 'white',
                backgroundClip: 'unset',
                WebkitBackgroundClip: 'unset'
              }}
            >
              Al Meer Dan 10 Jaar<br/>
              Uw IT-Partner
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
              Begonnen als kleine onderneming, nu uitgegroeid tot dé specialist voor computerhulp aan huis in heel Zuid-Holland. Met meer dan 500 tevreden klanten.
            </p>
          </div>
        </div>
      </section>

      {/* Ons Verhaal */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ons Verhaal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van een kleine start tot dé specialist in computerhulp aan huis
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Het Begin</h3>
              <p className="text-gray-700 leading-relaxed">
                Het begon simpel: vrienden en familie vroegen regelmatig om hulp met hun computer, printer of WiFi. Veel mensen liepen vast bij technische problemen en wisten niet waar ze naartoe konden.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Het Idee</h3>
              <p className="text-gray-700 leading-relaxed">
                Dus startte ik Computerhulp Zuid-Holland. Het concept was eenvoudig: bij mensen thuis komen, in begrijpelijke taal uitleggen wat er aan de hand is, en het probleem ter plekke oplossen. Geen jargon, geen onnodige verkoop.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">De Groei</h3>
              <p className="text-gray-700 leading-relaxed">
                Wat klein begon in Den Haag, groeide uit tot heel Zuid-Holland. Inmiddels hebben we duizenden mensen geholpen met alles van een trage laptop tot complexe netwerkinstallaties. Nog steeds met dezelfde aanpak: persoonlijk en eerlijk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Wij */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Waarom Klanten Voor Ons Kiezen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deze waarden staan centraal in alles wat we doen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                🤝
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Persoonlijk & Geduldig
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We nemen de tijd om alles rustig uit te leggen. Geen haast, geen irritatie als iets even niet lukt. We begrijpen dat technologie ingewikkeld kan zijn.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                💎
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Eerlijk & Transparant
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Vaste prijs van €14,50 per kwartier. U weet vooraf wat het kost. We verkopen niet onnodig extra spullen. Als iets niet te repareren is, zeggen we dat eerlijk.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Snel & Vakkundig
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Door jarenlange ervaring lossen we problemen snel op. We komen binnen 24 uur bij u langs. En we blijven net zo lang tot het werkt.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Alle Leeftijden
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Of u nu 25 bent of 85, we helpen iedereen. We passen ons tempo en uitleg aan uw niveau aan. Geen vraag is te simpel.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                🏠
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bij U Thuis
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Geen gedoe met uw computer ergens naartoe brengen. We komen bij u thuis in heel Zuid-Holland. Geen voorrijkosten, ook niet in de avond of weekend.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                ✅
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bewezen Betrouwbaar
              </h3>
              <p className="text-gray-700 leading-relaxed">
                KvK geregistreerd, verzekerd en al jaren actief. Duizenden tevreden klanten gingen u voor. Check onze reviews - we staan voor kwaliteit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onze Garanties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dit kunt u van ons verwachten
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-start gap-4 bg-white rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all">
              <svg className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Binnen 24 Uur Reactie
                </h3>
                <p className="text-gray-700">
                  We reageren altijd binnen 24 uur op uw aanvraag. In spoedsituaties vaak nog dezelfde dag.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all">
              <svg className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Geen Voorrijkosten
                </h3>
                <p className="text-gray-700">
                  In heel Zuid-Holland komen we gratis bij u langs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all">
              <svg className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Eerlijke Prijzen
                </h3>
                <p className="text-gray-700">
                  Vaste prijs van €14,50 per kwartier. Geen verrassingen achteraf. We geven altijd een eerlijke inschatting vooraf.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all">
              <svg className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Privacy & Veiligheid
                </h3>
                <p className="text-gray-700">
                  Uw gegevens zijn veilig bij ons. We behandelen uw persoonlijke informatie met de grootst mogelijke zorgvuldigheid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Klaar Om Geholpen Te Worden?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bel ons direct of maak een afspraak. We staan voor u klaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+31642548451"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06-42548451
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
      </section>
      </div>
    </>
  )
}
