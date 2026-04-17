import AfspraakForm from '@/components/AfspraakForm'
import { Icon } from '@/components/icons'
import { BUSINESS, HOURS } from '@/lib/constants'

export default function AfspraakMakenPage() {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Afspraak maken
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Vul het formulier in en we bellen u <strong>binnen 1 uur terug</strong> om een moment af te spreken.
          </p>
        </header>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 max-w-xl mx-auto">
          <div className="flex flex-col items-center gap-1 bg-white rounded-xl p-3 border border-gray-100 text-center">
            <Icon name="clock" className="w-5 h-5 text-blue-600" strokeWidth={2} aria-hidden="true" />
            <p className="text-xs sm:text-sm font-medium text-gray-700">Reactie binnen 1 uur</p>
          </div>
          <div className="flex flex-col items-center gap-1 bg-white rounded-xl p-3 border border-gray-100 text-center">
            <Icon name="shield" className="w-5 h-5 text-blue-600" strokeWidth={2} aria-hidden="true" />
            <p className="text-xs sm:text-sm font-medium text-gray-700">Gratis & vrijblijvend</p>
          </div>
          <div className="flex flex-col items-center gap-1 bg-white rounded-xl p-3 border border-gray-100 text-center">
            <Icon name="check-circle" className="w-5 h-5 text-blue-600" strokeWidth={2} aria-hidden="true" />
            <p className="text-xs sm:text-sm font-medium text-gray-700">{BUSINESS.REVIEW_COUNT} klanten</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10">
          <AfspraakForm />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-2">Liever direct bellen?</p>
          <a href={BUSINESS.PHONE_HREF} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg" aria-label={`Bel ${BUSINESS.PHONE}`}>
            <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            Bel {BUSINESS.PHONE}
          </a>
          <p className="text-xs text-gray-600 mt-2">{HOURS.DAYS} · {HOURS.OPEN}–{HOURS.CLOSE}</p>
        </div>
      </div>
    </div>
  )
}
