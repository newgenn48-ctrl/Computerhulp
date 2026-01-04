'use client'

/**
 * Simple A/B Testing Infrastructure
 *
 * Usage:
 * 1. Define experiments in EXPERIMENTS object
 * 2. Use useExperiment hook to get variant
 * 3. Track conversions with trackConversion
 *
 * Example:
 * const { variant, trackConversion } = useExperiment('hero-cta-button')
 * return variant === 'A' ? <ButtonA onClick={trackConversion} /> : <ButtonB onClick={trackConversion} />
 */

export interface Experiment {
  id: string
  name: string
  variants: string[]
  // Percentage for variant A (0-100), rest goes to variant B
  splitPercentage?: number
}

// Define your experiments here
export const EXPERIMENTS: Record<string, Experiment> = {
  'hero-cta-button': {
    id: 'hero-cta-button',
    name: 'Hero CTA Button Text',
    variants: ['Hulp Vragen', 'Direct Hulp'],
    splitPercentage: 50,
  },
  'pricing-display': {
    id: 'pricing-display',
    name: 'Pricing Display Format',
    variants: ['per-kwartier', 'per-uur'],
    splitPercentage: 50,
  },
}

// Get or create a user ID for consistent variant assignment
function getUserId(): string {
  if (typeof window === 'undefined') return 'server'

  let userId = localStorage.getItem('ab_user_id')
  if (!userId) {
    userId = Math.random().toString(36).substring(2, 15)
    localStorage.setItem('ab_user_id', userId)
  }
  return userId
}

// Hash function for consistent variant assignment
function hashCode(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

// Get variant for a user
export function getVariant(experimentId: string): string {
  const experiment = EXPERIMENTS[experimentId]
  if (!experiment) {
    console.warn(`Experiment "${experimentId}" not found`)
    return 'A'
  }

  // Check for forced variant (for testing)
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search)
    const forcedVariant = urlParams.get(`ab_${experimentId}`)
    if (forcedVariant && experiment.variants.includes(forcedVariant)) {
      return forcedVariant
    }
  }

  // Check stored variant
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(`ab_${experimentId}`)
    if (stored && experiment.variants.includes(stored)) {
      return stored
    }
  }

  // Calculate variant based on user ID and experiment
  const userId = getUserId()
  const hash = hashCode(`${userId}-${experimentId}`)
  const percentage = hash % 100
  const splitAt = experiment.splitPercentage ?? 50

  const variant = percentage < splitAt
    ? experiment.variants[0]
    : experiment.variants[1]

  // Store for consistency
  if (typeof window !== 'undefined') {
    localStorage.setItem(`ab_${experimentId}`, variant)
  }

  return variant
}

// Track experiment view (call when component mounts)
export function trackExperimentView(experimentId: string, variant: string) {
  if (typeof window === 'undefined') return

  // Send to Google Analytics via GTM dataLayer
  const dataLayer = (window as Window & { dataLayer?: object[] }).dataLayer
  if (dataLayer) {
    dataLayer.push({
      event: 'ab_experiment_view',
      experiment_id: experimentId,
      experiment_variant: variant,
    })
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[A/B Test] Viewed: ${experimentId} - Variant: ${variant}`)
  }
}

// Track conversion
export function trackConversion(experimentId: string, variant: string, conversionType = 'click') {
  if (typeof window === 'undefined') return

  // Send to Google Analytics via GTM dataLayer
  const dataLayer = (window as Window & { dataLayer?: object[] }).dataLayer
  if (dataLayer) {
    dataLayer.push({
      event: 'ab_experiment_conversion',
      experiment_id: experimentId,
      experiment_variant: variant,
      conversion_type: conversionType,
    })
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[A/B Test] Conversion: ${experimentId} - Variant: ${variant} - Type: ${conversionType}`)
  }
}

// React hook for easy usage
import { useEffect, useState, useCallback } from 'react'

export function useExperiment(experimentId: string) {
  const [variant, setVariant] = useState<string>('A')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const v = getVariant(experimentId)
    setVariant(v)
    setIsLoading(false)
    trackExperimentView(experimentId, v)
  }, [experimentId])

  const handleConversion = useCallback((conversionType = 'click') => {
    trackConversion(experimentId, variant, conversionType)
  }, [experimentId, variant])

  return {
    variant,
    isLoading,
    trackConversion: handleConversion,
    isVariantA: variant === EXPERIMENTS[experimentId]?.variants[0],
    isVariantB: variant === EXPERIMENTS[experimentId]?.variants[1],
  }
}

// Utility to get all active experiments for a user (for debugging)
export function getActiveExperiments(): Record<string, string> {
  const result: Record<string, string> = {}
  Object.keys(EXPERIMENTS).forEach(id => {
    result[id] = getVariant(id)
  })
  return result
}
