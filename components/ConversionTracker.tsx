'use client'

import { useEffect } from 'react'

interface ConversionTrackerProps {
  conversionId: string
  conversionLabel: string
}

type GtagFn = (command: string, eventName: string, params: Record<string, unknown>) => void

declare global {
  interface Window {
    gtag?: GtagFn
  }
}

/**
 * Fires a Google Ads conversion event on mount.
 * Used on afspraak-bevestiging + offerte-bevestiging to track form submits.
 */
export default function ConversionTracker({ conversionId, conversionLabel }: ConversionTrackerProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: `${conversionId}/${conversionLabel}`,
      })
    }
  }, [conversionId, conversionLabel])

  return null
}
