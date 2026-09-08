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

/** sessionStorage-sleutel die het formulier zet vlak vóór de doorverwijzing naar de bedankpagina. */
export const LEAD_SENT_KEY = 'chzh-lead-sent'

/**
 * Fires a Google Ads conversion event on mount, maar alleen als het formulier
 * daadwerkelijk zojuist is verzonden. Zonder deze vlag (direct bezoek, verversen,
 * terugknop) telt de bedankpagina niets, zodat één inzending één conversie is.
 */
export default function ConversionTracker({ conversionId, conversionLabel }: ConversionTrackerProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    let sent = false
    try {
      sent = window.sessionStorage.getItem(LEAD_SENT_KEY) === '1'
      if (sent) window.sessionStorage.removeItem(LEAD_SENT_KEY)
    } catch {
      sent = false
    }
    if (sent && window.gtag) {
      // Zelfde verzending ook als GA4-gebeurtenis (belangrijke gebeurtenis 'lead_form')
      window.gtag('event', 'lead_form', { event_category: 'contact' })
      window.gtag('event', 'conversion', {
        send_to: `${conversionId}/${conversionLabel}`,
        transaction_id: `lead-${Date.now()}`,
      })
    }
  }, [conversionId, conversionLabel])

  return null
}
