import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bookkeeping for Ecommerce Sellers | Poof',
  description: 'Shopify, Amazon, and DTC sellers: get a profit analysis that uncovers hidden fees, margin leaks, and cash flow risks in your ecommerce business.',
  keywords: 'ecommerce bookkeeping, Shopify bookkeeping, Amazon seller accounting, ecommerce profit analysis, DTC bookkeeping software',
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
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="ecommerce" />
      <Footer />
    </main>
  )
}
