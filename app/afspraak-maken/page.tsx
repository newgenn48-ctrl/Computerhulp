import AfspraakForm from '@/components/AfspraakForm'

export default function AfspraakMakenPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Plan Direct Uw Afspraak
            </h2>
            <p className="text-gray-600 text-lg">
              Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met u op
            </p>
          </div>

          <AfspraakForm />
        </div>
      </div>
    </div>
  )
}
