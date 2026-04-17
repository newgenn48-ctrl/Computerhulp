import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { sanitizeHtml, sanitizeText, validateEmail, validatePhone, validateLength } from '@/lib/sanitize'
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit'
import { BUSINESS, HOURS } from '@/lib/constants'

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
    const { naam, telefoon, email, probleem, website } = body

    // Honeypot — bots fill hidden fields, humans don't
    if (website) {
      return NextResponse.json({ message: 'Hulpvraag succesvol verzonden!' }, { status: 200 })
    }

    // Validatie - alle velden verplicht
    if (!naam || !telefoon || !email || !probleem) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      )
    }

    // Validatie - Length limits
    if (!validateLength(naam, 100) ||
        !validateLength(telefoon, 20) ||
        !validateLength(email, 254) ||
        !validateLength(probleem, 2000)) {
      return NextResponse.json(
        { error: 'Een of meerdere velden zijn te lang' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      )
    }

    if (!validatePhone(telefoon)) {
      return NextResponse.json(
        { error: 'Ongeldig telefoonnummer (gebruik Nederlands formaat)' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const safeNaam = sanitizeHtml(naam.trim())
    const safeTelefoon = sanitizeHtml(telefoon.trim())
    const safeEmail = sanitizeHtml(email.trim().toLowerCase())
    const safeProbleem = sanitizeHtml(probleem.trim())

    const textNaam = sanitizeText(naam.trim())
    const textTelefoon = sanitizeText(telefoon.trim())
    const textEmail = sanitizeText(email.trim().toLowerCase())
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

    // Email naar jou (admin)
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Nieuwe Hulpvraag van ${textNaam}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px 20px; border-radius: 10px 10px 0 0; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { background: #f9fafb; padding: 30px 20px; border: 1px solid #e5e7eb; }
              .info-box { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { color: #4b5563; margin-top: 5px; font-size: 16px; }
              .problem-box { background: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-top: 10px; white-space: pre-wrap; }
              .action-buttons { margin-top: 25px; text-align: center; }
              .button { display: inline-block; background: #10b981; color: white; padding: 14px 30px; text-decoration: none; border-radius: 8px; margin: 5px; font-weight: bold; }
              .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; border-top: 2px solid #e5e7eb; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nieuwe Hulpvraag</h1>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Er is een nieuwe hulpvraag binnengekomen</p>
              </div>
              <div class="content">
                <div class="info-box">
                  <div class="field">
                    <div class="label">Klant</div>
                    <div class="value">${safeNaam}</div>
                  </div>
                  <div class="field">
                    <div class="label">Telefoon</div>
                    <div class="value"><a href="tel:${safeTelefoon}" style="color: #2563eb; font-weight: bold; font-size: 18px;">${safeTelefoon}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Email</div>
                    <div class="value"><a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></div>
                  </div>
                </div>

                <div class="info-box">
                  <div class="label">Probleem</div>
                  <div class="problem-box">${safeProbleem}</div>
                </div>

                <div class="action-buttons">
                  <a href="tel:${safeTelefoon}" class="button">Bel Klant</a>
                  <a href="mailto:${safeEmail}" class="button" style="background: #3b82f6;">Stuur Email</a>
                </div>
              </div>
              <div class="footer">
                <p><strong>${BUSINESS.NAME}</strong></p>
                <p>${BUSINESS.PHONE} | ${BUSINESS.EMAIL}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nieuwe Hulpvraag

Naam: ${textNaam}
Telefoon: ${textTelefoon}
Email: ${textEmail}

Probleem:
${textProbleem}

Neem zo snel mogelijk contact op!
      `,
    }

    // Email naar klant (bevestiging)
    const customerMailOptions = {
      from: process.env.SMTP_FROM,
      to: safeEmail,
      subject: 'Bevestiging hulpvraag - Computerhulp Zuid-Holland',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { background: #f9fafb; padding: 30px 20px; border: 1px solid #e5e7eb; }
              .highlight-box { background: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 20px 0; }
              .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .button { display: inline-block; background: #2563eb; color: white; padding: 14px 35px; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: bold; text-align: center; }
              .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; border-top: 2px solid #e5e7eb; margin-top: 20px; }
              ul { padding-left: 20px; }
              li { margin: 10px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Computerhulp Zuid-Holland</h1>
              </div>
              <div class="content">
                <h2 style="text-align: center; color: #1f2937;">Uw hulpvraag is ontvangen</h2>

                <p style="font-size: 16px;">Beste ${safeNaam},</p>

                <p style="font-size: 16px;">
                  Bedankt voor uw hulpvraag. We nemen <strong>binnen enkele uren</strong> telefonisch contact met u op.
                </p>

                <div class="info-box">
                  <h3 style="margin-top: 0; color: #1f2937;">Wat gebeurt er nu?</h3>
                  <ul>
                    <li>We bellen u om uw probleem te bespreken</li>
                    <li>Samen plannen we een afspraak in</li>
                    <li>Onze IT-student komt bij u thuis</li>
                  </ul>
                </div>

                <div class="highlight-box">
                  <p style="margin: 0;"><strong>Spoed?</strong> Bel ons direct op <a href="${BUSINESS.PHONE_HREF}" style="color: #2563eb; font-weight: bold;">${BUSINESS.PHONE}</a></p>
                  <p style="margin: 5px 0 0 0; font-size: 14px; color: #6b7280;">We zijn bereikbaar van 08:00 tot 22:00, 7 dagen per week.</p>
                </div>

                <p style="font-size: 16px;">
                  Met vriendelijke groet,<br>
                  <strong>${BUSINESS.NAME}</strong>
                </p>
              </div>
              <div class="footer">
                <p><strong>${BUSINESS.NAME}</strong></p>
                <p>${BUSINESS.PHONE} | ${BUSINESS.EMAIL}</p>
                <p>KvK: ${BUSINESS.KVK}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Beste ${textNaam},

Bedankt voor uw hulpvraag. We nemen binnen enkele uren telefonisch contact met u op.

Wat gebeurt er nu?
- We bellen u om uw probleem te bespreken
- Samen plannen we een afspraak in
- Onze IT-student komt bij u thuis

Spoed? Bel ons direct op ${BUSINESS.PHONE}
We zijn bereikbaar van ${HOURS.LABEL}.

Met vriendelijke groet,
${BUSINESS.NAME}

${BUSINESS.PHONE} | ${BUSINESS.EMAIL}
KvK: ${BUSINESS.KVK}
      `,
    }

    // Verstuur admin + klant-bevestiging
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(customerMailOptions)

    return NextResponse.json(
      { message: 'Hulpvraag succesvol verzonden!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[API Error - Afspraak]', {
      endpoint: '/api/afspraak',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    })

    if (error instanceof Error && (error.message.includes('SMTP') || error.message.includes('ECONNREFUSED'))) {
      return NextResponse.json(
        { error: `E-mail kon niet worden verzonden. Probeer het later opnieuw of bel ons direct op ${BUSINESS.PHONE}.` },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { error: `Er is een fout opgetreden. Probeer het opnieuw of bel ons direct op ${BUSINESS.PHONE}.` },
      { status: 500 }
    )
  }
}
