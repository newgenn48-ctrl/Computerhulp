import Link from 'next/link'
import { getNearbyCities } from '@/lib/cities'
import { Icon } from '@/components/icons'

interface NearbyCitiesProps {
  currentCity: string
  pageType: 'student-aan-huis' | 'computerhulp-aan-huis'
}

export default function NearbyCities({ currentCity, pageType }: NearbyCitiesProps) {
  const nearbyCities = getNearbyCities(currentCity, 5)

  if (nearbyCities.length === 0) {
    return null
  }

  const titleText = pageType === 'student-aan-huis'
    ? 'Student aan Huis in omliggende steden'
    : 'Computerhulp aan Huis in omliggende steden'

  const parentLink = pageType === 'student-aan-huis'
    ? { url: '/student-aan-huis', text: 'Bekijk alle steden in Zuid-Holland' }
    : { url: '/computerhulp-aan-huis', text: 'Bekijk alle steden in Zuid-Holland' }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {titleText}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {nearbyCities.map(city => (
            <Link
              key={city.slug}
              href={`/${pageType}-${city.slug}`}
              className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all group"
            >
              <Icon name="location-pin" className="w-5 h-5 text-blue-600 flex-shrink-0" strokeWidth={2} />
              <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                {city.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href={parentLink.url}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            {parentLink.text}
            <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
