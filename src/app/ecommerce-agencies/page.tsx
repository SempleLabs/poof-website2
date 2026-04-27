import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Multi-Brand Ecommerce Financial Analysis | Poof',
  description: 'Managing finances across multiple ecommerce brands? Get a consolidated analysis that uncovers inefficiencies and standardizes your financial operations.',
  openGraph: {
    title: 'Multi-Brand Ecommerce Financial Analysis | Poof',
    description: 'Stop juggling separate books across brands. Get one clear picture with Poof.',
    url: 'https://poof.ai/ecommerce-agencies',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Managing finances across multiple ecommerce brands? There\'s a better way.',
    highlightedWord: 'a better way',
    subheadline: 'We analyze the financial operations across your portfolio to uncover inefficiencies, standardize reporting, and identify automation opportunities.',
    ctaText: 'Get My Portfolio Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'The Multi-Brand Problem',
    items: [
      'Separate books, separate logins, no consolidated view',
      'Each brand has different tools and processes',
      'Manual reconciliation across multiple entities',
      'No standardized reporting for owners or clients',
      'Wasting hours on work that should be automated',
      'Hard to compare performance across brands',
    ],
  },
  whatsIncluded: {
    title: 'What Your Analysis Covers',
    items: [
      { label: 'Consolidated P&L View', description: 'See profitability across all brands in one unified view.' },
      { label: 'Cross-Brand Efficiency Audit', description: 'Identify duplicate vendors, tools, and processes that can be consolidated.' },
      { label: 'Entity-Level Cash Flow Review', description: 'Understand cash flow timing and risks across each entity.' },
      { label: 'Reporting Standardization Plan', description: 'Get a framework for consistent reporting across all brands.' },
      { label: 'Automation Opportunity Map', description: 'See which manual processes can be eliminated with the right systems.' },
      { label: '30-Day Implementation Plan', description: 'Prioritized roadmap to standardize and automate your financial operations.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the form below. We work with operators managing 2+ ecommerce brands or entities.' },
      { number: '2', title: 'Share financial data securely', description: 'Connect accounting software for each entity. All data is encrypted and confidential.' },
      { number: '3', title: 'Receive your portfolio analysis', description: 'Get a comprehensive report with cross-brand insights and standardization recommendations.' },
      { number: '4', title: 'Decide on next steps', description: 'Implement changes yourself or let Poof manage and automate your multi-brand bookkeeping.' },
    ],
  },
  socialProof: {
    title: 'What Operators Are Saying',
    items: [],
  },
  cta: {
    headline: 'One View Across All Your Brands',
    subheadline: 'Limited spots available each month. Apply now and get clarity across your entire ecommerce portfolio.',
    buttonText: 'Apply for Analysis',
    buttonHref: '#apply',
  },
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function EcommerceAgenciesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="ecommerce-agencies" />
      <Footer />
    </main>
  )
}
