import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Security — How Poof Protects Your Financial Data | Poof',
  description: 'Learn how Poof keeps your financial data secure with SOC 2 audit logs, two-factor authentication, role-based access, and encrypted bank connections via Plaid.',
  keywords: 'bookkeeping security, SOC 2, two-factor authentication, Plaid bank connection, data encryption, RBAC',
}

const securityFeatures = [
  {
    title: 'Two-Factor Authentication (TOTP)',
    description: 'Protect your account with time-based one-time passwords. Works with authenticator apps like Google Authenticator and Authy.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z"/>
      </svg>
    ),
  },
  {
    title: 'Role-Based Access Control (RBAC)',
    description: 'Assign specific roles to team members and accountants. Control who can view, edit, or approve transactions and reports.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"/>
      </svg>
    ),
  },
  {
    title: 'SOC 2 Audit Logs',
    description: 'Every action in Poof is logged with timestamps and user attribution. Maintain a complete audit trail for compliance and accountability.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
      </svg>
    ),
  },
  {
    title: 'Encrypted Bank Connections',
    description: 'Bank data is transmitted and stored using 256-bit AES encryption. Poof connects via Plaid, the same infrastructure used by major fintech companies.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
      </svg>
    ),
  },
  {
    title: 'Read-Only Bank Access',
    description: 'Poof only reads your transaction data. It cannot move money, make payments, or modify your bank accounts in any way.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
      </svg>
    ),
  },
  {
    title: 'Session Management',
    description: 'Active sessions are monitored and can be revoked. Automatic session expiry protects unattended accounts.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
      </svg>
    ),
  },
]

export default function SecurityPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title={<>Security at <span className="text-gradient-gold">Poof</span></>}
        subtitle="Your financial data is sensitive. Poof uses industry-standard security practices including encryption, two-factor authentication, audit logging, and secure bank connections."
      />

      {/* Security Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 80}>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Plaid Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">Bank Connections Powered by Plaid</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              Poof uses Plaid to connect to your bank accounts. Plaid is the same infrastructure trusted by Venmo, Robinhood, and thousands of other financial applications. Your bank credentials are never stored by Poof — they are handled entirely by Plaid.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-up" delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="text-3xl font-bold text-gold-500 mb-1">12,000+</div>
                <div className="text-sm text-slate-600">Banks supported</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="text-3xl font-bold text-gold-500 mb-1">256-bit</div>
                <div className="text-sm text-slate-600">AES encryption</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="text-3xl font-bold text-gold-500 mb-1">Read-only</div>
                <div className="text-sm text-slate-600">Bank access</div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Questions About Security?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              We take data protection seriously. Reach out if you have questions about how we handle your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold-500 text-white font-semibold px-8 py-4 rounded-lg shadow-gold hover:bg-gold-400 transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
              >
                Contact Us
              </Link>
              <Link
                href="https://app.poofai.com/register"
                className="border-2 border-slate-600 text-white font-semibold px-8 py-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Start Free Trial →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
