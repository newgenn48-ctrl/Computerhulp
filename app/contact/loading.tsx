export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Skeleton */}
        <div className="bg-gradient-to-br from-blue-200 to-blue-300 h-48 mb-12 animate-pulse rounded-2xl"></div>

        {/* Form Skeleton */}
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="h-12 bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="h-32 bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="h-14 bg-blue-200 rounded-xl animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
