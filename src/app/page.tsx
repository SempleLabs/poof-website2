import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhatIsPoof from '@/components/WhatIsPoof'
import FeatureSection from '@/components/FeatureSection'
import ComparisonSection from '@/components/ComparisonSection'
import ProductDemoSection from '@/components/ProductDemoSection'
import HomeFaqSection from '@/components/HomeFaqSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import { getSoftwareApplicationSchema } from '@/lib/jsonLd'

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSoftwareApplicationSchema()) }}
      />
      <Header />
      <Hero />
      <WhatIsPoof />
      <FeatureSection />
      <ComparisonSection />
      <ProductDemoSection />
      <HomeFaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
