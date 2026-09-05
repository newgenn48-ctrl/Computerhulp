import Link from 'next/link'
import { Icon } from '@/components/icons'

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
  { slug: 'computercursus-ouderen', name: 'Computercursus Ouderen' },
  { slug: 'tv-installatie', name: 'TV Installatie' },
  { slug: 'pc-hulp-aan-huis', name: 'PC Hulp aan Huis' },
  { slug: 'hulp-bij-computerproblemen', name: 'Hulp bij Computerproblemen' },
  { slug: 'smartphone-hulp-aan-huis', name: 'Smartphone Hulp' },
  { slug: 'computerhulp-senioren', name: 'Computerhulp Senioren' },
  { slug: 'monteur-aan-huis', name: 'Monteur aan Huis' },
]

const relatedServicesMap: Record<string, string[]> = {
  'computer-laptop-hulp': ['hulp-bij-computerproblemen', 'dataherstel-backup', 'wifi-internet-hulp', 'email-hulp', 'monteur-aan-huis'],
  'laptop-computer-reparatie': ['computer-laptop-hulp', 'dataherstel-backup', 'wifi-internet-hulp', 'tablet-smartphone-hulp', 'persoonlijke-training'],
  'wifi-internet-hulp': ['smart-home-domotica', 'printer-scanner-hulp', 'tv-installatie', 'computer-laptop-hulp', 'smartphone-hulp-aan-huis'],
  'printer-scanner-hulp': ['computer-laptop-hulp', 'wifi-internet-hulp', 'email-hulp', 'monteur-aan-huis', 'persoonlijke-training'],
  'email-hulp': ['computer-laptop-hulp', 'tablet-smartphone-hulp', 'wifi-internet-hulp', 'persoonlijke-training', 'printer-scanner-hulp'],
  'tablet-smartphone-hulp': ['email-hulp', 'wifi-internet-hulp', 'persoonlijke-training', 'smart-home-domotica', 'computer-laptop-hulp'],
  'televisie-radio': ['tv-installatie', 'smart-home-domotica', 'wifi-internet-hulp', 'tablet-smartphone-hulp', 'computer-laptop-hulp'],
  'smart-home-domotica': ['wifi-internet-hulp', 'tv-installatie', 'televisie-radio', 'smartphone-hulp-aan-huis', 'persoonlijke-training'],
  'dataherstel-backup': ['computer-laptop-hulp', 'laptop-computer-reparatie', 'email-hulp', 'tablet-smartphone-hulp', 'persoonlijke-training'],
  'persoonlijke-training': ['computer-laptop-hulp', 'tablet-smartphone-hulp', 'email-hulp', 'wifi-internet-hulp', 'computercursus-ouderen'],
  'computercursus-ouderen': ['persoonlijke-training', 'tablet-smartphone-hulp', 'email-hulp', 'computer-laptop-hulp', 'wifi-internet-hulp'],
  'tv-installatie': ['televisie-radio', 'smart-home-domotica', 'wifi-internet-hulp', 'computer-laptop-hulp', 'tablet-smartphone-hulp'],
  'pc-hulp-aan-huis': ['computer-laptop-hulp', 'laptop-computer-reparatie', 'hulp-bij-computerproblemen', 'dataherstel-backup', 'wifi-internet-hulp'],
  'hulp-bij-computerproblemen': ['computer-laptop-hulp', 'pc-hulp-aan-huis', 'wifi-internet-hulp', 'printer-scanner-hulp', 'email-hulp'],
  'smartphone-hulp-aan-huis': ['tablet-smartphone-hulp', 'email-hulp', 'persoonlijke-training', 'computerhulp-senioren', 'wifi-internet-hulp'],
  'computerhulp-senioren': ['computercursus-ouderen', 'persoonlijke-training', 'tablet-smartphone-hulp', 'smartphone-hulp-aan-huis', 'email-hulp'],
  'monteur-aan-huis': ['computer-laptop-hulp', 'laptop-computer-reparatie', 'hulp-bij-computerproblemen', 'pc-hulp-aan-huis', 'printer-scanner-hulp'],
}

export default function ServiceCrossLinks({ currentService, serviceName }: ServiceCrossLinksProps) {
  const related = relatedServicesMap[currentService] || []
  const relatedServices = related
    .map(slug => allServices.find(s => s.slug === slug))
    .filter((s): s is (typeof allServices)[number] => Boolean(s))

  return (
    <>
      {/* Gerelateerde diensten */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-10">
            <p className="section-eyebrow">Meer hulp</p>
            <h2 className="section-title">Andere diensten</h2>
            <p className="section-subtitle">
              Naast {serviceName.toLowerCase()} helpen wij u ook met:
            </p>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedServices.map(service => (
              <Link
                key={service.slug}
                href={`/diensten/${service.slug}`}
                className="group flex items-center justify-between gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:shadow-soft transition duration-200"
              >
                <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{service.name}</span>
                <span
                  className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <Icon name="arrow-right-short" className="w-4 h-4 text-blue-700" strokeWidth={2.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
