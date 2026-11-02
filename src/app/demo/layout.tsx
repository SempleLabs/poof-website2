import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Demo — See Poof AI Bookkeeping in Action | Poof',
  description: 'Book a free 30-minute demo of Poof: the overnight sort, the approval cards and month-end, on books like yours.',
  keywords: 'bookkeeping demo, AI bookkeeping demo, Poof demo, small business bookkeeping trial',
  alternates: {
    canonical: 'https://www.poofai.com/demo',
  },
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children
}
