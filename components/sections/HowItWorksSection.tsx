import { Icon } from '@/components/icons'
import { BUSINESS, PRICING } from '@/lib/constants'

interface HowItWorksSectionProps {
  title?: string
  subtitle?: string
  background?: 'white' | 'gray'
}

export default function HowItWorksSection({
  title = 'Zo werkt het',
  subtitle = 'In drie stappen thuis geholpen',
  background = 'white',
}: HowItWorksSectionProps) {
  const steps = [
    {
      step: '1',
      title: 'U belt ons',
      desc: `Bel ${BUSINESS.PHONE} of vul het online formulier in. We luisteren en plannen meteen een moment.`,
      icon: 'phone' as const,
    },
    {
      step: '2',
      title: 'Wij komen bij u thuis',
      desc: `Meestal binnen 24 uur bij u aan de deur. Voorrijden kost ${PRICING.TRAVEL}, geen verborgen kosten.`,
      icon: 'home' as const,
    },
    {
      step: '3',
      title: 'Probleem opgelost',
      desc: 'U betaalt pas na afloop via pin of Tikkie. En u weet weer hoe het werkt.',
      icon: 'check-circle' as const,
    },
  ]

  return (
    <section className={`py-16 sm:py-24 ${background === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>}
        </header>

        <ol className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, idx) => (
            <li key={item.step} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-0.5 bg-gradient-to-r from-blue-200 to-transparent" aria-hidden="true" />
              )}
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md shadow-blue-600/20">
                    {item.step}
                  </div>
                  <Icon name={item.icon} className="w-7 h-7 text-blue-600" strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
