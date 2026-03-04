'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@/components/icons'

const validationRules: Record<string, { required: string; pattern?: [RegExp, string]; minLength?: [number, string] }> = {
  naam: { required: 'Naam is verplicht', minLength: [2, 'Naam moet minimaal 2 karakters bevatten'] },
  telefoon: { required: 'Telefoonnummer is verplicht', pattern: [/^[\d\s\-\+\(\)]{10,}$/, 'Voer een geldig telefoonnummer in'] },
  email: { required: 'E-mail is verplicht', pattern: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Voer een geldig e-mailadres in'] },
  straat: { required: 'Straatnaam is verplicht', minLength: [2, 'Straatnaam moet minimaal 2 karakters bevatten'] },
  huisnummer: { required: 'Huisnummer is verplicht' },
  postcode: { required: 'Postcode is verplicht', pattern: [/^\d{4}\s?[A-Za-z]{2}$/, 'Voer een geldige postcode in (bijv. 2514 JG)'] },
  plaats: { required: 'Plaats is verplicht', minLength: [2, 'Plaats moet minimaal 2 karakters bevatten'] },
  probleem: { required: 'Beschrijf uw probleem', minLength: [10, 'Beschrijf uw probleem iets uitgebreider (minimaal 10 karakters)'] },
}

function validate(name: string, value: string): string {
  const rule = validationRules[name]
  if (!rule) return ''
  const trimmed = value.trim()
  if (!trimmed) return rule.required
  if (rule.pattern && !rule.pattern[0].test(trimmed)) return rule.pattern[1]
  if (rule.minLength && trimmed.length < rule.minLength[0]) return rule.minLength[1]
  return ''
}

export default function AfspraakForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    naam: '', telefoon: '', email: '', straat: '', huisnummer: '', postcode: '', plaats: '', probleem: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isLookingUp, setIsLookingUp] = useState(false)

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }))
    }
  }

  const lookupAddress = useCallback(async (postcode: string, huisnummer: string) => {
    const pc = postcode.trim().replace(/\s/g, '')
    const nr = huisnummer.trim().replace(/[^0-9]/g, '')
    if (!/^\d{4}[A-Za-z]{2}$/.test(pc) || !nr) return

    setIsLookingUp(true)
    try {
      const res = await fetch(`https://postcode.tech/api/v1/postcode/full?postcode=${pc}&number=${nr}`, {
        headers: { 'Authorization': 'Bearer b1dc79fe-7aed-4a25-be99-43e0e0e9c8e4' }
      })
      if (res.ok) {
        const data = await res.json()
        if (data.street && data.city) {
          setFormData(prev => ({ ...prev, straat: data.street, plaats: data.city }))
          setErrors(prev => ({ ...prev, straat: '', plaats: '' }))
        }
      }
    } catch {
      // Silently fail — user can fill in manually
    } finally {
      setIsLookingUp(false)
    }
  }, [])

  const handlePostcodeBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleBlur(e)
    lookupAddress(e.target.value, formData.huisnummer)
  }

  const handleHuisnummerBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleBlur(e)
    lookupAddress(formData.postcode, e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const fields = Object.keys(validationRules)
    const newErrors: Record<string, string> = {}
    const newTouched: Record<string, boolean> = {}
    fields.forEach(field => {
      newTouched[field] = true
      const error = validate(field, formData[field as keyof typeof formData])
      if (error) newErrors[field] = error
    })
    setErrors(newErrors)
    setTouched(newTouched)
    if (Object.keys(newErrors).length > 0) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/afspraak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitStatus('success')
        router.push('/afspraak-bevestiging')
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
      touched[field] && errors[field] ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
    }`

  return (
    <>
      {submitStatus === 'success' && (
        <div role="alert" aria-live="polite" className="mb-6 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg">
          <div className="flex items-center">
            <Icon name="check-circle-outline" className="w-6 h-6 text-green-500 mr-3" strokeWidth={2} aria-hidden="true" />
            <div>
              <h3 className="text-green-800 font-semibold">Aanvraag verzonden!</h3>
              <p className="text-green-700 mt-1">We nemen binnen enkele uren contact met u op om de afspraak te bevestigen.</p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div role="alert" aria-live="assertive" className="mb-6 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg">
          <div className="flex items-center">
            <Icon name="error-circle" className="w-6 h-6 text-red-500 mr-3" strokeWidth={2} aria-hidden="true" />
            <div>
              <h3 className="text-red-800 font-semibold">Er ging iets mis</h3>
              <p className="text-red-700 mt-1">Probeer het opnieuw of bel ons direct op <a href="tel:+31858002006" className="font-bold underline">085-8002006</a></p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="naam" className="form-label">Naam <span aria-hidden="true">*</span></label>
            <input type="text" id="naam" name="naam" value={formData.naam} onChange={handleChange} onBlur={handleBlur} required aria-required="true" className={inputClass('naam')} placeholder="Voor- en achternaam" aria-invalid={touched.naam && errors.naam ? 'true' : 'false'} aria-describedby={touched.naam && errors.naam ? 'naam-error' : undefined} />
            {touched.naam && errors.naam && <p id="naam-error" role="alert" className="mt-1 text-sm text-red-600">{errors.naam}</p>}
          </div>
          <div>
            <label htmlFor="telefoon" className="form-label">Telefoonnummer <span aria-hidden="true">*</span></label>
            <input type="tel" id="telefoon" name="telefoon" value={formData.telefoon} onChange={handleChange} onBlur={handleBlur} className={inputClass('telefoon')} placeholder="06-12345678" aria-invalid={touched.telefoon && errors.telefoon ? 'true' : 'false'} aria-describedby={touched.telefoon && errors.telefoon ? 'telefoon-error' : undefined} />
            {touched.telefoon && errors.telefoon && <p id="telefoon-error" role="alert" className="mt-1 text-sm text-red-600">{errors.telefoon}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="form-label">E-mail <span aria-hidden="true">*</span></label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={inputClass('email')} placeholder="uw@email.nl" aria-invalid={touched.email && errors.email ? 'true' : 'false'} aria-describedby={touched.email && errors.email ? 'email-error' : undefined} />
          {touched.email && errors.email && <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="postcode" className="form-label">Postcode <span aria-hidden="true">*</span></label>
            <input type="text" id="postcode" name="postcode" value={formData.postcode} onChange={handleChange} onBlur={handlePostcodeBlur} className={inputClass('postcode')} placeholder="2514 JG" aria-invalid={touched.postcode && errors.postcode ? 'true' : 'false'} aria-describedby={touched.postcode && errors.postcode ? 'postcode-error' : undefined} />
            {touched.postcode && errors.postcode && <p id="postcode-error" role="alert" className="mt-1 text-sm text-red-600">{errors.postcode}</p>}
          </div>
          <div>
            <label htmlFor="huisnummer" className="form-label">Huisnummer <span aria-hidden="true">*</span></label>
            <input type="text" id="huisnummer" name="huisnummer" value={formData.huisnummer} onChange={handleChange} onBlur={handleHuisnummerBlur} className={inputClass('huisnummer')} placeholder="123A" aria-invalid={touched.huisnummer && errors.huisnummer ? 'true' : 'false'} aria-describedby={touched.huisnummer && errors.huisnummer ? 'huisnummer-error' : undefined} />
            {touched.huisnummer && errors.huisnummer && <p id="huisnummer-error" role="alert" className="mt-1 text-sm text-red-600">{errors.huisnummer}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="sm:col-span-2">
            <label htmlFor="straat" className="form-label">
              Straatnaam <span aria-hidden="true">*</span>
              {isLookingUp && <span className="ml-2 text-blue-500 text-sm font-normal">Opzoeken...</span>}
            </label>
            <input type="text" id="straat" name="straat" value={formData.straat} onChange={handleChange} onBlur={handleBlur} className={inputClass('straat')} placeholder="Wordt automatisch ingevuld" aria-invalid={touched.straat && errors.straat ? 'true' : 'false'} aria-describedby={touched.straat && errors.straat ? 'straat-error' : undefined} />
            {touched.straat && errors.straat && <p id="straat-error" role="alert" className="mt-1 text-sm text-red-600">{errors.straat}</p>}
          </div>
          <div>
            <label htmlFor="plaats" className="form-label">
              Plaats <span aria-hidden="true">*</span>
              {isLookingUp && <span className="ml-2 text-blue-500 text-sm font-normal">Opzoeken...</span>}
            </label>
            <input type="text" id="plaats" name="plaats" value={formData.plaats} onChange={handleChange} onBlur={handleBlur} className={inputClass('plaats')} placeholder="Wordt automatisch ingevuld" aria-invalid={touched.plaats && errors.plaats ? 'true' : 'false'} aria-describedby={touched.plaats && errors.plaats ? 'plaats-error' : undefined} />
            {touched.plaats && errors.plaats && <p id="plaats-error" role="alert" className="mt-1 text-sm text-red-600">{errors.plaats}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="probleem" className="form-label">Wat is het probleem? <span aria-hidden="true">*</span></label>
          <textarea id="probleem" name="probleem" value={formData.probleem} onChange={handleChange} onBlur={handleBlur} rows={5} className={`${inputClass('probleem')} resize-none`} placeholder="Beschrijf kort wat het probleem is, bijv: 'Mijn computer start niet op' of 'WiFi werkt niet meer'" aria-invalid={touched.probleem && errors.probleem ? 'true' : 'false'} aria-describedby={touched.probleem && errors.probleem ? 'probleem-error' : undefined} />
          {touched.probleem && errors.probleem && <p id="probleem-error" role="alert" className="mt-1 text-sm text-red-600">{errors.probleem}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-submit">
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Bezig met verzenden...
            </span>
          ) : (
            'Afspraak Aanvragen'
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          We nemen binnen enkele uren contact met u op om de afspraak te bevestigen
        </p>
      </form>
    </>
  )
}
