import Link from 'next/link'
import { Metadata } from 'next'
import ConversionTracker from '@/components/ConversionTracker'
import { Icon } from '@/components/icons'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Afspraak Bevestiging — ${BUSINESS.NAME}`,
  description: 'Bedankt voor uw afspraakaanvraag. We bellen u binnen 1 uur terug.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AfspraakBevestigingPage() {
  return (
    <>
      <ConversionTracker
        conversionId="AW-16733341823"
        conversionLabel="aDxYCK7Ct-gaEP-Qiqs-"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
              <Icon name="check" className="w-12 h-12 text-blue-600" strokeWidth={2} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Aanvraag ontvangen</h1>
            <p className="text-xl text-blue-100">Bedankt voor uw vertrouwen in {BUSINESS.NAME}</p>
          </div>

          <div className="px-8 py-10">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Icon name="clock" className="w-6 h-6" strokeWidth={2} />
                  Wat gebeurt er nu?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <div>
                      <p className="font-semibold text-gray-900">Binnen 1 uur</p>
                      <p className="text-gray-700">We bellen u om een concrete afspraak in te plannen</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <div>
                      <p className="font-semibold text-gray-900">Binnen 24 uur</p>
                      <p className="text-gray-700">Onze IT-student komt bij u thuis om het probleem op te lossen</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <div>
                      <p className="font-semibold text-gray-900">Probleem opgelost</p>
                      <p className="text-gray-700">U kunt weer verder met uw computer, laptop of andere apparaten</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Icon name="email" className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Check uw e-mail</p>
                    <p className="text-gray-700">U heeft een bevestigingsmail ontvangen met alle details van uw aanvraag.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Icon name="phone" className="w-5 h-5 text-yellow-600" strokeWidth={2} />
                  Heeft u spoed?
                </h3>
                <p className="text-gray-700 mb-4">
                  Wacht niet en bel ons direct. We zijn {HOURS.DAYS} bereikbaar van {HOURS.OPEN} tot {HOURS.CLOSE} uur.
                </p>
                <a href={BUSINESS.PHONE_HREF} className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                  Bel {BUSINESS.PHONE}
                </a>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-900 mb-4">Wat u kunt verwachten</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[`${PRICING.TRAVEL} voorrijkosten`, `Transparant tarief ${PRICING.PER_QUARTER}/kwartier`, 'Ervaren IT-student', 'Oplossing ter plekke'].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name="check" className="w-6 h-6 text-blue-600 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6 flex flex-col sm:flex-row gap-4">
                <Link href="/" className="flex-1 btn-primary justify-center">
                  <Icon name="home" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                  Terug naar home
                </Link>
                <Link href="/diensten" className="flex-1 btn-secondary justify-center">
                  Bekijk onze diensten
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Vertrouwd door {BUSINESS.REVIEW_COUNT} tevreden klanten</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-gray-700">
              <Icon name="star" className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">9.2/10</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Icon name="shield" className="w-5 h-5 text-blue-600" strokeWidth={2} aria-hidden="true" />
              <span className="font-semibold">KvK {BUSINESS.KVK}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
