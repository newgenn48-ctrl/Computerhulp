'use client'

import { useEffect } from 'react'

interface ConversionTrackerProps {
  conversionId: string
  conversionLabel: string
}

export default function ConversionTracker({ conversionId, conversionLabel }: ConversionTrackerProps) {
  useEffect(() => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      // Send conversion event to Google Ads
      (window as any).gtag('event', 'conversion', {
        'send_to': `${conversionId}/${conversionLabel}`
      })

      console.log('Google Ads conversion tracked:', `${conversionId}/${conversionLabel}`)
    }
  }, [conversionId, conversionLabel])

  return null // This component doesn't render anything
}
