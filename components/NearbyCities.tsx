import Link from 'next/link'
import { getNearbyCities } from '@/lib/cities'
import { getRegionOfCity, regionWithArticle } from '@/lib/regions'
import { Icon } from '@/components/icons'

interface NearbyCitiesProps {
  currentCity: string
  cityName: string
  pageType: 'student-aan-huis' | 'computerhulp-aan-huis'
}

export default function NearbyCities({ currentCity, cityName, pageType }: NearbyCitiesProps) {
  const nearbyCities = getNearbyCities(currentCity, 8)
  const region = getRegionOfCity(currentCity)

  if (nearbyCities.length === 0) {
    return null
  }

  const titleText = pageType === 'student-aan-huis'
    ? 'Student aan huis in omliggende steden'
    : 'Computerhulp aan huis in omliggende steden'

  const parentLink = pageType === 'student-aan-huis'
    ? { url: '/student-aan-huis', text: 'Bekijk alle steden in Zuid-Holland' }
    : { url: '/computerhulp-aan-huis', text: 'Bekijk alle steden in Zuid-Holland' }

  /* Zusterpagina van dezelfde plaats. Zonder deze link kruisen de twee
     varianten elkaar nergens en blijft de helft van de stadspagina's voor
     Google op grote afstand van de homepage liggen. */
  const siblingType = pageType === 'student-aan-huis' ? 'computerhulp-aan-huis' : 'student-aan-huis'
  const siblingText = pageType === 'student-aan-huis'
    ? `Computerhulp aan huis in ${cityName}`
    : `Student aan huis in ${cityName}`

  return (
    <section className="py-12 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {titleText}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {nearbyCities.map(city => (
            <Link
              key={city.slug}
              href={`/${pageType}-${city.slug}`}
              className="group nearby-city-link"
            >
              <Icon name="location-pin" className="w-5 h-5 text-blue-600 flex-shrink-0" strokeWidth={2} />
              <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                {city.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-center">
          <Link
            href={`/${siblingType}-${currentCity}`}
            className="inline-flex items-center gap-2 min-h-[44px] text-blue-600 hover:text-blue-700 font-semibold"
          >
            {siblingText}
            <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
          </Link>
          {region && (
            <Link
              href={`/regio/${region.slug}`}
              className="inline-flex items-center gap-2 min-h-[44px] text-blue-600 hover:text-blue-700 font-semibold"
            >
              Alle plaatsen in {regionWithArticle(region.name)}
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
            </Link>
          )}
          <Link
            href={parentLink.url}
            className="inline-flex items-center gap-2 min-h-[44px] text-blue-600 hover:text-blue-700 font-semibold"
          >
            {parentLink.text}
            <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
