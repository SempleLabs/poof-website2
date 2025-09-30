'use client'

import Link from 'next/link'
import { CreditCardOff, Bolt, AutoAwesome } from '@mui/icons-material'

export default function CtaSection() {
  return (
    <section className="py-24 bg-hero-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Make Bookkeeping Magical?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join the growing number of small businesses transforming their financial management with Poof.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="https://app.poofai.com/register"
            className="bg-white text-poof-primary-600 font-bold px-8 py-4 rounded-magical shadow-magical hover:shadow-magical-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
          >
            Start Your Free Trial →
          </Link>
          <Link
            href="/demo"
            className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-magical backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg"
          >
            Schedule a Demo
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white/80">
          <div className="flex flex-col items-center">
            <CreditCardOff className="text-white/80 mb-2" sx={{ fontSize: 32 }} />
            <div className="text-sm">No Credit Card Required</div>
          </div>
          <div className="flex flex-col items-center">
            <Bolt className="text-white/80 mb-2" sx={{ fontSize: 32 }} />
            <div className="text-sm">5-Minute Setup</div>
          </div>
          <div className="flex flex-col items-center">
            <AutoAwesome className="text-white/80 mb-2" sx={{ fontSize: 32 }} />
            <div className="text-sm">30-Day Free Trial</div>
          </div>
        </div>
      </div>
    </section>
  )
}