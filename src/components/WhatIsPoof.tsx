'use client'

import AnimateOnScroll from './AnimateOnScroll'
import CountUp from './CountUp'
import GlowCard from './GlowCard'

export default function WhatIsPoof() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll animation="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-800 mb-6" style={{ letterSpacing: '-0.02em' }}>
            What is <span className="text-gradient-gold">Poof</span>?
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Poof is an AI-powered bookkeeping platform built for small businesses.
            It automates transaction categorization, invoicing, expense tracking, bank reconciliation,
            and financial reporting — so you spend less time on books and more time growing your business.
          </p>
        </AnimateOnScroll>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 24, label: 'Built-in Features', prefix: '', suffix: '' },
            { value: 12000, label: 'Bank Connections', prefix: '', suffix: '+' },
            { value: 8, label: 'Financial Reports', prefix: '', suffix: '' },
            { value: 95, label: 'Accuracy Rate', prefix: '', suffix: '%' },
          ].map((stat, i) => (
            <AnimateOnScroll key={i} animation="scale-up" delay={200 + i * 100}>
              <GlowCard className="rounded-2xl bg-white border border-slate-200 shadow-card-light">
                <div className="text-center p-6">
                  <div className="font-mono text-3xl font-bold text-gold-500">
                    <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                </div>
              </GlowCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
