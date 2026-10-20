import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'

interface PricingSectionProps {
  /** Plaatsnaam op stadspagina's: "…in Delft en heel Zuid-Holland". */
  cityName?: string
}

/**
 * Het prijsblok tussen diensten en reviews.
 *
 * Hoorde al in de afgesproken paginavolgorde (hero → diensten → prijs →
 * reviews), maar de component was ergens onderweg verdwenen. Daardoor stond
 * op de homepage en op alle stadspagina's geen zichtbare prijs meer: het
 * tarief zat alleen nog in een dichtgeklapte FAQ-vraag. "Wat kost het" is
 * de eerste vraag van deze doelgroep, en de concurrent zet het er wél bij.
 *
 * Alleen eigen feiten, geen vergelijkingen met andere aanbieders.
 */
export default function PricingSection({ cityName }: PricingSectionProps) {
  const waar = cityName ? `in ${cityName} en heel ${BUSINESS.REGION}` : `in heel ${BUSINESS.REGION}`

  const feiten = [
    {
      icon: 'clock',
      title: `Minimaal 3 kwartier (${PRICING.MINIMUM_TOTAL})`,
      desc: 'Daarna per kwartier, dus u betaalt alleen voor de tijd die we echt nodig hebben.',
    },
    {
      icon: 'location-pin',
      title: `${PRICING.TRAVEL} voorrijkosten`,
      desc: `Hetzelfde bedrag ${waar}, hoe ver we ook rijden.`,
    },
    {
      icon: 'calendar',
      title: 'Geen avond- of weekendtoeslag',
      desc: `Elke dag van ${HOURS.OPEN} tot ${HOURS.CLOSE} hetzelfde tarief.`,
    },
    {
      icon: 'money',
      title: 'Geen abonnement, betalen achteraf',
      desc: 'Pas als het werk klaar is, via pin of Tikkie. U zit nergens aan vast.',
    },
  ]

  return (
    <section className="panel-section" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="panel overflow-hidden">
          <div className="grid lg:grid-cols-[22rem_1fr]">
            {/* Het bedrag, groot en zonder omhaal */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 sm:p-10 flex flex-col justify-center text-center">
              <p className="text-blue-100 text-sm font-semibold uppercase tracking-[0.08em] mb-2">Wat het kost</p>
              <p className="text-5xl sm:text-6xl font-extrabold tabular-nums leading-none" translate="no">
                {PRICING.PER_QUARTER}
              </p>
              <p className="text-xl text-blue-100 mt-2">per kwartier</p>
              <p className="text-sm text-blue-100/90 mt-1">{PRICING.VAT_NOTE}</p>
              <p className="mt-5 text-blue-50 body-copy">
                All-in vanaf {PRICING.MINIMUM_ALL_IN}: drie kwartier hulp plus voorrijden.
              </p>
            </div>

            {/* De vier dingen die mensen aan de telefoon altijd vragen */}
            <div className="p-6 sm:p-10">
              <h2 id="pricing-heading" className="section-title">
                Duidelijk tarief, geen verrassingen
              </h2>

              <ul className="grid sm:grid-cols-2 gap-5 mt-6">
                {feiten.map((f) => (
                  <li key={f.title} className="flex items-start gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon name={f.icon} className="w-5 h-5 text-blue-700" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900 leading-snug">{f.title}</p>
                      <p className="text-gray-600 mt-0.5">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href={BUSINESS.PHONE_HREF} translate="no" className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                  {BUSINESS.PHONE}
                </a>
                <Link href="/tarieven" className="btn-secondary">
                  Alle tarieven bekijken
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
