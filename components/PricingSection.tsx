import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS, PRICING } from '@/lib/constants'

interface PricingSectionProps {
  /** Moet aansluiten op de sectie ervoor: wit en surface wisselen elkaar af. */
  background?: 'white' | 'soft'
}

/**
 * De prijskaart als ticket: één focaal bedrag, de twee bijzaken als
 * statistiekpaar eronder. Dezelfde drie feiten als altijd — per kwartier,
 * voorrijkosten, minimale afname — maar met hiërarchie: het tarief is
 * waar de beslissing om draait, dus dat draagt de kaart.
 */
export default function PricingSection({ background = 'soft' }: PricingSectionProps) {
  return (
    <section className={`py-12 lg:py-16 ${background === 'soft' ? 'section-bg-soft' : 'bg-white'}`}>
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-8">
          <p className="section-eyebrow">Tarieven</p>
          <h2 className="section-title">Wat kost het?</h2>
          <p className="section-subtitle">
            Geen abonnement en geen verrassingen. U betaalt per kwartier, achteraf.
          </p>
        </header>

        <div className="card-bezel">
          <div className="card-bezel-inner">
            {/* Merkstreep — hetzelfde verloop als het logo en de knoppen */}
            <div className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-700" aria-hidden="true" />

            <div className="p-6 sm:p-8">
              <div className="text-center pb-6 border-b border-gray-200">
                <div className="text-5xl sm:text-6xl font-extrabold tracking-display-tight text-gray-900 tabular-nums">
                  {PRICING.PER_QUARTER}
                </div>
                <div className="mt-2 text-gray-600 font-medium">per kwartier</div>
              </div>

              <dl className="grid grid-cols-2 divide-x divide-gray-200 py-5 text-center border-b border-gray-200">
                <div className="px-2">
                  <dt className="text-sm text-gray-500">Voorrijkosten</dt>
                  <dd className="mt-1 text-xl font-bold text-gray-900 tabular-nums">{PRICING.TRAVEL}</dd>
                </div>
                <div className="px-2">
                  <dt className="text-sm text-gray-500">Minimale afname</dt>
                  <dd className="mt-1 text-xl font-bold text-gray-900">{PRICING.MINIMUM_QUARTERS} kwartier</dd>
                </div>
              </dl>

              <p className="mt-5 text-sm text-gray-600 leading-relaxed text-center">
                U hoort altijd eerst wat het kost — dan pas beginnen we.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                <a
                  href={BUSINESS.PHONE_HREF}
                  translate="no"
                  className="btn-primary text-base px-6 whitespace-nowrap"
                  aria-label={`Bel ${BUSINESS.PHONE}`}
                >
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                  {BUSINESS.PHONE}
                </a>
                <Link href="/afspraak-maken" className="btn-secondary text-base px-6">
                  Afspraak maken
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
