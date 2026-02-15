import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { sanitizeHtml, sanitizeText, validateEmail, validatePhone, validateLength } from '@/lib/sanitize'
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request)
    const rateLimitResult = checkRateLimit(`offerte:${clientIP}`, RATE_LIMITS.offerte)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Te veel verzoeken. Probeer het over een minuut opnieuw.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
            'X-RateLimit-Limit': String(RATE_LIMITS.offerte.limit),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(rateLimitResult.resetTime),
          }
        }
      )
    }

    const body = await request.json()
    const { naam, email, telefoon, type_website, budget, deadline, beschrijving } = body

    // Validatie - Required fields
    if (!naam || !email || !telefoon || !type_website) {
      return NextResponse.json(
        { error: 'Naam, email, telefoon en type website zijn verplicht' },
        { status: 400 }
      )
    }

    // Validatie - Length limits (DoS protection)
    if (!validateLength(naam, 100) ||
        !validateLength(email, 254) ||
        !validateLength(telefoon, 20) ||
        !validateLength(type_website, 50) ||
        (budget && !validateLength(budget, 50)) ||
        (deadline && !validateLength(deadline, 50)) ||
        (beschrijving && !validateLength(beschrijving, 2000))) {
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
    const safeEmail = sanitizeHtml(email.trim().toLowerCase())
    const safeTelefoon = sanitizeHtml(telefoon.trim())
    const safeBudget = budget ? sanitizeHtml(budget.trim()) : ''
    const safeDeadline = deadline ? sanitizeHtml(deadline.trim()) : ''
    const safeBeschrijving = beschrijving ? sanitizeHtml(beschrijving.trim()) : ''

    // Plain text versions
    const textNaam = sanitizeText(naam.trim())
    const textEmail = sanitizeText(email.trim().toLowerCase())
    const textTelefoon = sanitizeText(telefoon.trim())
    const textTypeWebsite = sanitizeText(type_website.trim())
    const textBudget = budget ? sanitizeText(budget.trim()) : ''
    const textDeadline = deadline ? sanitizeText(deadline.trim()) : ''
    const textBeschrijving = beschrijving ? sanitizeText(beschrijving.trim()) : ''

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

    // Type website labels (sanitized values only for display)
    const typeLabels: Record<string, string> = {
      'ecommerce': '🛒 Webshop / E-commerce',
      'bedrijfswebsite': '🏢 Bedrijfswebsite',
      'portfolio': '🎨 Portfolio / Creatief',
      'blog': '📝 Blog / Nieuwssite',
      'webapplicatie': '⚙️ Webapplicatie',
      'anders': '📦 Anders'
    }

    const typeLabel = typeLabels[textTypeWebsite] || textTypeWebsite

    // Email naar jou (admin)
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `💼 Nieuwe Offerte Aanvraag van ${textNaam}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%); color: white; padding: 30px 20px; border-radius: 10px 10px 0 0; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .header .icon { font-size: 48px; margin-bottom: 10px; }
              .content { background: #f9fafb; padding: 30px 20px; border: 1px solid #e5e7eb; }
              .info-box { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #7c3aed; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { color: #4b5563; margin-top: 5px; font-size: 16px; }
              .highlight { background: #f3e8ff; padding: 15px; border-radius: 6px; border-left: 4px solid #7c3aed; margin-top: 10px; }
              .description-box { background: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-top: 10px; white-space: pre-wrap; }
              .action-buttons { margin-top: 25px; text-align: center; }
              .button { display: inline-block; background: #10b981; color: white; padding: 14px 30px; text-decoration: none; border-radius: 8px; margin: 5px; font-weight: bold; }
              .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; border-top: 2px solid #e5e7eb; margin-top: 20px; }
              .badge { display: inline-block; background: #7c3aed; color: white; padding: 5px 12px; border-radius: 20px; font-size: 13px; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="icon">💼</div>
                <h1>Nieuwe Offerte Aanvraag!</h1>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Website laten maken</p>
              </div>
              <div class="content">
                <div class="info-box">
                  <div class="field">
                    <div class="label">👤 Klant</div>
                    <div class="value">${safeNaam}</div>
                  </div>
                  <div class="field">
                    <div class="label">📧 Email</div>
                    <div class="value"><a href="mailto:${safeEmail}" style="color: #7c3aed;">${safeEmail}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">📱 Telefoon</div>
                    <div class="value"><a href="tel:${safeTelefoon}" style="color: #7c3aed; font-weight: bold; font-size: 18px;">${safeTelefoon}</a></div>
                  </div>
                </div>

                <div class="info-box">
                  <div class="label">🌐 Type Website</div>
                  <div style="margin-top: 10px;">
                    <span class="badge">${typeLabel}</span>
                  </div>
                </div>

                ${safeBudget ? `
                <div class="info-box">
                  <div class="label">💰 Budget</div>
                  <div class="highlight">
                    <strong style="font-size: 18px;">${safeBudget}</strong>
                  </div>
                </div>
                ` : ''}

                ${safeDeadline ? `
                <div class="info-box">
                  <div class="label">📅 Gewenste Opleverdatum</div>
                  <div class="highlight">
                    <strong>${safeDeadline}</strong>
                  </div>
                </div>
                ` : ''}

                ${safeBeschrijving ? `
                <div class="info-box">
                  <div class="label">📝 Beschrijving & Wensen</div>
                  <div class="description-box">${safeBeschrijving}</div>
                </div>
                ` : ''}

                <div class="action-buttons">
                  <a href="tel:${safeTelefoon}" class="button">📞 Bel Klant Direct</a>
                  <a href="mailto:${safeEmail}" class="button" style="background: #7c3aed;">📧 Stuur Email</a>
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
Nieuwe Offerte Aanvraag!

KLANT INFORMATIE:
Naam: ${textNaam}
Email: ${textEmail}
Telefoon: ${textTelefoon}

PROJECT DETAILS:
Type Website: ${typeLabel}
${textBudget ? `Budget: ${textBudget}` : ''}
${textDeadline ? `Gewenste Opleverdatum: ${textDeadline}` : ''}

${textBeschrijving ? `BESCHRIJVING:\n${textBeschrijving}` : ''}

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
              .header { background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0; }
              .header h1 { margin: 0; font-size: 26px; }
              .content { background: #f9fafb; padding: 30px 20px; border: 1px solid #e5e7eb; }
              .check-icon { font-size: 64px; text-align: center; margin: 20px 0; }
              .highlight-box { background: #f3e8ff; padding: 20px; border-radius: 8px; border-left: 4px solid #7c3aed; margin: 20px 0; }
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
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Website Laten Maken</p>
              </div>
              <div class="content">
                <div class="check-icon">✅</div>
                <h2 style="text-align: center; color: #1f2937;">Offerte Aanvraag Ontvangen!</h2>

                <p style="font-size: 16px;">Beste ${safeNaam},</p>

                <p style="font-size: 16px;">
                  Hartelijk dank voor uw interesse in onze website diensten! We hebben uw offerte aanvraag
                  goed ontvangen en zullen <strong>binnen 24 uur</strong> een vrijblijvende offerte naar u
                  opsturen.
                </p>

                <div class="highlight-box">
                  <h3 style="margin-top: 0; color: #5b21b6;">🌐 Uw Aanvraag</h3>
                  <p style="margin: 5px 0;"><strong>Type Website:</strong> ${typeLabel}</p>
                  ${safeBudget ? `<p style="margin: 5px 0;"><strong>Budget:</strong> ${safeBudget}</p>` : ''}
                  ${safeDeadline ? `<p style="margin: 5px 0;"><strong>Gewenste Opleverdatum:</strong> ${safeDeadline}</p>` : ''}
                </div>

                <div class="info-box">
                  <h3 style="margin-top: 0; color: #1f2937;">⏱️ Wat Gebeurt Er Nu?</h3>
                  <ul>
                    <li><strong>Binnen 24 uur:</strong> U ontvangt een gedetailleerde offerte</li>
                    <li><strong>Vrijblijvend gesprek:</strong> We bespreken graag uw wensen</li>
                    <li><strong>Op maat gemaakt:</strong> Elk project is uniek</li>
                    <li><strong>Transparante prijzen:</strong> Geen verborgen kosten</li>
                  </ul>
                </div>

                <div class="info-box">
                  <h3 style="margin-top: 0; color: #1f2937;">✨ Wat U Kunt Verwachten</h3>
                  <ul>
                    <li>Professioneel en modern design</li>
                    <li>Volledig responsive (mobiel, tablet, desktop)</li>
                    <li>SEO-geoptimaliseerd voor Google</li>
                    <li>Veilig en snel (HTTPS, geoptimaliseerde afbeeldingen)</li>
                    <li>Eenvoudig zelf te beheren</li>
                    <li>Persoonlijke begeleiding van A tot Z</li>
                  </ul>
                </div>

                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
                  <p style="margin: 0;"><strong>💬 Vragen?</strong> Bel ons gerust op <a href="tel:0858002006" style="color: #7c3aed; font-weight: bold; font-size: 18px;">085-8002006</a></p>
                </div>

                <div style="text-align: center;">
                  <a href="tel:0858002006" class="button">📞 Bel voor vragen: 085-8002006</a>
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

Hartelijk dank voor uw interesse in onze website diensten!

We hebben uw offerte aanvraag goed ontvangen en zullen binnen 24 uur een vrijblijvende offerte naar u opsturen.

UW AANVRAAG:
Type Website: ${typeLabel}
${textBudget ? `Budget: ${textBudget}` : ''}
${textDeadline ? `Gewenste Opleverdatum: ${textDeadline}` : ''}

WAT GEBEURT ER NU?
- Binnen 24 uur: U ontvangt een gedetailleerde offerte
- Vrijblijvend gesprek: We bespreken graag uw wensen
- Op maat gemaakt: Elk project is uniek
- Transparante prijzen: Geen verborgen kosten

WAT U KUNT VERWACHTEN:
✓ Professioneel en modern design
✓ Volledig responsive (mobiel, tablet, desktop)
✓ SEO-geoptimaliseerd voor Google
✓ Veilig en snel (HTTPS, geoptimaliseerde afbeeldingen)
✓ Eenvoudig zelf te beheren
✓ Persoonlijke begeleiding van A tot Z

VRAGEN? Bel ons gerust op 085-8002006

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
      { message: 'Offerte aanvraag succesvol verzonden!' },
      { status: 200 }
    )
  } catch (error) {
    // Log error for monitoring (without sensitive data)
    console.error('[API Error - Offerte]', {
      endpoint: '/api/offerte',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    })

    if (error instanceof Error && (error.message.includes('SMTP') || error.message.includes('ECONNREFUSED'))) {
      return NextResponse.json(
        { error: 'E-mail kon niet worden verzonden. Probeer het later opnieuw of bel ons direct op 085-8002006.' },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het opnieuw of bel ons direct op 085-8002006.' },
      { status: 500 }
    )
  }
}
