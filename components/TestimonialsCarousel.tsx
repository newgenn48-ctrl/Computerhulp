'use client'

import { useRef, useState, useEffect } from 'react'

interface Testimonial {
  quote: string
  name: string
  location: string
  initials: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const ref = scrollRef.current
    if (ref) {
      ref.addEventListener('scroll', checkScroll)
      return () => ref.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = (scrollRef.current.querySelector('[role="listitem"]') as HTMLElement)?.offsetWidth || 400
      const scrollAmount = direction === 'left' ? -cardWidth - 24 : cardWidth + 24
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      {/* Left Arrow - Desktop only */}
      <button
        onClick={() => scroll('left')}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden lg:flex w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-all ${
          canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Vorige reviews"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow - Desktop only */}
      <button
        onClick={() => scroll('right')}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden lg:flex w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-all ${
          canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Volgende reviews"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Swipeable container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        role="list"
        aria-label="Klantbeoordelingen carousel"
      >
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[calc(33.333%-1rem)] snap-start bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-gray-100 relative"
            role="listitem"
          >
            <svg className="absolute top-6 right-6 w-10 h-10 text-blue-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <div className="flex items-center gap-1 mb-4" role="img" aria-label="5 van 5 sterren">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">&ldquo;{testimonial.quote}&rdquo;</blockquote>
            <footer className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold" aria-hidden="true">
                {testimonial.initials}
              </div>
              <div>
                <cite className="font-semibold text-gray-900 not-italic">{testimonial.name}</cite>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
              </div>
            </footer>
          </div>
        ))}
      </div>

      {/* Scroll indicators (dots) - Mobile only */}
      <div className="flex justify-center gap-2 mt-6 lg:hidden" aria-hidden="true">
        {testimonials.map((_, idx) => (
          <div key={idx} className="w-2 h-2 rounded-full bg-gray-300" />
        ))}
      </div>
    </div>
  )
}
