import { ImageResponse } from 'next/og'
import { BUSINESS, PRICING } from '@/lib/constants'

export const runtime = 'edge'
export const alt = `${BUSINESS.NAME} – computerhulp aan huis in heel Zuid-Holland`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

/* Satori (de renderer) eist expliciete display:flex op elke div met meerdere
   kinderen en kan geen emoji/dingbats renderen zonder externe font-download —
   daarom bolletjes-divs in plaats van vinkjes. */
const usps = ['Meestal binnen 24 uur', '7 dagen per week', `${PRICING.PER_QUARTER} per kwartier`]

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #2563eb 0%, #4338ca 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            background: 'white',
            borderRadius: 24,
            marginBottom: 44,
            fontSize: 56,
            fontWeight: 700,
            color: '#2563eb',
          }}
        >
          CH
        </div>

        <div style={{ display: 'flex', fontSize: 68, fontWeight: 700, color: 'white', marginBottom: 18 }}>
          {BUSINESS.NAME}
        </div>
        <div style={{ display: 'flex', fontSize: 34, color: '#dbeafe', marginBottom: 52 }}>
          Computerhulp aan huis in heel Zuid-Holland
        </div>

        <div style={{ display: 'flex', gap: 40 }}>
          {usps.map((usp) => (
            <div
              key={usp}
              style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 26, color: 'white' }}
            >
              <div style={{ display: 'flex', width: 12, height: 12, borderRadius: 9999, background: '#93c5fd' }} />
              <div style={{ display: 'flex' }}>{usp}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 46,
            fontSize: 30,
            fontWeight: 700,
            color: 'white',
          }}
        >
          Bel {BUSINESS.PHONE}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
