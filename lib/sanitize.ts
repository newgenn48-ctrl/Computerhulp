/**
 * Sanitize user input to prevent XSS attacks in emails
 * Escapes HTML special characters
 */
export function sanitizeHtml(text: string): string {
  if (!text) return ''

  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Sanitize text for plain text emails
 * Removes control characters but preserves newlines
 */
export function sanitizeText(text: string): string {
  if (!text) return ''

  // Remove control characters except newlines and tabs
  return text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

/**
 * Normaliseer een Nederlands telefoonnummer naar 10 cijfers met voorloopnul.
 * Accepteert spaties, streepjes, punten, haakjes en de vormen +31 (0)6…, 0031 6…, 06….
 * Gebruikt door het formulier (client) én de API (server), zodat beide hetzelfde goedkeuren.
 */
export function normalizePhone(phone: string): string {
  let digits = (phone || '').replace(/[\s\-\.\(\)]/g, '')
  digits = digits.replace(/^\+31\(?0?\)?/, '0').replace(/^00310?/, '0')
  return digits
}

/**
 * Validate Dutch phone number (vast of mobiel, 10 cijfers)
 */
export function validatePhone(phone: string): boolean {
  return /^0[1-9][0-9]{8}$/.test(normalizePhone(phone))
}

/**
 * Validate input length
 */
export function validateLength(text: string, maxLength: number): boolean {
  return Boolean(text && text.length > 0 && text.length <= maxLength)
}
