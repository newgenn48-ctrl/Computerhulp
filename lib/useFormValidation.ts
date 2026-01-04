'use client'

import { useState, useCallback } from 'react'

export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => boolean
  message: string
}

export interface FieldValidation {
  [fieldName: string]: ValidationRule[]
}

export interface FormErrors {
  [fieldName: string]: string | null
}

export interface FormTouched {
  [fieldName: string]: boolean
}

export function useFormValidation<T extends Record<string, string>>(
  initialValues: T,
  validationRules: FieldValidation
) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<FormTouched>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateField = useCallback((name: string, value: string): string | null => {
    const rules = validationRules[name]
    if (!rules) return null

    for (const rule of rules) {
      if (rule.required && !value.trim()) {
        return rule.message
      }
      if (rule.minLength && value.length < rule.minLength) {
        return rule.message
      }
      if (rule.maxLength && value.length > rule.maxLength) {
        return rule.message
      }
      if (rule.pattern && !rule.pattern.test(value)) {
        return rule.message
      }
      if (rule.custom && !rule.custom(value)) {
        return rule.message
      }
    }
    return null
  }, [validationRules])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }, [touched, validateField])

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))

    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }, [validateField])

  const validateAll = useCallback((): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    Object.keys(validationRules).forEach(fieldName => {
      const error = validateField(fieldName, values[fieldName] || '')
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    // Mark all fields as touched
    const allTouched: FormTouched = {}
    Object.keys(validationRules).forEach(fieldName => {
      allTouched[fieldName] = true
    })
    setTouched(allTouched)

    return isValid
  }, [values, validationRules, validateField])

  const resetForm = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }, [initialValues])

  const getFieldProps = useCallback((name: keyof T) => ({
    name,
    value: values[name] || '',
    onChange: handleChange,
    onBlur: handleBlur,
  }), [values, handleChange, handleBlur])

  return {
    values,
    errors,
    touched,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    handleBlur,
    validateAll,
    resetForm,
    getFieldProps,
    setValues,
  }
}

// Common validation patterns
export const validationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  dutchPhone: /^(\+31|0031|0)[1-9][0-9]{8}$/,
  dutchPostcode: /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/,
}

// Common validation rules
export const commonRules = {
  required: (message = 'Dit veld is verplicht'): ValidationRule => ({
    required: true,
    message,
  }),
  email: (message = 'Voer een geldig e-mailadres in'): ValidationRule => ({
    pattern: validationPatterns.email,
    message,
  }),
  phone: (message = 'Voer een geldig telefoonnummer in (bijv. 0612345678)'): ValidationRule => ({
    custom: (value: string) => {
      const cleanPhone = value.replace(/[\s\-\(\)]/g, '')
      return validationPatterns.dutchPhone.test(cleanPhone)
    },
    message,
  }),
  postcode: (message = 'Voer een geldige postcode in (bijv. 1234 AB)'): ValidationRule => ({
    pattern: validationPatterns.dutchPostcode,
    message,
  }),
  minLength: (length: number, message?: string): ValidationRule => ({
    minLength: length,
    message: message || `Minimaal ${length} karakters vereist`,
  }),
  maxLength: (length: number, message?: string): ValidationRule => ({
    maxLength: length,
    message: message || `Maximaal ${length} karakters toegestaan`,
  }),
}
