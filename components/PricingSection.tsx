import Link from 'next/link'
import { Icon } from '@/components/icons'

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="section-title">Wat kost het?</h2>

        <div className="bg-blue-600 rounded-2xl px-6 py-8 text-white mt-8 mb-6">
          <div className="text-5xl sm:text-6xl font-bold">€14,99</div>
          <div className="text-blue-200 mt-1">per kwartier · min. 3 kwartier · €10 voorrijkosten</div>
        </div>

        <p className="text-gray-600 mb-8">Geen abonnement · Geen weekendtoeslag · Betalen achteraf</p>

        <Link href="/afspraak-maken" className="btn-primary">
          Hulp aanvragen
          <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
        </Link>
      </div>
    </section>
  )
}
