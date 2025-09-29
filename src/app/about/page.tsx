import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Poof - Magical Bookkeeping for Small Business',
  description: 'Learn about Poof&apos;s mission to make bookkeeping magical for small businesses. Meet our team and discover our story.',
  keywords: 'about Poof, company story, bookkeeping automation team, AI accounting mission',
}

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former CPA with 10+ years helping small businesses. Frustrated by outdated tools, she founded Poof to bring magic to bookkeeping.",
      avatar: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "AI researcher from MIT. Built machine learning systems at Google before focusing on solving real problems for small businesses.",
      avatar: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: "Emily Thompson",
      role: "Head of Product",
      bio: "Former small business owner who understands the daily challenges. Designs our user experience to be simple and intuitive.",
      avatar: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ]

  const values = [
    {
      title: "Make it Magical",
      description: "Complex tasks should feel effortless. We turn bookkeeping from a chore into something that just happens.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
      year: "2022",
      title: "Founded",
      description: "Poof was born from frustration with complex bookkeeping software that wasn't built for small businesses."
    },
    {
      year: "2023",
      title: "First Customers",
      description: "Our beta launched with 50 small businesses. Their feedback shaped everything we built next."
    },
    {
      year: "2024",
      title: "AI Breakthrough",
      description: "Achieved 99.8% transaction categorization accuracy, revolutionizing automated bookkeeping."
    },
    {
      year: "Today",
      title: "2,000+ Businesses",
      description: "Helping thousands of small businesses save time and reduce stress with magical bookkeeping."
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Making Bookkeeping <span className="hero-text">Magical</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We believe small business owners should focus on what they love, not wrestling with spreadsheets.
            That's why we built Poof - to make bookkeeping disappear like magic.
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from frustration with outdated tools and a vision for what bookkeeping could be.
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-magical-gradient rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
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
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Small business owners and technologists working together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-card p-8 text-center">
                <div className="w-16 h-16 bg-poof-primary-100 rounded-full flex items-center justify-center mb-4 text-poof-primary-600">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-poof-primary-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Poof by the Numbers</h2>
            <p className="text-xl text-gray-600">
              The impact we're making for small businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="glass-card p-8">
              <div className="text-4xl font-bold hero-text mb-2">2,000+</div>
              <div className="text-gray-600">Active Businesses</div>
            </div>
            <div className="glass-card p-8">
              <div className="text-4xl font-bold hero-text mb-2">$50M+</div>
              <div className="text-gray-600">Transactions Processed</div>
            </div>
            <div className="glass-card p-8">
              <div className="text-4xl font-bold hero-text mb-2">30,000+</div>
              <div className="text-gray-600">Hours Saved Monthly</div>
            </div>
            <div className="glass-card p-8">
              <div className="text-4xl font-bold hero-text mb-2">99.8%</div>
              <div className="text-gray-600">AI Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Help us make bookkeeping magical for millions of small businesses.
          </p>

          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">We're Hiring!</h3>
            <p className="text-gray-600 mb-6">
              Looking for passionate people who want to solve real problems for small businesses.
              We offer competitive pay, equity, and the chance to make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers"
                className="magical-button"
              >
                View Open Positions
              </Link>
              <Link
                href="mailto:careers@poof.ai"
                className="border-2 border-poof-primary-600 text-poof-primary-600 font-semibold px-6 py-3 rounded-magical hover:bg-poof-primary-50 transition-all duration-300"
              >
                Contact Us
              </Link>
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
            href="/trial"
            className="bg-white text-poof-primary-600 font-bold px-8 py-4 rounded-magical shadow-magical hover:shadow-magical-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
          >
            Start Free Trial →
          </Link>
          <p className="text-white/80 text-sm mt-4">
            No credit card required • 30-day free trial
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}