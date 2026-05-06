import { Icon } from '@/components/icons'

interface HowItWorksSectionProps {
  title?: string
  background?: 'white' | 'gray'
}

const steps = [
  { step: '1', title: 'Bel of plan online', desc: 'We bespreken kort wat er aan de hand is.', icon: 'phone' as const },
  { step: '2', title: 'Wij komen bij u thuis', desc: 'Meestal binnen 24 uur aan de deur.', icon: 'home' as const },
  { step: '3', title: 'Probleem opgelost', desc: 'Betalen pas na afloop via Tikkie.', icon: 'check-circle' as const },
]

export default function HowItWorksSection({
  title = 'Zo werkt het',
  background = 'white',
}: HowItWorksSectionProps) {
  return (
    <section className={`py-10 lg:py-12 ${background === 'gray' ? 'section-bg-soft' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <p className="section-eyebrow">In 3 stappen</p>
          <h2 className="section-title">{title}</h2>
        </header>

        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((item) => (
            <li
              key={item.step}
              className="flex sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-3"
            >
              <div className="relative w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon} className="w-5 h-5 text-blue-600" strokeWidth={2} aria-hidden="true" />
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <div className="flex-1 sm:flex-none">
                <h3 className="font-bold text-gray-900 text-base mb-0.5">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-snug">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
