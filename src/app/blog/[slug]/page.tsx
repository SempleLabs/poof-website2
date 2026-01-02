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

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`)
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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found - Poof',
    }
  }

  return {
    title: `${post.title} - Poof Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  // Simple markdown to HTML conversion for MVP
  // You can enhance this with proper MDX rendering later
  const formatContent = (content: string) => {
    const elements: JSX.Element[] = []
    let key = 0

    // Split by double newlines to get blocks
    const blocks = content.split('\n\n')

    blocks.forEach((block) => {
      const lines = block.split('\n')

      // Check if block starts with heading
      if (lines[0].startsWith('## ')) {
        elements.push(<h2 key={key++} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{lines[0].replace('## ', '')}</h2>)
        lines.shift() // Remove heading from lines
      } else if (lines[0].startsWith('### ')) {
        elements.push(<h3 key={key++} className="text-xl font-bold text-gray-900 mt-6 mb-3">{lines[0].replace('### ', '')}</h3>)
        lines.shift() // Remove heading from lines
      }

      // Check remaining lines for lists
      const listItems = lines.filter(line => line.startsWith('- '))
      if (listItems.length > 0) {
        elements.push(
          <ul key={key++} className="list-disc list-inside space-y-2 my-4 text-gray-700">
            {listItems.map((item, i) => {
              const text = item.replace('- ', '')
              // Handle bold text in list items
              const parts = text.split(/(\*\*.*?\*\*)/)
              return (
                <li key={i}>
                  {parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={j}>{part.slice(2, -2)}</strong>
                    }
                    return part
                  })}
                </li>
              )
            })}
          </ul>
        )
      } else if (lines.length > 0 && lines[0].trim() !== '') {
        // Regular paragraph (if there's content left)
        const text = lines.join(' ').trim()
        if (text) {
          // Check for bold text **text**
          const parts = text.split(/(\*\*.*?\*\*)/)
          elements.push(
            <p key={key++} className="text-gray-700 leading-relaxed mb-4">
              {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={i}>{part.slice(2, -2)}</strong>
                }
                return part
              })}
            </p>
          )
        }
      }
    })

    return elements
  }

  return (
    <main className="min-h-screen">
      <Header />

      <article className="pt-24 pb-16">
        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link
            href="/resources"
            className="text-poof-primary-600 hover:text-poof-primary-700 font-medium mb-6 inline-block"
          >
            ← Back to Resources
          </Link>

          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-poof-primary-50 text-poof-primary-700">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center text-gray-600 text-sm space-x-4">
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
          <div className="glass-card p-8 text-center bg-gradient-to-r from-poof-primary-50 to-poof-secondary-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Automate Your Bookkeeping?
            </h3>
            <p className="text-gray-600 mb-6">
              See how Poof can save you hours every week with AI-powered bookkeeping.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-poof-primary-600 text-white font-semibold px-8 py-3 rounded-magical hover:bg-poof-primary-700 transition-colors"
            >
              Try Poof Free
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
