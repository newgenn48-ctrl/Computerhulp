'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@/components/icons'
import { LEAD_SENT_KEY } from '@/components/ConversionTracker'
import { BUSINESS, HOURS } from '@/lib/constants'
import { validatePhone } from '@/lib/sanitize'

/* Zelfde conversie-actie als de bedankpagina, zodat Google Ads beide wegen
   als één actie "aanvraag" telt. */
const ADS_ID = 'AW-16733341823'
const FORM_LABEL = 'aDxYCK7Ct-gaEP-Qiqs-'

const CONCEPT_KEY = 'chzh-afspraak-concept'

/* Hoe lang het tabblad weg mag zijn voordat we het als afhaken zien. Iemand
   die even naar zijn post loopt om zijn postcode op te zoeken is geen
   afhaker; iemand die na drie minuten nog niet terug is, waarschijnlijk wel. */
const AFHAAK_VERTRAGING_MS = 3 * 60 * 1000

type Field = 'naam' | 'telefoon' | 'email' | 'adres' | 'postcode' | 'plaats' | 'probleem'

type Rule = {
  required?: string
  pattern?: [RegExp, string]
  check?: [(v: string) => boolean, string]
  minLength?: [number, string]
}

/**
 * Twee stappen, zoals de eigenaar wil.
 *
 * Stap 1 vraagt naam, telefoonnummer, e-mail en waar het om gaat. Daarmee is
 * de lead compleet genoeg om te bellen. Stap 2 vraagt alleen het adres, want
 * dat is nodig om een student in de buurt in te plannen.
 *
 * De winst van het splitsen zit niet in de stappen zelf maar hierin: zodra
 * stap 1 klaar is, staat het telefoonnummer al bij de server. Haakt iemand af
 * op het adres, dan is dat voortaan een belletje in plaats van een gemiste
 * klant. Zie /api/afspraak/onvoltooid.
 *
 * Naam, telefoonnummer en e-mailadres zijn verplicht, de omschrijving niet.
 * Die mag iemand ook aan de telefoon vertellen; een verplicht tekstvak is op
 * een telefoon de grootste drempel van het hele formulier.
 */
const STAP1: Field[] = ['naam', 'telefoon', 'email', 'probleem']
const STAP2: Field[] = ['adres', 'postcode', 'plaats']

