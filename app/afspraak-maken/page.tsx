import AfspraakForm from '@/components/AfspraakForm'

export default function AfspraakMakenPage() {
  return (
    <div className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10">
          <AfspraakForm />
        </div>
      </div>
    </div>
  )
}
