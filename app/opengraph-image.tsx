import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'
export const alt = 'Computerhulp Zuid-Holland - IT-Problemen Snel Opgelost'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

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
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Logo/Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            borderRadius: 20,
            marginBottom: 40,
            fontSize: 60,
            fontWeight: 'bold',
            color: 'white',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          }}
        >
          CH
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: 900,
            padding: '0 60px',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Computerhulp Zuid-Holland
          </h1>
          <p
            style={{
              fontSize: 36,
              color: '#93c5fd',
              margin: 0,
              marginBottom: 40,
            }}
          >
            IT-Problemen Snel Opgelost
          </p>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: 30,
              fontSize: 24,
              color: '#dbeafe',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              ✓ Binnen 24 uur
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              ✓ Aan huis service
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              ✓ €14,50 per kwartier
            </div>
          </div>
        </div>

        {/* Phone */}
        <div
          style={{
            position: 'absolute',
            bottom: 50,
            fontSize: 32,
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          📞 085-8002006
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
