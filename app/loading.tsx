export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="inline-block w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>

        {/* Loading text */}
        <p className="text-white text-lg font-medium">
          Laden...
        </p>
      </div>
    </div>
  )
}
