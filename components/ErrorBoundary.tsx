'use client'

import { Component, ReactNode } from 'react'

interface Props {
  /** Kinderen die beschermd worden tegen client-side crashes */
  children: ReactNode
  /** Wat te tonen als er een fout optreedt. Null = toon niets (faalt stil). */
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

/**
 * Sectie-niveau error boundary.
 * Als een onderliggend component crasht (bijv. TestimonialsCarousel bij een ref-fout),
 * blijft de rest van de pagina gewoon werken. Voorkomt "witte pagina"-scenario's.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: { componentStack?: string | null }) {
    // Minimaal loggen — client zal deze naar server error reporting kunnen sturen
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.error('[ErrorBoundary]', error, info.componentStack)
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null
    }
    return this.props.children
  }
}
