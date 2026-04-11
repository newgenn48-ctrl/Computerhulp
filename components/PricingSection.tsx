import Link from 'next/link'
import { Icon } from '@/components/icons'

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="section-title">Wat kost het?</h2>
          <p className="section-subtitle">Duidelijke prijzen, geen verrassingen</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {/* Voorrijkosten */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
            <div className="text-sm text-gray-500 mb-2">Voorrijkosten</div>
            <div className="text-3xl sm:text-4xl font-bold text-gray-900">€10</div>
            <div className="text-sm text-gray-600 mt-1">In heel Zuid-Holland</div>
          </div>

          {/* Tarief - highlighted */}
          <div className="bg-blue-600 rounded-2xl p-6 text-center text-white relative">
            <div className="text-sm text-blue-200 mb-2">Per kwartier</div>
            <div className="text-4xl sm:text-5xl font-bold">€14,99</div>
            <div className="text-sm text-blue-200 mt-1">Min. 3 kwartier</div>
          </div>

          {/* Totaal voorbeeld */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
            <div className="text-sm text-gray-500 mb-2">Meeste klanten betalen</div>
            <div className="text-3xl sm:text-4xl font-bold text-gray-900">€55 - €70</div>
            <div className="text-sm text-gray-600 mt-1">All-in, geen extra kosten</div>
          </div>
        </div>

        {/* Voordelen */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
          {[
            'Geen abonnement nodig',
            'Geen avond- of weekendtoeslag',
            'Betalen via pin of Tikkie',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0" strokeWidth={2} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/afspraak-maken" className="btn-primary">
            Hulp aanvragen
            <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
          </Link>
          <a href="tel:+31858002006" className="btn-secondary">
            <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
            Bel 085-8002006
          </a>
        </div>
      </div>
    </section>
  )
}
