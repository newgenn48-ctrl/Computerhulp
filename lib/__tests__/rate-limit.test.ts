import { checkRateLimit, getClientIP, RATE_LIMITS } from '../rate-limit'

describe('checkRateLimit', () => {
  beforeEach(() => {
    // Clear the rate limit store by waiting for reset
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should allow requests within limit', () => {
    const config = { limit: 5, windowSeconds: 60 }
    const identifier = 'test-user-1'

    const result1 = checkRateLimit(identifier, config)
    expect(result1.success).toBe(true)
    expect(result1.remaining).toBe(4)

    const result2 = checkRateLimit(identifier, config)
    expect(result2.success).toBe(true)
    expect(result2.remaining).toBe(3)
  })

  it('should block requests exceeding limit', () => {
    const config = { limit: 2, windowSeconds: 60 }
    const identifier = 'test-user-2'

    checkRateLimit(identifier, config) // 1
    checkRateLimit(identifier, config) // 2

    const result = checkRateLimit(identifier, config) // 3 - should be blocked
    expect(result.success).toBe(false)
    expect(result.remaining).toBe(0)
  })

  it('should reset after window expires', () => {
    const config = { limit: 1, windowSeconds: 60 }
    const identifier = 'test-user-3'

    const result1 = checkRateLimit(identifier, config)
    expect(result1.success).toBe(true)

    // Advance time past the window
    jest.advanceTimersByTime(61 * 1000)

    const result2 = checkRateLimit(identifier, config)
    expect(result2.success).toBe(true)
    expect(result2.remaining).toBe(0)
  })

  it('should track different identifiers separately', () => {
    const config = { limit: 1, windowSeconds: 60 }

    const result1 = checkRateLimit('user-a', config)
    expect(result1.success).toBe(true)

    const result2 = checkRateLimit('user-b', config)
    expect(result2.success).toBe(true)

    const result3 = checkRateLimit('user-a', config)
    expect(result3.success).toBe(false)

    const result4 = checkRateLimit('user-b', config)
    expect(result4.success).toBe(false)
  })

  it('should return correct reset time', () => {
    const config = { limit: 5, windowSeconds: 60 }
    const identifier = 'test-user-4'
    const now = Date.now()

    const result = checkRateLimit(identifier, config)
    expect(result.resetTime).toBeGreaterThan(now)
    expect(result.resetTime).toBeLessThanOrEqual(now + 60 * 1000)
  })
})

describe('getClientIP', () => {
  it('should extract IP from x-forwarded-for header', () => {
    const request = new Request('http://localhost', {
      headers: { 'x-forwarded-for': '192.168.1.1, 10.0.0.1' },
    })
    expect(getClientIP(request)).toBe('192.168.1.1')
  })

  it('should extract IP from cf-connecting-ip header', () => {
    const request = new Request('http://localhost', {
      headers: { 'cf-connecting-ip': '192.168.1.2' },
    })
    expect(getClientIP(request)).toBe('192.168.1.2')
  })

  it('should extract IP from x-real-ip header', () => {
    const request = new Request('http://localhost', {
      headers: { 'x-real-ip': '192.168.1.3' },
    })
    expect(getClientIP(request)).toBe('192.168.1.3')
  })

  it('should return unknown for requests without IP headers', () => {
    const request = new Request('http://localhost')
    expect(getClientIP(request)).toBe('unknown')
  })

  it('should prioritize x-forwarded-for over other headers', () => {
    const request = new Request('http://localhost', {
      headers: {
        'x-forwarded-for': '192.168.1.1',
        'cf-connecting-ip': '192.168.1.2',
        'x-real-ip': '192.168.1.3',
      },
    })
    expect(getClientIP(request)).toBe('192.168.1.1')
  })
})

describe('RATE_LIMITS', () => {
  it('should have defined limits for contact endpoint', () => {
    expect(RATE_LIMITS.contact).toBeDefined()
    expect(RATE_LIMITS.contact.limit).toBeGreaterThan(0)
    expect(RATE_LIMITS.contact.windowSeconds).toBeGreaterThan(0)
  })

  it('should have defined limits for afspraak endpoint', () => {
    expect(RATE_LIMITS.afspraak).toBeDefined()
    expect(RATE_LIMITS.afspraak.limit).toBeGreaterThan(0)
    expect(RATE_LIMITS.afspraak.windowSeconds).toBeGreaterThan(0)
  })

  it('should have defined limits for offerte endpoint', () => {
    expect(RATE_LIMITS.offerte).toBeDefined()
    expect(RATE_LIMITS.offerte.limit).toBeGreaterThan(0)
    expect(RATE_LIMITS.offerte.windowSeconds).toBeGreaterThan(0)
  })

  it('should have defined limits for general endpoint', () => {
    expect(RATE_LIMITS.general).toBeDefined()
    expect(RATE_LIMITS.general.limit).toBeGreaterThan(0)
    expect(RATE_LIMITS.general.windowSeconds).toBeGreaterThan(0)
  })
})
