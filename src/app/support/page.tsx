import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'
import { getBreadcrumbSchema, getFaqPageSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'Support — Contact the Poof Team | Poof',
  description:
    'Get help with Poof. Email support@poofai.com and a real person from Semple Labs LLC replies within 2 business days. Billing, account access, bank connections, and data requests.',
  alternates: {
    canonical: 'https://www.poofai.com/support',
  },
  openGraph: {
    title: 'Support — Contact the Poof Team',
    description:
      'Email support@poofai.com and a real person replies within 2 business days. Poof is a product of Semple Labs LLC.',
    url: 'https://www.poofai.com/support',
    siteName: 'Poof',
    type: 'website',
  },
}

const supportFaqs = [
  {
    question: 'How do I get help with my Poof account?',
    answer:
      'Email support@poofai.com from any device — no login required. Include your account email and a short description of what you are seeing, and we will reply within 2 business days.',
  },
  {
    question: 'I cannot sign in to my account. What should I do?',
    answer:
      'Use the "Forgot password" link on the sign-in page at app.poofai.com/login to reset your password. If you no longer have access to the email address on the account, email support@poofai.com and we will verify your identity and help you regain access.',
  },
  {
    question: 'How do I change or cancel my subscription?',
    answer:
      'Email support@poofai.com with the change you want and we will take care of it. There are no cancellation fees and no long-term contract.',
  },
  {
    question: 'How do I delete my account and my data?',
    answer:
      'Email support@poofai.com and request account deletion. We support full data removal on request for GDPR and CCPA compliance, and we will confirm by email once the deletion is complete.',
  },
  {
    question: 'Is my bank connection secure?',
    answer:
      'Yes. Poof connects to your bank through Plaid using read-only access, so Poof can read transactions but cannot move money or change your accounts. Your banking credentials are handled by Plaid and are never stored by Poof. All data is encrypted in transit via HTTPS/TLS.',
  },
  {
    question: 'How do I report a security issue?',
    answer:
      'Email support@poofai.com with "Security" in the subject line. We review security reports ahead of general support requests.',
  },
  {
    question: 'Do you help with moving my books over from QuickBooks or Xero?',
    answer:
      'Yes. Poof Managed for Trades includes a one-time onboarding that covers historical cleanup and migration from QuickBooks Online or Xero. Email support@poofai.com or book a call to talk through what moving your books would involve.',
  },
]

export default function SupportPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(supportFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.poofai.com' },
              { name: 'Support', url: 'https://www.poofai.com/support' },
            ])
          ),
        }}
      />
      <Header />

      <PageHero
        title={<>Poof <span className="text-gradient-gold">Support</span></>}
        subtitle="Questions, billing changes, account access, or anything that isn't working — email us and a real person will get back to you."
      />

      {/* Primary support channel */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="scale-up">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center">
              <div className="w-14 h-14 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h2 className="text-2xl font-bold font-display text-slate-900 mb-3">Email support</h2>

              <a
                href="mailto:support@poofai.com"
                className="inline-block text-2xl sm:text-3xl font-semibold text-gold-600 hover:text-gold-700 underline decoration-gold-300 underline-offset-4 break-all"
              >
                support@poofai.com
              </a>

              <p className="text-slate-600 mt-6 leading-relaxed">
                This inbox is monitored Monday through Friday. We respond to every message
                <span className="font-semibold text-slate-900"> within 2 business days</span>, and usually sooner.
              </p>

              <p className="text-slate-500 text-sm mt-4">
                No account or login is required to contact us. Including your account email and a short description of
                the problem helps us resolve it on the first reply.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Company identification */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 mt-6">
              <h2 className="text-lg font-semibold font-display text-slate-900 mb-3">Who you&apos;re dealing with</h2>
              <p className="text-slate-600 leading-relaxed">
                Poof is a product of <span className="font-semibold text-slate-900">Semple Labs LLC</span>, a United
                States limited liability company. Support, billing, and privacy requests for Poof are all handled by
                Semple Labs LLC at{' '}
                <a href="mailto:support@poofai.com" className="text-gold-600 underline hover:text-gold-700">
                  support@poofai.com
                </a>
                .
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                See our{' '}
                <Link href="/privacy" className="text-gold-600 underline hover:text-gold-700">Privacy Policy</Link>
                {' '}and{' '}
                <Link href="/terms" className="text-gold-600 underline hover:text-gold-700">Terms of Service</Link>
                {' '}for the full legal terms that govern the Service.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Other ways to reach us */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-10 text-center">Other ways to reach us</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Contact form',
                description: 'Prefer a form? Send us a message and we will reply to the email you provide.',
                href: '/contact',
                linkText: 'Open the form →',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                ),
              },
              {
                title: 'Book a call',
                description: 'Walk through Poof with us, or talk through a migration from your current books.',
                href: '/demo',
                linkText: 'Pick a time →',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                ),
              },
              {
                title: 'Product FAQ',
                description: 'Answers on features, pricing, security, and how the AI handles your books.',
                href: '/faq',
                linkText: 'Read the FAQ →',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
            ].map((card, index) => (
              <AnimateOnScroll key={card.title} animation="fade-up" delay={100 + index * 100}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full flex flex-col">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {card.icon}
                    </svg>
                  </div>
                  <h3 className="font-semibold font-display text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{card.description}</p>
                  <Link href={card.href} className="text-gold-600 hover:text-gold-700 font-medium text-sm">
                    {card.linkText}
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Support FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-10 text-center">Common support questions</h2>
          </AnimateOnScroll>

          <div className="space-y-4">
            {supportFaqs.map((faq, index) => (
              <AnimateOnScroll key={faq.question} animation="fade-up" delay={60 * index}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <h3 className="font-semibold font-display text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="text-center text-slate-600 mt-10">
              Still stuck? Email{' '}
              <a href="mailto:support@poofai.com" className="text-gold-600 underline hover:text-gold-700 font-medium">
                support@poofai.com
              </a>{' '}
              and we&apos;ll take it from there.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
