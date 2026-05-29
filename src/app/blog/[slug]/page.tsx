import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  author: string
  content: string
}

interface PostMeta {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      readTime: data.readTime,
      date: data.date,
      author: data.author || 'Poof Team',
      content
    }
  } catch (error) {
    return null
  }
}

function getAllPostsMeta(): PostMeta[] {
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

export function generateStaticParams() {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({ slug: file.replace('.mdx', '') }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found - Poof',
    }
  }

  const url = `https://www.poofai.com/blog/${params.slug}`

  return {
    title: `${post.title} - Poof Blog`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'Poof',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/og-image.png'],
    },
  }
}

function getBlogPostingSchema(post: BlogPost, slug: string) {
  const url = `https://www.poofai.com/blog/${slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: 'https://www.poofai.com/og-image.png',
    author: {
      '@type': post.author === 'Austin Semple' ? 'Person' : 'Organization',
      name: post.author,
      ...(post.author === 'Austin Semple' && { jobTitle: 'CEO & Founder', url: 'https://www.poofai.com/about' }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Poof',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.poofai.com/poof-logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    articleSection: post.category,
    keywords: post.category,
  }
}

function getBreadcrumbSchema(post: BlogPost, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.poofai.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.poofai.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.poofai.com/blog/${slug}` },
    ],
  }
}

// Render inline markdown: **bold**, [links](url), and `code`.
function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g)
  return parts.map((part, i) => {
    if (!part) return null
    const key = `${keyPrefix}-${i}`
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={key} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 text-[0.9em] font-mono">
          {part.slice(1, -1)}
        </code>
      )
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const label = link[1]
      // Normalize the legacy poof.ai domain to the current canonical host.
      const href = link[2].replace(/^https?:\/\/(www\.)?poof\.ai/i, 'https://www.poofai.com')
      const isInternal = href.startsWith('/') || href.startsWith('https://www.poofai.com')
      if (isInternal) {
        const internalPath = href.replace('https://www.poofai.com', '') || '/'
        return (
          <Link key={key} href={internalPath} className="text-gold-600 underline hover:text-gold-700">
            {label}
          </Link>
        )
      }
      return (
        <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="text-gold-600 underline hover:text-gold-700">
          {label}
        </a>
      )
    }
    return part
  })
}

