import Link from 'next/link'
import { Metadata } from 'next'
import { Icon } from '@/components/icons'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Pagina niet gevonden (404)',
  description: 'De pagina die u zoekt bestaat niet. Ga terug naar de homepage of neem contact met ons op.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 pt-20 pb-20">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
          <div className="mb-6">
            <h1 className="text-7xl sm:text-8xl font-bold text-blue-600">404</h1>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Pagina niet gevonden
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            De pagina die u zoekt bestaat niet of is verplaatst.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={BUSINESS.PHONE_HREF} className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              Bel {BUSINESS.PHONE}
            </a>
            <Link href="/" className="btn-secondary">
              <Icon name="home" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              Terug naar home
            </Link>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-500 mb-3">Populaire pagina&apos;s</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/computerhulp-aan-huis" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Computerhulp aan huis
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/student-aan-huis" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Student aan huis
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/diensten" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Alle diensten
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/tarieven" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Tarieven
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
