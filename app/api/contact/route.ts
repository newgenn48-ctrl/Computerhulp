import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/mailer'

// TODO: Voor productie, implementeer reCAPTCHA v3 in het frontend formulier:
// 1. Voeg NEXT_PUBLIC_RECAPTCHA_SITE_KEY toe aan .env
// 2. Voeg RECAPTCHA_SECRET_KEY toe aan .env
// 3. Installeer: npm install react-google-recaptcha-v3
// 4. Wrap formulier met GoogleReCaptchaProvider
// 5. Gebruik executeRecaptcha() bij submit
// 6. Stuur token mee in request body

// Verify reCAPTCHA (optional - only if configured)
async function verifyRecaptcha(token?: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  // If reCAPTCHA is not configured, allow the request
  if (!secretKey || !token) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('reCAPTCHA not configured - skipping verification')
    }
    return true
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return data.success && data.score > 0.5
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('reCAPTCHA verification error:', error)
    }
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    // CSRF Protection: Verify origin header
    const origin = request.headers.get('origin')
    const host = request.headers.get('host')

    // In production, verify that requests come from our domain
    if (process.env.NODE_ENV === 'production') {
      const allowedOrigins = [
        'https://computerhulpzh.nl',
        'https://www.computerhulpzh.nl'
      ]

      if (!origin || !allowedOrigins.includes(origin)) {
        return NextResponse.json(
          { error: 'Ongeldig verzoek' },
          { status: 403 }
        )
      }
    }

    const body = await request.json()
    const { name, email, phone, message } = body

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      )
    }

    // Phone validation (basic Dutch format)
    const phoneRegex = /^(\+31|0031|0)[1-9][0-9]{8}$/
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '')
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Ongeldig telefoonnummer' },
        { status: 400 }
      )
    }

    // Send email
    await sendContactEmail({
      name,
      email,
      phone,
      message,
    })

    return NextResponse.json(
      { success: true, message: 'Bericht succesvol verzonden' },
      { status: 200 }
    )
  } catch (error) {
    // Log error for monitoring (with details in development)
    console.error('[API Error - Contact Form]', {
      endpoint: '/api/contact',
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    })

    // Check for SMTP/email specific errors
    if (error instanceof Error && (error.message.includes('SMTP') || error.message.includes('ECONNREFUSED'))) {
      return NextResponse.json(
        { error: 'E-mail kon niet worden verzonden. Probeer het later opnieuw of bel ons direct op 06-42548451.' },
        { status: 503 }
      )
    }

    // Generic error fallback with helpful contact info
    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het opnieuw of bel ons direct op 06-42548451.' },
      { status: 500 }
    )
  }
}
