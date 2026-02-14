import Link from 'next/link'

interface ServiceCrossLinksProps {
  currentService: string
  serviceName: string
}

const allServices = [
  { slug: 'computer-laptop-hulp', name: 'Computer & Laptop Hulp' },
  { slug: 'laptop-computer-reparatie', name: 'Laptop & PC Reparatie' },
  { slug: 'wifi-internet-hulp', name: 'WiFi & Internet Hulp' },
  { slug: 'printer-scanner-hulp', name: 'Printer & Scanner Hulp' },
  { slug: 'email-hulp', name: 'E-mail Hulp' },
  { slug: 'tablet-smartphone-hulp', name: 'Tablet & Smartphone Hulp' },
  { slug: 'televisie-radio', name: 'TV & Radio Hulp' },
  { slug: 'smart-home-domotica', name: 'Smart Home & Domotica' },
  { slug: 'dataherstel-backup', name: 'Dataherstel & Backup' },
  { slug: 'persoonlijke-training', name: 'Persoonlijke Training' },
]

const topCities = [
  { slug: 'den-haag', name: 'Den Haag' },
  { slug: 'rotterdam', name: 'Rotterdam' },
  { slug: 'leiden', name: 'Leiden' },
  { slug: 'delft', name: 'Delft' },
  { slug: 'zoetermeer', name: 'Zoetermeer' },
  { slug: 'dordrecht', name: 'Dordrecht' },
  { slug: 'gouda', name: 'Gouda' },
  { slug: 'alphen-aan-den-rijn', name: 'Alphen aan den Rijn' },
]

const relatedServicesMap: Record<string, string[]> = {
  'computer-laptop-hulp': ['laptop-computer-reparatie', 'dataherstel-backup', 'wifi-internet-hulp', 'email-hulp', 'persoonlijke-training'],
  'laptop-computer-reparatie': ['computer-laptop-hulp', 'dataherstel-backup', 'wifi-internet-hulp', 'tablet-smartphone-hulp', 'persoonlijke-training'],
  'wifi-internet-hulp': ['smart-home-domotica', 'printer-scanner-hulp', 'televisie-radio', 'computer-laptop-hulp', 'tablet-smartphone-hulp'],
  'printer-scanner-hulp': ['computer-laptop-hulp', 'wifi-internet-hulp', 'email-hulp', 'laptop-computer-reparatie', 'persoonlijke-training'],
  'email-hulp': ['computer-laptop-hulp', 'tablet-smartphone-hulp', 'wifi-internet-hulp', 'persoonlijke-training', 'printer-scanner-hulp'],
  'tablet-smartphone-hulp': ['email-hulp', 'wifi-internet-hulp', 'persoonlijke-training', 'smart-home-domotica', 'computer-laptop-hulp'],
  'televisie-radio': ['smart-home-domotica', 'wifi-internet-hulp', 'tablet-smartphone-hulp', 'computer-laptop-hulp', 'persoonlijke-training'],
  'smart-home-domotica': ['wifi-internet-hulp', 'televisie-radio', 'tablet-smartphone-hulp', 'computer-laptop-hulp', 'persoonlijke-training'],
  'dataherstel-backup': ['computer-laptop-hulp', 'laptop-computer-reparatie', 'email-hulp', 'tablet-smartphone-hulp', 'persoonlijke-training'],
  'persoonlijke-training': ['computer-laptop-hulp', 'tablet-smartphone-hulp', 'email-hulp', 'wifi-internet-hulp', 'smart-home-domotica'],
}

export default function ServiceCrossLinks({ currentService, serviceName }: ServiceCrossLinksProps) {
  const related = relatedServicesMap[currentService] || []
  const relatedServices = related
    .map(slug => allServices.find(s => s.slug === slug))
    .filter((s): s is (typeof allServices)[number] => Boolean(s))

  return (
    <>
      {/* Werkgebied links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {serviceName} in uw regio
          </h2>
          <p className="text-gray-600 mb-8">
            Wij komen bij u thuis in heel Zuid-Holland, onder andere in:
          </p>
          <div className="flex flex-wrap gap-3">
            {topCities.map(city => (
              <Link
                key={city.slug}
                href={`/computerhulp-aan-huis-${city.slug}`}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                {city.name}
              </Link>
            ))}
            <Link
              href="/computerhulp-aan-huis"
              className="bg-blue-50 px-4 py-2 rounded-full text-sm font-medium text-blue-600 border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              Alle 50+ locaties →
            </Link>
          </div>
        </div>
      </section>

      {/* Gerelateerde diensten */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Andere diensten
          </h2>
          <p className="text-gray-600 mb-8">
            Naast {serviceName.toLowerCase()} helpen wij u ook met:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedServices.map(service => (
              <Link
                key={service.slug}
                href={`/diensten/${service.slug}`}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
