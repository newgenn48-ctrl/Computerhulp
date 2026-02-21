'use client'

import { useRef, useState, useEffect } from 'react'
import { Icon } from '@/components/icons'

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
        className={`carousel-arrow left-0 -translate-x-4 ${
          canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Vorige reviews"
      >
        <Icon name="chevron-left" className="w-6 h-6 text-gray-700" strokeWidth={2} aria-hidden="true" />
      </button>

      {/* Right Arrow - Desktop only */}
      <button
        onClick={() => scroll('right')}
        className={`carousel-arrow right-0 translate-x-4 ${
          canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Volgende reviews"
      >
        <Icon name="chevron-right" className="w-6 h-6 text-gray-700" strokeWidth={2} aria-hidden="true" />
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
            className="carousel-card"
            role="listitem"
          >
            <Icon name="quote" className="absolute top-6 right-6 w-10 h-10 text-blue-100" aria-hidden="true" />
            <div className="flex items-center gap-1 mb-4" role="img" aria-label="5 van 5 sterren">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="star" className="w-5 h-5 text-yellow-400" aria-hidden="true" />
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
