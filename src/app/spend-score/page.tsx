'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import ReportWizard from '@/components/report/ReportWizard'

export default function SpendScorePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title={<>Your Free <span className="text-gradient-gold">Spend Score</span></>}
        subtitle="Upload a bank statement and get your AI-powered Spend Score. We'll categorize every transaction, score your spending habits, and show you exactly where your money goes — in under 60 seconds."
      >
        <div className="flex justify-center items-center space-x-6 text-sm text-slate-600 mt-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            100% Free
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No data stored
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            AI-powered
          </div>
        </div>
      </PageHero>

      <section className="py-8 pb-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="scale-up" delay={200}>
            <ReportWizard />
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
