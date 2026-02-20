'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@/components/icons'

export default function AfspraakMakenPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    naam: '',
    telefoon: '',
    email: '',
    straat: '',
    huisnummer: '',
    postcode: '',
    plaats: '',
    probleem: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateField = (name: string, value: string) => {
    let error = ''

    switch (name) {
      case 'naam':
        if (!value.trim()) {
          error = 'Naam is verplicht'
        } else if (value.trim().length < 2) {
          error = 'Naam moet minimaal 2 karakters bevatten'
        }
        break
      case 'telefoon':
        if (!value.trim()) {
          error = 'Telefoonnummer is verplicht'
        } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(value.trim())) {
          error = 'Voer een geldig telefoonnummer in'
        }
        break
      case 'email':
        if (!value.trim()) {
          error = 'E-mail is verplicht'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          error = 'Voer een geldig e-mailadres in'
        }
        break
      case 'straat':
        if (!value.trim()) {
          error = 'Straatnaam is verplicht'
        } else if (value.trim().length < 2) {
          error = 'Straatnaam moet minimaal 2 karakters bevatten'
        }
        break
      case 'huisnummer':
        if (!value.trim()) {
          error = 'Huisnummer is verplicht'
        }
        break
      case 'postcode':
        if (!value.trim()) {
          error = 'Postcode is verplicht'
        } else if (!/^\d{4}\s?[A-Za-z]{2}$/.test(value.trim())) {
          error = 'Voer een geldige postcode in (bijv. 2514 JG)'
        }
        break
      case 'plaats':
        if (!value.trim()) {
          error = 'Plaats is verplicht'
        } else if (value.trim().length < 2) {
          error = 'Plaats moet minimaal 2 karakters bevatten'
        }
        break
      case 'probleem':
        if (!value.trim()) {
          error = 'Beschrijf uw probleem'
        } else if (value.trim().length < 10) {
          error = 'Beschrijf uw probleem iets uitgebreider (minimaal 10 karakters)'
        }
        break
    }

    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    const newTouched: Record<string, boolean> = {}

    const fields = ['naam', 'telefoon', 'email', 'straat', 'huisnummer', 'postcode', 'plaats', 'probleem']
    fields.forEach(field => {
      newTouched[field] = true
      const value = formData[field as keyof typeof formData]

      switch (field) {
        case 'naam':
          if (!value.trim()) newErrors.naam = 'Naam is verplicht'
          else if (value.trim().length < 2) newErrors.naam = 'Naam moet minimaal 2 karakters bevatten'
          break
        case 'telefoon':
          if (!value.trim()) newErrors.telefoon = 'Telefoonnummer is verplicht'
          else if (!/^[\d\s\-\+\(\)]{10,}$/.test(value.trim())) newErrors.telefoon = 'Voer een geldig telefoonnummer in'
          break
        case 'email':
          if (!value.trim()) newErrors.email = 'E-mail is verplicht'
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) newErrors.email = 'Voer een geldig e-mailadres in'
          break
        case 'straat':
          if (!value.trim()) newErrors.straat = 'Straatnaam is verplicht'
          else if (value.trim().length < 2) newErrors.straat = 'Straatnaam moet minimaal 2 karakters bevatten'
          break
        case 'huisnummer':
          if (!value.trim()) newErrors.huisnummer = 'Huisnummer is verplicht'
          break
        case 'postcode':
          if (!value.trim()) newErrors.postcode = 'Postcode is verplicht'
          else if (!/^\d{4}\s?[A-Za-z]{2}$/.test(value.trim())) newErrors.postcode = 'Voer een geldige postcode in (bijv. 2514 JG)'
          break
        case 'plaats':
          if (!value.trim()) newErrors.plaats = 'Plaats is verplicht'
          else if (value.trim().length < 2) newErrors.plaats = 'Plaats moet minimaal 2 karakters bevatten'
          break
        case 'probleem':
          if (!value.trim()) newErrors.probleem = 'Beschrijf uw probleem'
          else if (value.trim().length < 10) newErrors.probleem = 'Beschrijf uw probleem iets uitgebreider (minimaal 10 karakters)'
          break
      }
    })

    setErrors(newErrors)
    setTouched(newTouched)
    return Object.keys(newErrors).length === 0
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    validateField(name, value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Valideer real-time als veld al touched is
    if (touched[name]) {
      validateField(name, value)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/afspraak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Redirect naar bevestigingspagina
        router.push('/afspraak-bevestiging')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Plan Direct Uw Afspraak
              </h2>
              <p className="text-gray-600 text-lg">
                Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met u op
              </p>
            </div>

            {/* Success Message */}
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

            {/* Error Message */}
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
                  <label htmlFor="naam" className="block text-sm font-semibold text-gray-700 mb-2">
                    Naam <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    value={formData.naam}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                      touched.naam && errors.naam
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Voor- en achternaam"
                    aria-invalid={touched.naam && errors.naam ? 'true' : 'false'}
                    aria-describedby={touched.naam && errors.naam ? 'naam-error' : undefined}
                  />
                  {touched.naam && errors.naam && (
                    <p id="naam-error" role="alert" className="mt-1 text-sm text-red-600">{errors.naam}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefoon" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefoonnummer <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    value={formData.telefoon}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                      touched.telefoon && errors.telefoon
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="06-12345678"
                    aria-invalid={touched.telefoon && errors.telefoon ? 'true' : 'false'}
                    aria-describedby={touched.telefoon && errors.telefoon ? 'telefoon-error' : undefined}
                  />
                  {touched.telefoon && errors.telefoon && (
                    <p id="telefoon-error" role="alert" className="mt-1 text-sm text-red-600">{errors.telefoon}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail <span aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                    touched.email && errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="uw@email.nl"
                  aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                  aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                />
                {touched.email && errors.email && (
                  <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2">
                  <label htmlFor="straat" className="block text-sm font-semibold text-gray-700 mb-2">
                    Straatnaam <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="straat"
                    name="straat"
                    value={formData.straat}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                      touched.straat && errors.straat
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="bijv. Prins Hendrikstraat"
                    aria-invalid={touched.straat && errors.straat ? 'true' : 'false'}
                    aria-describedby={touched.straat && errors.straat ? 'straat-error' : undefined}
                  />
                  {touched.straat && errors.straat && (
                    <p id="straat-error" role="alert" className="mt-1 text-sm text-red-600">{errors.straat}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="huisnummer" className="block text-sm font-semibold text-gray-700 mb-2">
                    Huisnummer <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="huisnummer"
                    name="huisnummer"
                    value={formData.huisnummer}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                      touched.huisnummer && errors.huisnummer
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="123A"
                    aria-invalid={touched.huisnummer && errors.huisnummer ? 'true' : 'false'}
                    aria-describedby={touched.huisnummer && errors.huisnummer ? 'huisnummer-error' : undefined}
                  />
                  {touched.huisnummer && errors.huisnummer && (
                    <p id="huisnummer-error" role="alert" className="mt-1 text-sm text-red-600">{errors.huisnummer}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="postcode" className="block text-sm font-semibold text-gray-700 mb-2">
                    Postcode <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                      touched.postcode && errors.postcode
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="2514 JG"
                    aria-invalid={touched.postcode && errors.postcode ? 'true' : 'false'}
                    aria-describedby={touched.postcode && errors.postcode ? 'postcode-error' : undefined}
                  />
                  {touched.postcode && errors.postcode && (
                    <p id="postcode-error" role="alert" className="mt-1 text-sm text-red-600">{errors.postcode}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="plaats" className="block text-sm font-semibold text-gray-700 mb-2">
                    Plaats <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="plaats"
                    name="plaats"
                    value={formData.plaats}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                      touched.plaats && errors.plaats
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Den Haag"
                    aria-invalid={touched.plaats && errors.plaats ? 'true' : 'false'}
                    aria-describedby={touched.plaats && errors.plaats ? 'plaats-error' : undefined}
                  />
                  {touched.plaats && errors.plaats && (
                    <p id="plaats-error" role="alert" className="mt-1 text-sm text-red-600">{errors.plaats}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="probleem" className="block text-sm font-semibold text-gray-700 mb-2">
                  Wat is het probleem? <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="probleem"
                  name="probleem"
                  value={formData.probleem}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none resize-none ${
                    touched.probleem && errors.probleem
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Beschrijf kort wat het probleem is, bijv: 'Mijn computer start niet op' of 'WiFi werkt niet meer'"
                  aria-invalid={touched.probleem && errors.probleem ? 'true' : 'false'}
                  aria-describedby={touched.probleem && errors.probleem ? 'probleem-error' : undefined}
                ></textarea>
                {touched.probleem && errors.probleem && (
                  <p id="probleem-error" role="alert" className="mt-1 text-sm text-red-600">{errors.probleem}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
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
          </div>
        </div>
    </div>
  )
}
