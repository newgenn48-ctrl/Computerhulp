import {
  sanitizeHtml,
  sanitizeText,
  validateEmail,
  validatePhone,
  validateLength,
} from '../sanitize'

describe('sanitizeHtml', () => {
  it('should escape HTML special characters', () => {
    expect(sanitizeHtml('<script>alert("xss")</script>')).toBe(
      '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;'
    )
  })

  it('should escape ampersands', () => {
    expect(sanitizeHtml('Tom & Jerry')).toBe('Tom &amp; Jerry')
  })

  it('should escape quotes', () => {
    expect(sanitizeHtml("It's a \"test\"")).toBe('It&#x27;s a &quot;test&quot;')
  })

  it('should handle empty strings', () => {
    expect(sanitizeHtml('')).toBe('')
  })

  it('should handle null/undefined', () => {
    expect(sanitizeHtml(null as unknown as string)).toBe('')
    expect(sanitizeHtml(undefined as unknown as string)).toBe('')
  })

  it('should preserve normal text', () => {
    expect(sanitizeHtml('Hello World')).toBe('Hello World')
  })

  it('should escape forward slashes', () => {
    expect(sanitizeHtml('path/to/file')).toBe('path&#x2F;to&#x2F;file')
  })
})

describe('sanitizeText', () => {
  it('should remove control characters', () => {
    expect(sanitizeText('Hello\x00World')).toBe('HelloWorld')
    expect(sanitizeText('Test\x1FString')).toBe('TestString')
  })

  it('should preserve newlines', () => {
    expect(sanitizeText('Line1\nLine2')).toBe('Line1\nLine2')
  })

  it('should preserve tabs', () => {
    expect(sanitizeText('Col1\tCol2')).toBe('Col1\tCol2')
  })

  it('should handle empty strings', () => {
    expect(sanitizeText('')).toBe('')
  })

  it('should handle null/undefined', () => {
    expect(sanitizeText(null as unknown as string)).toBe('')
    expect(sanitizeText(undefined as unknown as string)).toBe('')
  })
})

describe('validateEmail', () => {
  it('should validate correct email addresses', () => {
    expect(validateEmail('test@example.com')).toBe(true)
    expect(validateEmail('user.name@domain.nl')).toBe(true)
    expect(validateEmail('user+tag@example.org')).toBe(true)
  })

  it('should reject invalid email addresses', () => {
    expect(validateEmail('notanemail')).toBe(false)
    expect(validateEmail('missing@domain')).toBe(false)
    expect(validateEmail('@nodomain.com')).toBe(false)
    expect(validateEmail('spaces in@email.com')).toBe(false)
    expect(validateEmail('')).toBe(false)
  })

  it('should reject emails exceeding max length', () => {
    const longEmail = 'a'.repeat(250) + '@b.nl'
    expect(validateEmail(longEmail)).toBe(false)
  })
})

describe('validatePhone', () => {
  it('should validate Dutch phone numbers', () => {
    expect(validatePhone('0612345678')).toBe(true)
    expect(validatePhone('+31612345678')).toBe(true)
    expect(validatePhone('0031612345678')).toBe(true)
    expect(validatePhone('06 1234 5678')).toBe(true)
    expect(validatePhone('06-12345678')).toBe(true)
    expect(validatePhone('(06) 12345678')).toBe(true)
  })

  it('should reject invalid phone numbers', () => {
    expect(validatePhone('123')).toBe(false)
    expect(validatePhone('abcdefghij')).toBe(false)
    expect(validatePhone('0012345678')).toBe(false) // starts with 00 but not 0031
    expect(validatePhone('')).toBe(false)
  })

  it('should reject numbers that are too long', () => {
    expect(validatePhone('0612345678901234567890')).toBe(false)
  })
})

describe('validateLength', () => {
  it('should validate strings within length limits', () => {
    expect(validateLength('Hello', 10)).toBe(true)
    expect(validateLength('A', 1)).toBe(true)
    expect(validateLength('Test', 4)).toBe(true)
  })

  it('should reject empty strings', () => {
    expect(validateLength('', 10)).toBe(false)
  })

  it('should reject strings exceeding max length', () => {
    expect(validateLength('Hello World', 5)).toBe(false)
  })

  it('should handle edge cases', () => {
    expect(validateLength('x', 1)).toBe(true)
    expect(validateLength('xx', 1)).toBe(false)
  })
})
