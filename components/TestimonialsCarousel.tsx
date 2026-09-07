'use client'

import { useRef, useState, useEffect } from 'react'
import { Icon } from '@/components/icons'
import ErrorBoundary from '@/components/ErrorBoundary'

interface Testimonial {
  quote: string
  name: string
  initials: string
  city?: string
  date?: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

/** Fallback als de carousel client-side crasht: statische grid.
 *  Zo blijft social proof altijd zichtbaar, zelfs zonder JS-interactie. */
function TestimonialsFallback({ testimonials }: TestimonialsCarouselProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Klantbeoordelingen">
      {testimonials.slice(0, 6).map((t, idx) => (
        <div key={idx} className="carousel-card" role="listitem">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-1" role="img" aria-label="5 van 5 sterren">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="star" className="w-5 h-5 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            {t.date && <span className="text-sm text-gray-500">{t.date}</span>}
          </div>
          <blockquote className="text-gray-800 mb-6 leading-relaxed text-[1.0625rem] sm:text-lg">&ldquo;{t.quote}&rdquo;</blockquote>
          <footer className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold" aria-hidden="true">
              {t.initials}
            </div>
            <div>
              <cite className="block font-semibold text-gray-900 not-italic">{t.name}</cite>
              {t.city && <div className="text-sm text-gray-500 mt-0.5">{t.city}</div>}
            </div>
          </footer>
        </div>
      ))}
    </div>
  )
}

export default function TestimonialsCarousel(props: TestimonialsCarouselProps) {
  return (
    <ErrorBoundary fallback={<TestimonialsFallback {...props} />}>
      <TestimonialsCarouselInner {...props} />
    </ErrorBoundary>
  )
}

function TestimonialsCarouselInner({ testimonials }: TestimonialsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIdx, setActiveIdx] = useState(0)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      const card = scrollRef.current.querySelector('[role="listitem"]') as HTMLElement | null
      if (card) setActiveIdx(Math.round(scrollLeft / (card.offsetWidth + 24)))
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
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-1" role="img" aria-label="5 van 5 sterren">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              {testimonial.date && (
                <span className="text-sm text-gray-500">{testimonial.date}</span>
              )}
            </div>
            <blockquote className="text-gray-800 mb-6 leading-relaxed text-[1.0625rem] sm:text-lg">&ldquo;{testimonial.quote}&rdquo;</blockquote>
            <footer className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold" aria-hidden="true">
                {testimonial.initials}
              </div>
              <div>
                <cite className="block font-semibold text-gray-900 not-italic">{testimonial.name}</cite>
                {testimonial.city && (
                  <div className="text-sm text-gray-500 mt-0.5">{testimonial.city}</div>
                )}
              </div>
            </footer>
          </div>
        ))}
      </div>

      {/* Scroll indicators (dots) - Mobile only */}
      <div className="flex justify-center gap-2 mt-6 lg:hidden" aria-hidden="true">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-colors duration-200 ${
              idx === activeIdx ? 'w-5 bg-blue-600' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
