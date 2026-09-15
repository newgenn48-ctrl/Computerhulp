'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/icons'
import { BUSINESS, HOURS } from '@/lib/constants'
import { validatePhone } from '@/lib/sanitize'

/* Ads-conversie voor een verzonden formulier (zelfde label als de bedankpagina,
   zodat Google Ads beide wegen als één conversie-actie "aanvraag" telt). */
const ADS_ID = 'AW-16733341823'
const FORM_LABEL = 'aDxYCK7Ct-gaEP-Qiqs-'

type Gtag = (...args: unknown[]) => void

/**
 * Terugbelformulier: naam en telefoonnummer, meer niet.
 *
 * Het volledige afspraakformulier (7 velden) blijft bestaan op /afspraak-maken
 * en /contact. Dit kleine formulier vangt de bezoeker die niet wil bellen én
 * niet zeven velden wil invullen: hij laat zijn nummer achter en wij bellen.
 * De aanvraag gaat naar /api/landing-afspraak en komt als losse mail binnen.
 */
export default function CallbackForm({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname()
  const [naam, setNaam] = useState('')
  const [telefoon, setTelefoon] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [errors, setErrors] = useState<{ naam?: string; telefoon?: string }>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e: { naam?: string; telefoon?: string } = {}
    if (naam.trim().length < 2) e.naam = 'Vul uw naam in'
    if (!validatePhone(telefoon)) e.telefoon = 'Vul een geldig telefoonnummer in, bijvoorbeeld 06-12345678'
    setErrors(e)
    if (e.naam || e.telefoon) {
      document.getElementById(e.naam ? 'cb-naam' : 'cb-telefoon')?.focus()
      return
    }

    setStatus('sending')
    setServerError('')
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10000)
    try {
      const res = await fetch('/api/landing-afspraak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ naam: naam.trim(), telefoon: telefoon.trim(), website, bron: pathname }),
        signal: controller.signal,
      })
      if (res.ok) {
        setStatus('sent')
        const w = window as Window & { gtag?: Gtag }
        if (typeof w.gtag === 'function') {
          w.gtag('event', 'lead_form', { event_category: 'contact', form: 'terugbellen' })
          w.gtag('event', 'conversion', { send_to: `${ADS_ID}/${FORM_LABEL}`, transaction_id: `cb-${Date.now()}` })
        }
      } else {
        const data = await res.json().catch(() => null)
        setServerError(typeof data?.error === 'string' ? data.error : '')
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      clearTimeout(timeout)
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" aria-live="polite" className="rounded-2xl bg-green-50 border border-green-200 p-5 sm:p-6">
        <p className="flex items-start gap-3 text-gray-900">
          <Icon name="check-circle" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            <strong className="block text-lg">Bedankt, {naam.trim()}. We bellen u zo snel mogelijk.</strong>
            Meestal binnen een uur, alle dagen tussen {HOURS.OPEN} en {HOURS.CLOSE} uur. Liever nu al iemand spreken? Bel{' '}
            <a href={BUSINESS.PHONE_HREF} translate="no" className="font-semibold text-blue-700 whitespace-nowrap underline">{BUSINESS.PHONE}</a>.
          </span>
        </p>
      </div>
    )
  }

  const inputClass = (bad?: string) =>
    `w-full px-4 py-3.5 border-2 rounded-xl text-base bg-white text-gray-900 focus:ring-2 focus:ring-blue-200 outline-none transition-colors ${
      bad ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={status === 'sending'} className="space-y-3">
      {status === 'error' && (
        <div role="alert" className="rounded-xl bg-red-50 border border-red-200 p-4 text-red-800 text-sm">
          {serverError ? `${serverError}. ` : 'Versturen is niet gelukt. '}
          Bel ons gerust direct op{' '}
          <a href={BUSINESS.PHONE_HREF} translate="no" className="font-bold underline whitespace-nowrap">{BUSINESS.PHONE}</a>.
        </div>
      )}

      <div className={compact ? 'grid sm:grid-cols-2 gap-3' : 'space-y-3'}>
        <div>
          <label htmlFor="cb-naam" className="block text-sm font-semibold text-gray-800 mb-1.5">Uw naam</label>
          <input
            id="cb-naam"
            name="naam"
            type="text"
            autoComplete="name"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            className={inputClass(errors.naam)}
            placeholder="Bijv. mevrouw De Vries"
            aria-invalid={errors.naam ? 'true' : 'false'}
            aria-describedby={errors.naam ? 'cb-naam-error' : undefined}
            disabled={status === 'sending'}
          />
          {errors.naam && <p id="cb-naam-error" className="mt-1 text-sm text-red-600">{errors.naam}</p>}
        </div>
        <div>
          <label htmlFor="cb-telefoon" className="block text-sm font-semibold text-gray-800 mb-1.5">Uw telefoonnummer</label>
          <input
            id="cb-telefoon"
            name="telefoon"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            spellCheck={false}
            value={telefoon}
            onChange={(e) => setTelefoon(e.target.value)}
            className={inputClass(errors.telefoon)}
            placeholder="06-12345678"
            aria-invalid={errors.telefoon ? 'true' : 'false'}
            aria-describedby={errors.telefoon ? 'cb-telefoon-error' : undefined}
            disabled={status === 'sending'}
          />
          {errors.telefoon && <p id="cb-telefoon-error" className="mt-1 text-sm text-red-600">{errors.telefoon}</p>}
        </div>
      </div>

      {/* Honeypot: mensen zien dit veld niet, bots vullen het in */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="cb-website">Website (laat leeg)</label>
        <input id="cb-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-submit">
        {status === 'sending' ? 'Versturen…' : 'Bel mij terug'}
      </button>
      <p className="text-sm text-gray-600 text-center">
        Gratis en vrijblijvend. We bellen meestal binnen een uur ({HOURS.OPEN} tot {HOURS.CLOSE} uur).
      </p>
    </form>
  )
}
