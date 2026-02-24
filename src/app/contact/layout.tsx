import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch with the Poof Team | Poof',
  description: 'Have a question about Poof AI bookkeeping? Contact us and we\'ll respond within 24 hours. We\'re here to help with setup, features, and support.',
  keywords: 'contact Poof, bookkeeping support, AI bookkeeping help, Poof support',
  alternates: {
    canonical: 'https://poof.ai/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
