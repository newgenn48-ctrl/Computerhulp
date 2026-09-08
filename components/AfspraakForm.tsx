'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@/components/icons'
import { LEAD_SENT_KEY } from '@/components/ConversionTracker'
import { BUSINESS } from '@/lib/constants'

type Field = 'naam' | 'telefoon' | 'email' | 'adres' | 'postcode' | 'plaats' | 'probleem'

const validationRules: Record<Field, { required?: string; pattern?: [RegExp, string]; minLength?: [number, string] }> = {
  // Alle velden zijn verplicht: zo staat elke aanvraag compleet in de mail en hoeft niemand na te bellen voor het adres.
  naam: { required: 'Naam is verplicht', minLength: [2, 'Naam moet minimaal 2 karakters bevatten'] },
  telefoon: { required: 'Telefoonnummer is verplicht', pattern: [/^[\d\s\-\+\(\)]{10,}$/, 'Voer een geldig telefoonnummer in'] },
  email: { required: 'E-mailadres is verplicht', pattern: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Voer een geldig e-mailadres in'] },
  adres: { required: 'Straat en huisnummer zijn verplicht' },
  postcode: { required: 'Postcode is verplicht', pattern: [/^[1-9]\d{3}\s?[A-Za-z]{2}$/, 'Voer een geldige postcode in (bijv. 2511 CV)'] },
  plaats: { required: 'Woonplaats is verplicht' },
  probleem: { required: 'Beschrijf kort waar het om gaat', minLength: [10, 'Beschrijf in minimaal 10 tekens waar het om gaat'] },
}

function validate(name: Field, value: string): string {
  const rule = validationRules[name]
  if (!rule) return ''
  const trimmed = value.trim()
  if (!trimmed) return rule.required ?? ''
  if (rule.pattern && !rule.pattern[0].test(trimmed)) return rule.pattern[1]
  if (rule.minLength && trimmed.length < rule.minLength[0]) return rule.minLength[1]
  return ''
}

export default function AfspraakForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({ naam: '', telefoon: '', email: '', adres: '', postcode: '', plaats: '', probleem: '', website: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  // Waarschuw bij wegklikken als er al iets is ingevuld en nog niet is verstuurd
  const isDirty = Object.entries(formData).some(([k, v]) => k !== 'website' && v.trim() !== '')
  useEffect(() => {
    if (!isDirty || submitStatus === 'success') return
    const warn = (e: BeforeUnloadEvent) => { e.preventDefault() }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [isDirty, submitStatus])

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validate(name as Field, value) }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name as Field, value) }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const fields = Object.keys(validationRules) as Field[]
    const newErrors: Record<string, string> = {}
    const newTouched: Record<string, boolean> = {}
    fields.forEach(field => {
      newTouched[field] = true
      const error = validate(field, formData[field])
      if (error) newErrors[field] = error
    })
    setErrors(newErrors)
    setTouched(newTouched)
    if (Object.keys(newErrors).length > 0) {
      // Spring naar het eerste foute veld — anders lijkt het formulier
      // stil te falen wanneer de fout buiten beeld staat.
      const firstInvalid = fields.find(field => newErrors[field])
      if (firstInvalid) {
        const el = document.getElementById(firstInvalid)
        el?.focus({ preventScroll: true })
        el?.scrollIntoView({ block: 'center', behavior: 'smooth' })
      }
      return
    }

    // Offline check — spaart een timeout-ronde als netwerk weg is
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)

    try {
      const response = await fetch('/api/afspraak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })

      if (response.ok) {
        setSubmitStatus('success')
        try {
          window.sessionStorage.setItem(LEAD_SENT_KEY, '1')
        } catch {
          // sessionStorage kan geblokkeerd zijn; dan telt de bedankpagina niets, liever te weinig dan dubbel
        }
        router.push('/afspraak-bevestiging')
      } else {
        // Toon de reden van de server (bijv. ongeldig telefoonnummer) in plaats van een algemene melding
        const data = await response.json().catch(() => null)
        setServerError(typeof data?.error === 'string' ? data.error : '')
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      clearTimeout(timeoutId)
      setIsSubmitting(false)
    }
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-4 border-2 rounded-xl text-base focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
      touched[field] && errors[field] ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
    }`

  return (
    <>
      {submitStatus === 'error' && (
        <div role="alert" aria-live="assertive" className="alert-error">
          <div className="flex items-center">
            <Icon name="error-circle" className="w-6 h-6 text-red-500 mr-3" strokeWidth={2} aria-hidden="true" />
            <div>
              <h3 className="text-red-800 font-semibold">Er ging iets mis</h3>
              <p className="text-red-700 mt-1">{serverError ? `${serverError}. Of ` : 'Probeer het opnieuw of '}bel ons direct op <a href={BUSINESS.PHONE_HREF} translate="no" className="font-bold underline whitespace-nowrap">{BUSINESS.PHONE}</a></p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate aria-busy={isSubmitting} className="space-y-5">
        <div>
          <label htmlFor="naam" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Uw naam <span className="text-red-500" aria-hidden="true">*</span></label>
          <input
            type="text"
            id="naam"
            name="naam"
            value={formData.naam}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            autoComplete="name"
            className={inputClass('naam')}
            placeholder="Voor- en achternaam"
            aria-invalid={touched.naam && errors.naam ? 'true' : 'false'}
            aria-describedby={touched.naam && errors.naam ? 'naam-error' : undefined}
            disabled={isSubmitting}
          />
          {touched.naam && errors.naam && <p id="naam-error" role="alert" className="mt-1 text-sm text-red-600">{errors.naam}</p>}
        </div>

        <div>
          <label htmlFor="telefoon" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Telefoonnummer <span className="text-red-500" aria-hidden="true">*</span></label>
          <input
            type="tel"
            id="telefoon"
            name="telefoon"
            value={formData.telefoon}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            autoComplete="tel"
            inputMode="tel"
            spellCheck={false}
            className={inputClass('telefoon')}
            placeholder="06-12345678"
            aria-invalid={touched.telefoon && errors.telefoon ? 'true' : 'false'}
            aria-describedby={touched.telefoon && errors.telefoon ? 'telefoon-error' : undefined}
            disabled={isSubmitting}
          />
          {touched.telefoon && errors.telefoon && <p id="telefoon-error" role="alert" className="mt-1 text-sm text-red-600">{errors.telefoon}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
            E-mail <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            autoCapitalize="none"
            className={inputClass('email')}
            placeholder="uw@email.nl"
            aria-invalid={touched.email && errors.email ? 'true' : 'false'}
            aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
            disabled={isSubmitting}
          />
          {touched.email && errors.email && <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="adres" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Straat en huisnummer <span className="text-red-500" aria-hidden="true">*</span></label>
          <input
            type="text"
            id="adres"
            name="adres"
            required
            aria-required="true"
            value={formData.adres}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="street-address"
            className={inputClass('adres')}
            placeholder="Bijv. Stationsweg 12"
            aria-invalid={touched.adres && errors.adres ? 'true' : 'false'}
            aria-describedby={touched.adres && errors.adres ? 'adres-error' : undefined}
            disabled={isSubmitting}
          />
          {touched.adres && errors.adres && <p id="adres-error" role="alert" className="mt-1 text-sm text-red-600">{errors.adres}</p>}
        </div>

        <div className="grid grid-cols-[8.5rem_1fr] gap-3">
          <div>
            <label htmlFor="postcode" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Postcode <span className="text-red-500" aria-hidden="true">*</span></label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              required
              aria-required="true"
              value={formData.postcode}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="postal-code"
              spellCheck={false}
              className={inputClass('postcode')}
              placeholder="2511 CV"
              aria-invalid={touched.postcode && errors.postcode ? 'true' : 'false'}
              aria-describedby={touched.postcode && errors.postcode ? 'postcode-error' : undefined}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="plaats" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Woonplaats <span className="text-red-500" aria-hidden="true">*</span></label>
            <input
              type="text"
              id="plaats"
              name="plaats"
              required
              aria-required="true"
              value={formData.plaats}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="address-level2"
              className={inputClass('plaats')}
              placeholder="Bijv. Den Haag"
              aria-invalid={touched.plaats && errors.plaats ? 'true' : 'false'}
              aria-describedby={touched.plaats && errors.plaats ? 'plaats-error' : undefined}
              disabled={isSubmitting}
            />
          </div>
        </div>
        {/* Fouten van het postcode/plaats-paar onder de rij, zodat de kolommen niet verspringen */}
        {((touched.postcode && errors.postcode) || (touched.plaats && errors.plaats)) && (
          <div className="-mt-3">
            {touched.postcode && errors.postcode && <p id="postcode-error" role="alert" className="text-sm text-red-600">{errors.postcode}</p>}
            {touched.plaats && errors.plaats && <p id="plaats-error" role="alert" className="text-sm text-red-600">{errors.plaats}</p>}
          </div>
        )}

        <div>
          <label htmlFor="probleem" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Waar gaat het om? <span className="text-red-500" aria-hidden="true">*</span></label>
          <textarea
            id="probleem"
            name="probleem"
            required
            aria-required="true"
            value={formData.probleem}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
            className={`${inputClass('probleem')} resize-none`}
            placeholder="Bijv. ‘Mijn laptop start niet op’ of ‘Wifi werkt niet meer’"
            aria-invalid={touched.probleem && errors.probleem ? 'true' : 'false'}
            aria-describedby={touched.probleem && errors.probleem ? 'probleem-error' : undefined}
            disabled={isSubmitting}
          />
          {touched.probleem && errors.probleem && <p id="probleem-error" role="alert" className="mt-1 text-sm text-red-600">{errors.probleem}</p>}
        </div>

        {/* Honeypot — real users won't fill this, bots will */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <label htmlFor="website">Website (laat leeg)</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-submit">
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Versturen…
            </span>
          ) : (
            'Hulp vragen'
          )}
        </button>

      </form>
    </>
  )
}
