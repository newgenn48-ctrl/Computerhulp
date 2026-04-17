import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS, PRICING } from '@/lib/constants'

const TOP_CITIES = [
  { name: 'Den Haag', slug: 'den-haag' },
  { name: 'Rotterdam', slug: 'rotterdam' },
  { name: 'Leiden', slug: 'leiden' },
  { name: 'Delft', slug: 'delft' },
  { name: 'Zoetermeer', slug: 'zoetermeer' },
  { name: 'Dordrecht', slug: 'dordrecht' },
  { name: 'Gouda', slug: 'gouda' },
  { name: 'Alphen aan den Rijn', slug: 'alphen-aan-den-rijn' },
  { name: 'Westland', slug: 'westland' },
  { name: 'Schiedam', slug: 'schiedam' },
  { name: 'Vlaardingen', slug: 'vlaardingen' },
  { name: 'Capelle aan den IJssel', slug: 'capelle-aan-den-ijssel' },
]

interface AvailableInCitiesProps {
  /** Omschrijf de dienst (bijv. "WiFi-hulp", "computerhulp") — gebruikt in titel */
  serviceLabel?: string
  /** URL-prefix voor de city-links. 'computerhulp-aan-huis' of 'student-aan-huis'. */
  pagePrefix?: 'computerhulp-aan-huis' | 'student-aan-huis'
}

export default function AvailableInCities({
  serviceLabel = 'Computerhulp',
  pagePrefix = 'computerhulp-aan-huis',
}: AvailableInCitiesProps) {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="available-in-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-10">
          <h2 id="available-in-heading" className="section-title">
            {serviceLabel} in uw regio
          </h2>
          <p className="section-subtitle">
            Actief in 50+ gemeenten in {BUSINESS.REGION} — voorrijden {PRICING.TRAVEL}
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {TOP_CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/${pagePrefix}-${city.slug}`}
              className="flex items-center gap-2 bg-white rounded-xl p-3 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <Icon name="location-pin" className="w-4 h-4 text-blue-600 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
              <span className="font-medium text-sm text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                {city.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/locaties" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
            Bekijk alle 50+ locaties
            <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
