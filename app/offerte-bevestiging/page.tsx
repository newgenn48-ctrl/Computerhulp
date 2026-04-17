import Link from 'next/link'
import { Metadata } from 'next'
import ConversionTracker from '@/components/ConversionTracker'
import { Icon } from '@/components/icons'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Offerte Bevestiging - Computerhulp Zuid-Holland',
  description: 'Bedankt voor uw offerteaanvraag. U ontvangt binnen 24 uur een offerte op maat.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function OfferteBevestigingPage() {
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
              <Icon name="check-circle-outline" className="w-12 h-12 text-blue-600" strokeWidth={2} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Offerte Aanvraag Ontvangen!</h1>
            <p className="text-xl text-blue-100">Bedankt voor uw interesse in onze website diensten</p>
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
                      <p className="font-semibold text-gray-900">Binnen 24 uur</p>
                      <p className="text-gray-700">U ontvangt een gedetailleerde offerte op maat voor uw project</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <div>
                      <p className="font-semibold text-gray-900">Vrijblijvend Gesprek</p>
                      <p className="text-gray-700">We bellen u om uw wensen door te spreken en vragen te beantwoorden</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <div>
                      <p className="font-semibold text-gray-900">Offerte Op Maat</p>
                      <p className="text-gray-700">Een persoonlijke offerte afgestemd op uw budget en wensen</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Icon name="email" className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Check uw e-mail</p>
                    <p className="text-gray-700">U heeft een bevestigingsmail ontvangen met de details van uw aanvraag.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Icon name="check-circle-outline" className="w-6 h-6" strokeWidth={2} />
                  Wat U Kunt Verwachten van Uw Website
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['Professioneel modern design', 'Volledig responsive', 'SEO-geoptimaliseerd', 'Snel en veilig', 'Eenvoudig te beheren', 'Persoonlijke begeleiding'].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="check" className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Icon name="phone" className="w-5 h-5 text-yellow-600" strokeWidth={2} />
                  Heeft U Vragen?
                </h3>
                <p className="text-gray-700 mb-4">
                  Wacht niet op de offerte! Bel ons gerust voor een vrijblijvend gesprek over uw project.
                </p>
                <a href={BUSINESS.PHONE_HREF} className="btn-primary">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel {BUSINESS.PHONE}
                </a>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-900 mb-4">Bereid u voor op ons gesprek</h3>
                <p className="text-sm text-gray-600 mb-4">Denk alvast na over deze vragen — zo kunnen we meteen concreet worden:</p>
                <ul className="space-y-3">
                  {[
                    'Wat moet uw website kunnen (informatie tonen, webshop, afspraken inplannen)?',
                    'Heeft u al voorbeelden van websites die u mooi vindt?',
                    'Wilt u de website zelf kunnen aanpassen of laten wij dat doen?',
                    'Heeft u een specifieke opleverdatum in gedachten?',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="check-circle" className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                      <p className="text-sm text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-6 flex flex-col sm:flex-row gap-4">
                <Link href="/" className="flex-1 btn-primary justify-center">
                  <Icon name="home" className="w-5 h-5" strokeWidth={2} />
                  Terug naar Home
                </Link>
                <Link href="/website-laten-maken" className="flex-1 btn-secondary justify-center">
                  Meer Over Websites
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Betrouwbare webontwikkeling</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-gray-700">
              <Icon name="shield" className="w-5 h-5 text-blue-600" strokeWidth={2} />
              <span className="font-semibold">KvK: 91310318</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
