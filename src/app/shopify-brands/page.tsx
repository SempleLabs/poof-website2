import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Shopify DTC Profit Analysis | Poof',
  description: 'Shopify founders: your revenue is growing but where\'s the profit? We analyze your financials to uncover margin leaks and cash flow risks.',
  openGraph: {
    title: 'Shopify DTC Profit Analysis | Poof',
    description: 'Revenue is growing but profit isn\'t keeping up. Find out why with a detailed financial analysis.',
    url: 'https://poof.ai/shopify-brands',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Shopify founders: your revenue is growing but where\'s the profit?',
    highlightedWord: 'where\'s the profit',
    subheadline: 'We analyze your Shopify financials to uncover where ad spend, COGS, and operational costs are eating your margins — then show you exactly how to fix it.',
    ctaText: 'Get My Profit Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'The DTC Profit Problem',
    items: [
      'Ad spend keeps climbing but ROAS is unclear',
      'Bookkeeper is months behind on reconciliation',
      'No real-time view of margins by product or channel',
      'Subscriptions and refunds create reconciliation headaches',
      'Flying blind on cash flow and runway',
      'No idea which products or channels are actually profitable',
    ],
  },
  whatsIncluded: {
    title: 'What Your Analysis Covers',
    items: [
      { label: 'Channel Profitability Breakdown', description: 'See true margins by sales channel — DTC, wholesale, marketplace.' },
      { label: 'Ad Spend Efficiency Review', description: 'Map every ad dollar to actual profit, not just revenue or ROAS.' },
      { label: 'Product-Level Margin Analysis', description: 'Identify which products drive profit and which are dragging you down.' },
      { label: 'Cash Flow & Runway Forecast', description: 'Understand when cash gets tight and plan ahead for inventory cycles.' },
      { label: 'Subscription & Refund Impact', description: 'Quantify the real cost of churn, refunds, and chargebacks.' },
      { label: '30-Day Action Plan', description: 'Prioritized steps to improve margins, cut waste, and automate workflows.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the form below. We work with Shopify brands doing $10K+/month in revenue.' },
      { number: '2', title: 'Share your financial data securely', description: 'Connect your accounting software and Shopify. All data is encrypted and confidential.' },
      { number: '3', title: 'Receive your analysis', description: 'Get a detailed report breaking down your true DTC profitability with specific action items.' },
      { number: '4', title: 'Decide on next steps', description: 'Implement the fixes yourself or let Poof automate your ecommerce bookkeeping going forward.' },
    ],
  },
  socialProof: {
    title: 'What DTC Founders Are Saying',
    items: [],
  },
  cta: {
    headline: 'Know Your Real Margins',
    subheadline: 'Limited spots available each month. Apply now and get clarity on your Shopify profitability within days.',
    buttonText: 'Apply for Analysis',
    buttonHref: '#apply',
  },
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function ShopifyBrandsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="shopify-brands" />
      <Footer />
    </main>
  )
}
