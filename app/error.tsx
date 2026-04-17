'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS } from '@/lib/constants'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error caught by boundary:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 pt-20 pb-20">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="error-circle" className="w-10 h-10 text-red-500" strokeWidth={2} aria-hidden="true" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Er ging iets mis
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Onze excuses. Er is een onverwachte fout opgetreden. Probeer het opnieuw of bel ons direct.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 text-left">
              <p className="text-red-700 text-sm font-mono break-all">{error.message}</p>
              {error.digest && (
                <p className="text-red-600 text-xs mt-2">Error ID: {error.digest}</p>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={BUSINESS.PHONE_HREF} className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              Bel {BUSINESS.PHONE}
            </a>
            <button onClick={reset} className="btn-secondary">
              <Icon name="refresh" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              Probeer opnieuw
            </button>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2">
              <Icon name="home" className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
              Terug naar home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
