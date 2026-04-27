import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bookkeeping for Freelancers & Solo Founders | Poof',
  description: 'Stop spending nights and weekends on your books. Poof automates categorization, reconciliation, and reporting so you can focus on your business.',
  openGraph: {
    title: 'Bookkeeping for Freelancers & Solo Founders | Poof',
    description: 'Automated bookkeeping built for one-person businesses. Get clean books without the manual work.',
    url: 'https://poof.ai/freelancers',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Freelancers: stop doing your own bookkeeping at midnight.',
    highlightedWord: 'stop doing your own bookkeeping',
    subheadline: 'We analyze your finances to uncover where you\'re overspending, under-billing, and wasting time on manual work — then give you a clear plan to fix it.',
    ctaText: 'Apply for Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'The Freelancer Finance Problem',
    items: [
      'Revenue is growing but you have no idea where the money goes',
      'Bookkeeping piles up and you dread tax season',
      'Tracking expenses across multiple clients and tools is chaos',
      'You\'re not sure which clients or projects are actually profitable',
      'Invoicing, categorizing, reconciling — it all falls on you',
      'No clear picture of cash flow or what you can afford to invest',
    ],
  },
  whatsIncluded: {
    title: 'What Your Analysis Covers',
    items: [
      { label: 'Income & Expense Breakdown', description: 'See exactly where your money is coming from and where it\'s going each month.' },
      { label: 'Cash Flow Review', description: 'Identify timing gaps between when you invoice and when you get paid.' },
      { label: 'Spend Efficiency Analysis', description: 'Find subscriptions, tools, and costs that can be cut or consolidated.' },
      { label: 'Client & Project Profitability', description: 'Understand which work is worth your time and which is costing you.' },
      { label: 'Automation Opportunity Map', description: 'See which manual bookkeeping tasks can be automated with Poof.' },
      { label: '30-Day Action Plan', description: 'A prioritized plan to clean up your books and keep them clean going forward.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the form below. We work with freelancers and solo founders who want clean books without the busywork.' },
      { number: '2', title: 'Share your financial data securely', description: 'Connect your bank accounts or accounting software. All data is encrypted and confidential.' },
      { number: '3', title: 'Receive your analysis', description: 'Get a clear report breaking down your finances with specific, actionable recommendations.' },
      { number: '4', title: 'Decide on next steps', description: 'Implement the fixes yourself or let Poof automate your bookkeeping for $29/mo.' },
    ],
  },
  socialProof: {
    title: 'What Freelancers Are Saying',
    items: [],
  },
  cta: {
    headline: 'Get Your Finances Under Control',
    subheadline: 'Limited spots available each month. Apply now and get clarity on your freelance finances within days.',
    buttonText: 'Apply for Analysis',
    buttonHref: '#apply',
  },
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function FreelancersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="freelancers" />
      <Footer />
    </main>
  )
}
