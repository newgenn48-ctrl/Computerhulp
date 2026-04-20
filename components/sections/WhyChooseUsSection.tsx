import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS, HOURS } from '@/lib/constants'

interface Benefit {
  icon: string
  title: string
  desc: string
}

interface WhyChooseUsSectionProps {
  title?: string
  benefits?: Benefit[]
  showCta?: boolean
  ctaLabel?: string
}

const defaultBenefits: Benefit[] = [
  {
    icon: 'clock',
    title: 'Binnen 24 uur bij u thuis',
    desc: 'Geen wachtlijst, geen wekenlang aanmodderen. Meestal de volgende dag al geholpen.',
  },
  {
    icon: 'users',
    title: 'Ervaren IT-studenten',
    desc: `Opgeleide specialisten die al ${BUSINESS.YEARS_ACTIVE} jaar problemen oplossen — rustig, duidelijk, zonder vaktermen.`,
  },
  {
    icon: 'home',
    title: 'Gewoon thuis blijven',
    desc: 'U hoeft nergens naartoe. Wij komen bij u aan de keukentafel en lossen het ter plekke op.',
  },
  {
    icon: 'shield',
    title: 'Betrouwbaar en verzekerd',
    desc: `KvK ${BUSINESS.KVK}, verzekerd en ${HOURS.DAYS} bereikbaar. U bent in goede handen.`,
  },
]

export default function WhyChooseUsSection({
  title = 'Waarom klanten voor ons kiezen',
  benefits = defaultBenefits,
  showCta = true,
  ctaLabel = 'Bel ons nu',
}: WhyChooseUsSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <p className="section-eyebrow">Waarom wij</p>
          <h2 className="section-title">{title}</h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="card-refined flex items-start gap-4 p-6 sm:p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Icon name={benefit.icon} className="w-5 h-5 text-blue-600" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-base sm:text-lg">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {showCta && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
            <a href={BUSINESS.PHONE_HREF} className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              {ctaLabel}: {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-secondary">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
