'use client'

import { forwardRef } from 'react'

interface FormFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  error?: string | null
  touched?: boolean
  required?: boolean
  disabled?: boolean
  rows?: number
  options?: { value: string; label: string }[]
  autoComplete?: string
}

const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, FormFieldProps>(
  ({ label, name, type = 'text', placeholder, value, onChange, onBlur, error, touched, required, disabled, rows = 4, options, autoComplete }, ref) => {
    const showError = touched && error
    const baseInputClasses = `w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
      showError
        ? 'border-red-500 bg-red-50'
        : 'border-gray-300 hover:border-gray-400'
    } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`

    return (
      <div className="space-y-1">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {type === 'textarea' ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            rows={rows}
            className={baseInputClasses}
            aria-invalid={showError ? 'true' : 'false'}
            aria-describedby={showError ? `${name}-error` : undefined}
          />
        ) : type === 'select' ? (
          <select
            ref={ref as React.Ref<HTMLSelectElement>}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            disabled={disabled}
            className={baseInputClasses}
            aria-invalid={showError ? 'true' : 'false'}
            aria-describedby={showError ? `${name}-error` : undefined}
          >
            <option value="">{placeholder || 'Selecteer...'}</option>
            {options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            autoComplete={autoComplete}
            className={baseInputClasses}
            aria-invalid={showError ? 'true' : 'false'}
            aria-describedby={showError ? `${name}-error` : undefined}
          />
        )}

        {showError && (
          <p id={`${name}-error`} className="text-sm text-red-600 flex items-center gap-1" role="alert">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    )
  }
)

FormField.displayName = 'FormField'

export default FormField
