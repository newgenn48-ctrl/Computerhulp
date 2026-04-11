import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const postcode = searchParams.get('postcode')
  const number = searchParams.get('number')

  if (!postcode || !number) {
    return NextResponse.json({ error: 'Missing postcode or number' }, { status: 400 })
  }

  const apiKey = process.env.POSTCODE_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 })
  }

  try {
    const res = await fetch(
      `https://postcode.tech/api/v1/postcode/full?postcode=${encodeURIComponent(postcode)}&number=${encodeURIComponent(number)}`,
      { headers: { 'Authorization': `Bearer ${apiKey}` } }
    )

    if (!res.ok) {
      return NextResponse.json({ error: 'Lookup failed' }, { status: 502 })
    }

    const data = await res.json()
    return NextResponse.json({ street: data.street || '', city: data.city || '' })
  } catch {
    return NextResponse.json({ error: 'Lookup failed' }, { status: 502 })
  }
}