// Block-level markdown renderer (headings, lists, tables, blockquotes, images, paragraphs).
function formatContent(content: string): JSX.Element[] {
  const elements: JSX.Element[] = []
  let key = 0
  const blocks = content.split(/\n\n+/)

  blocks.forEach((rawBlock) => {
    if (!rawBlock.trim()) return
    let lines = rawBlock.split('\n')

    // Leading heading
    if (lines[0].startsWith('### ')) {
      elements.push(<h3 key={key++} className="text-xl font-bold text-slate-900 mt-8 mb-3">{renderInline(lines[0].slice(4), `h3-${key}`)}</h3>)
      lines = lines.slice(1)
    } else if (lines[0].startsWith('## ')) {
      elements.push(<h2 key={key++} className="text-2xl font-bold font-display text-slate-900 mt-10 mb-4">{renderInline(lines[0].slice(3), `h2-${key}`)}</h2>)
      lines = lines.slice(1)
    } else if (lines[0].startsWith('# ')) {
      elements.push(<h2 key={key++} className="text-2xl font-bold font-display text-slate-900 mt-10 mb-4">{renderInline(lines[0].slice(2), `h1-${key}`)}</h2>)
      lines = lines.slice(1)
    }

    const nonEmpty = lines.filter((l) => l.trim() !== '')
    if (nonEmpty.length === 0) return

    // GFM table: first line has pipes, second line is a separator row
    if (
      nonEmpty.length >= 2 &&
      nonEmpty[0].includes('|') &&
      nonEmpty[1].includes('-') &&
      /^\s*\|?[\s:|-]+\|?\s*$/.test(nonEmpty[1])
    ) {
      const parseRow = (row: string) =>
        row.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map((c) => c.trim())
      const headers = parseRow(nonEmpty[0])
      const rows = nonEmpty.slice(2).map(parseRow)
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300">
                {headers.map((h, hi) => (
                  <th key={hi} className="py-2 pr-4 font-semibold text-slate-900">{renderInline(h, `th-${key}-${hi}`)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="border-b border-slate-200">
                  {r.map((c, ci) => (
                    <td key={ci} className="py-2 pr-4 text-slate-700 align-top">{renderInline(c, `td-${key}-${ri}-${ci}`)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      return
    }

    // Ordered list
    if (nonEmpty.every((l) => /^\d+\.\s/.test(l))) {
      elements.push(
        <ol key={key++} className="list-decimal list-outside pl-6 space-y-2 my-4 text-slate-700">
          {nonEmpty.map((item, i) => (
            <li key={i}>{renderInline(item.replace(/^\d+\.\s/, ''), `ol-${key}-${i}`)}</li>
          ))}
        </ol>
      )
      return
    }

    // Unordered list
    if (nonEmpty.every((l) => /^[-*]\s/.test(l))) {
      elements.push(
        <ul key={key++} className="list-disc list-outside pl-6 space-y-2 my-4 text-slate-700">
          {nonEmpty.map((item, i) => (
            <li key={i}>{renderInline(item.replace(/^[-*]\s/, ''), `ul-${key}-${i}`)}</li>
          ))}
        </ul>
      )
      return
    }

    // Blockquote
    if (nonEmpty.every((l) => l.startsWith('>'))) {
      const quote = nonEmpty.map((l) => l.replace(/^>\s?/, '')).join(' ')
      elements.push(
        <blockquote key={key++} className="border-l-4 border-gold-300 pl-4 italic text-slate-600 my-4">
          {renderInline(quote, `bq-${key}`)}
        </blockquote>
      )
      return
    }

    // Standalone image
    const imgMatch = nonEmpty.length === 1 ? nonEmpty[0].match(/^!\[([^\]]*)\]\(([^)]+)\)$/) : null
    if (imgMatch) {
      // eslint-disable-next-line @next/next/no-img-element
      elements.push(<img key={key++} src={imgMatch[2]} alt={imgMatch[1]} loading="lazy" className="rounded-xl my-6 w-full" />)
      return
    }

    // Paragraph
    const text = nonEmpty.join(' ').trim()
    elements.push(
      <p key={key++} className="text-slate-700 leading-relaxed mb-4">{renderInline(text, `p-${key}`)}</p>
    )
  })

  return elements
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const related = getAllPostsMeta()
    .filter((p) => p.slug !== params.slug)
    .sort((a, b) => {
      // Prefer same-category posts, then most recent
      const aMatch = a.category === post.category ? 0 : 1
      const bMatch = b.category === post.category ? 0 : 1
      return aMatch - bMatch
    })
    .slice(0, 3)

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogPostingSchema(post, params.slug)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(post, params.slug)) }}
      />
      <Header />

      <article className="pt-24 pb-16">
        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link
            href="/blog"
            className="text-gold-600 hover:text-gold-700 font-medium mb-6 inline-block"
          >
            ← Back to Blog
          </Link>

          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gold-50 text-gold-700">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-display text-slate-900 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center text-slate-600 text-sm space-x-4">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {formatContent(post.content)}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold font-display text-white mb-4">
              Ready to Automate Your Bookkeeping?
            </h2>
            <p className="text-slate-300 mb-6">
              See how Poof can save you hours every week with AI-powered bookkeeping.
            </p>
            <Link
              href="https://app.poofai.com/register"
              className="inline-block bg-gold-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gold-700 shadow-gold transition-colors"
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="text-2xl font-bold font-display text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block rounded-xl border border-slate-200 p-5 hover:border-gold-400 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-gold-700">{p.category}</span>
                  <h3 className="mt-2 font-semibold text-slate-900 leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">{p.excerpt}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-gold-600">Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  )
}
