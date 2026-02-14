import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { sanitizeHtml, sanitizeText, validateEmail, validatePhone, validateLength } from '@/lib/sanitize'
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request)
    const rateLimitResult = checkRateLimit(`afspraak:${clientIP}`, RATE_LIMITS.afspraak)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Te veel verzoeken. Probeer het over een minuut opnieuw.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
            'X-RateLimit-Limit': String(RATE_LIMITS.afspraak.limit),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(rateLimitResult.resetTime),
          }
        }
      )
    }

    const body = await request.json()
    const { naam, telefoon, email, straat, huisnummer, postcode, plaats, probleem } = body

    // Validatie - Required fields
    if (!naam || !telefoon || !email || !straat || !huisnummer || !postcode || !plaats || !probleem) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      )
    }

    // Validatie - Length limits (DoS protection)
    if (!validateLength(naam, 100) ||
        !validateLength(telefoon, 20) ||
        !validateLength(email, 254) ||
        !validateLength(straat, 100) ||
        !validateLength(huisnummer, 10) ||
        !validateLength(postcode, 10) ||
        !validateLength(plaats, 100) ||
        !validateLength(probleem, 2000)) {
      return NextResponse.json(
        { error: 'Een of meerdere velden zijn te lang' },
        { status: 400 }
      )
    }

    // Email validatie
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      )
    }

    // Phone validatie
    if (!validatePhone(telefoon)) {
      return NextResponse.json(
        { error: 'Ongeldig telefoonnummer (gebruik Nederlands formaat)' },
        { status: 400 }
      )
    }

    // Sanitize inputs voor XSS bescherming
    const safeNaam = sanitizeHtml(naam.trim())
    const safeTelefoon = sanitizeHtml(telefoon.trim())
    const safeEmail = sanitizeHtml(email.trim().toLowerCase())
    const safeStraat = sanitizeHtml(straat.trim())
    const safeHuisnummer = sanitizeHtml(huisnummer.trim())
    const safePostcode = sanitizeHtml(postcode.trim().toUpperCase())
    const safePlaats = sanitizeHtml(plaats.trim())
    const safeProbleem = sanitizeHtml(probleem.trim())

    // Plain text versions
    const textNaam = sanitizeText(naam.trim())
    const textTelefoon = sanitizeText(telefoon.trim())
    const textEmail = sanitizeText(email.trim().toLowerCase())
    const textStraat = sanitizeText(straat.trim())
    const textHuisnummer = sanitizeText(huisnummer.trim())
    const textPostcode = sanitizeText(postcode.trim().toUpperCase())
    const textPlaats = sanitizeText(plaats.trim())
    const textProbleem = sanitizeText(probleem.trim())

    // Create transporter
    const port = parseInt(process.env.SMTP_PORT || '587')
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const volledigAdres = `${textStraat} ${textHuisnummer}, ${textPostcode} ${textPlaats}`

    // Email naar jou (admin)
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `🗓️ Nieuwe Afspraak Aanvraag van ${textNaam}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px 20px; border-radius: 10px 10px 0 0; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .header .icon { font-size: 48px; margin-bottom: 10px; }
              .content { background: #f9fafb; padding: 30px 20px; border: 1px solid #e5e7eb; }
              .info-box { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { color: #4b5563; margin-top: 5px; font-size: 16px; }
              .address-box { background: #eff6ff; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6; margin-top: 10px; }
              .problem-box { background: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-top: 10px; white-space: pre-wrap; }
              .action-buttons { margin-top: 25px; text-align: center; }
              .button { display: inline-block; background: #10b981; color: white; padding: 14px 30px; text-decoration: none; border-radius: 8px; margin: 5px; font-weight: bold; }
              .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; border-top: 2px solid #e5e7eb; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="icon">📅</div>
                <h1>Nieuwe Afspraak Aanvraag!</h1>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Er is een nieuwe afspraak aangevraagd</p>
              </div>
              <div class="content">
                <div class="info-box">
                  <div class="field">
                    <div class="label">👤 Klant</div>
                    <div class="value">${safeNaam}</div>
                  </div>
                  <div class="field">
                    <div class="label">📧 Email</div>
                    <div class="value"><a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">📱 Telefoon</div>
                    <div class="value"><a href="tel:${safeTelefoon}" style="color: #2563eb; font-weight: bold; font-size: 18px;">${safeTelefoon}</a></div>
                  </div>
                </div>

                <div class="info-box">
                  <div class="label">📍 Adres voor afspraak</div>
                  <div class="address-box">
                    <strong>${safeStraat} ${safeHuisnummer}</strong><br>
                    ${safePostcode} ${safePlaats}
                  </div>
                  <div style="margin-top: 10px;">
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(volledigAdres)}"
                       style="color: #2563eb; text-decoration: none; font-size: 14px;">
                      🗺️ Open in Google Maps
                    </a>
                  </div>
                </div>

                <div class="info-box">
                  <div class="label">🔧 Probleem omschrijving</div>
                  <div class="problem-box">${safeProbleem}</div>
                </div>

                <div class="action-buttons">
                  <a href="tel:${safeTelefoon}" class="button">📞 Bel Klant Direct</a>
                  <a href="mailto:${safeEmail}" class="button" style="background: #3b82f6;">📧 Stuur Email</a>
                </div>
              </div>
              <div class="footer">
                <p><strong>Computerhulp Zuid-Holland</strong></p>
                <p>085-8002006 | info@computerhulpzh.nl</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nieuwe Afspraak Aanvraag!

KLANT INFORMATIE:
Naam: ${textNaam}
Email: ${textEmail}
Telefoon: ${textTelefoon}

ADRES:
${textStraat} ${textHuisnummer}
${textPostcode} ${textPlaats}

PROBLEEM:
${textProbleem}

Neem zo snel mogelijk contact op met de klant!
      `,
    }

    // Email naar klant (bevestiging)
    const customerMailOptions = {
      from: process.env.SMTP_FROM,
      to: safeEmail,
      subject: 'Aanvraag bevestiging - Computerhulp Zuid-Holland',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0; }
              .header h1 { margin: 0; font-size: 26px; }
              .content { background: #f9fafb; padding: 30px 20px; border: 1px solid #e5e7eb; }
              .check-icon { font-size: 64px; text-align: center; margin: 20px 0; }
              .highlight-box { background: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 20px 0; }
              .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .button { display: inline-block; background: #10b981; color: white; padding: 14px 35px; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: bold; text-align: center; }
              .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; border-top: 2px solid #e5e7eb; margin-top: 20px; }
              ul { padding-left: 20px; }
              li { margin: 10px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>💻 Computerhulp Zuid-Holland</h1>
              </div>
              <div class="content">
                <div class="check-icon">✅</div>
                <h2 style="text-align: center; color: #1f2937;">Afspraak Aanvraag Ontvangen!</h2>

                <p style="font-size: 16px;">Beste ${safeNaam},</p>

                <p style="font-size: 16px;">
                  Hartelijk dank voor uw afspraak aanvraag! We hebben uw gegevens goed ontvangen en
                  zullen <strong>binnen 3 uur</strong> contact met u opnemen om een concrete afspraak in te plannen.
                </p>

                <div class="highlight-box">
                  <h3 style="margin-top: 0; color: #1e40af;">📍 Uw Gegevens</h3>
                  <p style="margin: 5px 0;"><strong>Adres:</strong> ${safeStraat} ${safeHuisnummer}, ${safePostcode} ${safePlaats}</p>
                  <p style="margin: 5px 0;"><strong>Telefoon:</strong> ${safeTelefoon}</p>
                  <p style="margin: 5px 0;"><strong>Email:</strong> ${safeEmail}</p>
                </div>

                <div class="info-box">
                  <h3 style="margin-top: 0; color: #1f2937;">⏱️ Wat Gebeurt Er Nu?</h3>
                  <ul>
                    <li><strong>Binnen 3 uur:</strong> We bellen u om een afspraak in te plannen</li>
                    <li><strong>Binnen 24 uur:</strong> Onze monteur komt bij u langs</li>
                    <li><strong>Geen voorrijkosten</strong> in heel Zuid-Holland</li>
                    <li><strong>Transparant tarief:</strong> €14,50 per kwartier</li>
                  </ul>
                </div>

                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
                  <p style="margin: 0;"><strong>🚨 Spoed?</strong> Bel ons direct op <a href="tel:0642548451" style="color: #2563eb; font-weight: bold; font-size: 18px;">085-8002006</a></p>
                </div>

                <div style="text-align: center;">
                  <a href="tel:0642548451" class="button">📞 Bel Direct: 085-8002006</a>
                </div>

                <p style="font-size: 16px;">
                  Met vriendelijke groet,<br>
                  <strong>Computerhulp Zuid-Holland</strong>
                </p>
              </div>
              <div class="footer">
                <p><strong>Computerhulp Zuid-Holland</strong></p>
                <p>085-8002006 | info@computerhulpzh.nl</p>
                <p>KvK: 91310318 | BTW: NL865613461B01</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Beste ${textNaam},

Hartelijk dank voor uw afspraak aanvraag!

We hebben uw gegevens goed ontvangen en zullen binnen 3 uur contact met u opnemen om een concrete afspraak in te plannen.

UW GEGEVENS:
Adres: ${textStraat} ${textHuisnummer}, ${textPostcode} ${textPlaats}
Telefoon: ${textTelefoon}
Email: ${textEmail}

WAT GEBEURT ER NU?
- Binnen 3 uur: We bellen u om een afspraak in te plannen
- Binnen 24 uur: Onze monteur komt bij u langs
- Geen voorrijkosten in heel Zuid-Holland
- Transparant tarief: €14,50 per kwartier

SPOED? Bel ons direct op 085-8002006

Met vriendelijke groet,
Computerhulp Zuid-Holland

085-8002006 | info@computerhulpzh.nl
KvK: 91310318 | BTW: NL865613461B01
      `,
    }

    // Verstuur beide emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(customerMailOptions)

    return NextResponse.json(
      { message: 'Afspraak aanvraag succesvol verzonden!' },
      { status: 200 }
    )
  } catch (error) {
    // Log error for monitoring (without sensitive data)
    console.error('[API Error - Afspraak]', {
      endpoint: '/api/afspraak',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    })

    // Check for SMTP/email specific errors
    if (error instanceof Error && (error.message.includes('SMTP') || error.message.includes('ECONNREFUSED'))) {
      return NextResponse.json(
        { error: 'E-mail kon niet worden verzonden. Probeer het later opnieuw of bel ons direct op 085-8002006.' },
        { status: 503 }
      )
    }

    // Generic error fallback with helpful contact info
    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het opnieuw of bel ons direct op 085-8002006.' },
      { status: 500 }
    )
  }
}
