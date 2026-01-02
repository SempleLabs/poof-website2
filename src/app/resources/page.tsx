import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources - Small Business Bookkeeping Guides | Poof',
  description: 'Free resources for small business bookkeeping. Guides, templates, and tips to help you manage your finances better.',
  keywords: 'small business bookkeeping guides, financial templates, accounting resources, bookkeeping tips',
}

export default function ResourcesPage() {
  const blogPosts = [
    {
      title: "5 Signs You Need to Automate Your Bookkeeping",
      excerpt: "Learn the key indicators that it's time to move beyond manual bookkeeping and embrace automation.",
      category: "Automation",
      readTime: "4 min read",
      slug: "signs-you-need-bookkeeping-automation",
      featured: true
    },
    {
      title: "QuickBooks vs Poof: A Complete Comparison",
      excerpt: "See how Poof stacks up against QuickBooks Online for small business bookkeeping.",
      category: "Comparison",
      readTime: "6 min read",
      slug: "quickbooks-vs-poof-ai-comparison",
      featured: true
    },
    {
      title: "How AI is Revolutionizing Small Business Accounting",
      excerpt: "Discover how artificial intelligence is transforming bookkeeping for small businesses.",
      category: "AI Technology",
      readTime: "5 min read",
      slug: "ai-revolutionizing-small-business-accounting",
      featured: false
    },
    {
      title: "The Complete Guide to Receipt Management",
      excerpt: "Best practices for organizing, storing, and processing business receipts.",
      category: "Organization",
      readTime: "7 min read",
      slug: "complete-guide-receipt-management",
      featured: false
    },
    {
      title: "Tax Preparation Checklist for Small Businesses",
      excerpt: "Everything you need to prepare for tax season and ensure your books are ready.",
      category: "Tax Planning",
      readTime: "8 min read",
      slug: "tax-preparation-checklist-small-business",
      featured: false
    },
    {
      title: "Cash Flow Management Best Practices",
      excerpt: "Learn how to track and improve your business cash flow with proven strategies.",
      category: "Financial Management",
      readTime: "6 min read",
      slug: "cash-flow-management-best-practices",
      featured: false
    }
  ]

  const guides = [
    {
      title: "Small Business Bookkeeping Setup Guide",
      description: "Step-by-step guide to setting up bookkeeping for your new business",
      downloadType: "PDF Guide",
      pages: "24 pages"
    },
    {
      title: "Expense Categorization Cheat Sheet",
      description: "Quick reference for properly categorizing business expenses",
      downloadType: "Printable PDF",
      pages: "2 pages"
    },
    {
      title: "Monthly Bookkeeping Checklist",
      description: "Never miss important bookkeeping tasks with this monthly checklist",
      downloadType: "PDF Template",
      pages: "4 pages"
    },
    {
      title: "Year-End Closing Procedures",
      description: "Complete guide to closing your books at the end of the year",
      downloadType: "PDF Guide",
      pages: "16 pages"
    }
  ]

  const categories = [
    "All Posts",
    "Automation",
    "Comparison",
    "AI Technology",
    "Organization",
    "Tax Planning",
    "Financial Management"
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Bookkeeping <span className="hero-text">Resources</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Free guides, templates, and insights to help you master small business bookkeeping.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-gray-600">Our most popular bookkeeping guides and insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <article key={index} className="glass-card p-6 hover:shadow-magical transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-poof-primary-50 text-poof-primary-700">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-poof-primary-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-poof-primary-600 hover:text-poof-primary-700 font-medium text-sm"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Downloads</h2>
            <p className="text-gray-600">Practical templates and guides to improve your bookkeeping</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-poof-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-poof-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                <div className="text-xs text-gray-500 mb-4">
                  {guide.downloadType} • {guide.pages}
                </div>
                <button className="w-full bg-poof-primary-600 text-white font-semibold py-2 px-4 rounded-magical hover:bg-poof-primary-700 transition-colors text-sm">
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-gray-600">Browse our complete library of bookkeeping insights</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-poof-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="glass-card p-6 hover:shadow-magical transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-poof-primary-50 text-poof-primary-700">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-poof-primary-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-poof-primary-600 hover:text-poof-primary-700 font-medium text-sm"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      <Footer />
    </main>
  )
}