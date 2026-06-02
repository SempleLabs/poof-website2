import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function getBlogSlugs(): { slug: string; date: string }[] {
  const blogDir = path.join(process.cwd(), 'content', 'blog')
  if (!fs.existsSync(blogDir)) return []

  return fs.readdirSync(blogDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const content = fs.readFileSync(path.join(blogDir, file), 'utf8')
      const { data } = matter(content)
      return {
        slug: file.replace('.mdx', ''),
        date: data.date || new Date().toISOString(),
      }
    })
}

// Stable date so the sitemap doesn't report every page as "modified" on every deploy.
const BUILD_DATE = new Date('2026-05-29')

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.poofai.com'

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/poof-vs-quickbooks`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/security`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/spend-score`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/profit-analysis`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/freelancers`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-businesses`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quickbooks-alternative`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ecommerce`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/spreadsheet-bookkeeping`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/new-llc`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/creators`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tax-season`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/trades`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hvac`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/plumbing`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/electrical`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: BUILD_DATE,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: BUILD_DATE,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const blogPosts: MetadataRoute.Sitemap = getBlogSlugs().map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPosts]
}
