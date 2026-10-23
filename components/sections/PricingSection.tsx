import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS, PRICING } from '@/lib/constants'

interface PricingSectionProps {
  /** Plaatsnaam op stadspagina's: "…in Delft" in plaats van "in heel Zuid-Holland". */
  cityName?: string
}

/**
 * Het tarievenblok, bewust klein gehouden.
 *
 * Staat onder de reviews: eerst laten zien dat mensen tevreden zijn, dan pas
 * wat het kost. Eén bedrag en vier korte regels, meer niet. Geen uitgerekend
 * totaal meer: wie het precies wil weten klikt door naar /tarieven, en wie
 * belt hoort het aan de telefoon.
 *
 * Het minimum staat er wel bij, maar meteen met de geruststelling erachter:
 * "Minimale afname 3 kwartier. De meeste problemen zijn daarbinnen opgelost."
 * Kaal gaf "minimaal 3 kwartier" het gevoel van een drempel; alleen de
 * geruststelling liet de verplichting weg. Zo staat allebei er.
 */
export default function PricingSection({ cityName }: PricingSectionProps) {
  const waar = cityName ? `in ${cityName}` : `in heel ${BUSINESS.REGION}`

  const regels = [
    'Minimale afname 3 kwartier. De meeste problemen zijn daarbinnen opgelost.',
    `${PRICING.TRAVEL} voorrijkosten ${waar}.`,
    'U betaalt pas achteraf, via pin, contant of Tikkie.',
    'Lukt het niet, dan betaalt u alleen het uitzoekwerk.',
  ]

  return (
    <section className="panel-section" aria-labelledby="pricing-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="panel p-6 sm:p-8">
          <div className="text-center">
            <h2 id="pricing-heading" className="content-title mb-3">
              Wat het kost
            </h2>
            <p className="flex flex-wrap items-baseline justify-center gap-x-2.5 gap-y-1">
              <span
                className="text-4xl sm:text-5xl font-extrabold text-blue-700 tabular-nums leading-none"
                translate="no"
              >
                {PRICING.PER_QUARTER}
              </span>
              <span className="text-lg font-semibold text-gray-700">per kwartier</span>
              <span className="text-sm text-gray-500">{PRICING.VAT_NOTE}</span>
            </p>
          </div>

          <ul className="mt-5 space-y-2 sm:mx-auto sm:max-w-md">
            {regels.map((regel) => (
              <li key={regel} className="flex items-start gap-2.5">
                <Icon
                  name="check-circle"
                  className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-gray-700 min-w-0">{regel}</span>
              </li>
            ))}
          </ul>

          {/* Eén knop: bellen. De tarievenpagina blijft een tekstlink, zodat
              er niet twee knoppen om dezelfde aandacht vragen. */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-5">
            <a href={BUSINESS.PHONE_HREF} translate="no" className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
            </a>
            <Link
              href="/tarieven"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] font-semibold text-blue-700 hover:text-blue-800"
            >
              Alle tarieven bekijken
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
