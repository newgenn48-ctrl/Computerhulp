import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { sanitizeHtml, sanitizeText } from '@/lib/sanitize'
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit'
import { leesToken, leeftijdInMinuten } from '@/lib/lead-token'
import { BUSINESS } from '@/lib/constants'

/**
 * "Iemand heeft het formulier niet afgemaakt."
 *
 * De browser stuurt hierheen via navigator.sendBeacon zodra iemand stap 2 (het
 * adres) verlaat zonder te versturen. De lead zelf zit in het ondertekende
 * token; deze route maakt hem alleen leesbaar en mailt hem.
 *
 * Waarom een beacon en geen wachtrij op de server: dit project heeft geen
 * database en serverless functies mogen niet minutenlang blijven wachten. Een
 * beacon is daarmee het enige signaal dat er is. Dat heeft één eerlijke
 * zwakte: een beacon kan verdwijnen (toestel valt uit, netwerk weg, browser
 * afgeschoten). Deze melding is dus een beste poging, geen garantie.
 *
 * Bewust de andere kant op leunen: liever één keer te vaak melden dan een
 * warme lead missen. Eén afspraak is meer waard dan de ergernis van een
 * overbodig mailtje. Daarom staat er in de mail ook dat de aanvraag later
 * alsnog afgerond kán zijn.
 */
export const maxDuration = 20

/* Een token dat net is uitgegeven hoort niet bij afhaken maar bij ruis: een
   dubbel afgevuurde beacon, of een bot die meteen wegklikt. */
const MINIMALE_LEEFTIJD_MS = 10_000

