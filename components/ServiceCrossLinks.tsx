import Link from 'next/link'
import { Icon } from '@/components/icons'
import { articles } from '@/lib/kennisbank'

interface ServiceCrossLinksProps {
  currentService: string
  serviceName: string
}

const allServices = [
  { slug: 'computer-laptop-hulp', name: 'Computer- en laptophulp' },
  { slug: 'wifi-internet-hulp', name: 'Wifi- en internethulp' },
  { slug: 'printer-scanner-hulp', name: 'Printer- en scannerhulp' },
  { slug: 'email-hulp', name: 'E-mailhulp' },
  { slug: 'smartphone-hulp-aan-huis', name: 'Smartphone- en tablethulp' },
  { slug: 'tv-installatie', name: 'Tv-installatie en tv-hulp' },
  { slug: 'smart-home-domotica', name: 'Smart home en domotica' },
  { slug: 'dataherstel-backup', name: 'Dataherstel en back-up' },
  { slug: 'computercursus-ouderen', name: 'Computercursus voor ouderen' },
  { slug: 'computerhulp-senioren', name: 'Computerhulp voor senioren' },
]

const relatedServicesMap: Record<string, string[]> = {
  'computer-laptop-hulp': ['dataherstel-backup', 'wifi-internet-hulp', 'email-hulp', 'printer-scanner-hulp', 'computerhulp-senioren'],
  'wifi-internet-hulp': ['smart-home-domotica', 'printer-scanner-hulp', 'tv-installatie', 'computer-laptop-hulp', 'smartphone-hulp-aan-huis'],
  'printer-scanner-hulp': ['computer-laptop-hulp', 'wifi-internet-hulp', 'email-hulp', 'smartphone-hulp-aan-huis', 'computerhulp-senioren'],
  'email-hulp': ['computer-laptop-hulp', 'smartphone-hulp-aan-huis', 'wifi-internet-hulp', 'computercursus-ouderen', 'printer-scanner-hulp'],
  'smartphone-hulp-aan-huis': ['email-hulp', 'wifi-internet-hulp', 'computercursus-ouderen', 'smart-home-domotica', 'computer-laptop-hulp'],
  'tv-installatie': ['smart-home-domotica', 'wifi-internet-hulp', 'smartphone-hulp-aan-huis', 'computer-laptop-hulp', 'computerhulp-senioren'],
  'smart-home-domotica': ['wifi-internet-hulp', 'tv-installatie', 'smartphone-hulp-aan-huis', 'computer-laptop-hulp', 'computercursus-ouderen'],
  'dataherstel-backup': ['computer-laptop-hulp', 'email-hulp', 'smartphone-hulp-aan-huis', 'printer-scanner-hulp', 'computercursus-ouderen'],
  'computercursus-ouderen': ['computerhulp-senioren', 'smartphone-hulp-aan-huis', 'email-hulp', 'computer-laptop-hulp', 'wifi-internet-hulp'],
  'computerhulp-senioren': ['computercursus-ouderen', 'smartphone-hulp-aan-huis', 'email-hulp', 'computer-laptop-hulp', 'printer-scanner-hulp'],
}

export default function ServiceCrossLinks({ currentService, serviceName }: ServiceCrossLinksProps) {
  const related = relatedServicesMap[currentService] || []
  /* Kennisbankartikelen die bij deze dienst horen. Niet elke dienst heeft er
     een; dan vervalt de sectie in plaats van een lege kop te laten staan. */
  const kennisbank = articles.filter(a => a.service === currentService)
  const relatedServices = related
    .map(slug => allServices.find(s => s.slug === slug))
    .filter((s): s is (typeof allServices)[number] => Boolean(s))

  return (
    <>
      {/* Gerelateerde diensten */}
      <section className="panel-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 panel panel-pad">
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

      {/* Uitleg bij de klacht, voor wie eerst wil begrijpen wat er aan de hand
          is voordat hij belt. */}
      {kennisbank.length > 0 && (
        <section className="panel-section" aria-labelledby="kennisbank-dienst-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 panel panel-pad">
            <header className="text-center mb-8">
              <p className="section-eyebrow">Kennisbank</p>
              <h2 id="kennisbank-dienst-heading" className="section-title">Wat zit er meestal achter?</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Uitleg over de klachten die wij hierin het vaakst tegenkomen.
              </p>
            </header>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {kennisbank.map(article => (
                <li key={article.slug} className="card-bezel">
                  <div className="card-bezel-inner p-5 h-full flex flex-col">
                    <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2">
                      <Link href={`/kennisbank/${article.slug}`} className="hover:text-blue-700 transition-colors">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="body-copy text-gray-600">{article.excerpt}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-center">
              <Link href="/kennisbank" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800">
                Alle onderwerpen in de kennisbank
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </Link>
            </p>
          </div>
        </section>
      )}
    </>
  )
}
