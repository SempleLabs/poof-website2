'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { featureGroups } from '@/lib/featureData'

/**
 * The features page as a ledger: every group on the page, a sticky index that tracks
 * scroll position, a search box that filters the rows, and collapsed groups on phones.
 * Replaces the horizontal tab bar, which hid twelve of thirteen groups behind a swipe.
 */

const SHORT: Record<string, string> = {
  'Job Costing, Month-End Close & Payments': 'Job Costing & Close',
  'AI-Powered Automation': 'AI Automation',
  'Poof AI Capabilities': 'Ask Poof',
  'Invoicing & Payments': 'Invoicing',
  'Expense & Bill Management': 'Expenses & Bills',
  'Banking & Reconciliation': 'Banking',
  'Accounting & Reporting': 'Reporting',
  'Budgeting & Forecasting': 'Budgeting',
  'Team & Security': 'Team & Security',
  'Productivity & Workflow': 'Productivity',
  'AI Receptionist & Dispatch': 'Receptionist',
  'Field Service & Job Handoff': 'Field Service',
  'Approvals & AI Autonomy': 'Approvals',
}

const slug = (s: string) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const PREVIEW = 3

export default function FeatureLedger() {
  const total = featureGroups.reduce((n, g) => n + g.features.length, 0)
  const [q, setQ] = useState('')
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})
  const [indexOpen, setIndexOpen] = useState(false)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  const needle = q.trim().toLowerCase()
  const groups = useMemo(() => featureGroups.map((g, i) => {
    const features = needle
      ? g.features.filter((f) => (f.title + ' ' + f.description).toLowerCase().includes(needle))
      : g.features
    return { ...g, index: i, id: slug(g.name), short: SHORT[g.name] || g.name, features, hidden: needle ? features.length === 0 : false }
  }), [needle])
  const matches = needle ? groups.reduce((n, g) => n + g.features.length, 0) : total

  // Track which group is in view for the index
  useEffect(() => {
    const els = sectionRefs.current.filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) setActive(Number((visible[0].target as HTMLElement).dataset.index))
    }, { rootMargin: '-120px 0px -60% 0px', threshold: 0 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [needle])

  // Deep links (#approvals-and-ai-autonomy) open the group on phones
  useEffect(() => {
    const h = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
    if (!h) return
    const i = groups.findIndex((g) => g.id === h)
    if (i >= 0) setExpanded((e) => ({ ...e, [i]: true }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const jump = (i: number) => {
    setIndexOpen(false)
    setExpanded((e) => ({ ...e, [i]: true }))
    sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const activeGroup = groups[active] || groups[0]

  return (
    <div className="max-w-[1180px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-0 lg:gap-12">
      {/* Index: rail on desktop, pinned strip on phones */}
      <aside className="lg:sticky lg:top-24 lg:self-start lg:pt-2" aria-label="Feature groups">
        {/* phone strip */}
        <div className="lg:hidden sticky top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 bg-paper/95 backdrop-blur border-b border-rule">
          <button type="button" onClick={() => setIndexOpen((v) => !v)} aria-expanded={indexOpen} className="w-full flex items-center justify-between gap-3 text-left">
            <span className="min-w-0">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted block">Contents · {active + 1} of {groups.length}</span>
              <span className="font-semibold text-ink block truncate">{activeGroup.short} · {activeGroup.features.length} features</span>
            </span>
            <span className={`font-mono text-muted transition-transform ${indexOpen ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
          </button>
          {indexOpen && (
            <ol className="mt-2.5 border-t border-ink max-h-[60vh] overflow-y-auto">
              {groups.map((g) => (
                <li key={g.id} className={`border-b border-rule ${g.hidden ? 'opacity-40' : ''}`}>
                  <button type="button" onClick={() => jump(g.index)} className="w-full flex justify-between gap-3 py-2 text-left text-sm">
                    <span className={g.index === active ? 'font-semibold text-ink' : 'text-muted'}>{g.short}</span>
                    <span className="font-mono tabular text-xs text-muted">{g.features.length}</span>
                  </button>
                </li>
              ))}
            </ol>
          )}
        </div>
        {/* desktop rail */}
        <div className="hidden lg:block">
          <h2 className="font-mono text-[11.5px] tracking-[0.08em] uppercase text-muted mb-2.5">Contents · {matches} {needle ? 'matching' : 'features'}</h2>
          <ol className="border-t border-ink">
            {groups.map((g) => (
              <li key={g.id} className={`border-b border-rule ${g.hidden ? 'opacity-40' : ''}`}>
                <a href={`#${g.id}`} onClick={(e) => { e.preventDefault(); jump(g.index) }} className={`grid grid-cols-[12px_1fr_auto] items-center gap-2 py-2 text-sm ${g.index === active ? 'font-semibold text-ink' : 'text-muted hover:text-ink'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${g.index === active ? 'bg-ledger-600' : 'bg-transparent'}`} aria-hidden="true" />
                  <span className="truncate">{g.short}</span>
                  <span className="font-mono tabular text-xs pl-2">{g.features.length}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </aside>

      <div className="min-w-0">
        {/* search */}
        <div className="pt-6 lg:pt-2 pb-2">
          <label htmlFor="feature-search" className="font-mono text-[11.5px] tracking-[0.08em] uppercase text-muted block mb-2">Does Poof do it?</label>
          <div className="flex gap-2">
            <input
              id="feature-search" type="search" value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="Search 128 features: reconciliation, deposits, 1099, Jobber…"
              className="flex-1 min-w-0 bg-white border border-rule rounded-lg px-3.5 py-2.5 text-[15px] placeholder:text-muted focus:border-ledger-600"
            />
            {q && <button type="button" onClick={() => setQ('')} className="rounded-lg border-[1.5px] border-ink text-ink font-semibold text-sm px-3">Clear</button>}
          </div>
          <p className="font-mono tabular text-xs text-muted mt-2" aria-live="polite">
            {needle ? `${matches} of ${total} features match` : `${total} features in ${groups.length} groups, all on this page`}
          </p>
        </div>

        {/* the ledger */}
        {groups.map((g) => {
          if (g.hidden) return null
          const open = !!expanded[g.index] || !!needle
          const rows = open ? g.features : g.features.slice(0, PREVIEW)
          const rest = g.features.length - rows.length
          return (
            <section key={g.id} id={g.id} data-index={g.index} ref={(el) => { sectionRefs.current[g.index] = el }} className="pt-12 pb-4 border-t border-rule scroll-mt-28 lg:scroll-mt-24">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl sm:text-[28px] leading-[1.05] tracking-[-0.03em] text-ink">{g.name}</h2>
                <span className="font-mono tabular text-xs text-muted whitespace-nowrap">{g.features.length} features</span>
              </div>
              {g.note && (
                <p className="mt-3 text-sm text-muted max-w-[68ch] border-l-[3px] border-ledger-600 pl-3">{g.note}</p>
              )}
              <ol className="mt-4 border-t border-ink">
                {rows.map((f, i) => (
                  <li key={f.title} className="grid grid-cols-[32px_1fr] lg:grid-cols-[40px_1fr] gap-3 py-3 border-b border-rule">
                    <span className="font-mono tabular text-xs text-muted pt-1">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-semibold text-[15.5px] text-ink leading-snug">{f.title}</h3>
                      <p className="text-sm text-muted mt-0.5 leading-relaxed max-w-[72ch]">{f.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              {rest > 0 && (
                <button type="button" onClick={() => setExpanded((e) => ({ ...e, [g.index]: true }))} className="mt-3 rounded-lg border-[1.5px] border-ink text-ink font-semibold text-sm px-3 py-[7px] hover:bg-paper-2">
                  Show the other {rest}
                </button>
              )}
            </section>
          )
        })}
        {needle && matches === 0 && (
          <div className="pt-12 border-t border-rule">
            <p className="text-ink font-semibold">Nothing matches &ldquo;{q}&rdquo;.</p>
            <p className="text-sm text-muted mt-1 max-w-[60ch]">Try a plainer word, or ask on the <a href="/contact" className="text-ledger-600 font-semibold">contact page</a>. If it is not on this list, we do not claim it.</p>
          </div>
        )}
      </div>
    </div>
  )
}