export async function POST(request: NextRequest) {
  try {
    if (!process.env.SMTP_HOST || !process.env.SMTP_TO) {
      console.error('[API Error - Onvoltooid] SMTP-omgevingsvariabelen ontbreken')
      return new NextResponse(null, { status: 204 })
    }

    const clientIP = getClientIP(request)
    const limiet = checkRateLimit(`afspraak-onvoltooid:${clientIP}`, RATE_LIMITS.afspraak)
    if (!limiet.success) return new NextResponse(null, { status: 204 })

    /* sendBeacon stuurt vaak text/plain, niet application/json. Daarom de body
       als tekst lezen en zelf ontleden; request.json() struikelt over het
       content-type. */
    const ruw = await request.text()
    let token: unknown = null
    try {
      token = (JSON.parse(ruw) as { token?: unknown })?.token ?? null
    } catch {
      token = ruw.trim() || null
    }

    const lead = leesToken(token)
    if (!lead) {
      /* Geen geldig token: stilzwijgend negeren. Een 204 verraadt niets aan
         iemand die staat te prikken. */
      return new NextResponse(null, { status: 204 })
    }

    if (Date.now() - lead.uitgegevenOp < MINIMALE_LEEFTIJD_MS) {
      return new NextResponse(null, { status: 204 })
    }

    const NIET = '(niet ingevuld)'
    const sNaam = sanitizeHtml(lead.naam)
    const sTel = sanitizeHtml(lead.telefoon)
    const sMail = lead.email ? sanitizeHtml(lead.email.toLowerCase()) : ''
    const sProb = lead.probleem ? sanitizeHtml(lead.probleem) : NIET
    const sBron = lead.bron ? sanitizeHtml(lead.bron) : NIET

    const tNaam = sanitizeText(lead.naam)
    const tTel = sanitizeText(lead.telefoon)
    const tMail = lead.email ? sanitizeText(lead.email.toLowerCase()) : NIET
    const tProb = lead.probleem ? sanitizeText(lead.probleem) : NIET
    const tBron = lead.bron ? sanitizeText(lead.bron) : NIET
    const minuten = leeftijdInMinuten(lead)

    const port = parseInt(process.env.SMTP_PORT || '587')
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    /* Message-ID op het lead-id, zodat een eventuele latere "wél afgerond"-mail
       in dezelfde draad belandt en je ze in je mailbox naast elkaar ziet. */
    const messageId = `<lead-${lead.id}@computerhulpzh.nl>`

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      messageId,
      subject: `NIET AFGEMAAKT: ${tNaam} — ${tTel}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #b45309; color: white; padding: 24px 20px; border-radius: 10px 10px 0 0; text-align: center; }
              .header h1 { margin: 0; font-size: 22px; }
              .content { background: #fffbeb; padding: 26px 20px; border: 1px solid #fcd34d; }
              .info-box { background: white; padding: 20px; border-radius: 8px; margin-bottom: 18px; border-left: 4px solid #b45309; }
              .field { margin-bottom: 14px; }
              .label { font-weight: bold; color: #1f2937; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { color: #4b5563; margin-top: 4px; font-size: 16px; }
              .problem-box { background: #fef3c7; padding: 14px; border-radius: 6px; margin-top: 8px; white-space: pre-wrap; }
              .button { display: inline-block; background: #10b981; color: white; padding: 14px 30px; text-decoration: none; border-radius: 8px; margin: 6px; font-weight: bold; }
              .note { font-size: 13px; color: #78350f; margin-top: 16px; }
              .footer { text-align: center; padding: 18px; color: #6b7280; font-size: 13px; border-top: 2px solid #e5e7eb; margin-top: 18px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Formulier niet afgemaakt</h1>
                <p style="margin: 6px 0 0 0; opacity: 0.9;">Stap 1 is ingevuld, het adres niet</p>
              </div>
              <div class="content">
                <div class="info-box">
                  <div class="field"><div class="label">Naam</div><div class="value">${sNaam}</div></div>
                  <div class="field"><div class="label">Telefoon</div>
                    <div class="value"><a href="tel:${sTel}" style="color:#b45309;font-weight:bold;font-size:18px;">${sTel}</a></div></div>
                  <div class="field"><div class="label">E-mail</div>
                    <div class="value">${sMail ? `<a href="mailto:${sMail}" style="color:#b45309;">${sMail}</a>` : NIET}</div></div>
                  <div class="field"><div class="label">Begon op pagina</div><div class="value">${sBron}</div></div>
                  <div class="field"><div class="label">Ingevuld</div><div class="value">${minuten} minuten geleden</div></div>
                </div>
                <div class="info-box">
                  <div class="label">Waar het om gaat</div>
                  <div class="problem-box">${sProb}</div>
                </div>
                <div style="text-align:center;">
                  <a href="tel:${sTel}" class="button">Bel deze klant</a>
                </div>
                <p class="note">
                  Deze persoon vulde naam, nummer en zijn vraag in, maar kwam niet door het adres.
                  Een telefoontje kost u een minuut. Mogelijk is de aanvraag daarna alsnog afgerond —
                  kijk of er ook een volledige hulpvraag van dit nummer in uw mailbox staat.
                </p>
              </div>
              <div class="footer">
                <p><strong>${BUSINESS.NAME}</strong></p>
                <p>Kenmerk ${sanitizeHtml(lead.id)}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `FORMULIER NIET AFGEMAAKT

Naam: ${tNaam}
Telefoon: ${tTel}
E-mail: ${tMail}
Begon op pagina: ${tBron}
Ingevuld: ${minuten} minuten geleden

Waar het om gaat:
${tProb}

Deze persoon vulde naam, nummer en zijn vraag in, maar kwam niet door het adres.
Mogelijk is de aanvraag daarna alsnog afgerond: kijk of er ook een volledige
hulpvraag van dit nummer in uw mailbox staat.

Kenmerk ${lead.id}
`,
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error('[API Error - Onvoltooid]', {
      endpoint: '/api/afspraak/onvoltooid',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    })
    /* Altijd 204: de browser is hier toch al weg en kan niets met een fout. */
    return new NextResponse(null, { status: 204 })
  }
}
