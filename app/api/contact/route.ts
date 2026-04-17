import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/mailer'
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit'
import { BUSINESS } from '@/lib/constants'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request)
    const rateLimitResult = checkRateLimit(`contact:${clientIP}`, RATE_LIMITS.contact)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Te veel verzoeken. Probeer het over een minuut opnieuw.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
            'X-RateLimit-Limit': String(RATE_LIMITS.contact.limit),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(rateLimitResult.resetTime),
          },
        }
      )
    }

    // CSRF — alleen in productie, check origin header
    const origin = request.headers.get('origin')
    if (process.env.NODE_ENV === 'production') {
      const allowedOrigins = [BUSINESS.URL, `${BUSINESS.URL.replace('https://', 'https://www.')}`]
      if (!origin || !allowedOrigins.includes(origin)) {
        return NextResponse.json({ error: 'Ongeldig verzoek' }, { status: 403 })
      }
    }

    const body = await request.json()
    const { name, email, phone, message, website } = body

    // Honeypot — bots fill hidden fields, humans don't
    if (website) {
      return NextResponse.json({ success: true, message: 'Bericht succesvol verzonden' }, { status: 200 })
    }

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Alle velden zijn verplicht' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Ongeldig e-mailadres' }, { status: 400 })
    }

    const phoneRegex = /^(\+31|0031|0)[1-9][0-9]{8}$/
    const cleanPhone = phone.replace(/[\s\-()]/g, '')
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json({ error: 'Ongeldig telefoonnummer' }, { status: 400 })
    }

    await sendContactEmail({ name, email, phone, message })

    return NextResponse.json(
      { success: true, message: 'Bericht succesvol verzonden' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[API Error - Contact Form]', {
      endpoint: '/api/contact',
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
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
