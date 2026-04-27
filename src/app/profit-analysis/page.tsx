import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Profit & Cash Flow Analysis for Small Business | Poof',
  description: 'We analyze your financial data to uncover cash flow risks, spend inefficiencies, and automation opportunities — then give you a clear plan to fix them.',
  openGraph: {
    title: 'Profit & Cash Flow Analysis for Small Business | Poof',
    description: 'Find the profit leaks hiding in your business. Get a clear plan to fix them.',
    url: 'https://poof.ai/profit-analysis',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Find the profit leaks hiding in your business.',
    highlightedWord: 'profit leaks',
    subheadline: 'We analyze your financial data to uncover cash flow risks, spend inefficiencies, and automation opportunities — then give you a clear plan to fix them.',
    ctaText: 'Apply for Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'Sound Familiar?',
    items: [
      'Revenue is growing but profit is unclear',
      'Cash flow is unpredictable month to month',
      'Books are behind or hard to trust',
      'No clear view of where your money is actually going',
      'Too much manual bookkeeping and admin work',
      'No financial dashboard or forecast to plan with',
    ],
  },
  whatsIncluded: {
    title: "What You'll Get",
    items: [
      { label: 'Profit Breakdown', description: 'See exactly where your money is going and where margin is being lost.' },
      { label: 'Cash Flow Risk Review', description: 'Identify timing gaps and risks that could leave you short on cash.' },
      { label: 'Spend & Vendor Review', description: 'Evaluate every recurring cost and vendor relationship for savings.' },
      { label: 'Revenue & Profit Leak ID', description: 'Pinpoint the specific areas where revenue is leaking out.' },
      { label: 'Automation Opportunity Map', description: 'See which manual processes can be automated to save time and money.' },
      { label: '30-Day Action Plan', description: 'Walk away with a prioritized, step-by-step plan to implement changes.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the intake form below. We review every application to ensure we can deliver real value.' },
      { number: '2', title: 'Share your financial data securely', description: 'We\'ll send you a secure link to connect your accounting software or upload your financial exports.' },
      { number: '3', title: 'Receive your analysis', description: 'Get a 10-15 slide report with actionable insights, plus an optional Loom walkthrough of the findings.' },
      { number: '4', title: 'Decide on next steps', description: 'Choose whether to implement the fixes yourself or let the Poof team handle it for you.' },
    ],
  },
  socialProof: {
    title: 'What Business Owners Are Saying',
    items: [],
  },
  cta: {
    headline: 'Limited Early Access Pricing Available',
    subheadline: 'We\'re accepting a limited number of businesses for analysis each month. Apply now to secure your spot.',
    buttonText: 'Apply Now',
    buttonHref: '#apply',
  },
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function ProfitAnalysisPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="profit-analysis" />
      <Footer />
    </main>
  )
}
