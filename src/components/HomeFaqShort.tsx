'use client'

import { useState } from 'react'
import Link from 'next/link'
import { faqData } from '@/lib/featureData'
import { getFaqPageSchema } from '@/lib/jsonLd'

const PICK = ['What is Poof?', 'Can the AI change my books without asking me?', 'What does the five-day close guarantee cover?', 'How is Poof different from Mercury Books?', 'How does Poof compare to QuickBooks?', 'Is Poof secure?']

/** Six questions, not thirty-six. The full list lives at /faq with the same schema. */
export default function HomeFaqShort() {
  const items = PICK.map((q) => faqData.find((f) => f.question === q && !f.audience)).filter((f): f is NonNullable<typeof f> => !!f)
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="max-w-[780px] mx-auto px-4 sm:px-6 pt-16 pb-6" id="faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(items)) }} />
      <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Six questions</p>
      <h2 className="font-display text-3xl sm:text-4xl leading-[1] tracking-[-0.035em] text-ink mb-6 text-balance">The ones people ask before they sign in.</h2>
      <ul className="border-t border-ink">
        {items.map((f, i) => (
          <li key={f.question} className="border-b border-rule">
            <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="w-full text-left py-3.5 flex justify-between gap-4 items-start">
              <span className="font-semibold text-ink">{f.question}</span>
              <span className={`font-mono text-muted mt-0.5 transition-transform ${open === i ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
            </button>
            {open === i && <p className="pb-4 text-[15px] text-muted max-w-[62ch]">{f.answer}</p>}
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted mt-4">All thirty-six are on the <Link href="/faq" className="text-ledger-600 font-semibold hover:text-ledger-700">FAQ page</Link>.</p>
    </section>
  )
}
