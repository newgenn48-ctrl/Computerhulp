'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    naam: '',
    telefoon: '',
    email: '',
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
          error = 'Vul alstublieft uw naam in'
        } else if (value.trim().length < 2) {
          error = 'Naam moet minimaal 2 karakters bevatten'
        }
        break
      case 'email':
        if (!value.trim()) {
          error = 'Vul alstublieft uw e-mailadres in'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Vul een geldig e-mailadres in'
        }
        break
      case 'telefoon':
        if (!value.trim()) {
          error = 'Vul alstublieft uw telefoonnummer in'
        } else if (!/[0-9\s\-\+\(\)]{10,}/.test(value)) {
          error = 'Vul een geldig telefoonnummer in (minimaal 10 cijfers)'
        }
        break
      case 'plaats':
        if (!value.trim()) {
          error = 'Vul alstublieft uw plaats in'
        }
        break
      case 'probleem':
        if (!value.trim()) {
          error = 'Beschrijf alstublieft het probleem'
        } else if (value.trim().length < 10) {
          error = 'Beschrijving moet minimaal 10 karakters bevatten'
        }
        break
    }

    setErrors(prev => ({ ...prev, [name]: error }))
    return error
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    validateField(name, value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      validateField(name, value)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}
    const newTouched: Record<string, boolean> = {}

    const requiredFields = ['naam', 'email', 'telefoon', 'plaats', 'probleem']
    requiredFields.forEach(field => {
      newTouched[field] = true
      const error = validateField(field, formData[field as keyof typeof formData])
      if (error) newErrors[field] = error
    })

    setErrors(newErrors)
    setTouched(newTouched)

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)
      setSubmitStatus('idle')

      try {
        const response = await fetch('/api/afspraak', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            naam: formData.naam,
            telefoon: formData.telefoon,
            email: formData.email,
            straat: '',
            huisnummer: '',
            postcode: '',
            plaats: formData.plaats,
            probleem: formData.probleem
          }),
        })

        if (response.ok) {
          setSubmitStatus('success')
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
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{
              color: 'white',
              background: 'none',
              WebkitTextFillColor: 'white',
              backgroundClip: 'unset',
              WebkitBackgroundClip: 'unset'
            }}
          >
            Neem Contact Op
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Bel direct of vul het formulier in. We nemen binnen 2 uur contact met u op.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Telefoon */}
            <a
              href="tel:+31858002006"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bel Direct</h3>
              <p className="text-gray-600 mb-4">De snelste manier om geholpen te worden</p>
              <div className="text-2xl font-bold text-blue-600">085-8002006</div>
              <div className="text-sm text-gray-500 mt-2">Ma-Zo: 08:00 - 22:00</div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@computerhulpzh.nl"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">E-mail Ons</h3>
              <p className="text-gray-600 mb-4">Voor niet-spoedeisende vragen</p>
              <div className="text-lg font-semibold text-blue-600 break-all">info@computerhulpzh.nl</div>
              <div className="text-sm text-gray-500 mt-2">Reactie binnen 24 uur</div>
            </a>

            {/* Werkgebied */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Werkgebied</h3>
              <p className="text-gray-600 mb-4">Heel Zuid-Holland</p>
              <div className="text-sm text-gray-700 space-y-1">
                <div>• Den Haag</div>
                <div>• Rotterdam</div>
                <div>• Leiden</div>
                <div>• Delft</div>
                <div>• En omstreken</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                Afspraak Maken
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Vul het formulier in en we nemen binnen 2 uur contact met u op
              </p>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div role="alert" aria-live="polite" className="mb-6 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="text-green-800 font-semibold">Bedankt voor uw aanvraag!</h3>
                      <p className="text-green-700 mt-1">We nemen binnen 2 uur contact met u op.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div role="alert" aria-live="assertive" className="mb-6 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="text-red-800 font-semibold">Er is iets misgegaan</h3>
                      <p className="text-red-700 mt-1">Probeer het opnieuw of bel ons direct op <a href="tel:+31858002006" className="font-bold underline">085-8002006</a></p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={touched.naam && !!errors.naam}
                      aria-describedby={touched.naam && errors.naam ? 'naam-error' : undefined}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                        touched.naam && errors.naam
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="Uw naam"
                    />
                    {touched.naam && errors.naam && (
                      <p id="naam-error" role="alert" className="mt-1 text-sm text-red-600">{errors.naam}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telefoon" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefoon <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      value={formData.telefoon}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={touched.telefoon && !!errors.telefoon}
                      aria-describedby={touched.telefoon && errors.telefoon ? 'telefoon-error' : undefined}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                        touched.telefoon && errors.telefoon
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="06-12345678"
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
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={touched.email && !!errors.email}
                    aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                      touched.email && errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="uw@email.nl"
                  />
                  {touched.email && errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email}</p>
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
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={touched.plaats && !!errors.plaats}
                    aria-describedby={touched.plaats && errors.plaats ? 'plaats-error' : undefined}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                      touched.plaats && errors.plaats
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Bijv. Den Haag"
                  />
                  {touched.plaats && errors.plaats && (
                    <p id="plaats-error" role="alert" className="mt-1 text-sm text-red-600">{errors.plaats}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="probleem" className="block text-sm font-semibold text-gray-700 mb-2">
                    Wat is het probleem? <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="probleem"
                    name="probleem"
                    value={formData.probleem}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    rows={5}
                    aria-required="true"
                    aria-invalid={touched.probleem && !!errors.probleem}
                    aria-describedby={touched.probleem && errors.probleem ? 'probleem-error' : undefined}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none resize-none ${
                      touched.probleem && errors.probleem
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Beschrijf kort wat het probleem is, bijv: 'Mijn computer start niet op' of 'WiFi werkt niet meer'"
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
                      Bezig met versturen...
                    </span>
                  ) : (
                    'Verstuur Aanvraag'
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We nemen binnen 2 uur contact met u op
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Werkgebied Map */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ons Werkgebied
            </h2>
            <p className="text-lg text-gray-600">
              Wij komen bij u thuis in heel Zuid-Holland - van Noordwijk tot Dordrecht
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624813.5367745955!2d3.8875036!3d52.0326067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72f4298bd71%3A0x400de5a8d1e6c10!2sZuid-Holland!5e0!3m2!1snl!2snl!4v1704193200000!5m2!1snl!2snl"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Werkgebied Computerhulp Zuid-Holland"
                className="w-full"
              />
            </div>

            {/* Steden lijst */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Steden waar wij actief zijn
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Den Haag', 'Rotterdam', 'Leiden', 'Delft',
                  'Zoetermeer', 'Dordrecht', 'Gouda', 'Alphen aan den Rijn',
                  'Westland', 'Katwijk', 'Rijswijk', 'Schiedam',
                  'Vlaardingen', 'Capelle a/d IJssel', 'Maassluis', 'Noordwijk'
                ].map((stad) => (
                  <div key={stad} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{stad}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6">
                En nog 40+ andere gemeenten in Zuid-Holland
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Veelgestelde Vragen
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hoe snel kunnen jullie komen?
              </h3>
              <p className="text-gray-700">
                In de meeste gevallen zijn we binnen 24 uur bij u. Bij spoedeisende situaties proberen we vaak nog dezelfde dag te komen. We werken 7 dagen per week, ook in de avonduren.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Wat zijn de kosten?
              </h3>
              <p className="text-gray-700">
                We rekenen €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Er zijn geen voorrijkosten in heel Zuid-Holland.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Komen jullie ook in het weekend?
              </h3>
              <p className="text-gray-700">
                Ja, we werken 7 dagen per week. Ook op zaterdag en zondag komen we graag bij u langs. Er zijn geen extra kosten voor weekendservice.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hoe kan ik betalen?
              </h3>
              <p className="text-gray-700">
                U kunt betalen via pin, contant of Tikkie. We rekenen af na afloop van de werkzaamheden, zodat u precies weet waar u voor betaalt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
