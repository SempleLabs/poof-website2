import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Amazon FBA Profit Analysis | Poof',
  description: 'Amazon FBA sellers: do you actually know your profit per unit? We analyze your financials and uncover where Amazon fees, COGS, and inventory are eating your margins.',
  openGraph: {
    title: 'Amazon FBA Profit Analysis | Poof',
    description: 'Stop guessing your Amazon margins. Get a clear profit analysis with actionable fixes.',
    url: 'https://poof.ai/amazon-sellers',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Amazon FBA sellers: do you actually know your profit per unit?',
    highlightedWord: 'profit per unit',
    subheadline: 'We analyze your Amazon financials to uncover where fees, COGS, and inventory costs are quietly eating your margins — then give you a clear plan to fix it.',
    ctaText: 'Get My Profit Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'The Amazon Profit Problem',
    items: [
      'COGS tracking is a mess across multiple suppliers',
      'Amazon fees eat into margins but are hard to quantify',
      'Inventory sitting in FBA warehouses ties up cash',
      "Reimbursements and returns aren't tracked properly",
      'No clear picture of true per-unit profitability',
      'Bookkeeper doesn\'t understand Amazon settlement reports',
    ],
  },
  whatsIncluded: {
    title: 'What Your Analysis Covers',
    items: [
      { label: 'Per-Unit Profit Breakdown', description: 'True profitability per SKU after all Amazon fees, COGS, and shipping.' },
      { label: 'Amazon Fee Audit', description: 'Break down every fee Amazon charges and identify overcharges or unnecessary costs.' },
      { label: 'Inventory Cash Flow Review', description: 'See how much cash is locked in inventory and optimize reorder timing.' },
      { label: 'Reimbursement & Return Tracking', description: 'Identify missed reimbursements and the true cost of returns.' },
      { label: 'Supplier Spend Analysis', description: 'Evaluate supplier costs and identify opportunities to improve COGS.' },
      { label: '30-Day Action Plan', description: 'Prioritized steps to improve margins and free up cash flow.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the form below. We focus on Amazon sellers doing $10K+/month in revenue.' },
      { number: '2', title: 'Share your financial data securely', description: 'Connect your accounting software and Amazon Seller Central. All data is encrypted and confidential.' },
      { number: '3', title: 'Receive your analysis', description: 'Get a detailed report breaking down your true Amazon profitability with specific action items.' },
      { number: '4', title: 'Decide on next steps', description: 'Implement the fixes yourself or let Poof automate your Amazon bookkeeping going forward.' },
    ],
  },
  socialProof: {
    title: 'What Amazon Sellers Are Saying',
    items: [],
  },
  cta: {
    headline: 'Stop Guessing Your Amazon Margins',
    subheadline: 'Limited spots available each month. Apply now and know your true per-unit profitability within days.',
    buttonText: 'Apply for Analysis',
    buttonHref: '#apply',
  },
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function AmazonSellersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="amazon-sellers" />
      <Footer />
    </main>
  )
}
