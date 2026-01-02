import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Blog Post Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The blog post you're looking for doesn't exist yet. Check out our other resources.
          </p>
          <Link
            href="/resources"
            className="inline-block bg-poof-primary-600 text-white font-semibold px-8 py-3 rounded-magical hover:bg-poof-primary-700 transition-colors"
          >
            Browse All Resources
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
