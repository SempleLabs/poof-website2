import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'About Poof - AI Bookkeeping for Small Business',
  description: 'Learn about Poof&apos;s mission to automate bookkeeping for small businesses. Meet our team and discover our story.',
  keywords: 'about Poof, company story, bookkeeping automation team, AI accounting mission',
  alternates: {
    canonical: 'https://poof.ai/about',
  },
}

export default function AboutPage() {
  const values = [
    {
      title: "Make it Effortless",
      description: "Complex tasks should feel effortless. We turn bookkeeping from a chore into something that just happens.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
        </svg>
      )
    },
    {
      title: "Small Business First",
      description: "Every feature is designed for small businesses. We understand your challenges because we've been there.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Trust & Security",
      description: "Your financial data is sacred. We protect it with encryption in transit, read-only bank access, 2FA, and transparent practices.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Continuous Learning",
      description: "Our AI gets smarter every day, learning from millions of transactions to serve you better.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  const milestones = [
    {
      year: "2015-2025",
      title: "The Journey",
      description: "A decade of experience in auditing and financial controllership for small businesses revealed a critical gap: traditional bookkeeping tools weren't built for the way modern businesses operate."
    },
    {
      year: "June 2025",
      title: "Poof is Born",
      description: "Fed up with clunky software and manual processes, I started building the AI-powered bookkeeping solution I wished existed for every business I'd worked with."
    },
    {
      year: "2026",
      title: "Reimagining Bookkeeping",
      description: "Today, Poof includes 40+ features — AI budgeting & forecasting, recurring invoices with automated follow-ups, receipt scanning, recurring charge detection, bank statement import, 13 financial reports, smart transaction matching, and more. We're combining deep industry expertise with cutting-edge AI to make bookkeeping truly effortless."
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title={<>Bookkeeping That Actually <span className="text-gradient-gold">Makes Sense</span></>}
        subtitle="Small business owners shouldn't need an accounting degree to understand their finances. Poof brings clarity to bookkeeping with AI that works the way you think."
      />

      {/* Mission Statement */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="scale-up">
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">Our Mission</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                &ldquo;Every small business owner deserves financial clarity without the complexity.
                We&apos;re building AI-powered bookkeeping that automates the tedious work
                and delivers clear insights into your business&mdash;so you can focus on growth.&rdquo;
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-teal-500 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">Our Story</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Born from frustration with outdated tools and a vision for what bookkeeping could be.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            {/* Vertical timeline with connecting line */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-14 top-14 bottom-14 w-0.5 bg-gradient-to-b from-gold-300 via-gold-400 to-gold-500"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <AnimateOnScroll key={index} animation="fade-up" delay={index * 150}>
                    <div className="relative flex gap-8 items-start">
                      {/* Timeline circle with pulse animation for last item */}
                      <div className="flex-shrink-0 relative">
                        <div className={`w-28 h-28 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold text-sm text-center leading-tight shadow-xl border-4 border-white relative z-10 ${
                          index === milestones.length - 1 ? 'animate-pulse' : ''
                        }`}>
                          <span className="px-2">{milestone.year}</span>
                        </div>
                        {/* Glow effect for current year */}
                        {index === milestones.length - 1 && (
                          <div className="absolute inset-0 bg-gold-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                        )}
                      </div>

                      {/* Content card */}
                      <div className="flex-1 pt-2">
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-gold-400">
                          <h3 className="text-2xl font-bold font-display text-slate-900 mb-4 flex items-center">
                            {milestone.title}
                            {index === milestones.length - 1 && (
                              <svg className="w-6 h-6 ml-3 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
                              </svg>
                            )}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-lg">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">Our Values</h2>
              <p className="text-xl text-slate-600">
                The principles that guide everything we do
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 100}>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-display text-white mb-6">Meet the Founder</h2>
              <p className="text-xl text-slate-300">
                A personal mission born from 10+ years of bookkeeping frustration
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-gold-500/30 shadow-lg">
                    <Image
                      src="/team/austin-semple.jpg"
                      alt="Austin Semple"
                      width={176}
                      height={176}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold font-display text-white">Austin Semple</h3>
                    <div className="text-gold-500 font-medium">CEO &amp; Founder</div>
                  </div>
                </div>

                <div className="flex-1 text-slate-300">
                  <p className="text-xl leading-relaxed mb-6">
                    Throughout my career in auditing and financial controllership for small businesses,
                    I witnessed a recurring pattern: brilliant entrepreneurs spending countless hours on bookkeeping
                    tasks instead of building their businesses. Late nights wrestling with QuickBooks became the norm,
                    not the exception.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Every day, I watched business owners get bogged down by work that should take minutes, not hours.
                    The stress it caused, the errors it created, and the growth opportunities it stole became
                    impossible to ignore.
                  </p>

                  <p className="text-lg leading-relaxed">
                    In June 2025, I decided to build the solution I&apos;d always wished existed: an AI-powered
                    bookkeeping platform that truly understands small businesses and works the way you think.
                  </p>
                </div>
              </div>

              <div className="bg-gold-500/10 p-6 rounded-lg border-l-4 border-gold-500 text-center">
                <p className="text-lg font-medium text-gold-300 mb-2">
                  &ldquo;Poof isn&apos;t just another software company.&rdquo;
                </p>
                <p className="text-gold-400">
                  It&apos;s my personal mission to give small business owners their time back,
                  so they can focus on what truly matters &mdash; growing their dreams.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        {/* Sparkle stars */}
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className={`absolute text-white/20 animate-sparkle-drift`}
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
              fontSize: `${10 + Math.random() * 14}px`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            ✦
          </span>
        ))}
        {/* Floating orbs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-slow" />

        <AnimateOnScroll animation="fade-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Ready to Automate Your Bookkeeping?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join small businesses who've made bookkeeping effortless with Poof.
            </p>
            <Link
              href="https://app.poofai.com/register"
              className="bg-gold-500 text-white font-semibold px-8 py-4 rounded-lg shadow-gold hover:bg-gold-400 transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
            >
              Start Free Trial →
            </Link>
            <p className="text-white/80 text-sm mt-4">
              30-day free trial • Cancel anytime
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      <Footer />
    </main>
  )
}
