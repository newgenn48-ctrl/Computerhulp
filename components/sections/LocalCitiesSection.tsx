import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS, PRICING } from '@/lib/constants'
import { cityCount } from '@/lib/cities'

interface LocalCitiesSectionProps {
  /** 'computerhulp-aan-huis' of 'student-aan-huis' bepaalt waar de kaarten naartoe linken. */
  pagePrefix?: 'computerhulp-aan-huis' | 'student-aan-huis'
  title?: string
  eyebrow?: string
}

/**
 * Zes plaatsen als kaarten met elk een eigen zin. Eén regel per stad zegt
 * de bezoeker "ja, hier ook" en geeft Google een echte link met context in
 * plaats van een chip met alleen een naam. De volgorde is de volgorde van
 * de zoekvraag: Den Haag en Rotterdam voorop.
 */
const CITY_CARDS = [
  { slug: 'den-haag', name: 'Den Haag', text: 'Van Scheveningen tot Leidschenveen: hulp bij computer, wifi en printer aan huis.' },
  { slug: 'rotterdam', name: 'Rotterdam', text: 'In alle wijken van Rotterdam, ook Hillegersberg, Ommoord en Hoogvliet.' },
  { slug: 'leiden', name: 'Leiden', text: 'Rustige uitleg aan huis in Leiden, Oegstgeest en Leiderdorp.' },
  { slug: 'delft', name: 'Delft', text: 'Computerhulp aan huis in Delft en Pijnacker, ook in de avond.' },
  { slug: 'zoetermeer', name: 'Zoetermeer', text: 'Hulp bij laptop, tablet en internet in heel Zoetermeer.' },
  { slug: 'dordrecht', name: 'Dordrecht', text: 'Aan huis in Dordrecht, Zwijndrecht en de Drechtsteden.' },
] as const

export default function LocalCitiesSection({
  pagePrefix = 'computerhulp-aan-huis',
  title = 'Snel naar computerhulp in uw woonplaats',
  eyebrow = 'Computerhulp per plaats',
}: LocalCitiesSectionProps) {
  const label = pagePrefix === 'student-aan-huis' ? 'Student aan huis' : 'Computerhulp aan huis'

  return (
    <section className="panel-section" aria-labelledby="local-cities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="panel panel-pad">
          <header className="mb-8">
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 id="local-cities-heading" className="section-title">{title}</h2>
            <p className="section-subtitle">
              We helpen in heel {BUSINESS.REGION}, {cityCount} gemeenten, overal {PRICING.TRAVEL} voorrijkosten. Deze plaatsen worden het vaakst gezocht.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {CITY_CARDS.map((c) => (
              <Link key={c.slug} href={`/${pagePrefix}-${c.slug}`} className="group city-card">
                <span className="flex items-center gap-2 font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors">
                  <Icon name="location-pin" className="w-5 h-5 text-blue-600" strokeWidth={2} aria-hidden="true" />
                  {label} {c.name}
                </span>
                <span className="block text-gray-600 mt-1.5 leading-relaxed">{c.text}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 mt-3">
                  Bekijk {c.name}
                  <Icon name="arrow-right-short" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/locaties" className="btn-secondary">
              Bekijk alle {cityCount} plaatsen
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
