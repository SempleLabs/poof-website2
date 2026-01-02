import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Poof - Magical Bookkeeping for Small Business',
  description: 'Learn about Poof&apos;s mission to make bookkeeping magical for small businesses. Meet our team and discover our story.',
  keywords: 'about Poof, company story, bookkeeping automation team, AI accounting mission',
}

export default function AboutPage() {
  const team = [
    {
      name: "Austin Semple",
      role: "CEO & Founder",
      bio: "Former auditor with 8+ years experience of Controller experience for small businesses. Built Poof after years of wrestling with Quickbooks, manual spreadsheets, and seeing the daily struggles of business owners.",
      avatar: "/team/austin-semple.jpg"
    }
  ]

  const values = [
    {
      title: "Make it Magical",
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
      description: "Your financial data is sacred. We protect it with bank-level security and transparent practices.",
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
      year: "2015-2017",
      title: "Auditing Foundation",
      description: "Two years in auditing, seeing firsthand how small businesses struggled with financial management and bookkeeping complexities."
    },
    {
      year: "2017-2025",
      title: "Accounting Experience",
      description: "Eight years as a solo Controller for small businesses, wrestling with QuickBooks daily and understanding every pain point business owners face."
    },
    {
      year: "June 2025",
      title: "Poof is Born",
      description: "Fed up with clunky software, started building the AI-powered bookkeeping solution I wished existed for every business I'd worked with."
    },
    {
      year: "Today",
      title: "Building the Future",
      description: "Combining 10+ years of hands-on bookkeeping experience with cutting-edge AI to make bookkeeping truly magical."
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Bookkeeping That Actually <span className="hero-text">Makes Sense</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Small business owners shouldn't need an accounting degree to understand their finances.
            Poof brings clarity to bookkeeping with AI that works the way you think.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              &ldquo;Every small business owner deserves financial clarity without the complexity.
              We&apos;re building AI that understands your business as well as you do,
              so you can focus on growth, not bookkeeping.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-poof-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-poof-secondary-500 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from frustration with outdated tools and a vision for what bookkeeping could be.
            </p>
          </div>

          <div className="relative">
            {/* Simpler approach: just show the milestones without the complex timeline */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 items-center">
                  {/* Larger timeline circle */}
                  <div className="flex-shrink-0">
                    <div className="w-28 h-28 bg-magical-gradient rounded-full flex items-center justify-center text-white font-bold text-sm text-center leading-tight shadow-lg border-6 border-white">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="glass-card p-8 hover:shadow-magical transition-all duration-300 transform hover:-translate-y-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        {milestone.title}
                        {index === milestones.length - 1 && (
                          <svg className="w-6 h-6 ml-3 text-poof-primary-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
                          </svg>
                        )}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-8 text-center hover:shadow-magical transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-poof-primary-500 to-poof-primary-600 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet the Founder</h2>
            <p className="text-xl text-gray-600">
              Built from real-world experience with small business bookkeeping challenges
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {team.map((member, index) => (
              <div key={index} className="glass-card p-8 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto border-4 border-poof-primary-100">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-poof-primary-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why I Built Poof</h2>
            <p className="text-xl text-gray-600">
              A personal mission born from 10+ years of bookkeeping frustration
            </p>
          </div>

          <div className="glass-card p-10">
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                After spending two years in auditing and then eight years as a solo controller for small businesses,
                I've seen it all. The late nights wrestling with QuickBooks. The frustration of business owners
                who just want to focus on what they love, not categorizing transactions.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Every day, I watched brilliant entrepreneurs get bogged down by bookkeeping tasks that should
                take minutes, not hours. I saw the stress it caused, the errors it created, and the opportunities
                it stole from growing businesses.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That's when I decided enough was enough. In June 2025, I started building the AI-powered
                bookkeeping solution I wished existed for every business I'd ever worked with.
              </p>

              <div className="bg-poof-primary-50 p-6 rounded-lg border-l-4 border-poof-primary-500 text-center">
                <p className="text-lg font-medium text-poof-primary-800 mb-2">
                  "Poof isn't just another software company."
                </p>
                <p className="text-poof-primary-700">
                  It's my personal mission to give small business owners their time back,
                  so they can focus on what truly matters - growing their dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Magic?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of small businesses who've made bookkeeping effortless with Poof.
          </p>
          <Link
            href="https://app.poofai.com/register"
            className="bg-white text-poof-primary-600 font-bold px-8 py-4 rounded-magical shadow-magical hover:shadow-magical-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
          >
            Start Free Trial →
          </Link>
          <p className="text-white/80 text-sm mt-4">
            30-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}