import type { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface PostMeta {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'))
      return {
        slug: file.replace('.mdx', ''),
        title: data.title,
        excerpt: data.excerpt,
        category: data.category,
        readTime: data.readTime,
        date: data.date,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const metadata: Metadata = {
  title: 'Blog — AI Bookkeeping Tips & Guides for Small Business | Poof',
  description: 'Practical guides on AI bookkeeping, automating your finances, QuickBooks alternatives, and getting your books tax-ready — from the team at Poof.',
  alternates: {
    canonical: 'https://www.poofai.com/blog',
  },
  openGraph: {
    title: 'Poof Blog — AI Bookkeeping Tips & Guides',
    description: 'Practical guides on AI bookkeeping, automating your finances, and keeping clean books.',
    url: 'https://www.poofai.com/blog',
    siteName: 'Poof',
    type: 'website',
  },
}

function getBlogSchema(posts: PostMeta[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Poof Blog',
    url: 'https://www.poofai.com/blog',
    description: 'Guides on AI bookkeeping and small business finance.',
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      url: `https://www.poofai.com/blog/${p.slug}`,
    })),
  }
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema(posts)) }}
      />
      <Header />

      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-slate-900 mb-4">
            The Poof Blog
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Practical guides on AI bookkeeping, automating your finances, and keeping your books clean and tax-ready.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-slate-500">No posts yet — check back soon.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 p-6 hover:border-gold-400 hover:shadow-lg transition-all"
                >
                  <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-medium bg-gold-50 text-gold-700 mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold font-display text-slate-900 leading-snug group-hover:text-gold-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-xs text-slate-500 space-x-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href="/resources" className="text-gold-600 underline hover:text-gold-700 font-medium">
              Looking for downloadable guides &amp; templates? →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
