import { Icon } from '@/components/icons'
import CallbackForm from '@/components/CallbackForm'
import { BUSINESS } from '@/lib/constants'

interface CallbackSectionProps {
  /** Plaatsnaam op stadspagina's: "…bij u thuis in Delft". */
  cityName?: string
}

/**
 * Direct onder de hero: de twee manieren om ons te bereiken naast elkaar.
 * Links bellen (de snelste weg), rechts het terugbelformulier met alleen naam
 * en nummer. Daarmee hoeft niemand naar een aparte pagina met zeven velden
 * voordat we weten dat hij geholpen wil worden.
 */
export default function CallbackSection({ cityName }: CallbackSectionProps) {
  const waar = cityName ? ` in ${cityName}` : ''
  return (
    <section className="panel-section" aria-labelledby="callback-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="panel overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Bellen */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 sm:p-10 flex flex-col justify-center">
              <p className="text-blue-100 text-sm font-semibold uppercase tracking-[0.08em] mb-2">De snelste manier</p>
              <h2 id="callback-heading" className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
                Bel ons even, dan regelen we het meteen
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                U vertelt in uw eigen woorden wat er niet werkt. Wij zeggen direct wat het kost en wanneer we{waar} kunnen komen. Kleine vragen lossen we vaak al aan de telefoon op.
              </p>
              <a
                href={BUSINESS.PHONE_HREF}
                translate="no"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 hover:bg-blue-50 rounded-xl px-6 py-4 text-xl sm:text-2xl font-bold shadow-lg transition duration-200 whitespace-nowrap"
                aria-label={`Bel ${BUSINESS.PHONE}`}
              >
                <Icon name="phone" className="w-6 h-6" strokeWidth={2.5} aria-hidden="true" />
                Bel {BUSINESS.PHONE}
              </a>
            </div>

            {/* Terugbellen */}
            <div className="p-6 sm:p-10">
              <p className="section-eyebrow">Liever teruggebeld worden?</p>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-2">Laat uw nummer achter, wij bellen u</h3>
              <p className="text-gray-600 mb-5">Alleen uw naam en telefoonnummer. Meer hoeft u niet in te vullen.</p>
              <CallbackForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
