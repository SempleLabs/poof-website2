import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Demo — See Poof AI Bookkeeping in Action | Poof',
  description: 'Schedule a free 30-minute personalized demo of Poof. See how AI-powered bookkeeping can save your small business hours every week.',
  keywords: 'bookkeeping demo, AI bookkeeping demo, Poof demo, small business bookkeeping trial',
  alternates: {
    canonical: 'https://www.poofai.com/demo',
  },
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children
}
