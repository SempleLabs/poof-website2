/**
 * Job Margin Check — the math. Pure, so it is checked by scripts/check-job-margin.ts.
 *
 * Each job is compared with the user's OWN other jobs, not an industry number —
 * the same method as Poof's Per-Job P&L, so the free tool and the product agree.
 */

export interface JobInput {
  name: string
  price: number
  labor: number
  materials: number
  other: number
}

export type CostLine = 'labor' | 'materials' | 'other'
export type Flag = 'red' | 'amber' | 'green'

export interface JobResult extends JobInput {
  cost: number
  profit: number
  margin: number
  /** Margin of the other jobs combined; null with fewer than 3 jobs. */
  peerMargin: number | null
  /** Dollars this job earned below the others' margin on its own price (0 if at or above). */
  gap: number
  flag: Flag
  /** For a red or amber job: the cost line most over the others, and its shares. */
  driver: { line: CostLine; share: number; peerShare: number } | null
}

export interface MarginReport {
  jobs: JobResult[] // worst margin first
  revenue: number
  profit: number
  margin: number
  compared: boolean
}

export const MIN_JOBS = 3
export const MAX_JOBS = 10
/** A job this many points under its peers is flagged amber. */
const AMBER_GAP = 0.1

const LINES: CostLine[] = ['labor', 'materials', 'other']

export function analyzeJobs(input: JobInput[]): MarginReport {
  const jobs = input.filter((j) => j.price > 0)
  const compared = jobs.length >= MIN_JOBS
  const totals = jobs.reduce(
    (t, j) => ({ price: t.price + j.price, labor: t.labor + j.labor, materials: t.materials + j.materials, other: t.other + j.other }),
    { price: 0, labor: 0, materials: 0, other: 0 },
  )

  const results: JobResult[] = jobs.map((j) => {
    const cost = j.labor + j.materials + j.other
    const profit = j.price - cost
    const margin = profit / j.price
    if (!compared) return { ...j, cost, profit, margin, peerMargin: null, gap: 0, flag: profit < 0 ? 'red' : 'green', driver: null }

    const peerPrice = totals.price - j.price
    const peerCost = totals.labor + totals.materials + totals.other - cost
    const peerMargin = (peerPrice - peerCost) / peerPrice
    const gap = Math.max(0, (peerMargin - margin) * j.price)
    const flag: Flag = profit < 0 ? 'red' : margin < peerMargin - AMBER_GAP ? 'amber' : 'green'

    let driver: JobResult['driver'] = null
    if (flag !== 'green') {
      for (const line of LINES) {
        const share = j[line] / j.price
        const peerShare = (totals[line] - j[line]) / peerPrice
        if (share - peerShare > 0 && (!driver || share - peerShare > driver.share - driver.peerShare)) driver = { line, share, peerShare }
      }
    }
    return { ...j, cost, profit, margin, peerMargin, gap, flag, driver }
  })

  results.sort((a, b) => a.margin - b.margin)
  const profit = results.reduce((s, j) => s + j.profit, 0)
  return { jobs: results, revenue: totals.price, profit, margin: totals.price ? profit / totals.price : 0, compared }
}

export const money = (n: number) => `${n < 0 ? '-' : ''}$${Math.round(Math.abs(n)).toLocaleString('en-US')}`
export const pct = (p: number) => `${(p * 100).toFixed(1)}%`
const LINE_NAME: Record<CostLine, string> = { labor: 'Labor', materials: 'Materials', other: 'Other job costs' }

/** One sentence on why a flagged job came in low. */
export function driverSentence(j: JobResult): string | null {
  if (!j.driver) return null
  const { line, share, peerShare } = j.driver
  return `${LINE_NAME[line]} ran ${Math.round(share * 100)}% of the price against ${Math.round(peerShare * 100)}% on your other jobs.`
}

/** The headline: the worst job, in a sentence. */
export function headline(r: MarginReport): string {
  const worst = r.jobs[0]
  if (!worst) return ''
  const others = r.compared && worst.peerMargin !== null ? ` Your other jobs made ${pct(worst.peerMargin)} on average.` : ''
  if (worst.profit < 0) return `${worst.name} lost ${money(-worst.profit)}.${others}`
  return `${worst.name} made the least: ${pct(worst.margin)}.${others}`
}

/** What to look at on a job whose driver is this line. */
export const WHAT_TO_CHECK: Record<CostLine, string[]> = {
  materials: ['Parts bought for this job but not returned or used', 'Equipment ordered wrong, or a second unit', 'Change orders done but never billed'],
  labor: ['Callbacks and return trips', 'Drive time charged to the job', 'Hours quoted low for the work'],
  other: ['Subcontractor bills above the quote', 'Permits or rentals that were not priced in', 'Costs from another job posted here'],
}