const validationRules: Record<Field, Rule> = {
  naam: { required: 'Vul uw naam in', minLength: [2, 'Naam moet minimaal 2 karakters bevatten'] },
  telefoon: { required: 'Vul uw telefoonnummer in', check: [validatePhone, 'Voer een geldig Nederlands telefoonnummer in, bijvoorbeeld 06-12345678'] },
  adres: { required: 'Vul straat en huisnummer in' },
  postcode: { required: 'Vul uw postcode in', pattern: [/^[1-9]\d{3}\s?[A-Za-z]{2}$/, 'Voer een geldige postcode in (bijv. 2511 CV)'] },
  plaats: { required: 'Vul uw woonplaats in' },
  email: { required: 'Vul uw e-mailadres in', pattern: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Voer een geldig e-mailadres in'] },
  probleem: {},
}

function validate(name: Field, value: string): string {
  const rule = validationRules[name]
  if (!rule) return ''
  const trimmed = value.trim()
  if (!trimmed) return rule.required ?? ''
  if (rule.pattern && !rule.pattern[0].test(trimmed)) return rule.pattern[1]
  if (rule.check && !rule.check[0](trimmed)) return rule.check[1]
  if (rule.minLength && trimmed.length < rule.minLength[0]) return rule.minLength[1]
  return ''
}

const LEEG = { naam: '', telefoon: '', email: '', adres: '', postcode: '', plaats: '', probleem: '', website: '' }

export default function AfspraakForm() {
  const router = useRouter()
  const [stap, setStap] = useState<1 | 2>(1)
  const [formData, setFormData] = useState({ ...LEEG })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  /* Refs en geen state: de afhaak-beacon wordt afgevuurd uit een
     event-listener die bij het wegklikken van de pagina loopt. Die ziet geen
     verse state uit een closure, maar wel de huidige waarde van een ref. */
  const tokenRef = useRef<string | null>(null)
  const stapRef = useRef<1 | 2>(1)
  const verzondenRef = useRef(false)
  const gemeldRef = useRef(false)

  stapRef.current = stap

  /* Een per ongeluk verversen mag het ingevulde werk niet wissen. Voor een
     doelgroep die niet gewend is aan formulieren is dat het verschil tussen
     opnieuw beginnen en afhaken. */
  useEffect(() => {
    try {
      const ruw = window.sessionStorage.getItem(CONCEPT_KEY)
      if (!ruw) return
      const c = JSON.parse(ruw) as { stap?: number; formData?: Record<string, string>; token?: string }
      if (c?.formData) setFormData(prev => ({ ...prev, ...c.formData }))
      if (c?.token) tokenRef.current = c.token
      if (c?.stap === 2 && c?.token) setStap(2)
    } catch {
      // sessionStorage geblokkeerd of onleesbaar concept: gewoon leeg beginnen
    }
  }, [])

  const bewaarConcept = useCallback((s: 1 | 2, data: typeof LEEG) => {
    try {
      const { website: _negeer, ...rest } = data
      void _negeer
      window.sessionStorage.setItem(CONCEPT_KEY, JSON.stringify({ stap: s, formData: rest, token: tokenRef.current }))
    } catch {
      // niet kunnen bewaren is jammer, geen reden om het formulier te blokkeren
    }
  }, [])

  const wisConcept = useCallback(() => {
    try {
      window.sessionStorage.removeItem(CONCEPT_KEY)
    } catch {
      // niets te doen
    }
  }, [])

  const showErrorBanner = () => {
    requestAnimationFrame(() => {
      const el = document.getElementById('afspraak-error')
      el?.scrollIntoView({ block: 'center', behavior: 'smooth' })
      el?.focus({ preventScroll: true })
    })
  }

  const springNaarEersteFout = (velden: Field[], fouten: Record<string, string>) => {
    const eerste = velden.find(v => fouten[v])
    if (!eerste) return
    const el = document.getElementById(eerste)
    el?.focus({ preventScroll: true })
    el?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }

  /* De afhaakmelding. Eén keer per lead, en alleen zolang de aanvraag niet is
     verstuurd. Twee aanleidingen:
       - de pagina wordt echt weggegooid (persisted === false): tabblad dicht,
         of weg navigeren. Terugkomen kan dan niet meer.
       - het tabblad is langer dan drie minuten onzichtbaar.
     Bij persisted === true gebeurt er niets: dan gaat de pagina de
     back/forward-cache in of wisselt iemand even van app, en kan hij zó terug
     zijn. */
  useEffect(() => {
    if (stap !== 2) return

    let timer: ReturnType<typeof setTimeout> | undefined

    const meld = () => {
      if (gemeldRef.current || verzondenRef.current) return
      const token = tokenRef.current
      if (!token) return
      gemeldRef.current = true
      const body = JSON.stringify({ token })
      try {
        /* Blob met text/plain: dat is een "simple request", dus geen
           preflight die bij het wegklikken toch niet meer afgaat. */
        const ok = navigator.sendBeacon?.('/api/afspraak/onvoltooid', new Blob([body], { type: 'text/plain' }))
        if (!ok) throw new Error('sendBeacon weigerde')
      } catch {
        /* Oudere browsers zonder sendBeacon: keepalive-fetch doet hetzelfde
           werk en overleeft het sluiten van de pagina meestal ook. */
        try {
          void fetch('/api/afspraak/onvoltooid', { method: 'POST', body, keepalive: true })
        } catch {
          // dan niet; de melding is een beste poging, geen garantie
        }
      }
    }

    const opPagehide = (e: PageTransitionEvent) => {
      if (e.persisted) return
      meld()
    }
    const opVisibility = () => {
      if (document.visibilityState === 'hidden') {
        timer = setTimeout(meld, AFHAAK_VERTRAGING_MS)
      } else if (timer) {
        clearTimeout(timer)
        timer = undefined
      }
    }

    window.addEventListener('pagehide', opPagehide)
    document.addEventListener('visibilitychange', opVisibility)
    return () => {
      window.removeEventListener('pagehide', opPagehide)
      document.removeEventListener('visibilitychange', opVisibility)
      if (timer) clearTimeout(timer)
    }
  }, [stap])

  // Waarschuw bij wegklikken als er al iets is ingevuld en nog niet is verstuurd
  const isDirty = Object.entries(formData).some(([k, v]) => k !== 'website' && v.trim() !== '')
  useEffect(() => {
    if (!isDirty || submitStatus === 'success') return
    let leavingOnPurpose = false
    const warn = (e: BeforeUnloadEvent) => {
      /* Bellen of WhatsAppen is geen ongeluk, dat is juist de bedoeling.
         Zonder deze uitzondering kreeg iemand met een half ingevuld formulier
         die op het nummer tikte een "Deze site verlaten?"-dialoog over zijn
         gesprek heen — precies op het duurste moment dat er is. */
      if (leavingOnPurpose) return
      e.preventDefault()
    }
    const allow = (ev: Event) => {
      const t = ev.target
      if (!(t instanceof Element)) return
      if (t.closest('a[href^="tel:"], a[href^="mailto:"], a[href*="wa.me"]')) {
        leavingOnPurpose = true
      }
    }
    window.addEventListener('beforeunload', warn)
    document.addEventListener('pointerdown', allow, true)
    return () => {
      window.removeEventListener('beforeunload', warn)
      document.removeEventListener('pointerdown', allow, true)
    }
  }, [isDirty, submitStatus])

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validate(name as Field, value) }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => {
      const next = { ...prev, [name]: value }
      bewaarConcept(stapRef.current, next)
      return next
    })
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name as Field, value) }))
    }
  }

  /* Stap 1 → stap 2. De gegevens gaan nu al naar de server, die ze valideert
     en ondertekend terugstuurt. Er wordt nog niets gemaild. */
  const naarStap2 = async (e: React.FormEvent) => {
    e.preventDefault()

    const nieuweFouten: Record<string, string> = {}
    const nieuwTouched: Record<string, boolean> = {}
    STAP1.forEach(f => {
      nieuwTouched[f] = true
      const fout = validate(f, formData[f])
      if (fout) nieuweFouten[f] = fout
    })
    setErrors(nieuweFouten)
    setTouched(prev => ({ ...prev, ...nieuwTouched }))
    if (Object.keys(nieuweFouten).length > 0) {
      springNaarEersteFout(STAP1, nieuweFouten)
      return
    }

    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      setSubmitStatus('error')
      setServerError('U lijkt geen internetverbinding te hebben.')
      showErrorBanner()
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setServerError('')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)
    try {
      const res = await fetch('/api/afspraak/stap1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          naam: formData.naam,
          telefoon: formData.telefoon,
          email: formData.email,
          probleem: formData.probleem,
          website: formData.website,
          bron: window.location.pathname,
          vorigToken: tokenRef.current,
        }),
        signal: controller.signal,
      })
      const data = await res.json().catch(() => null)

      if (!res.ok) {
        const msg = typeof data?.error === 'string' ? data.error : ''
        if (/telefoon/i.test(msg)) {
          setErrors(prev => ({ ...prev, telefoon: msg }))
          setTouched(prev => ({ ...prev, telefoon: true }))
          document.getElementById('telefoon')?.focus({ preventScroll: true })
        }
        setServerError(msg)
        setSubmitStatus('error')
        setIsSubmitting(false)
        showErrorBanner()
        return
      }

      tokenRef.current = typeof data?.token === 'string' ? data.token : null
      gemeldRef.current = false
      setStap(2)
      bewaarConcept(2, formData)
      setIsSubmitting(false)
      requestAnimationFrame(() => {
        const el = document.getElementById('adres')
        el?.focus({ preventScroll: true })
        document.getElementById('stap-kop')?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      })
    } catch {
      /* Stap 1 niet kunnen opslaan mag de klant niet tegenhouden. Door naar
         stap 2 zonder token: de aanvraag komt dan nog gewoon binnen, alleen
         de afhaakmelding kan niet werken. Liever dat dan een doodlopend
         formulier. */
      tokenRef.current = null
      setStap(2)
      bewaarConcept(2, formData)
      setIsSubmitting(false)
      requestAnimationFrame(() => document.getElementById('adres')?.focus({ preventScroll: true }))
    } finally {
      clearTimeout(timeoutId)
    }
  }

  const terugNaarStap1 = () => {
    setStap(1)
    bewaarConcept(1, formData)
    requestAnimationFrame(() => document.getElementById('naam')?.focus({ preventScroll: true }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const nieuweFouten: Record<string, string> = {}
    const nieuwTouched: Record<string, boolean> = {}
    STAP2.forEach(f => {
      nieuwTouched[f] = true
      const fout = validate(f, formData[f])
      if (fout) nieuweFouten[f] = fout
    })
    setErrors(nieuweFouten)
    setTouched(prev => ({ ...prev, ...nieuwTouched }))
    if (Object.keys(nieuweFouten).length > 0) {
      springNaarEersteFout(STAP2, nieuweFouten)
      return
    }

    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setServerError('')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 20000)

    try {
      const response = await fetch('/api/afspraak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          token: tokenRef.current,
          onvoltooidGemeld: gemeldRef.current,
        }),
        signal: controller.signal,
      })

      if (response.ok) {
        verzondenRef.current = true
        setSubmitStatus('success')
        wisConcept()
        /* De conversie gaat af op het antwoord van de server, en niet
           uitsluitend via een sessionStorage-vlag op de bedankpagina. Die
           vlag overleefde geen geblokkeerde sessionStorage en geen routewissel
           die onderweg misgaat: de aanvraag kwam dan binnen zonder dat Google
           Ads hem ooit zag. Lukt het hier niet, dan valt hij terug op de
           bedankpagina — nooit beide, dus nooit dubbel geteld.

           Alleen een áfgeronde aanvraag telt als conversie. Stap 1 niet: dan
           zou Google gaan optimaliseren op half ingevulde formulieren. */
        const payload = await response.json().catch(() => null)
        const isLead = payload?.counted !== false
        const w = window as Window & { gtag?: (...args: unknown[]) => void }
        let counted = false
        if (isLead && typeof w.gtag === 'function') {
          w.gtag('event', 'lead_form', { event_category: 'contact', form: 'afspraak' })
          w.gtag('event', 'conversion', {
            send_to: `${ADS_ID}/${FORM_LABEL}`,
            transaction_id: `af-${Date.now()}`,
            transport_type: 'beacon',
          })
          counted = true
        }
        if (isLead && !counted) {
          try {
            window.sessionStorage.setItem(LEAD_SENT_KEY, '1')
          } catch {
            // sessionStorage geblokkeerd én geen gtag: dan telt er niets, liever te weinig dan dubbel
          }
        }
        router.push('/afspraak-bevestiging')
        return
      }

      const data = await response.json().catch(() => null)
      const msg = typeof data?.error === 'string' ? data.error : ''
      if (/postcode/i.test(msg)) {
        setErrors(prev => ({ ...prev, postcode: msg }))
        setTouched(prev => ({ ...prev, postcode: true }))
        document.getElementById('postcode')?.focus({ preventScroll: true })
      }
      setServerError(msg)
      setSubmitStatus('error')
      setIsSubmitting(false)
      showErrorBanner()
    } catch {
      setSubmitStatus('error')
      setIsSubmitting(false)
      showErrorBanner()
    } finally {
      clearTimeout(timeoutId)
    }
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-4 border-2 rounded-xl text-base focus:ring-2 focus:ring-blue-200 transition-colors outline-none ${
      touched[field] && errors[field] ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
    }`

  const fout = (f: Field) =>
    touched[f] && errors[f] ? <p id={`${f}-error`} role="alert" className="mt-1 text-sm text-red-600">{errors[f]}</p> : null

  const aria = (f: Field) => ({
    'aria-invalid': (touched[f] && errors[f] ? 'true' : 'false') as 'true' | 'false',
    'aria-describedby': touched[f] && errors[f] ? `${f}-error` : undefined,
  })

  return (
    <>
      {submitStatus === 'error' && (
        <div id="afspraak-error" tabIndex={-1} role="alert" aria-live="assertive" className="alert-error">
          <div className="flex items-center">
            <Icon name="error-circle" className="w-6 h-6 text-red-500 mr-3" strokeWidth={2} aria-hidden="true" />
            <div>
              <h3 className="text-red-800 font-semibold">Er ging iets mis</h3>
              {/* De servermelding eindigt vaak al op een punt en noemt soms zelf
                  het telefoonnummer. Zonder deze controle stond er
                  "...085-8002006.. Of bel ons direct op 085-8002006". */}
              <p className="text-red-700 mt-1">
                {serverError
                  ? serverError.replace(/\.\s*$/, '')
                  : 'Mogelijk is uw aanvraag toch aangekomen; probeer het anders nog eens'}
                {serverError.includes(BUSINESS.PHONE) ? '.' : (
                  <>
                    . Of bel ons direct op{' '}
                    <a href={BUSINESS.PHONE_HREF} translate="no" className="font-bold underline whitespace-nowrap">{BUSINESS.PHONE}</a>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Voortgang. Twee stappen is kort genoeg om het gewoon op te schrijven;
          een balk met percentages voegt hier niets toe. */}
      <div id="stap-kop" className="mb-5 scroll-mt-24">
        <p className="text-sm font-semibold text-gray-500" aria-live="polite">
          Stap {stap} van 2 — {stap === 1 ? 'uw gegevens' : 'waar komen we langs?'}
        </p>
        <div className="mt-2 flex gap-2" aria-hidden="true">
          <span className="h-1.5 flex-1 rounded-full bg-blue-600" />
          <span className={`h-1.5 flex-1 rounded-full ${stap === 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
        </div>
      </div>

      {stap === 1 ? (
        <form onSubmit={naarStap2} noValidate aria-busy={isSubmitting} className="space-y-5">
          <div>
            <label htmlFor="naam" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Uw naam</label>
            <input
              type="text" id="naam" name="naam" value={formData.naam}
              onChange={handleChange} onBlur={handleBlur}
              required aria-required="true" autoComplete="name"
              className={inputClass('naam')} placeholder="Voor- en achternaam"
              disabled={isSubmitting} {...aria('naam')}
            />
            {fout('naam')}
          </div>

          <div>
            <label htmlFor="telefoon" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Telefoonnummer</label>
            <input
              type="tel" id="telefoon" name="telefoon" value={formData.telefoon}
              onChange={handleChange} onBlur={handleBlur}
              required aria-required="true" autoComplete="tel" inputMode="tel" spellCheck={false}
              className={inputClass('telefoon')} placeholder="06-12345678"
              disabled={isSubmitting} {...aria('telefoon')}
            />
            {fout('telefoon')}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
              E-mailadres
            </label>
            <input
              type="email" id="email" name="email" value={formData.email}
              onChange={handleChange} onBlur={handleBlur}
              required aria-required="true"
              autoComplete="email" inputMode="email" spellCheck={false} autoCapitalize="none"
              className={inputClass('email')} placeholder="uw@email.nl"
              disabled={isSubmitting} {...aria('email')}
            />
            {fout('email')}
          </div>

          <div>
            <label htmlFor="probleem" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
              Waar gaat het om? <span className="font-normal text-gray-500">(mag u ook aan de telefoon vertellen)</span>
            </label>
            <textarea
              id="probleem" name="probleem" value={formData.probleem}
              onChange={handleChange} onBlur={handleBlur} rows={3}
              className={`${inputClass('probleem')} resize-none`}
              placeholder="Bijv. ‘Mijn laptop start niet op’ of ‘Wifi werkt niet meer’"
              disabled={isSubmitting} {...aria('probleem')}
            />
            {fout('probleem')}
          </div>

          {/* Honeypot, real users won't fill this, bots will */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
            <label htmlFor="website">Website (laat leeg)</label>
            <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-submit">
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Volgende
              </span>
            ) : 'Volgende'}
          </button>
          <p className="text-center text-sm text-gray-600">
            Nog één stap: waar komen we langs?
          </p>
        </form>
      ) : (
        <form onSubmit={handleSubmit} noValidate aria-busy={isSubmitting} className="space-y-5">
          <div>
            <label htmlFor="adres" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Straat en huisnummer</label>
            <input
              type="text" id="adres" name="adres" value={formData.adres}
              onChange={handleChange} onBlur={handleBlur}
              required aria-required="true" autoComplete="street-address"
              className={inputClass('adres')} placeholder="Bijv. Stationsweg 12"
              disabled={isSubmitting} {...aria('adres')}
            />
            {fout('adres')}
          </div>

          <div className="grid grid-cols-[8.5rem_1fr] gap-3">
            <div>
              <label htmlFor="postcode" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Postcode</label>
              <input
                type="text" id="postcode" name="postcode" value={formData.postcode}
                onChange={handleChange} onBlur={handleBlur}
                required aria-required="true" autoComplete="postal-code" spellCheck={false}
                className={inputClass('postcode')} placeholder="2511 CV"
                disabled={isSubmitting} {...aria('postcode')}
              />
            </div>
            <div>
              <label htmlFor="plaats" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Woonplaats</label>
              <input
                type="text" id="plaats" name="plaats" value={formData.plaats}
                onChange={handleChange} onBlur={handleBlur}
                required aria-required="true" autoComplete="address-level2"
                className={inputClass('plaats')} placeholder="Bijv. Den Haag"
                disabled={isSubmitting} {...aria('plaats')}
              />
            </div>
          </div>
          {/* Fouten van het postcode/plaats-paar onder de rij, zodat de kolommen niet verspringen */}
          {((touched.postcode && errors.postcode) || (touched.plaats && errors.plaats)) && (
            <div className="-mt-3">
              {fout('postcode')}
              {fout('plaats')}
            </div>
          )}

          <button type="submit" disabled={isSubmitting} className="btn-submit">
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verstuur mijn aanvraag
              </span>
            ) : 'Verstuur mijn aanvraag'}
          </button>

          <button
            type="button"
            onClick={terugNaarStap1}
            disabled={isSubmitting}
            className="w-full py-3 text-base font-semibold text-gray-600 underline underline-offset-4 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-lg"
          >
            Terug naar mijn gegevens
          </button>

          <p className="text-center text-sm text-gray-600">
            Geen verplichtingen. We bellen u meestal binnen een uur terug, alle dagen tussen {HOURS.OPEN} en {HOURS.CLOSE} uur.
          </p>
        </form>
      )}
    </>
  )
}
