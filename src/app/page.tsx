import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhatIsPoof from '@/components/WhatIsPoof'
import MagicWorkflowSection from '@/components/MagicWorkflowSection'
import FeatureHighlights from '@/components/FeatureHighlights'
import ComparisonSection from '@/components/ComparisonSection'
import DemoVideoSection from '@/components/DemoVideoSection'
import HomeFaqSection from '@/components/HomeFaqSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import { getSoftwareApplicationSchema } from '@/lib/jsonLd'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSoftwareApplicationSchema()) }}
      />
      <Header />
      <Hero />
      <WhatIsPoof />
      <MagicWorkflowSection />
      <FeatureHighlights />
      <DemoVideoSection />
      <ComparisonSection />
      <HomeFaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
