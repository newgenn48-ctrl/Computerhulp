import Link from 'next/link'
import { Icon } from '@/components/icons'

interface PricingSectionProps {
  benefits?: string[]
}

export default function PricingSection({
  benefits = [
    'Gratis voorrijkosten in heel Zuid-Holland',
    'Ook \'s avonds en in het weekend beschikbaar',
    'Betalen via pin, contant of Tikkie',
    'Eerlijke inschatting vooraf, geen verrassingen'
  ]
}: PricingSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Transparante Prijzen
            </h2>
            <p className="text-lg text-gray-600">
              Eerlijk en duidelijk. Geen verborgen kosten, geen verrassingen.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-500">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white text-center">
              <div className="text-sm font-semibold uppercase tracking-wide mb-2">Ons Tarief</div>
              <div className="text-6xl font-bold mb-2">€14,50</div>
              <div className="text-xl">per kwartier</div>
            </div>

            <div className="px-8 py-10">
              <div className="text-center mb-8">
                <div className="text-lg text-gray-700 font-medium">Minimaal 45 minuten</div>
              </div>

              <div className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/afspraak-maken"
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Hulp vragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
