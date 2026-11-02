import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'
import { getPersonSchema, getBreadcrumbSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'About Poof — built by a former controller | Poof',
  description: 'Poof is free bookkeeping software with an AI agent you can hire, built by Austin Semple: two years as an auditor, then seven as a controller for small businesses.',
  keywords: 'about Poof, company story, bookkeeping automation team, AI accounting mission',
  alternates: {
    canonical: 'https://www.poofai.com/about',
  },
  openGraph: {
    images: ['/og-image.png'],
    title: 'About Poof — Built by a Former Controller',
    description:
      'Free bookkeeping software with an AI agent you can hire. Built by Austin Semple, a former controller: two years in audit, then seven running the books for small businesses.',
    url: 'https://www.poofai.com/about',
    siteName: 'Poof',
    type: 'website',
  },
}

export default function AboutPage() {
  const values = [
    {
      title: "Shows its work",
      description: "Nothing reaches your books without a person seeing it first. Every proposal carries the evidence behind it, and every close is a record of who decided what.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
        </svg>
      )
    },
    {
      title: "Owners first",
      description: "Built for the businesses a controller actually meets: one to fifty people, a few thousand transactions a month, and an owner with no time for software.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Trust and security",
      description: "Read-only bank access, encryption in transit, two-factor sign-in, six roles with 46 permissions, and an audit log with personal details masked.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "One figure",
      description: "The bank and the books agree to the penny, or Poof shows you why not. Month-end is a checklist the books tick off themselves. We would rather show you a figure than claim one.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  const milestones = [
    {
      year: "2015–2025",
      title: "Inside other people's books",
      description: "Two years auditing, then seven as a controller for small businesses, showed the same gap every month: the tools were built for accountants, and the people using them were not."
    },
    {
      year: "June 2025",
      title: "The first line of Poof",
      description: "Austin starts building the bookkeeping software he wished every owner he had worked for could use: one that does the work, and shows its evidence before anything lands."
    },
    {
      year: "2026",
      title: "Free, with an agent you can hire",
      description: "Poof goes free for good. Poof Agent does the work for $79 a month, a bookkeeper who works in Poof takes the books off an owner's hands, and Poof files the 1099s. Service shops get the dispatch board, the technician's link and an AI receptionist in the same books."
    }
  ]

  return (
    <main id="main-content" className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.poofai.com' },
              { name: 'About', url: 'https://www.poofai.com/about' },
            ])
          ),
        }}
      />
      <Header />

      <PageHero
        title={<>Built by the person who <span className="text-ledger-600">signs the close.</span></>}
        subtitle="Two years as an auditor, then seven as a controller for small businesses, then Poof: software that does the books and puts every entry in front of a person before it lands."
      />

      {/* Mission Statement */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="scale-up">
            <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
              <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">What Poof is for</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                The books should keep themselves, and show their work. Poof does the sorting, the matching, the reconciling and the month-end, and a person sees every entry before it reaches the books. The software is free, because keeping the books shouldn&apos;t cost an owner anything. What you pay for is the work done for you, and only if you want it.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">Why Poof exists</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Nine years of month-ends, and the same gap every one.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            {/* Vertical timeline with connecting line */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-14 top-14 bottom-14 w-0.5 bg-ledger-300"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <AnimateOnScroll key={index} animation="fade-up" delay={index * 150}>
                    <div className="relative flex gap-8 items-start">
                      {/* Timeline circle with pulse animation for last item */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-28 h-28 bg-white border-2 border-ink rounded-full flex items-center justify-center text-ink font-mono font-medium text-sm text-center leading-tight relative z-10">
                          <span className="px-2">{milestone.year}</span>
                        </div>
                      </div>

                      {/* Content card */}
                      <div className="flex-1 pt-2">
                        <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-ledger-400">
                          <h3 className="text-2xl font-bold font-display text-slate-900 mb-4 flex items-center">
                            {milestone.title}
                            {index === milestones.length - 1 && (
                              <svg className="w-6 h-6 ml-3 text-ledger-600" fill="currentColor" viewBox="0 0 24 24">
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
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">What we hold to</h2>
              <p className="text-xl text-slate-600">
                Four rules the product is built on
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 100}>
                <div className="bg-white border border-slate-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-ledger-400 rounded-xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg">
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
              <h2 className="text-4xl font-bold font-display text-white mb-6">From the founder</h2>
              <p className="text-xl text-slate-300">
                Why I built it, and what it&apos;s for
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-ledger-500/30 shadow-lg">
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
                    <div className="text-ledger-600 font-medium">CEO &amp; Founder</div>
                  </div>
                </div>

                <div className="flex-1 text-slate-300">
                  <p className="text-xl leading-relaxed mb-6">
                    For nine years I sat on the other side of small businesses&apos; books: two auditing them, seven
                    closing them as a controller. Month after month I watched owners lose their evenings to software
                    built for accountants, and books that looked finished but weren&apos;t.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    So I built the tool I wanted to hand them. Poof does the work a good bookkeeper does, sorting the
                    bank, matching payments, chasing invoices and closing the month, and it shows its evidence for every
                    entry before anything lands. I keep my own company&apos;s books on it, from my phone.
                  </p>

                  <p className="text-lg leading-relaxed">
                    The software is free, because the books shouldn&apos;t cost an owner anything to keep. When you want
                    the work done for you, Poof Agent does it. When you&apos;d rather hand it to a person, a bookkeeper
                    who works in Poof will.
                  </p>
                  <p className="text-lg leading-relaxed mt-6 text-white">Austin Semple, founder</p>
                </div>
              </div>

            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold font-display text-slate-900 mb-4">Company information</h2>
              <p className="text-slate-600 leading-relaxed">
                Poof is a product of <span className="font-semibold text-slate-900">Semple Labs LLC</span>, a United
                States limited liability company founded by Austin Semple. Semple Labs LLC builds, operates, and
                supports Poof.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                For support, billing, or privacy questions, email{' '}
                <a href="mailto:support@poofai.com" className="text-ledger-600 underline hover:text-ledger-700">
                  support@poofai.com
                </a>
                . We respond within 2 business days. You can also visit our{' '}
                <Link href="/support" className="text-ledger-600 underline hover:text-ledger-700">support page</Link>
                {' '}or{' '}
                <Link href="/contact" className="text-ledger-600 underline hover:text-ledger-700">contact page</Link>.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        {/* Sparkle stars */}
        {/* Floating orbs */}

        <AnimateOnScroll animation="fade-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Start free. Hire Poof Agent when you want it.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              The books are free for good. Poof Agent is free for your first 30 days, then $79 a month if you keep it.
            </p>
            <Link
              href="https://app.poofai.com/register"
              className="bg-ledger-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-ledger-600 transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
            >
              Start free →
            </Link>
            <p className="text-white/80 text-sm mt-4">
              No card
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      <Footer />
    </main>
  )
}
