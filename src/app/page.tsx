import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import ComparisonSection from '@/components/ComparisonSection'
import ProductDemoSection from '@/components/ProductDemoSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeatureSection />
      <ComparisonSection />
      <ProductDemoSection />
      <CtaSection />
      <Footer />
    </main>
  )
}