'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@/components/icons'

export default function OfferteAanvragenPage() {
  const router = useRouter()
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
      case 'type_website':
        if (!value) {
          error = 'Selecteer alstublieft het type website'
        }
        break
    }

    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    validateField(name, value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (touched[name]) {
      validateField(name, value)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Valideer alle velden
    const form = e.currentTarget
    const formData = new FormData(form)
    const newErrors: Record<string, string> = {}
    const newTouched: Record<string, boolean> = {}

    // Verplichte velden
    const requiredFields = ['naam', 'email', 'telefoon', 'type_website']
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
        case 'type_website':
          if (!value) newErrors[field] = 'Selecteer alstublieft het type website'
          break
      }
    })

    setErrors(newErrors)
    setTouched(newTouched)

    if (Object.keys(newErrors).length === 0) {
      // Formulier is valide, verstuur naar API
      setIsSubmitting(true)
      setSubmitStatus('idle')

      try {
        const data = {
          naam: formData.get('naam') as string,
          email: formData.get('email') as string,
          telefoon: formData.get('telefoon') as string,
          type_website: formData.get('type_website') as string,
          budget: formData.get('budget') as string,
          deadline: formData.get('deadline') as string,
          beschrijving: formData.get('beschrijving') as string,
        }

        const response = await fetch('/api/offerte', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if (response.ok) {
          setSubmitStatus('success')
          // Redirect naar bevestigingspagina
          router.push('/offerte-bevestiging')
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
            Vraag Uw Website Offerte Aan
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Vul het formulier in en ontvang binnen 24 uur een offerte op maat
          </p>
        </div>
      </section>

      {/* Formulier */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div role="alert" aria-live="polite" className="mb-6 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg">
                <div className="flex items-center">
                  <Icon name="check-circle-outline" className="w-6 h-6 text-green-500 mr-3" strokeWidth={2} aria-hidden="true" />
                  <div>
                    <h3 className="text-green-800 font-semibold">Bedankt voor uw aanvraag!</h3>
                    <p className="text-green-700 mt-1">
                      We hebben uw offerte aanvraag ontvangen en sturen binnen 24 uur een offerte naar uw e-mailadres.
                      U ontvangt ook een bevestigingsmail.
                    </p>
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
                    <h3 className="text-red-800 font-semibold">Er is iets misgegaan</h3>
                    <p className="text-red-700 mt-1">
                      Probeer het opnieuw of bel ons direct op <a href="tel:+31858002006" className="font-bold underline">085-8002006</a>
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Naam en Bedrijf */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="naam" className="block text-sm font-semibold text-gray-700 mb-2">
                    Uw Naam *
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    aria-required="true"
                    aria-invalid={touched.naam && !!errors.naam}
                    aria-describedby={touched.naam && errors.naam ? 'naam-error' : undefined}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                      touched.naam && errors.naam
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Bijv. Jan de Vries"
                  />
                  {touched.naam && errors.naam && (
                    <p id="naam-error" role="alert" className="mt-1 text-sm text-red-600">{errors.naam}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="bedrijf" className="block text-sm font-semibold text-gray-700 mb-2">
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    id="bedrijf"
                    name="bedrijf"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
                    placeholder="Optioneel"
                  />
                </div>
              </div>

              {/* Email en Telefoon */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-required="true"
                    aria-invalid={touched.email && !!errors.email}
                    aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
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
                    <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email}</p>
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
                    aria-required="true"
                    aria-invalid={touched.telefoon && !!errors.telefoon}
                    aria-describedby={touched.telefoon && errors.telefoon ? 'telefoon-error' : undefined}
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
                    <p id="telefoon-error" role="alert" className="mt-1 text-sm text-red-600">{errors.telefoon}</p>
                  )}
                </div>
              </div>

              {/* Type Website */}
              <div>
                <label htmlFor="type_website" className="block text-sm font-semibold text-gray-700 mb-2">
                  Wat voor soort website heeft u nodig? *
                </label>
                <select
                  id="type_website"
                  name="type_website"
                  aria-required="true"
                  aria-invalid={touched.type_website && !!errors.type_website}
                  aria-describedby={touched.type_website && errors.type_website ? 'type_website-error' : undefined}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
                    touched.type_website && errors.type_website
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                >
                  <option value="">Kies een optie</option>
                  <option value="visitekaartje">Visitekaartje Website (1-5 pagina&apos;s)</option>
                  <option value="bedrijfswebsite">Bedrijfswebsite (6-15 pagina&apos;s)</option>
                  <option value="webshop">Webshop / E-commerce</option>
                  <option value="portfolio">Portfolio Website</option>
                  <option value="blog">Blog / Nieuwssite</option>
                  <option value="maatwerk">Maatwerk / Anders</option>
                </select>
                {touched.type_website && errors.type_website && (
                  <p id="type_website-error" role="alert" className="mt-1 text-sm text-red-600">{errors.type_website}</p>
                )}
              </div>

              {/* Technologie Voorkeur */}
              <div>
                <label htmlFor="technologie" className="block text-sm font-semibold text-gray-700 mb-2">
                  Heeft u een voorkeur voor de technologie?
                </label>
                <select
                  id="technologie"
                  name="technologie"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
                >
                  <option value="geen_voorkeur">Geen voorkeur / Adviseer mij</option>
                  <option value="wordpress">WordPress</option>
                  <option value="wix">Wix</option>
                  <option value="shopify">Shopify</option>
                  <option value="custom">Custom Code (Op Maat)</option>
                </select>
              </div>

              {/* Budget Indicatie */}
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Indicatie
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
                >
                  <option value="">Selecteer een budget</option>
                  <option value="795-1500">€795 - €1.500</option>
                  <option value="1500-3000">€1.500 - €3.000</option>
                  <option value="3000-5000">€3.000 - €5.000</option>
                  <option value="500plus">€5.000+</option>
                  <option value="weet_niet">Weet ik nog niet</option>
                </select>
              </div>

              {/* Gewenste Functionaliteiten */}
              <div>
                <label htmlFor="functionaliteiten" className="block text-sm font-semibold text-gray-700 mb-2">
                  Welke functionaliteiten heeft u nodig?
                </label>
                <textarea
                  id="functionaliteiten"
                  name="functionaliteiten"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none resize-none"
                  placeholder="Bijv: Contactformulier, blog, online afspraken boeken, nieuwsbrief, webshop met betalingen, etc."
                ></textarea>
              </div>

              {/* Tijdlijn */}
              <div>
                <label htmlFor="tijdlijn" className="block text-sm font-semibold text-gray-700 mb-2">
                  Wanneer moet de website live zijn?
                </label>
                <select
                  id="tijdlijn"
                  name="tijdlijn"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
                >
                  <option value="">Selecteer een optie</option>
                  <option value="zo_snel_mogelijk">Zo snel mogelijk</option>
                  <option value="binnen_maand">Binnen 1 maand</option>
                  <option value="1-3_maanden">1-3 maanden</option>
                  <option value="3plus_maanden">3+ maanden</option>
                  <option value="geen_haast">Geen haast, ik wil eerst advies</option>
                </select>
              </div>

              {/* Extra Opmerkingen */}
              <div>
                <label htmlFor="opmerkingen" className="block text-sm font-semibold text-gray-700 mb-2">
                  Extra opmerkingen of wensen
                </label>
                <textarea
                  id="opmerkingen"
                  name="opmerkingen"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none resize-none"
                  placeholder="Vertel ons meer over uw project, inspiratie websites, specifieke wensen, etc."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Bezig met versturen...
                  </span>
                ) : (
                  'Verstuur Offerte Aanvraag'
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                We nemen binnen 24 uur contact met u op
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Waarom Offerte Aanvragen */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Wat Gebeurt Er Na Uw Aanvraag?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Beoordeling</h3>
              <p className="text-gray-600">
                We analyseren uw aanvraag en bepalen de beste aanpak voor uw project
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-600">
                We bellen u binnen 24 uur voor een persoonlijk gesprek
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Offerte</h3>
              <p className="text-gray-600">
                U ontvangt een gedetailleerde offerte op maat, volledig vrijblijvend
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Veelgestelde vragen
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Is de offerte vrijblijvend?
              </h3>
              <p className="text-gray-700">
                Ja, de offerte is volledig vrijblijvend en gratis. U zit nergens aan vast. We maken een offerte op maat zodat u een goed beeld krijgt van de kosten en mogelijkheden.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Welke informatie moet ik meegeven voor een offerte?
              </h3>
              <p className="text-gray-700">
                Het type website en een omschrijving van uw wensen zijn voldoende om te starten. Hoe meer details u deelt (inspiratiewebsites, gewenste functies, budget), hoe gerichter onze offerte wordt.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Kan ik een offerte ook telefonisch aanvragen?
              </h3>
              <p className="text-gray-700">
                Ja, bel ons gerust op 085-8002006. We bespreken uw wensen en sturen daarna een uitgewerkte offerte per e-mail. Telefonisch advies is altijd gratis.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Zijn er extra kosten na oplevering?
              </h3>
              <p className="text-gray-700">
                U heeft alleen kosten voor hosting (meestal €5-20 per maand) en eventueel een domeinnaam (€10-15 per jaar). Onderhoud en updates zijn optioneel en bespreken we vooraf.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
