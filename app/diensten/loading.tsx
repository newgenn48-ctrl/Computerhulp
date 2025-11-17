export default function Loading() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Skeleton */}
        <div className="bg-gradient-to-br from-slate-200 to-blue-200 rounded-3xl h-96 mb-12 animate-pulse"></div>

        {/* Content Skeletons */}
        <div className="space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
