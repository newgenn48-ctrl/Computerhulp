import { Icon } from '@/components/icons'
import { BUSINESS, HOURS, PRICING } from '@/lib/constants'

/**
 * Vier feiten direct onder de hero, zoals de marktleider zijn kengetallen
 * toont. Wij hebben geen reviewscore om te tonen, dus staan hier alleen
 * dingen die controleerbaar zijn: wie komt, hoe snel, wat het kost, wanneer.
 */
export default function TrustStrip({ cityName }: { cityName?: string }) {
  const items = [
    { icon: 'academic-cap', title: 'HBO-student uit de regio', desc: cityName ? `Kent ${cityName} en komt naar u toe` : `Uit ${BUSINESS.REGION}, komt naar u toe` },
    { icon: 'clock', title: 'Meestal binnen 24 uur', desc: 'Vaak nog dezelfde dag' },
    { icon: 'money', title: `${PRICING.PER_QUARTER} per kwartier`, desc: `Geen abonnement, ${PRICING.TRAVEL} voorrijkosten` },
    { icon: 'calendar', title: HOURS.DAYS, desc: `Van ${HOURS.OPEN} tot ${HOURS.CLOSE} uur, ook in het weekend` },
  ]
  return (
    <section className="panel-section pt-4 lg:pt-6" aria-label="In het kort">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ul className="panel grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 overflow-hidden">
          {items.map((it) => (
            <li key={it.title} className="flex items-start gap-3 p-4 sm:p-5 bg-white">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Icon name={it.icon} className="w-5 h-5" strokeWidth={2} />
              </span>
              <span className="min-w-0">
                <span className="block font-bold text-gray-900 leading-snug">{it.title}</span>
                <span className="block text-sm text-gray-600 leading-snug mt-0.5">{it.desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
