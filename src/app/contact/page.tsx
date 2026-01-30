'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/maqnoywd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('There was an error sending your message. Please try again.')
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-24 pb-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll animation="scale-up">
              <div className="mb-8">
                <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-4">
                  Message Sent!
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Thanks for reaching out! We&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-8 text-left">
                <h2 className="text-xl font-bold font-display text-slate-900 mb-4">What happens next?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">We review your message</div>
                      <div className="text-sm text-slate-600">Our team will read your inquiry carefully</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">We&apos;ll respond within 24 hours</div>
                      <div className="text-sm text-slate-600">You&apos;ll receive a reply at {formData.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Get the help you need</div>
                      <div className="text-sm text-slate-600">We&apos;re here to answer your questions and support you</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/"
                  className="bg-gold-500 text-midnight-900 font-semibold rounded-lg hover:bg-gold-400 shadow-gold text-lg px-8 py-4 inline-block"
                >
                  Back to Home →
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const contactCards = [
    {
      icon: (
        <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Schedule a Demo',
      href: '/demo',
      linkText: 'Book a time →',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Resources',
      href: '/resources',
      linkText: 'View guides →',
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title={<>Get in <span className="text-gradient-gold">Touch</span></>}
        subtitle="Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      {/* Form Section */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="scale-up" delay={200}>
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8">
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleInputChange}
                style={{ display: 'none' }}
              />
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gold-500 text-midnight-900 font-semibold rounded-lg hover:bg-gold-400 shadow-gold text-lg py-4 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-midnight-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </div>

              <div className="mt-6 text-center text-sm text-slate-500">
                You can also email us directly at{' '}
                <a href="mailto:support@poof.ai" className="text-gold-600 hover:text-gold-700">
                  support@poof.ai
                </a>
              </div>
            </form>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
            {contactCards.map((card, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold font-display text-slate-900 mb-2">{card.title}</h3>
                  <Link href={card.href} className="text-gold-600 hover:text-gold-700">
                    {card.linkText}
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
