interface HowItWorksSectionProps {
  title?: string
  background?: 'white' | 'gray'
}

const steps = [
  {
    step: '1',
    title: 'Bel of plan online',
    desc: 'Vertel kort wat er niet werkt — dat is genoeg.',
  },
  {
    step: '2',
    title: 'Wij komen bij u thuis',
    desc: 'Meestal binnen 24 uur aan de deur, op een moment dat u schikt.',
  },
  {
    step: '3',
    title: 'Opgelost én uitgelegd',
    desc: 'We laten zien wat er aan de hand was, zodat u het zelf weer snapt.',
  },
]

/**
 * Drie stappen als verbonden tijdlijn: de lijn tussen de nummers maakt de
 * volgorde fysiek zichtbaar. Desktop horizontaal, mobiel verticaal met een
 * doorlopende rail — hetzelfde beeld, gekanteld.
 */
export default function HowItWorksSection({
  title = 'Zo werkt het',
  background = 'white',
}: HowItWorksSectionProps) {
  return (
    <section className={`py-12 lg:py-16 ${background === 'gray' ? 'section-bg-soft' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 lg:mb-12">
          <p className="section-eyebrow">In 3 stappen</p>
          <h2 className="section-title">{title}</h2>
        </header>

        <ol className="grid grid-cols-1 sm:grid-cols-3">
          {steps.map((item, i) => (
            <li
              key={item.step}
              className="relative flex sm:flex-col items-start sm:items-center gap-x-5 sm:text-center"
            >
              {/* Desktop: cirkel met lijnstukken links en rechts. De helften
                  van buurkolommen sluiten op elkaar aan tot één lijn. */}
              <div className="hidden sm:flex items-center w-full" aria-hidden="true">
                <div className={`h-px flex-1 ${i === 0 ? 'bg-transparent' : 'bg-blue-200'}`} />
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-xl font-extrabold flex items-center justify-center shadow-lg shadow-blue-700/25 shrink-0">
                  {item.step}
                </div>
                <div className={`h-px flex-1 ${i === steps.length - 1 ? 'bg-transparent' : 'bg-blue-200'}`} />
              </div>

              {/* Mobiel: cirkel links met verticale rail naar de volgende stap */}
              <div className="sm:hidden flex flex-col items-center self-stretch" aria-hidden="true">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-lg font-extrabold flex items-center justify-center shadow-lg shadow-blue-700/25 shrink-0">
                  {item.step}
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-blue-200 my-2" />}
              </div>

              <div className="flex-1 sm:flex-none sm:mt-5 pb-8 sm:pb-0 pt-1.5 sm:pt-0 sm:px-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1.5">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
