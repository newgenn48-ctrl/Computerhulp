'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'cookie-consent'

function updateConsent(granted: boolean) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  const value = granted ? 'granted' : 'denied'
  window.gtag('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
    personalization_storage: value,
  })
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      // localStorage geblokkeerd — toon banner alsnog
      setVisible(true)
    }
  }, [])

  const decide = (granted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? 'accepted' : 'rejected')
    } catch {
      // negeer storage-fout
    }
    updateConsent(granted)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-toestemming"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-2xl p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex-1 text-sm sm:text-base text-gray-700 leading-relaxed">
            Wij gebruiken cookies om de site te verbeteren en relevante advertenties te tonen. U bepaalt zelf wat u toestaat.{' '}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline font-medium">
              Lees meer
            </Link>
            .
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={() => decide(false)}
              className="px-5 py-3 text-sm sm:text-base font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
            >
              Weigeren
            </button>
            <button
              type="button"
              onClick={() => decide(true)}
              className="px-5 py-3 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm"
            >
              Accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
