import Link from 'next/link'
import { Icon } from '@/components/icons'
import { PRICING } from '@/lib/constants'

const rows = [
  { value: PRICING.PER_QUARTER, label: 'per kwartier' },
  { value: PRICING.TRAVEL, label: 'voorrijkosten' },
  { value: '3 kwartier', label: 'minimale afname' },
]

export default function PricingSection() {
  return (
    <section className="py-12 lg:py-16 section-bg-soft">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <header className="text-center mb-8">
          <p className="section-eyebrow">Tarieven</p>
          <h2 className="section-title">Wat kost het?</h2>
        </header>

        <div className="bg-white rounded-2xl shadow-soft border border-ink-100 p-6 sm:p-7">
          <dl className="divide-y divide-ink-100">
            {rows.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between py-3 first:pt-0 last:pb-0">
                <dt className="text-gray-600">{row.label}</dt>
                <dd className="text-xl font-bold text-gray-900 tracking-tight">{row.value}</dd>
              </div>
            ))}
          </dl>

          <Link href="/afspraak-maken" className="btn-primary w-full mt-6">
            Afspraak inplannen
            <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
