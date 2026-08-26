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
  /* Start op `true` zodat de banner in de server-HTML staat en bij de eerste
     paint zichtbaar is. Wie al gekozen heeft ziet hem niet: het inline
     head-script zet data-consent op <html> en CSS verbergt hem dan meteen.
     Het effect hieronder ruimt hem vervolgens netjes uit de DOM op. */
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) setVisible(false)
    } catch {
      // localStorage geblokkeerd — banner blijft staan
    }
  }, [])

  const decide = (granted: boolean) => {
    const choice = granted ? 'accepted' : 'rejected'
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      // negeer storage-fout
    }
    document.documentElement.setAttribute('data-consent', choice)
    updateConsent(granted)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-toestemming"
      /* mb-[76px] op mobiel houdt de sticky bel-balk volledig vrij */
      className="cookie-consent fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 mb-[76px] sm:mb-0 sm:px-6 sm:pb-6"
    >
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-2xl px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <p className="flex-1 text-sm text-gray-700 leading-snug">
            Wij gebruiken cookies voor de website en advertenties.{' '}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline font-medium">
              Lees meer
            </Link>
          </p>
          <div className="flex flex-row gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => decide(false)}
              className="flex-1 sm:flex-none px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Weigeren
            </button>
            <button
              type="button"
              onClick={() => decide(true)}
              className="flex-1 sm:flex-none px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
            >
              Accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
