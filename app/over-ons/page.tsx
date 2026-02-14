import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Over Ons - Uw IT Specialist aan Huis in Zuid-Holland',
  description: 'Maak kennis met Computerhulp Zuid-Holland. Meer dan 10 jaar ervaring in computerhulp aan huis. Persoonlijk, eerlijk en vakkundig. Bel 085-8002006.',
  keywords: 'over ons, computerhulp zuid-holland, wie zijn wij, ons verhaal, betrouwbare computerhulp, IT specialist, ervaren computerhulp, Zuid-Holland',
  openGraph: {
    title: 'Over Ons | Computerhulp Zuid-Holland',
    description: 'Maak kennis met Computerhulp Zuid-Holland. Meer dan 10 jaar ervaring, 500+ tevreden klanten.',
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
  description: 'Professionele computerhulp aan huis in heel Zuid-Holland. Meer dan 10 jaar ervaring, 500+ tevreden klanten.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Zuid-Holland',
    addressCountry: 'NL'
  },
  telephone: '+31858002006',
  email: 'info@computerhulpzh.nl',
  foundingDate: '2013',
  areaServed: {
    '@type': 'State',
    name: 'Zuid-Holland'
  }
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Over Ons', item: 'https://computerhulpzh.nl/over-ons' }
  ]
}

export default function OverOnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Student aan huis.webp"
            alt="Computerhulp specialist helpt klant thuis"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-white/80 md:hidden" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white via-white/85 to-transparent" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-white/40 via-transparent to-white/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 min-h-[70vh] flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Over <span className="text-blue-600">Ons</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Al meer dan <strong className="text-gray-900">10 jaar</strong> uw betrouwbare partner voor computerhulp aan huis in <strong className="text-gray-900">Zuid-Holland</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: '🤝', label: 'Betrouwbaar' },
                { icon: '💯', label: 'Eerlijk & Transparant' },
                { icon: '🛡️', label: 'KvK Geregistreerd' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium text-gray-700 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ons Verhaal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ons Verhaal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Van een kleine start tot dé specialist in computerhulp aan huis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Het begon simpel: vrienden en familie vroegen regelmatig om hulp met hun computer, printer of WiFi. Veel mensen liepen vast bij technische problemen en wisten niet waar ze naartoe konden.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dus startten we <strong>Computerhulp Zuid-Holland</strong>. Het concept was eenvoudig: bij mensen thuis komen, in begrijpelijke taal uitleggen wat er aan de hand is, en het probleem ter plekke oplossen. Geen jargon, geen onnodige verkoop.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wat klein begon, groeide uit tot heel Zuid-Holland. Inmiddels hebben we honderden mensen geholpen met alles van een trage laptop tot complexe netwerkinstallaties. Nog steeds met dezelfde aanpak: <strong>persoonlijk en eerlijk</strong>.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Computerhulp aan huis.webp"
                alt="Computerhulp specialist aan het werk bij klant thuis"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Wij */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Waarom Klanten Voor Ons Kiezen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deze waarden staan centraal in alles wat we doen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🤝', title: 'Persoonlijk & Geduldig', desc: 'We nemen de tijd om alles rustig uit te leggen. Geen haast, geen irritatie als iets even niet lukt.' },
              { icon: '💎', title: 'Eerlijk & Transparant', desc: 'Vaste prijs van €14,50 per kwartier. Geen verrassingen achteraf. We verkopen niet onnodig extra spullen.' },
              { icon: '⚡', title: 'Snel & Vakkundig', desc: 'Door jarenlange ervaring lossen we problemen snel op. We komen binnen 24 uur bij u langs.' },
              { icon: '🎯', title: 'Alle Leeftijden', desc: 'Of u nu 25 bent of 85, we helpen iedereen. We passen ons tempo en uitleg aan uw niveau aan.' },
              { icon: '🏠', title: 'Bij U Thuis', desc: 'Geen gedoe met uw computer ergens naartoe brengen. We komen bij u thuis, zonder voorrijkosten.' },
              { icon: '✅', title: 'Bewezen Betrouwbaar', desc: 'KvK geregistreerd, verzekerd en al jaren actief. Honderden tevreden klanten gingen u voor.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onze Garanties */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onze Garanties
            </h2>
            <p className="text-lg text-gray-600">
              Dit kunt u van ons verwachten
            </p>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Binnen 24 Uur Reactie', desc: 'We reageren altijd binnen 24 uur op uw aanvraag. In spoedsituaties vaak nog dezelfde dag.' },
              { title: 'Geen Voorrijkosten', desc: 'In heel Zuid-Holland komen we gratis bij u langs. 7 dagen per week, ook in de avond.' },
              { title: 'Eerlijke Prijzen', desc: 'Vaste prijs van €14,50 per kwartier. We geven altijd een eerlijke inschatting vooraf.' },
              { title: 'Privacy & Veiligheid', desc: 'Uw gegevens zijn veilig bij ons. We behandelen uw informatie met de grootst mogelijke zorgvuldigheid.' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                <svg className="w-7 h-7 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Hulp Nodig?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Neem contact op voor persoonlijke computerhulp aan huis. Binnen 24 uur bij u in Zuid-Holland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+31858002006"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-all"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel Direct
            </a>
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full font-bold text-xl border-2 border-blue-400 hover:scale-105 transition-all"
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
