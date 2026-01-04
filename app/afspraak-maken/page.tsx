'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

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
          error = 'Email is verplicht'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          error = 'Voer een geldig emailadres in'
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
          if (!value.trim()) newErrors.email = 'Email is verplicht'
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) newErrors.email = 'Voer een geldig emailadres in'
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
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-blue-100">
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
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl" role="alert" aria-live="polite">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-green-900 mb-1">Aanvraag verzonden!</h3>
                    <p className="text-green-800 text-sm">We nemen binnen enkele uren contact met u op om de afspraak te bevestigen.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl" role="alert" aria-live="assertive">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-red-900 mb-1">Er ging iets mis</h3>
                    <p className="text-red-800 text-sm">Probeer het opnieuw of bel ons direct op <a href="tel:+31642548451" className="underline font-semibold">Bel Direct</a></p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Persoonlijke Gegevens */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Uw Gegevens
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="naam" className="block text-sm font-semibold text-gray-700 mb-2">
                      Naam *
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
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-colors outline-none bg-white ${
                        touched.naam && errors.naam
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                      }`}
                      placeholder="Voor- en achternaam"
                      aria-invalid={touched.naam && errors.naam ? 'true' : 'false'}
                      aria-describedby={touched.naam && errors.naam ? 'naam-error' : undefined}
                    />
                    {touched.naam && errors.naam && (
                      <p id="naam-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.naam}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telefoon" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      value={formData.telefoon}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-colors outline-none bg-white ${
                        touched.telefoon && errors.telefoon
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                      }`}
                      placeholder="06-12345678"
                      aria-invalid={touched.telefoon && errors.telefoon ? 'true' : 'false'}
                      aria-describedby={touched.telefoon && errors.telefoon ? 'telefoon-error' : undefined}
                    />
                    {touched.telefoon && errors.telefoon && (
                      <p id="telefoon-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.telefoon}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border-2 rounded-lg transition-colors outline-none bg-white ${
                      touched.email && errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }`}
                    placeholder="uw@email.nl"
                    aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                    aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                  />
                  {touched.email && errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="mt-6 grid sm:grid-cols-3 gap-6">
                  <div className="sm:col-span-2">
                    <label htmlFor="straat" className="block text-sm font-semibold text-gray-700 mb-2">
                      Straatnaam *
                    </label>
                    <input
                      type="text"
                      id="straat"
                      name="straat"
                      value={formData.straat}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-colors outline-none bg-white ${
                        touched.straat && errors.straat
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                      }`}
                      placeholder="bijv. Prins Hendrikstraat"
                      aria-invalid={touched.straat && errors.straat ? 'true' : 'false'}
                      aria-describedby={touched.straat && errors.straat ? 'straat-error' : undefined}
                    />
                    {touched.straat && errors.straat && (
                      <p id="straat-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.straat}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="huisnummer" className="block text-sm font-semibold text-gray-700 mb-2">
                      Huisnummer *
                    </label>
                    <input
                      type="text"
                      id="huisnummer"
                      name="huisnummer"
                      value={formData.huisnummer}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-colors outline-none bg-white ${
                        touched.huisnummer && errors.huisnummer
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                      }`}
                      placeholder="123A"
                      aria-invalid={touched.huisnummer && errors.huisnummer ? 'true' : 'false'}
                      aria-describedby={touched.huisnummer && errors.huisnummer ? 'huisnummer-error' : undefined}
                    />
                    {touched.huisnummer && errors.huisnummer && (
                      <p id="huisnummer-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.huisnummer}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="postcode" className="block text-sm font-semibold text-gray-700 mb-2">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-colors outline-none bg-white ${
                        touched.postcode && errors.postcode
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                      }`}
                      placeholder="2514 JG"
                      aria-invalid={touched.postcode && errors.postcode ? 'true' : 'false'}
                      aria-describedby={touched.postcode && errors.postcode ? 'postcode-error' : undefined}
                    />
                    {touched.postcode && errors.postcode && (
                      <p id="postcode-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.postcode}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="plaats" className="block text-sm font-semibold text-gray-700 mb-2">
                      Plaats *
                    </label>
                    <input
                      type="text"
                      id="plaats"
                      name="plaats"
                      value={formData.plaats}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-colors outline-none bg-white ${
                        touched.plaats && errors.plaats
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                      }`}
                      placeholder="Den Haag"
                      aria-invalid={touched.plaats && errors.plaats ? 'true' : 'false'}
                      aria-describedby={touched.plaats && errors.plaats ? 'plaats-error' : undefined}
                    />
                    {touched.plaats && errors.plaats && (
                      <p id="plaats-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.plaats}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Probleem Omschrijving */}
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Uw Probleem
                </h3>

                <div>
                  <label htmlFor="probleem" className="block text-sm font-semibold text-gray-700 mb-2">
                    Wat is het probleem? *
                  </label>
                  <textarea
                    id="probleem"
                    name="probleem"
                    value={formData.probleem}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    className={`w-full px-4 py-3 border-2 rounded-lg transition-colors outline-none resize-none bg-white ${
                      touched.probleem && errors.probleem
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }`}
                    placeholder="Beschrijf kort wat het probleem is. Bijvoorbeeld:&#10;• Mijn computer start niet meer op&#10;• WiFi werkt niet in mijn huis&#10;• Printer wil niet printen&#10;• Email kan ik niet openen"
                    aria-invalid={touched.probleem && errors.probleem ? 'true' : 'false'}
                    aria-describedby={touched.probleem && errors.probleem ? 'probleem-error' : undefined}
                  ></textarea>
                  {touched.probleem && errors.probleem && (
                    <p id="probleem-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.probleem}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/50 hover:scale-105 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Bezig met verzenden...
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Afspraak Aanvragen
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center mt-6">
                  Na het versturen nemen we binnen <strong className="text-gray-900">enkele uren</strong> contact met u op om de afspraak te bevestigen.
                  <br />
                  Bij spoed kunt u ook direct bellen: <a href="tel:+31642548451" className="text-blue-600 font-bold hover:underline">Bel Direct</a>
                </p>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
