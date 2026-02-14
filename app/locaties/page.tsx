import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cities } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Computerhulp Locaties Zuid-Holland | 50+ Gemeenten | Binnen 24u',
  description: 'Computerhulp aan huis in heel Zuid-Holland. Bekijk alle 50+ gemeenten waar wij actief zijn. Van Den Haag tot Rotterdam, van Leiden tot Dordrecht. Binnen 24 uur bij u thuis.',
  keywords: 'computerhulp locaties, Zuid-Holland gemeenten, IT hulp aan huis, computerhulp werkgebied',
  openGraph: {
    title: 'Computerhulp Locaties Zuid-Holland | 50+ Gemeenten',
    description: 'Computerhulp aan huis in heel Zuid-Holland. Bekijk alle 50+ gemeenten waar wij actief zijn.',
    type: 'website',
    url: 'https://computerhulpzh.nl/locaties'
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://computerhulpzh.nl/locaties'
  }
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Locaties', item: 'https://computerhulpzh.nl/locaties' }
  ]
}

const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://computerhulpzh.nl/#organization',
  name: 'Computerhulp Zuid-Holland',
  description: 'Professionele computerhulp aan huis in meer dan 50 gemeenten in Zuid-Holland',
  url: 'https://computerhulpzh.nl',
  telephone: '+31858002006',
  email: 'info@computerhulpzh.nl',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Zuid-Holland',
    addressCountry: 'NL'
  },
  areaServed: {
    '@type': 'State',
    name: 'Zuid-Holland',
    containsPlace: [
      { '@type': 'City', name: 'Den Haag' },
      { '@type': 'City', name: 'Rotterdam' },
      { '@type': 'City', name: 'Leiden' },
      { '@type': 'City', name: 'Delft' },
      { '@type': 'City', name: 'Zoetermeer' },
      { '@type': 'City', name: 'Dordrecht' },
      { '@type': 'City', name: 'Gouda' },
      { '@type': 'City', name: 'Alphen aan den Rijn' }
    ]
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '22:00'
  },
  priceRange: '€€'
}

// Group cities by first letter
const groupedCities = cities.reduce((acc, city) => {
  const letter = city.name[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(city)
  return acc
}, {} as Record<string, typeof cities>)

const sortedLetters = Object.keys(groupedCities).sort()

// Featured cities (largest/most popular)
const featuredCities = ['den-haag', 'rotterdam', 'leiden', 'delft', 'zoetermeer', 'dordrecht', 'gouda', 'alphen-aan-den-rijn']

export default function LocatiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Computerhulp Zuid Holland Over ons.webp"
            alt="Computerhulp Zuid-Holland locaties"
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
              Onze <span className="text-blue-600">Locaties</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Wij bieden computerhulp aan huis in meer dan <strong className="text-gray-900">50 gemeenten</strong> in <strong className="text-gray-900">Zuid-Holland</strong>. Geen voorrijkosten, binnen 24 uur bij u thuis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all hover:scale-105"
              >
                Afspraak Maken
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+31858002006"
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel 085-8002006
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{cities.length}+</div>
              <div className="text-gray-600">Gemeenten</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24u</div>
              <div className="text-gray-600">Reactietijd</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-gray-600">Voorrijkosten</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Jaar ervaring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Populaire Locaties</h2>
            <p className="text-lg text-gray-600">Onze meest gevraagde werkgebieden</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCities.map(slug => {
              const city = cities.find(c => c.slug === slug)
              if (!city) return null
              return (
                <Link
                  key={slug}
                  href={`/computerhulp-aan-huis-${slug}`}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{city.name}</h3>
                      <p className="text-sm text-gray-500">Computerhulp aan huis</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Cities A-Z */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Alle Locaties A-Z</h2>
            <p className="text-lg text-gray-600">Klik op uw gemeente voor meer informatie</p>
          </div>

          {/* Letter navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sortedLetters.map(letter => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg font-semibold text-gray-700 transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Cities by letter */}
          <div className="space-y-12">
            {sortedLetters.map(letter => (
              <div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">{letter}</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {groupedCities[letter].map(city => (
                    <Link
                      key={city.slug}
                      href={`/computerhulp-aan-huis-${city.slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{city.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Staat uw gemeente er niet bij?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Wij zijn actief in heel Zuid-Holland. Neem contact op en we kijken wat we voor u kunnen betekenen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all"
            >
              Afspraak Maken
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+31858002006"
              className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full font-bold text-xl border-2 border-blue-400 hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
