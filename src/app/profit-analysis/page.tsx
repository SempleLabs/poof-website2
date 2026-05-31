import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Profit & Cash Flow Analysis for Small Business | Poof',
  description: 'We analyze your financial data to uncover cash flow risks, spend inefficiencies, and automation opportunities — then give you a clear plan to fix them.',
  alternates: {
    canonical: 'https://www.poofai.com/profit-analysis',
  },
  openGraph: {
    title: 'Profit & Cash Flow Analysis for Small Business | Poof',
    description: 'Find the profit leaks hiding in your business. Get a clear plan to fix them.',
    url: 'https://www.poofai.com/profit-analysis',
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
  faqs: [
    { question: 'What exactly does the analysis include, and what do I get back?', answer: 'You get a 10-15 slide report covering a profit breakdown, cash flow risk review, spend and vendor review, revenue and profit leak identification, an automation opportunity map, and a prioritized 30-day action plan. We also include an optional Loom walkthrough so you can hear the findings explained directly.' },
    { question: 'Is this really free? What\'s the catch?', answer: 'Yes, the analysis is free, and there is no obligation to buy anything afterward. We offer it because it\'s a genuine way to show the value of cleaner books and better financial visibility, and some businesses choose to use Poof or our team once they see what\'s possible.' },
    { question: 'What data do I need to share, and how secure is it?', answer: 'You connect your accounting software through a secure, read-only link or upload your financial exports, so we can view your numbers without ever moving money or changing anything. Everything is encrypted and kept strictly confidential, and it is used only to prepare your analysis.' },
    { question: 'How long does it take, and how does the application process work?', answer: 'After you apply and are accepted, the analysis typically takes about 5-7 business days from the time you share your data. We review every application and accept a limited number of businesses each month so we can give each one real attention.' },
    { question: 'Is this a tax or audit service, and am I required to buy Poof afterward?', answer: 'No. This is an operational financial analysis, not a CPA audit, attestation, tax, or assurance service, and we do not file taxes. You are never obligated to purchase anything, though if you\'d like ongoing AI bookkeeping, Poof is a flat $29/mo with all 69 features and a 30-day free trial that requires no credit card.' },
  ],
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function ProfitAnalysisPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="profit-analysis" />
      <Footer />
    </main>
  )
}
