import Link from 'next/link'
import { Icon } from '@/components/icons'
import { PRICING, HOURS } from '@/lib/constants'

const features = [
  { label: 'Minimum', value: `3 kwartier (45 min)` },
  { label: 'Voorrijkosten', value: PRICING.TRAVEL },
  { label: 'Totaal vanaf', value: `${PRICING.MINIMUM_ALL_IN} all-in` },
  { label: 'Beschikbaar', value: HOURS.LABEL },
  { label: 'Betaling', value: 'Achteraf via pin of Tikkie' },
]

export default function PricingSection() {
  return (
    <section className="py-20 lg:py-28 section-bg-soft">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <p className="section-eyebrow">Tarieven</p>
          <h2 className="section-title">Duidelijke prijzen, geen verrassingen</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Eerlijke prijzen, all-in vanaf {PRICING.MINIMUM_ALL_IN} (3 kwartier + voorrijkosten). Vooraf weet u waar u aan toe bent.
          </p>
        </header>

        <div className="max-w-md mx-auto">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-soft-lg border border-ink-100">
            {/* Subtiele accent-balk bovenaan */}
            <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400" />

            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Standaardhulp aan huis</h3>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-display-tight">{PRICING.PER_QUARTER}</span>
                <span className="text-gray-500 font-medium">/ kwartier</span>
              </div>

              <div className="space-y-0 mb-8">
                {features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center justify-between py-3 border-b border-ink-100 last:border-0"
                  >
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <Icon name="check" className="w-4 h-4 text-blue-500 flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
                      {feature.label}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">{feature.value}</span>
                  </div>
                ))}
              </div>

              <Link href="/afspraak-maken" className="btn-primary w-full">
                Afspraak inplannen
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
