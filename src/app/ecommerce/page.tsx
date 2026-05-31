import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bookkeeping for Ecommerce Sellers | Poof',
  description: 'Shopify, Amazon, and DTC sellers: get a profit analysis that uncovers hidden fees, margin leaks, and cash flow risks in your ecommerce business.',
  keywords: 'ecommerce bookkeeping, Shopify bookkeeping, Amazon seller accounting, ecommerce profit analysis, DTC bookkeeping software',
  alternates: {
    canonical: 'https://www.poofai.com/ecommerce',
  },
  openGraph: {
    title: 'Bookkeeping for Ecommerce Sellers | Poof',
    description: 'See your true margins after fees, COGS, and returns. AI-powered bookkeeping built for ecommerce.',
    url: 'https://www.poofai.com/ecommerce',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Ecommerce sellers: your real margins are hidden in fees, returns, and COGS.',
    highlightedWord: 'hidden in fees, returns, and COGS',
    subheadline: 'We analyze your ecommerce finances to uncover profit leaks, cash flow risks, and manual processes that are eating into your margins — then give you a clear plan to fix them.',
    ctaText: 'Apply for Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'The Ecommerce Finance Problem',
    items: [
      'Sales are growing but profit is unclear after fees, returns, and shipping',
      'Cash is constantly tied up in inventory with no visibility into when it comes back',
      'Marketplace fees from Shopify, Amazon, and Stripe eat into margins invisibly',
      'You don\'t know your true COGS or profit per product',
      'Reconciling sales across multiple channels is a manual nightmare',
      'No real-time dashboard showing actual profitability — just revenue vanity metrics',
    ],
  },
  whatsIncluded: {
    title: 'What Your Analysis Covers',
    items: [
      { label: 'True Profit Breakdown', description: 'Revenue minus ALL costs — fees, COGS, shipping, returns, ad spend — so you see real margins, not gross revenue.' },
      { label: 'Fee & Platform Leak Review', description: 'Every Shopify, Amazon, Stripe, and PayPal fee mapped and totaled. You\'ll see exactly what the platforms are taking.' },
      { label: 'Cash Flow & Inventory Risk', description: 'How much cash is locked in inventory, how long it takes to turn, and where timing gaps create risk.' },
      { label: 'Channel Profitability', description: 'Which sales channels actually make money and which ones look good on revenue but bleed profit.' },
      { label: 'Automation Opportunity Map', description: 'Manual reconciliation, categorization, and reporting tasks that Poof can automate for you.' },
      { label: '30-Day Action Plan', description: 'Prioritized fixes: which margin leaks to plug first, what to automate, and how to get real-time visibility.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the form below. We work with ecommerce sellers doing $10K+/month who want clarity on their real numbers.' },
      { number: '2', title: 'Share your financial data securely', description: 'Connect your Shopify, Stripe, bank accounts, or upload your data. Everything is encrypted and confidential.' },
      { number: '3', title: 'Receive your profit analysis', description: 'Get a clear report showing your true margins, hidden fees, and exactly where profit is leaking.' },
      { number: '4', title: 'Decide on next steps', description: 'Implement the fixes yourself or let Poof automate your bookkeeping and give you a real-time profit dashboard for $29/mo.' },
    ],
  },
  socialProof: {
    title: 'What Ecommerce Sellers Are Saying',
    items: [],
  },
  cta: {
    headline: 'See Your True Ecommerce Margins',
    subheadline: 'Limited spots available each month. Apply now and find out what your business actually keeps after all the fees.',
    buttonText: 'Apply for Analysis',
    buttonHref: '#apply',
  },
  faqs: [
    { question: 'Should I record my Stripe and Shopify payouts as the net deposit, or as gross sales with fees split out?', answer: 'Record the gross sale as revenue and book the processor fees as a separate expense, rather than only recording the net amount that lands in your bank. If you just record the net payout you understate both your true sales and the fees the platforms take, which hides margin leaks. Our blog post on ecommerce bookkeeping walks through how to split gross sales, fees, and refunds out of a single payout.' },
    { question: 'How do I handle the sales tax I collect from customers, and is inventory an expense?', answer: 'Sales tax you collect is a liability you owe to the state, not revenue, so it should sit in a separate liability account until you remit it — lumping it into income inflates your sales. Inventory works differently again: it is an asset when you buy it and only becomes cost of goods sold (COGS) when the product actually sells, so expensing it all at purchase distorts your profit and per-product margins.' },
    { question: 'Why don\'t my processor deposits match the sales totals in my dashboard?', answer: 'Processors like Stripe, Shopify Payments, and Amazon batch many transactions into one deposit and net out fees, refunds, chargebacks, and reserves before paying you, so a single deposit rarely matches a single day of sales. Reconciling means matching each bank deposit back to the underlying batch of orders and fees. Poof connects to your bank through Plaid (read-only, 12,000+ banks) and helps you tie deposits back to the orders behind them.' },
    { question: 'Can the analysis show which channel is most profitable — Amazon vs Shopify vs Etsy — and how do I get it?', answer: 'Yes. Because each marketplace has different fee structures, shipping, and return rates, a channel that looks strong on revenue can be your weakest on profit, so the analysis breaks down true margin by channel. To get it, apply with the form on this page — spots are limited each month — and once you are accepted you typically receive results in about 5 to 7 days. It is an operational financial analysis, not a CPA audit or tax filing.' },
    { question: 'What does Poof itself cost if I want ongoing ecommerce bookkeeping?', answer: 'Poof is AI bookkeeping software at a flat $29/mo with all 69 features included — no tiers and no add-ons — plus a launch special of $14.50/mo for your first 3 months. You can start with a 30-day free trial that requires no credit card. Poof does not run payroll or file your taxes.' },
  ],
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function EcommercePage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="ecommerce" />
      <Footer />
    </main>
  )
}
