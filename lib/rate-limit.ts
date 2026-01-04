/**
 * Simple in-memory rate limiter for API routes
 * For production with multiple instances, consider using Redis
 */

interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

// Clean up old entries periodically (every 5 minutes)
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [key, entry] of rateLimitStore.entries()) {
      if (entry.resetTime < now) {
        rateLimitStore.delete(key)
      }
    }
  }, 5 * 60 * 1000)
}

export interface RateLimitConfig {
  /** Maximum number of requests allowed in the window */
  limit: number
  /** Time window in seconds */
  windowSeconds: number
}

export interface RateLimitResult {
  success: boolean
  remaining: number
  resetTime: number
}

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier (usually IP address)
 * @param config - Rate limit configuration
 * @returns RateLimitResult with success status and remaining requests
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now()
  const key = identifier
  const entry = rateLimitStore.get(key)

  // If no entry exists or the window has expired, create a new entry
  if (!entry || entry.resetTime < now) {
    const resetTime = now + config.windowSeconds * 1000
    rateLimitStore.set(key, { count: 1, resetTime })
    return {
      success: true,
      remaining: config.limit - 1,
      resetTime,
    }
  }

  // Increment the count
  entry.count++

  // Check if over the limit
  if (entry.count > config.limit) {
    return {
      success: false,
      remaining: 0,
      resetTime: entry.resetTime,
    }
  }

  return {
    success: true,
    remaining: config.limit - entry.count,
    resetTime: entry.resetTime,
  }
}

/**
 * Get client IP from request headers
 * Works with Vercel, Cloudflare, and direct connections
 */
export function getClientIP(request: Request): string {
  // Vercel
  const xForwardedFor = request.headers.get('x-forwarded-for')
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0].trim()
  }

  // Cloudflare
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  if (cfConnectingIP) {
    return cfConnectingIP
  }

  // Vercel specific
  const xRealIP = request.headers.get('x-real-ip')
  if (xRealIP) {
    return xRealIP
  }

  // Fallback
  return 'unknown'
}

// Default configurations for different endpoints
export const RATE_LIMITS = {
  // Contact form: 5 requests per minute
  contact: { limit: 5, windowSeconds: 60 },
  // Appointment form: 5 requests per minute
  afspraak: { limit: 5, windowSeconds: 60 },
  // Quote form: 5 requests per minute
  offerte: { limit: 5, windowSeconds: 60 },
  // General API: 30 requests per minute
  general: { limit: 30, windowSeconds: 60 },
} as const
