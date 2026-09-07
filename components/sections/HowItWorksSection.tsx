interface HowItWorksSectionProps {
  title?: string
  background?: 'white' | 'gray'
}

const steps = [
  {
    step: '1',
    title: 'Bel of plan online',
    desc: 'Vertel kort wat er niet werkt. U hoeft geen technische termen te kennen.',
  },
  {
    step: '2',
    title: 'We kiezen een rustig moment',
    desc: 'We spreken af wanneer we langskomen en wat u kunt verwachten. Meestal binnen 24 uur.',
  },
  {
    step: '3',
    title: 'We helpen aan uw eigen tafel',
    desc: 'We kijken mee op uw eigen apparaat en lossen het probleem stap voor stap op.',
  },
  {
    step: '4',
    title: 'Samen controleren',
    desc: 'We testen of alles werkt en leggen rustig uit wat handig is om te onthouden.',
  },
]

/**
 * Vier stappen als kaarten. De vierde stap, samen controleren, is wat de
 * doelgroep het meest geruststelt: er wordt niet weggelopen zodra het werkt.
 */
export default function HowItWorksSection({
  title = 'In vier eenvoudige stappen',
}: HowItWorksSectionProps) {
  return (
    <section className="panel-section" aria-labelledby="how-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="panel panel-pad">
          <header className="mb-8">
            <p className="section-eyebrow">Zo werkt het</p>
            <h2 id="how-heading" className="section-title">{title}</h2>
            <p className="section-subtitle">Geen ingewikkeld proces. We nemen rustig met u door wat er gebeurt.</p>
          </header>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {steps.map((item) => (
              <li key={item.step} className="step-card">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-lg font-bold flex items-center justify-center shadow-md shadow-blue-700/20 mb-4" aria-hidden="true">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-snug mb-1.5">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
