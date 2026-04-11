'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@/components/icons'

const validationRules: Record<string, { required: string; pattern?: [RegExp, string]; minLength?: [number, string] }> = {
  naam: { required: 'Naam is verplicht', minLength: [2, 'Naam moet minimaal 2 karakters bevatten'] },
  telefoon: { required: 'Telefoonnummer is verplicht', pattern: [/^[\d\s\-\+\(\)]{10,}$/, 'Voer een geldig telefoonnummer in'] },
  email: { required: 'E-mailadres is verplicht', pattern: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Voer een geldig e-mailadres in'] },
  probleem: { required: 'Beschrijf kort uw probleem', minLength: [10, 'Beschrijf uw probleem iets uitgebreider'] },
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
  const [formData, setFormData] = useState({ naam: '', telefoon: '', email: '', probleem: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)

      const response = await fetch('/api/afspraak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })
      clearTimeout(timeoutId)

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
              <p className="text-red-700 mt-1">Probeer het opnieuw of bel ons direct op <a href="tel:+31858002006" className="font-bold underline">085-8002006</a></p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="naam" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Uw naam <span className="text-red-500" aria-hidden="true">*</span></label>
          <input type="text" id="naam" name="naam" value={formData.naam} onChange={handleChange} onBlur={handleBlur} required aria-required="true" className={inputClass('naam')} placeholder="Voor- en achternaam" aria-invalid={touched.naam && errors.naam ? 'true' : 'false'} disabled={isSubmitting} />
          {touched.naam && errors.naam && <p role="alert" className="mt-1 text-sm text-red-600">{errors.naam}</p>}
        </div>

        <div>
          <label htmlFor="telefoon" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Telefoonnummer <span className="text-red-500" aria-hidden="true">*</span></label>
          <input type="tel" id="telefoon" name="telefoon" value={formData.telefoon} onChange={handleChange} onBlur={handleBlur} required aria-required="true" className={inputClass('telefoon')} placeholder="06-12345678" aria-invalid={touched.telefoon && errors.telefoon ? 'true' : 'false'} disabled={isSubmitting} />
          {touched.telefoon && errors.telefoon && <p role="alert" className="mt-1 text-sm text-red-600">{errors.telefoon}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">E-mail <span className="text-red-500" aria-hidden="true">*</span></label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required aria-required="true" className={inputClass('email')} placeholder="uw@email.nl" aria-invalid={touched.email && errors.email ? 'true' : 'false'} disabled={isSubmitting} />
          {touched.email && errors.email && <p role="alert" className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="probleem" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Wat is het probleem? <span className="text-red-500" aria-hidden="true">*</span></label>
          <textarea id="probleem" name="probleem" value={formData.probleem} onChange={handleChange} onBlur={handleBlur} rows={4} className={`${inputClass('probleem')} resize-none`} placeholder="Bijv: 'Mijn laptop start niet op' of 'WiFi werkt niet meer'" aria-invalid={touched.probleem && errors.probleem ? 'true' : 'false'} disabled={isSubmitting} />
          {touched.probleem && errors.probleem && <p role="alert" className="mt-1 text-sm text-red-600">{errors.probleem}</p>}
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
            'Hulp Vragen'
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          We bellen u binnen enkele uren terug om de afspraak te bevestigen
        </p>
      </form>
    </>
  )
}
