import { Icon } from '@/components/icons'

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
      <div className="text-center">
        <div className="text-xl sm:text-2xl font-bold text-blue-600">500+</div>
        <p className="text-sm text-gray-600">Tevreden klanten</p>
      </div>
      <div className="text-center">
        <Icon name="shield" className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 mx-auto mb-1" strokeWidth={2} />
        <p className="text-sm text-gray-600">KvK geregistreerd</p>
      </div>
      <div className="text-center">
        <div className="text-xl sm:text-2xl font-bold text-blue-600">&lt;24u</div>
        <p className="text-sm text-gray-600">Reactietijd</p>
      </div>
    </div>
  )
}
