import { Icon } from '@/components/icons'

export default function ExtraBenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Waarom Kiezen Klanten Voor Ons?
          </h2>
          <p className="section-subtitle">
            Betrouwbaar, professioneel en altijd transparant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="shield" className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">100% Veilig</h3>
            <p className="text-gray-600 text-sm">
              KvK geregistreerd, verzekerd en gescreend. Uw gegevens blijven privé.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="money" className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Geen Verrassingen</h3>
            <p className="text-gray-600 text-sm">
              Duidelijke prijsafspraak vooraf. U weet precies wat u betaalt.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="book" className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Uitleg Inbegrepen</h3>
            <p className="text-gray-600 text-sm">
              We leggen rustig uit hoe alles werkt. Geen jargon, gewoon begrijpelijk.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
              <Icon name="thumbs-up" className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Garantie op Werk</h3>
            <p className="text-gray-600 text-sm">
              Tevreden of geld terug. Wij staan achter ons werk.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
