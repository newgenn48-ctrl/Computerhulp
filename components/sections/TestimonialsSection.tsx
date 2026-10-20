import type { ReactNode } from 'react'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import type { Testimonial } from '@/lib/testimonials'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  /** Optionele regel onder de kop. Laat weg voor een compacte header. */
  subtitle?: ReactNode
}

/**
 * Reviewsectie. Stond eerder als losse kopie in 24 bestanden, waardoor
 * kop, subtitel en achtergrond overal net iets anders waren.
 */
export default function TestimonialsSection({
  testimonials,
  subtitle,
}: TestimonialsSectionProps) {
  return (
    /* Panel zoals elke andere sectie. Dit was de enige sectie die als vlakke
       band over de volle breedte liep, met vierkante hoeken; daarmee viel ze
       midden op de pagina uit het ritme van de witte panelen. */
    <section className="panel-section" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="panel panel-pad">
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
      </div>
    </section>
  )
}
