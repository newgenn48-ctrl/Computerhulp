'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

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
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    validateField(name, value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (touched[name]) {
      validateField(name, value)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const newErrors: Record<string, string> = {}
    const newTouched: Record<string, boolean> = {}

    const requiredFields = ['naam', 'email', 'telefoon', 'plaats', 'probleem']
    requiredFields.forEach(field => {
      const value = formData.get(field) as string
      newTouched[field] = true

      switch (field) {
        case 'naam':
          if (!value?.trim()) newErrors[field] = 'Vul alstublieft uw naam in'
          else if (value.trim().length < 2) newErrors[field] = 'Naam moet minimaal 2 karakters bevatten'
          break
        case 'email':
          if (!value?.trim()) newErrors[field] = 'Vul alstublieft uw e-mailadres in'
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors[field] = 'Vul een geldig e-mailadres in'
          break
        case 'telefoon':
          if (!value?.trim()) newErrors[field] = 'Vul alstublieft uw telefoonnummer in'
          else if (!/[0-9\s\-\+\(\)]{10,}/.test(value)) newErrors[field] = 'Vul een geldig telefoonnummer in (minimaal 10 cijfers)'
          break
        case 'plaats':
          if (!value?.trim()) newErrors[field] = 'Vul alstublieft uw plaats in'
          break
        case 'probleem':
          if (!value?.trim()) newErrors[field] = 'Beschrijf alstublieft het probleem'
          else if (value.trim().length < 10) newErrors[field] = 'Beschrijving moet minimaal 10 karakters bevatten'
          break
      }
    })

    setErrors(newErrors)
    setTouched(newTouched)

    if (Object.keys(newErrors).length === 0) {
      alert('Formulier is valide! Hier zou normaal het versturen plaatsvinden.')
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
              href="tel:+31642548451"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bel Direct</h3>
              <p className="text-gray-600 mb-4">Meest snelle manier om geholpen te worden</p>
              <div className="text-2xl font-bold text-blue-600">06-42548451</div>
              <div className="text-sm text-gray-500 mt-2">Ma-Zo: 08:00 - 22:00</div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@computerhulpzh.nl"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Ons</h3>
              <p className="text-gray-600 mb-4">Voor niet-spoedeisende vragen</p>
              <div className="text-lg font-semibold text-blue-600 break-all">info@computerhulpzh.nl</div>
              <div className="text-sm text-gray-500 mt-2">Reactie binnen 24 uur</div>
            </a>

            {/* Werkgebied */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="naam" className="block text-sm font-semibold text-gray-700 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                        touched.naam && errors.naam
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="Uw naam"
                    />
                    {touched.naam && errors.naam && (
                      <p className="mt-1 text-sm text-red-600">{errors.naam}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telefoon" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefoon *
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                        touched.telefoon && errors.telefoon
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="06-12345678"
                    />
                    {touched.telefoon && errors.telefoon && (
                      <p className="mt-1 text-sm text-red-600">{errors.telefoon}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                      touched.email && errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="uw@email.nl"
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
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
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                      touched.plaats && errors.plaats
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Bijv. Den Haag"
                  />
                  {touched.plaats && errors.plaats && (
                    <p className="mt-1 text-sm text-red-600">{errors.plaats}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="probleem" className="block text-sm font-semibold text-gray-700 mb-2">
                    Wat is het probleem? *
                  </label>
                  <textarea
                    id="probleem"
                    name="probleem"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none resize-none ${
                      touched.probleem && errors.probleem
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Beschrijf kort wat het probleem is, bijv: 'Mijn computer start niet op' of 'WiFi werkt niet meer'"
                  ></textarea>
                  {touched.probleem && errors.probleem && (
                    <p className="mt-1 text-sm text-red-600">{errors.probleem}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  Verstuur Aanvraag
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We nemen binnen 2 uur contact met u op
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Veelgestelde Vragen
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hoe snel kunnen jullie komen?
              </h3>
              <p className="text-gray-700">
                In de meeste gevallen zijn we binnen 24 uur bij u. Bij spoedeisende situaties proberen we vaak nog dezelfde dag te komen. We werken 7 dagen per week, ook in de avonduren.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Wat zijn de kosten?
              </h3>
              <p className="text-gray-700">
                We rekenen €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Er zijn geen voorrijkosten in heel Zuid-Holland.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Komen jullie ook in het weekend?
              </h3>
              <p className="text-gray-700">
                Ja, we werken 7 dagen per week. Ook op zaterdag en zondag komen we graag bij u langs. Er zijn geen extra kosten voor weekendservice.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
