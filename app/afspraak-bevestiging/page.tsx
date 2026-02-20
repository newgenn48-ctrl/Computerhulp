import Link from 'next/link'
import { Metadata } from 'next'
import ConversionTracker from '@/components/ConversionTracker'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Afspraak Bevestiging - Computerhulp Zuid-Holland',
  description: 'Bedankt voor uw afspraakaanvraag. We nemen binnen 3 uur contact met u op.',
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Green Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
              <Icon name="check" className="w-12 h-12 text-green-500" strokeWidth={2} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Afspraak Aanvraag Ontvangen!</h1>
            <p className="text-xl text-green-100">Bedankt voor uw vertrouwen in Computerhulp Zuid-Holland</p>
          </div>

          {/* Content */}
          <div className="px-8 py-10">
            <div className="space-y-6">
              {/* Wat gebeurt er nu */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Icon name="clock" className="w-6 h-6" strokeWidth={2} />
                  Wat Gebeurt Er Nu?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <div>
                      <p className="font-semibold text-gray-900">Binnen 3 uur</p>
                      <p className="text-gray-700">We nemen telefonisch contact met u op om een concrete afspraak in te plannen</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <div>
                      <p className="font-semibold text-gray-900">Binnen 24 uur</p>
                      <p className="text-gray-700">Onze IT-student komt bij u thuis om het probleem op te lossen</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <div>
                      <p className="font-semibold text-gray-900">Probleem opgelost</p>
                      <p className="text-gray-700">U kunt weer verder met uw computer, laptop of andere apparaten</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Bevestiging Email */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Icon name="email" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">📧 Check uw e-mail</p>
                    <p className="text-gray-700">U heeft een bevestigingsmail ontvangen met alle details van uw aanvraag.</p>
                  </div>
                </div>
              </div>

              {/* Spoed Contact */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Heeft u Spoed?
                </h3>
                <p className="text-gray-700 mb-4">
                  Wacht niet en bel ons direct! We zijn 7 dagen per week bereikbaar van 08:00 - 22:00 uur.
                </p>
                <a
                  href="tel:+31858002006"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel Direct: 085-8002006
                </a>
              </div>

              {/* Wat te verwachten */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-900 mb-4">💡 Wat U Kunt Verwachten</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-500 flex-shrink-0" strokeWidth={2} />
                    <p className="text-gray-700">Gratis voorrijkosten</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-500 flex-shrink-0" strokeWidth={2} />
                    <p className="text-gray-700">Transparant tarief €14,50/kwartier</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-500 flex-shrink-0" strokeWidth={2} />
                    <p className="text-gray-700">Ervaren IT-student</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-500 flex-shrink-0" strokeWidth={2} />
                    <p className="text-gray-700">Oplossing ter plaatse</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t pt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  <Icon name="home" className="w-5 h-5" strokeWidth={2} />
                  Terug naar Home
                </Link>
                <Link
                  href="/diensten"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Bekijk Onze Diensten
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Vertrouwd door 500+ tevreden klanten</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-gray-700">
              <Icon name="star" className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">9.2/10</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Icon name="shield" className="w-5 h-5 text-green-500" strokeWidth={2} />
              <span className="font-semibold">KvK Geregistreerd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
