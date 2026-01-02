'use client'

import { useState, FormEvent } from 'react'

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  downloadUrl: string
  fileName: string
}

export default function DownloadModal({
  isOpen,
  onClose,
  title,
  description,
  downloadUrl,
  fileName
}: DownloadModalProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
    // For now, we'll simulate the submission and trigger download
    try {
      // Simulated API call - replace with your actual email capture service
      await new Promise(resolve => setTimeout(resolve, 1000))

      // You can add email capture API call here:
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   body: JSON.stringify({ email, downloadedFile: fileName }),
      // })

      console.log('Email captured:', email, 'for download:', fileName)

      setIsSuccess(true)

      // Trigger download
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Close modal after delay
      setTimeout(() => {
        onClose()
        setEmail('')
        setIsSuccess(false)
      }, 2000)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSuccess ? (
          <>
            {/* Icon */}
            <div className="w-16 h-16 bg-poof-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-poof-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              {title}
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              {description}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-magical focus:ring-2 focus:ring-poof-primary-500 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-poof-primary-600 text-white font-semibold py-3 px-6 rounded-magical hover:bg-poof-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Download Free Guide'}
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            {/* Success icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Download Started!
            </h3>
            <p className="text-gray-600">
              Check your downloads folder for the guide.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
