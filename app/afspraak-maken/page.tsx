import AfspraakForm from '@/components/AfspraakForm'

export default function AfspraakMakenPage() {
  return (
    <div className="pt-24 pb-20 bg-surface min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-8">
          <h1 className="section-title">
            Vraag een afspraak aan
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Vul onderstaande gegevens in en wij nemen zo spoedig mogelijk contact met u op.
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10">
          <AfspraakForm />
        </div>
      </div>
    </div>
  )
}
