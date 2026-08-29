import AfspraakForm from '@/components/AfspraakForm'
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
            Vul onderstaande gegevens in en wij nemen zo spoedig mogelijk contact met u op.
          </p>
        </header>

        <div className="card-bezel">
          <div className="card-bezel-inner p-6 sm:p-10">
            <AfspraakForm />
          </div>
        </div>

        <section className="mt-12" aria-labelledby="vervolg-heading">
          <h2 id="vervolg-heading" className="content-title text-center mb-6">Hoe het verdergaat</h2>
          <ol className="space-y-4">
            {[
              'Wij bellen u terug — meestal binnen een paar uur, altijd dezelfde dag.',
              'We plannen een moment dat u uitkomt. Vaak kunnen we al binnen 24 uur langskomen, ook \'s avonds en in het weekend.',
              'Onze specialist komt bij u thuis, lost het op en legt het rustig uit. U betaalt achteraf per kwartier, via pin of Tikkie.',
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
            — alle dagen bereikbaar van {HOURS.OPEN} tot {HOURS.CLOSE}.
          </p>
        </section>
      </div>
    </div>
  )
}
