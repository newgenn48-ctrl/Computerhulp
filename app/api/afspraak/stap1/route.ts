import { NextRequest, NextResponse } from 'next/server'
import { validateEmail, validatePhone, validateLength } from '@/lib/sanitize'
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit'
import { maakToken, nieuwLeadId, leesToken } from '@/lib/lead-token'
import { BUSINESS } from '@/lib/constants'

/**
 * Stap 1 van het afspraakformulier: naam, telefoonnummer, e-mail en de
 * omschrijving.
 *
 * Deze route stuurt met opzet GEEN mail. Zou hij dat doen, dan kreeg de
 * eigenaar twee berichten per klant: één bij stap 1 en één bij stap 2. Hij
 * wil er één. Daarom gebeurt hier alleen valideren en ondertekenen; het
 * versturen gebeurt óf in /api/afspraak (aanvraag compleet) óf in
 * /api/afspraak/onvoltooid (bezoeker haakte af op het adres).
 *
 * Geen mail versturen betekent ook dat deze route snel is, en dat telt: hij
 * zit middenin het formulier en de bezoeker wacht erop.
 */
export const maxDuration = 10

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request)
    const limiet = checkRateLimit(`afspraak-stap1:${clientIP}`, RATE_LIMITS.afspraak)
    if (!limiet.success) {
      return NextResponse.json(
        { error: 'Te veel verzoeken. Probeer het over een minuut opnieuw.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((limiet.resetTime - Date.now()) / 1000)) } }
      )
    }

    const body = await request.json()
    const { naam, telefoon, email, probleem, bron, website, vorigToken } = body

    /* Honeypot. De bot krijgt 200 zodat hij niet leert dat het veld een val
       is, maar zonder token: daardoor kan hij nooit een mail veroorzaken, niet
       via stap 2 en niet via de afhaakmelding. */
    if (website) {
      console.warn('[Honeypot] stap 1 geweigerd, veld "website" was gevuld')
      return NextResponse.json({ ok: true, token: null, counted: false }, { status: 200 })
    }

    const tekst = (v: unknown) => (typeof v === 'string' ? v.trim() : '')
    const sNaam = tekst(naam)
    const sTelefoon = tekst(telefoon)
    const sEmail = tekst(email)
    const sProbleem = tekst(probleem)
    const sBron = tekst(bron).slice(0, 200)

    if (!sNaam || !sTelefoon) {
      const mist = [!sNaam && 'naam', !sTelefoon && 'telefoonnummer'].filter(Boolean).join(', ')
      return NextResponse.json({ error: `Vul alle velden in (ontbreekt: ${mist})` }, { status: 400 })
    }

    const binnen = (v: string, max: number) => v === '' || validateLength(v, max)
    if (!validateLength(sNaam, 100) || !validateLength(sTelefoon, 20) ||
        !binnen(sEmail, 254) || !binnen(sProbleem, 2000)) {
      return NextResponse.json({ error: 'Een of meerdere velden zijn te lang' }, { status: 400 })
    }

    if (!validatePhone(sTelefoon)) {
      return NextResponse.json(
        { error: 'Ongeldig telefoonnummer (gebruik Nederlands formaat)' },
        { status: 400 }
      )
    }

    if (sEmail && !validateEmail(sEmail)) {
      return NextResponse.json({ error: 'Ongeldig e-mailadres' }, { status: 400 })
    }

    /* Wie op "terug" tikt, stap 1 aanpast en weer doorgaat, hoort dezelfde
       lead te blijven. Anders staat één persoon straks twee keer in de
       mailbox, met twee verschillende nummers eronder. Het oude token wordt
       alleen voor zijn id gebruikt, en alleen als het klopt. */
    const vorige = leesToken(vorigToken)
    const id = vorige?.id ?? nieuwLeadId()

    const token = maakToken({
      id,
      naam: sNaam,
      telefoon: sTelefoon,
      email: sEmail,
      probleem: sProbleem,
      bron: sBron,
    })

    return NextResponse.json({ ok: true, token }, { status: 200 })
  } catch (error) {
    console.error('[API Error - Afspraak stap 1]', {
      endpoint: '/api/afspraak/stap1',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    })
    return NextResponse.json(
      { error: `Er is een fout opgetreden. Probeer het opnieuw of bel ons direct op ${BUSINESS.PHONE}.` },
      { status: 500 }
    )
  }
}
