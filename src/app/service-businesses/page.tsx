import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bookkeeping for Service Businesses | Poof',
  description: 'Agencies, consultants, and service pros: get a financial analysis that uncovers where you\'re leaking profit and wasting time on manual bookkeeping.',
  openGraph: {
    title: 'Bookkeeping for Service Businesses | Poof',
    description: 'Invoicing, expense tracking, and bookkeeping in one place. Built for service businesses.',
    url: 'https://poof.ai/service-businesses',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Service businesses: your books shouldn\'t take more time than your clients.',
    highlightedWord: 'more time than your clients',
    subheadline: 'We analyze your finances to uncover billing gaps, expense bloat, and manual processes that are costing you time and money — then give you a plan to fix it.',
    ctaText: 'Apply for Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'The Service Business Finance Problem',
    items: [
      'Invoicing clients and chasing payments eats up your week',
      'Recurring expenses and subscriptions are piling up unchecked',
      'Books are months behind and reconciliation is a nightmare',
      'No clear view of profitability by client or project',
      'Bookkeeper or accountant is expensive and still needs your input',
      'Cash flow is unpredictable — feast or famine every month',
    ],
  },
  whatsIncluded: {
    title: 'What Your Analysis Covers',
    items: [
      { label: 'Revenue & Billing Review', description: 'See where revenue is coming from and identify gaps in your billing process.' },
      { label: 'Client Profitability Breakdown', description: 'Know which clients drive profit and which ones cost you more than they\'re worth.' },
      { label: 'Recurring Expense Audit', description: 'Every subscription, tool, and vendor evaluated for ROI and potential savings.' },
      { label: 'Cash Flow Timing Analysis', description: 'Map your cash inflows vs. outflows so you can plan ahead instead of reacting.' },
      { label: 'Automation Opportunity Map', description: 'Identify invoicing, categorization, and reconciliation tasks that can run on autopilot.' },
      { label: '30-Day Action Plan', description: 'A clear, prioritized roadmap to clean up your books and streamline operations.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the form below. We work with agencies, consultants, and service businesses of all sizes.' },
      { number: '2', title: 'Share your financial data securely', description: 'Connect your bank accounts or accounting software. All data is encrypted and confidential.' },
      { number: '3', title: 'Receive your analysis', description: 'Get a detailed report with actionable insights, plus an optional Loom walkthrough.' },
      { number: '4', title: 'Decide on next steps', description: 'Implement the fixes yourself or let Poof handle your bookkeeping for $29/mo.' },
    ],
  },
  socialProof: {
    title: 'What Service Business Owners Are Saying',
    items: [],
  },
  cta: {
    headline: 'Spend Less Time on Books, More on Clients',
    subheadline: 'Limited spots available each month. Apply now and get clarity on your service business finances within days.',
    buttonText: 'Apply for Analysis',
    buttonHref: '#apply',
  },
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function ServiceBusinessesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="service-businesses" />
      <Footer />
    </main>
  )
}
