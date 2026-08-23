import Header from '@/components/Header'
import TradesHero from '@/components/TradesHero'
import HomeTradesSection from '@/components/HomeTradesSection'
import ReceptionistSection from '@/components/ReceptionistSection'
import Hero from '@/components/Hero'
import SpendScoreBar from '@/components/SpendScoreBar'
import WhoPoofIsFor from '@/components/WhoPoofIsFor'
import WhatIsPoof from '@/components/WhatIsPoof'
import MagicWorkflowSection from '@/components/MagicWorkflowSection'
import FeatureHighlights from '@/components/FeatureHighlights'
import ComparisonSection from '@/components/ComparisonSection'
import DemoVideoSection from '@/components/DemoVideoSection'
import HomeFaqSection from '@/components/HomeFaqSection'
import ProfitAnalysisCta from '@/components/ProfitAnalysisCta'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import { getSoftwareApplicationSchema, getServiceSchema } from '@/lib/jsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: 'Poof Managed for Trades',
              description:
                'Managed bookkeeping for HVAC, plumbing, and electrical contractors doing $750K–$3M. Per-job profit on every monthly close, AI-powered and reviewed by a former controller. From $1,200/mo.',
              price: '1200',
              url: 'https://www.poofai.com/trades',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSoftwareApplicationSchema()) }}
      />
      <Header />
      <TradesHero />
      <HomeTradesSection />
      <ReceptionistSection />
      <Hero />
      <WhoPoofIsFor />
      <SpendScoreBar />
      <WhatIsPoof />
      <MagicWorkflowSection />
      <FeatureHighlights />
      <DemoVideoSection />
      <ComparisonSection />
      <HomeFaqSection />
      <ProfitAnalysisCta />
      <CtaSection />
      <Footer />
    </main>
  )
}
