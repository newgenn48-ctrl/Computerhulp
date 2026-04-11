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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
              <Icon name="check" className="w-12 h-12 text-blue-600" strokeWidth={2} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Afspraak Aanvraag Ontvangen!</h1>
            <p className="text-xl text-blue-100">Bedankt voor uw vertrouwen in Computerhulp Zuid-Holland</p>
          </div>

          <div className="px-8 py-10">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Icon name="clock" className="w-6 h-6" strokeWidth={2} />
                  Wat Gebeurt Er Nu?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <div>
                      <p className="font-semibold text-gray-900">Binnen 3 uur</p>
                      <p className="text-gray-700">We nemen telefonisch contact met u op om een concrete afspraak in te plannen</p>
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
                  Heeft u Spoed?
                </h3>
                <p className="text-gray-700 mb-4">
                  Wacht niet en bel ons direct! We zijn 7 dagen per week bereikbaar van 08:00 - 22:00 uur.
                </p>
                <a href="tel:+31858002006" className="btn-primary">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel Direct: 085-8002006
                </a>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-900 mb-4">Wat U Kunt Verwachten</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['€10 voorrijkosten', 'Transparant tarief €14,99/kwartier', 'Ervaren IT-student', 'Oplossing ter plaatse'].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name="check" className="w-6 h-6 text-blue-600 flex-shrink-0" strokeWidth={2} />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6 flex flex-col sm:flex-row gap-4">
                <Link href="/" className="flex-1 btn-primary justify-center">
                  <Icon name="home" className="w-5 h-5" strokeWidth={2} />
                  Terug naar Home
                </Link>
                <Link href="/diensten" className="flex-1 btn-secondary justify-center">
                  Bekijk Onze Diensten
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Vertrouwd door 500+ tevreden klanten</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-gray-700">
              <Icon name="star" className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">9.2/10</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Icon name="shield" className="w-5 h-5 text-blue-600" strokeWidth={2} />
              <span className="font-semibold">KvK Geregistreerd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
