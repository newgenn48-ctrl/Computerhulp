import type { ReactNode } from 'react'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import type { Testimonial } from '@/lib/testimonials'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  /** Optionele regel onder de kop. Laat weg voor een compacte header. */
  subtitle?: ReactNode
  /** Moet aansluiten op de sectie ervoor: wit en surface wisselen elkaar af. */
  background?: 'white' | 'soft'
}

/**
 * Reviewsectie. Stond eerder als losse kopie in 24 bestanden, waardoor
 * kop, subtitel en achtergrond overal net iets anders waren.
 */
export default function TestimonialsSection({
  testimonials,
  subtitle,
  background = 'white',
}: TestimonialsSectionProps) {
  return (
    <section
      className={`py-12 lg:py-16 ${background === 'soft' ? 'bg-surface' : 'bg-white'}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <p className="section-eyebrow">Klanten aan het woord</p>
          <h2 id="testimonials-heading" className="section-title">
            Wat onze klanten zeggen
          </h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          <p className="text-sm text-gray-500 mt-2 lg:hidden">
            &larr; Swipe voor meer reviews &rarr;
          </p>
        </header>

        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  )
}
