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
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 sm:p-7 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Icon name={benefit.icon} className="w-6 h-6 text-white" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {showCta && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
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
