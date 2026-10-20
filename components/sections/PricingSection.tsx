import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS, PRICING } from '@/lib/constants'

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
 * Bewust kort gehouden: één bedrag, en daarnaast de drie dingen die mensen
 * aan de telefoon toch vragen — het minimum, de voorrijkosten en wanneer ze
 * betalen. Geen uitgerekende totalen (€44,97, €57,47) en geen kaartjes met
 * kopjes: die versie las als rekenwerk in plaats van als een prijs. Bij het
 * minimum staat meteen dat de meeste klussen daarbinnen klaar zijn, anders
 * leest "minimaal 3 kwartier" als een drempel. Alles voluit op /tarieven.
 */
export default function PricingSection({ cityName }: PricingSectionProps) {
  const waar = cityName ? `in ${cityName}` : `in heel ${BUSINESS.REGION}`

  return (
    <section className="panel-section" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="panel overflow-hidden">
          <div className="grid lg:grid-cols-[20rem_1fr]">
            {/* Eén bedrag, groot. Meer getallen naast elkaar zetten maakt het
                onduidelijk in plaats van transparant. */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 sm:p-8 flex flex-col justify-center text-center">
              <p className="text-5xl sm:text-6xl font-extrabold tabular-nums leading-none" translate="no">
                {PRICING.PER_QUARTER}
              </p>
              <p className="text-xl text-blue-100 mt-2">per kwartier</p>
              <p className="text-sm text-blue-100/90 mt-1">{PRICING.VAT_NOTE}</p>
            </div>

            {/* Eén regel eronder, in gewone woorden. De voorwaarden staan
                voluit op /tarieven; wie dat wil weten klikt door. */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center lg:py-10">
              <h2 id="pricing-heading" className="section-title">
                Wat het kost
              </h2>
              {/* Drie korte regels, geen kaartjes met kopjes en uitleg: de
                  vier feiten die mensen aan de telefoon vragen, en niets
                  meer. Geen uitgerekende totalen erbij — dat las als
                  rekenwerk in plaats van als een prijs. */}
              <ul className="space-y-2.5">
                {[
                  'Minimaal 3 kwartier (45 minuten). De meeste problemen zijn daarbinnen opgelost.',
                  `${PRICING.TRAVEL} voorrijkosten ${waar}.`,
                  'U betaalt pas achteraf, via pin of Tikkie.',
                ].map((regel) => (
                  <li key={regel} className="flex items-start gap-3">
                    <Icon
                      name="check-circle"
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="body-copy text-gray-700 min-w-0">{regel}</span>
                  </li>
                ))}
              </ul>

              {/* Eén knop: bellen. De tarievenpagina is een tekstlink, zodat
                  er niet twee knoppen om dezelfde aandacht vragen en het blok
                  op een telefoon niet nog een rij hoger wordt. */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-6">
                <a href={BUSINESS.PHONE_HREF} translate="no" className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                  {BUSINESS.PHONE}
                </a>
                <Link
                  href="/tarieven"
                  className="inline-flex items-center gap-2 min-h-[44px] font-semibold text-blue-700 hover:text-blue-800"
                >
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
