import { Icon } from '@/components/icons'
import { BUSINESS, PRICING } from '@/lib/constants'

interface HowItWorksSectionProps {
  title?: string
  subtitle?: string
  background?: 'white' | 'gray'
}

export default function HowItWorksSection({
  title = 'In drie stappen geholpen',
  subtitle = 'Geen ingewikkeld gedoe. Even bellen, en wij regelen de rest.',
  background = 'white',
}: HowItWorksSectionProps) {
  const steps = [
    {
      step: '1',
      title: 'Neem contact op',
      desc: `Bel ${BUSINESS.PHONE} of plan online een afspraak. Wij luisteren en denken mee.`,
      icon: 'phone' as const,
    },
    {
      step: '2',
      title: 'Wij komen bij u thuis',
      desc: `Meestal binnen 24 uur aan de deur. Voorrijden ${PRICING.TRAVEL}, geen verborgen kosten.`,
      icon: 'home' as const,
    },
    {
      step: '3',
      title: 'Probleem opgelost',
      desc: 'Duidelijke uitleg, betalen pas na afloop via pin of Tikkie.',
      icon: 'check-circle' as const,
    },
  ]

  return (
    <section className={`py-20 lg:py-28 ${background === 'gray' ? 'section-bg-soft' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <p className="section-eyebrow">Zo werkt het</p>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>}
        </header>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">
          {/* Horizontale gradient-verbindingslijn — alleen desktop, achter de iconen */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200"
          />

          {steps.map((item) => (
            <li key={item.step} className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-0 md:px-4">
              {/* Icoon-cirkel met Stap-label — hoger dan de verbindingslijn */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-white shadow-soft-lg border border-ink-100 flex flex-col items-center justify-center flex-shrink-0 md:mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 leading-none">Stap {item.step}</span>
                <Icon name={item.icon} className="w-6 h-6 text-blue-600 mt-1.5" strokeWidth={2} aria-hidden="true" />
              </div>

              <div className="md:max-w-[240px]">
                <h3 className="font-bold text-gray-900 mb-1.5 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
