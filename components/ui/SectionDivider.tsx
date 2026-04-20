type GradientColor = { colors: string[]; id: string }
type ColorProp = string | GradientColor

interface SectionDividerProps {
  variant: 'soft-curve' | 'tilt' | 'layered-wave' | 'swoosh' | 'wave' | 'diagonal'
  topColor: ColorProp
  bottomColor: ColorProp
  flip?: boolean
}

function isGradient(color: ColorProp): color is GradientColor {
  return typeof color !== 'string'
}

function ColorDef({ color }: { color: ColorProp }) {
  if (!isGradient(color)) return null
  return (
    <linearGradient id={color.id} x1="0" y1="0" x2="1" y2="0">
      {color.colors.map((c, i) => (
        <stop key={i} offset={`${(i / (color.colors.length - 1)) * 100}%`} stopColor={c} />
      ))}
    </linearGradient>
  )
}

function fill(color: ColorProp): string {
  if (isGradient(color)) return `url(#${color.id})`
  return color
}

const heightClasses: Record<SectionDividerProps['variant'], string> = {
  'soft-curve': 'h-[40px] sm:h-[60px] lg:h-[80px]',
  'tilt': 'h-[30px] sm:h-[50px] lg:h-[60px]',
  'layered-wave': 'h-[50px] sm:h-[70px] lg:h-[90px]',
  'swoosh': 'h-[40px] sm:h-[60px] lg:h-[80px]',
  'wave': 'h-[40px] sm:h-[60px] lg:h-[80px]',
  'diagonal': 'h-[30px] sm:h-[45px] lg:h-[60px]',
}

function SvgShape({ variant, topColor, bottomColor }: { variant: SectionDividerProps['variant']; topColor: ColorProp; bottomColor: ColorProp }) {
  const top = fill(topColor)
  const bottom = fill(bottomColor)

  switch (variant) {
    case 'soft-curve':
      return (
        <>
          <rect width="1440" height="320" fill={bottom} />
          <path d="M0,0 L1440,0 L1440,160 Q1080,320 720,280 Q360,240 0,320 L0,0 Z" fill={top} />
        </>
      )
    case 'tilt':
      return (
        <>
          <rect width="1440" height="320" fill={bottom} />
          <path d="M0,0 L1440,0 L1440,80 L0,320 Z" fill={top} />
        </>
      )
    case 'layered-wave':
      return (
        <>
          <rect width="1440" height="320" fill={bottom} />
          <path d="M0,0 L1440,0 L1440,120 C1200,200 960,260 720,220 C480,180 240,240 0,280 L0,0 Z" fill={top} opacity="0.5" />
          <path d="M0,0 L1440,0 L1440,60 C1200,160 960,200 720,160 C480,120 240,180 0,220 L0,0 Z" fill={top} />
        </>
      )
    case 'swoosh':
      return (
        <>
          <rect width="1440" height="320" fill={bottom} />
          <path d="M0,0 L1440,0 L1440,40 C1080,40 720,320 0,280 L0,0 Z" fill={top} />
        </>
      )
    case 'wave':
      return (
        <>
          <rect width="1440" height="320" fill={bottom} />
          <path d="M0,0 L1440,0 L1440,160 C1320,240 1200,280 1080,260 C960,240 840,180 720,180 C600,180 480,240 360,260 C240,280 120,240 0,160 L0,0 Z" fill={top} />
        </>
      )
    case 'diagonal':
      return (
        <>
          <rect width="1440" height="320" fill={bottom} />
          <path d="M0,0 L1440,0 L1440,120 L0,320 Z" fill={top} />
        </>
      )
  }
}

/**
 * SVG-based divider om secties vloeiend in elkaar te laten overlopen.
 * Tailwind-kleuren via hex:
 *   ink-50 = #fafafa, ink-900 = #1c1917, white = #ffffff, blue-600 = #2563eb.
 */
export default function SectionDivider({ variant, topColor, bottomColor, flip = false }: SectionDividerProps) {
  const needsDefs = isGradient(topColor) || isGradient(bottomColor)

  return (
    <div
      className={`relative w-full leading-[0] ${heightClasses[variant]} ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {needsDefs && (
          <defs>
            {isGradient(topColor) && <ColorDef color={topColor} />}
            {isGradient(bottomColor) && <ColorDef color={bottomColor} />}
          </defs>
        )}
        <SvgShape variant={variant} topColor={topColor} bottomColor={bottomColor} />
      </svg>
    </div>
  )
}
