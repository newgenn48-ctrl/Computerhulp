import nodemailer from 'nodemailer'
import { sanitizeHtml, sanitizeText } from './sanitize'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  // Sanitize all user input
  const safeName = sanitizeHtml(data.name)
  const safeEmail = sanitizeHtml(data.email)
  const safePhone = sanitizeHtml(data.phone)
  const safeMessage = sanitizeHtml(data.message)

  // Plain text versions
  const textName = sanitizeText(data.name)
  const textEmail = sanitizeText(data.email)
  const textPhone = sanitizeText(data.phone)
  const textMessage = sanitizeText(data.message)

  // Create transporter
  const port = parseInt(process.env.SMTP_PORT || '587')
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: port,
    secure: port === 465, // true for 465 (SSL/TLS), false for 587 (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Email to admin
  const adminMailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: `Nieuwe contactaanvraag van ${textName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1f2937; }
            .value { color: #4b5563; margin-top: 5px; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #2563eb; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Nieuwe Contactaanvraag</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Naam:</div>
                <div class="value">${safeName}</div>
              </div>
              <div class="field">
                <div class="label">E-mail:</div>
                <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
              </div>
              <div class="field">
                <div class="label">Telefoon:</div>
                <div class="value"><a href="tel:${safePhone}">${safePhone}</a></div>
              </div>
              <div class="field">
                <div class="label">Bericht:</div>
                <div class="message-box">${safeMessage.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
Nieuwe contactaanvraag van ${textName}

Naam: ${textName}
E-mail: ${textEmail}
Telefoon: ${textPhone}

Bericht:
${textMessage}
    `,
  }

  // Email to customer (auto-reply)
  const customerMailOptions = {
    from: process.env.SMTP_FROM,
    to: data.email,
    subject: 'Bedankt voor uw bericht - Computerhulp Zuid-Holland',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 5px 5px; }
            .button { display: inline-block; background: #16a34a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Computerhulp Zuid-Holland</h1>
            </div>
            <div class="content">
              <h2>Beste ${safeName},</h2>
              <p>
                Hartelijk dank voor uw bericht! We hebben uw aanvraag goed ontvangen en zullen
                zo spoedig mogelijk contact met u opnemen.
              </p>
              <p>
                In de meeste gevallen reageren we binnen 3 uur op werkdagen.
                Heeft u spoed? Bel ons gerust direct!
              </p>
              <div style="text-align: center;">
                <a href="tel:0642548451" class="button">Bel direct: 06-42548451</a>
              </div>
              <p>
                <strong>Uw gegevens:</strong><br>
                E-mail: ${safeEmail}<br>
                Telefoon: ${safePhone}
              </p>
              <p>
                Met vriendelijke groet,<br>
                <strong>Computerhulp Zuid-Holland</strong>
              </p>
            </div>
            <div class="footer">
              <p>
                Computerhulp Zuid-Holland | 06-42548451 | info@computerhulpzh.nl<br>
                KvK: 91310318 | BTW: NL865613461B01
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
Beste ${textName},

Hartelijk dank voor uw bericht! We hebben uw aanvraag goed ontvangen en zullen zo spoedig mogelijk contact met u opnemen.

In de meeste gevallen reageren we binnen 3 uur op werkdagen. Heeft u spoed? Bel ons gerust direct op 06-42548451!

Uw gegevens:
E-mail: ${textEmail}
Telefoon: ${textPhone}

Met vriendelijke groet,
Computerhulp Zuid-Holland

---
Computerhulp Zuid-Holland | 06-42548451 | info@computerhulpzh.nl
KvK: 91310318 | BTW: NL865613461B01
    `,
  }

  // Send both emails
  await transporter.sendMail(adminMailOptions)
  await transporter.sendMail(customerMailOptions)
}
