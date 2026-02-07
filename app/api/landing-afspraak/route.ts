import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { sanitizeHtml, sanitizeText, validatePhone, validateLength } from '@/lib/sanitize'
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request)
    const rateLimitResult = checkRateLimit(`landing:${clientIP}`, RATE_LIMITS.afspraak)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Te veel verzoeken. Probeer het over een minuut opnieuw.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
          },
        }
      )
    }

    const body = await request.json()
    const { naam, telefoon, probleem } = body

    if (!naam || !telefoon || !probleem) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      )
    }

    if (!validateLength(naam, 100) || !validateLength(telefoon, 20) || !validateLength(probleem, 2000)) {
      return NextResponse.json(
        { error: 'Een of meerdere velden zijn te lang' },
        { status: 400 }
      )
    }

    if (!validatePhone(telefoon)) {
      return NextResponse.json(
        { error: 'Ongeldig telefoonnummer (gebruik Nederlands formaat)' },
        { status: 400 }
      )
    }

    const safeNaam = sanitizeHtml(naam.trim())
    const safeTelefoon = sanitizeHtml(telefoon.trim())
    const safeProbleem = sanitizeHtml(probleem.trim())

    const textNaam = sanitizeText(naam.trim())
    const textTelefoon = sanitizeText(telefoon.trim())
    const textProbleem = sanitizeText(probleem.trim())

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

    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `[Landing Page] Nieuwe aanvraag van ${textNaam}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px 20px; border-radius: 10px 10px 0 0; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .badge { display: inline-block; background: rgba(255,255,255,0.2); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; margin-top: 8px; }
              .content { background: #f9fafb; padding: 30px 20px; border: 1px solid #e5e7eb; }
              .info-box { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { color: #4b5563; margin-top: 5px; font-size: 16px; }
              .problem-box { background: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-top: 10px; white-space: pre-wrap; }
              .button { display: inline-block; background: #10b981; color: white; padding: 14px 30px; text-decoration: none; border-radius: 8px; margin: 5px; font-weight: bold; }
              .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; border-top: 2px solid #e5e7eb; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nieuwe Aanvraag via Landing Page</h1>
                <span class="badge">Google Ads Landing</span>
              </div>
              <div class="content">
                <div class="info-box">
                  <div class="field">
                    <div class="label">Naam</div>
                    <div class="value">${safeNaam}</div>
                  </div>
                  <div class="field">
                    <div class="label">Telefoon</div>
                    <div class="value"><a href="tel:${safeTelefoon}" style="color: #2563eb; font-weight: bold; font-size: 18px;">${safeTelefoon}</a></div>
                  </div>
                </div>
                <div class="info-box">
                  <div class="label">Probleem omschrijving</div>
                  <div class="problem-box">${safeProbleem}</div>
                </div>
                <div style="text-align: center; margin-top: 25px;">
                  <a href="tel:${safeTelefoon}" class="button">Bel Klant Direct</a>
                </div>
              </div>
              <div class="footer">
                <p><strong>Computerhulp Zuid-Holland</strong></p>
                <p>06-42548451 | info@computerhulpzh.nl</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
[LANDING PAGE] Nieuwe Aanvraag

Naam: ${textNaam}
Telefoon: ${textTelefoon}

Probleem:
${textProbleem}

Neem zo snel mogelijk contact op!
      `,
    }

    await transporter.sendMail(adminMailOptions)

    return NextResponse.json(
      { message: 'Aanvraag succesvol verzonden!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[API Error - Landing Afspraak]', {
      endpoint: '/api/landing-afspraak',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    })

    if (error instanceof Error && (error.message.includes('SMTP') || error.message.includes('ECONNREFUSED'))) {
      return NextResponse.json(
        { error: 'E-mail kon niet worden verzonden. Probeer het later opnieuw of bel ons direct op 06-42548451.' },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het opnieuw of bel ons direct op 06-42548451.' },
      { status: 500 }
    )
  }
}
