import { Icon } from '@/components/icons'
import { BUSINESS } from '@/lib/constants'

export default function TrustBadges() {
  return (
    <section className="bg-white border-b border-gray-100" aria-label="Waarom u ons kunt vertrouwen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 items-center">
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <Icon name="users" className="w-5 h-5 text-blue-600 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
            <div className="min-w-0">
              <div className="display-stat text-base text-gray-900 leading-tight">{BUSINESS.REVIEW_COUNT}</div>
              <p className="text-xs text-gray-600 leading-tight">klanten geholpen</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <Icon name="money" className="w-5 h-5 text-blue-600 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
            <div className="min-w-0">
              <div className="text-sm font-semibold text-gray-900 leading-tight">Betaalbare tarieven</div>
              <p className="text-xs text-gray-600 leading-tight">Geen verrassingen</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <Icon name="clock" className="w-5 h-5 text-blue-600 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
            <div className="min-w-0">
              <div className="display-stat text-base text-gray-900 leading-tight">&lt; 24u</div>
              <p className="text-xs text-gray-600 leading-tight">meestal bij u thuis</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <Icon name="check-circle" className="w-5 h-5 text-blue-600 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
            <div className="min-w-0">
              <div className="display-stat text-base text-gray-900 leading-tight">{BUSINESS.YEARS_ACTIVE} jaar</div>
              <p className="text-xs text-gray-600 leading-tight">ervaring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
