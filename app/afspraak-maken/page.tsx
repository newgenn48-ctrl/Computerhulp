import AfspraakForm from '@/components/AfspraakForm'
import { Icon } from '@/components/icons'
import { BUSINESS, HOURS } from '@/lib/constants'

export default function AfspraakMakenPage() {
  return (
    <div className="pt-24 pb-20 bg-surface min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-8">
          <h1 className="section-title">
            Vraag een afspraak aan
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Vul uw gegevens in, dan bellen we u meestal binnen een uur terug om een moment af te spreken. Geen verplichtingen.
          </p>
        </header>

        {/* Bellen is de snelste weg; de sticky belbalk staat op deze pagina uit, dus hier expliciet. */}
        <a
          href={BUSINESS.PHONE_HREF}
          translate="no"
          className="flex items-center justify-between gap-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-5 mb-6 shadow-lg hover:shadow-xl transition duration-200"
          aria-label={`Bel ${BUSINESS.PHONE}`}
        >
          <span className="min-w-0">
            <span className="block text-sm text-blue-100">Liever direct iemand spreken? Bellen is het snelst.</span>
            <span className="block text-2xl font-bold tabular-nums whitespace-nowrap">Bel {BUSINESS.PHONE}</span>
          </span>
          <span className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
          </span>
        </a>

        <div className="card-bezel">
          <div className="card-bezel-inner p-6 sm:p-10">
            <AfspraakForm />
          </div>
        </div>

        <section className="mt-12" aria-labelledby="vervolg-heading">
          <h2 id="vervolg-heading" className="content-title text-center mb-6">Hoe het verdergaat</h2>
          <ol className="space-y-4">
            {[
              'Wij bellen u terug, meestal binnen een uur, altijd dezelfde dag (tussen 08:00 en 22:00).',
              'We plannen een moment dat u uitkomt. Vaak kunnen we al binnen 24 uur langskomen, ook \'s avonds en in het weekend.',
              'Onze HBO-student komt bij u thuis, lost het op en legt het rustig uit. U betaalt achteraf per kwartier, via pin of Tikkie.',
            ].map((stap, idx) => (
              <li key={idx} className="flex items-start gap-4 bg-white rounded-2xl border border-gray-200 p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm font-bold flex items-center justify-center" aria-hidden="true">
                  {idx + 1}
                </span>
                <span className="text-gray-700">{stap}</span>
              </li>
            ))}
          </ol>
          <p className="text-center text-gray-600 mt-8">
            Liever direct iemand spreken? Bel{' '}
            <a href={BUSINESS.PHONE_HREF} translate="no" className="font-semibold text-blue-700 whitespace-nowrap">
              {BUSINESS.PHONE}
            </a>{' '}
           , alle dagen bereikbaar van {HOURS.OPEN} tot {HOURS.CLOSE}.
          </p>
        </section>
      </div>
    </div>
  )
}
