/**
 * The tax set-aside calculator — the math. Pure, so it is checked by scripts/check-set-aside.ts.
 *
 * For a sole proprietor or single-member LLC owner whose business is their only income, tax
 * year 2026. Figures from the IRS's Form 1040-ES (2026) — rate schedules, standard deductions,
 * the $184,500 wage base, 92.35%, the due dates and the safe harbor — and Rev. Proc. 2025-32
 * (the §199A thresholds and the $400 minimum QBI deduction). The site's post
 * how-much-to-set-aside-for-taxes uses the same method, and its table is a test case.
 *
 * Everything is worked in whole cents, each line rounded half up, so the result never
 * depends on floating-point dust.
 */

import { isCents } from './form1099'

export type FilingStatus = 'single' | 'joint' | 'separate' | 'head'

export const FILING_STATUSES: { value: FilingStatus; label: string }[] = [
  { value: 'single', label: 'Single' },
  { value: 'joint', label: 'Married filing jointly' },
  { value: 'separate', label: 'Married filing separately' },
  { value: 'head', label: 'Head of household' },
]

/** Rates are in basis points (1% = 100) so the math stays in whole numbers. */
type Bracket = [overDollars: number, rateBp: number]

/** Every 2026 figure the calculator uses, in one place, so next year is one edit. */
export const TAX_2026 = {
  year: 2026,
  /** Net earnings from self-employment are 92.35% of net profit. */
  seNetFactorBp: 9235,
  /** No SE tax when net earnings are under $400. */
  seMinimum: 400,
  socialSecurityBp: 1240,
  medicareBp: 290,
  socialSecurityWageBase: 184_500,
  additionalMedicareBp: 90,
  additionalMedicareThreshold: { single: 200_000, joint: 250_000, separate: 125_000, head: 200_000 } as Record<FilingStatus, number>,
  standardDeduction: { single: 16_100, joint: 32_200, separate: 16_100, head: 24_150 } as Record<FilingStatus, number>,
  brackets: {
    single: [[0, 1000], [12_400, 1200], [50_400, 2200], [105_700, 2400], [201_775, 3200], [256_225, 3500], [640_600, 3700]],
    joint: [[0, 1000], [24_800, 1200], [100_800, 2200], [211_400, 2400], [403_550, 3200], [512_450, 3500], [768_700, 3700]],
    separate: [[0, 1000], [12_400, 1200], [50_400, 2200], [105_700, 2400], [201_775, 3200], [256_225, 3500], [384_350, 3700]],
    head: [[0, 1000], [17_700, 1200], [67_450, 2200], [105_700, 2400], [201_750, 3200], [256_200, 3500], [640_600, 3700]],
  } as Record<FilingStatus, Bracket[]>,
  qbi: {
    rateBp: 2000,
    threshold: { single: 201_750, joint: 403_500, separate: 201_775, head: 201_750 } as Record<FilingStatus, number>,
    phaseInRange: { single: 75_000, joint: 150_000, separate: 75_000, head: 75_000 } as Record<FilingStatus, number>,
    /** New for 2026: at least $400 when QBI is at least $1,000. */
    minimumDeduction: 400,
    minimumQbi: 1_000,
  },
  estimates: {
    /** Under $1,000 owed for the year, no estimates are required. */
    minimumOwed: 1_000,
    currentYearBp: 9000,
    priorYearBp: 10_000,
    highIncomePriorYearBp: 11_000,
    /** 2025 AGI over this (strictly) moves the prior-year figure to 110%. */
    highIncomeAgi: { single: 150_000, joint: 150_000, separate: 75_000, head: 150_000 } as Record<FilingStatus, number>,
    dueDate: 'January 15, 2027',
    /** Skip the January payment by filing the 2026 return and paying in full by this date. */
    skipIfFiledBy: 'February 1, 2027',
  },
} as const

/** Above this the page asks for a smaller number; it also keeps every product below 2^53. */
export const MAX_PROFIT = 10_000_000
export const MAX_STATE_RATE = 15

export interface SetAsideInput {
  status: FilingStatus
  /** Expected 2026 net profit from the business, in dollars and cents. A loss is 0. */
  profit: number
  /** State income tax rate as a percent, e.g. 4.95. */
  stateRate: number
  /** Total tax on the 2025 return, if they have it. */
  priorTax: number | null
  /** Adjusted gross income on the 2025 return, if they have it. */
  priorAgi: number | null
  /** 2026 federal estimated payments already made. */
  paid: number
}

export type JanuaryRule = 'under-minimum' | 'current-year' | 'prior-year' | 'prior-year-high-income'

export interface JanuaryPayment {
  rule: JanuaryRule
  /** The year's safe-harbor total, in cents. */
  requiredCents: number
  /** What's left to pay by January 15, 2027, in cents. */
  dueCents: number
  /** A prior-year tax was given with no AGI, so 110% was assumed to stay safe. */
  assumedHighIncome: boolean
}

export interface SetAsideResult {
  input: SetAsideInput
  profitCents: number
  netEarningsCents: number
  socialSecurityCents: number
  medicareCents: number
  seTaxCents: number
  additionalMedicareCents: number
  halfSeTaxCents: number
  agiCents: number
  standardDeductionCents: number
  qbiDeductionCents: number
  taxableIncomeCents: number
  incomeTaxCents: number
  federalCents: number
  stateCents: number
  totalCents: number
  /** Total as a share of profit, to one decimal (23.7 means 23.7%). */
  ratePct: number
  january: JanuaryPayment
}

/** Whole cents from a dollars-and-cents amount; isCents has already vouched for it. */
export const toCents = (dollars: number) => Math.round(dollars * 100)
/** a ÷ b rounded half up, for non-negative whole numbers. */
const roundDiv = (a: number, b: number) => Math.floor((2 * a + b) / (2 * b))
/** cents × basis points, rounded half up to the cent. */
const bp = (cents: number, rateBp: number) => roundDiv(cents * rateBp, 10_000)

/** Reads a percent as typed: "4.95", "5%". Up to two decimals, 0 to 15. Null for anything else. */
export function parseRate(s: string): number | null {
  const t = s.trim().replace(/\s*%$/, '')
  if (!/^\d{1,2}(\.\d{1,2})?$/.test(t)) return null
  const n = Number(t)
  return n <= MAX_STATE_RATE ? n : null
}

/** Tax on taxable income from the rate schedule: each slice at its rate, rounded once at the end. */
export function incomeTaxCents(taxableCents: number, status: FilingStatus): number {
  const rows = TAX_2026.brackets[status]
  let sum = 0
  for (let i = 0; i < rows.length; i++) {
    const lo = rows[i][0] * 100
    const hi = i + 1 < rows.length ? rows[i + 1][0] * 100 : Infinity
    if (taxableCents <= lo) break
    sum += (Math.min(taxableCents, hi) - lo) * rows[i][1]
  }
  return roundDiv(sum, 10_000)
}

/**
 * 20% of QBI, limited to 20% of taxable income before the deduction. Above the threshold it
 * phases down straight-line to zero across the phase-in range, as if the business paid no W-2
 * wages: that over-reserves for a business with wages, which is the safer mistake. Never less
 * than $400 when QBI is at least $1,000.
 */
export function qbiDeductionCents(qbiCents: number, taxableBeforeQbiCents: number, status: FilingStatus): number {
  const q = TAX_2026.qbi
  let component = bp(qbiCents, q.rateBp)
  const threshold = q.threshold[status] * 100
  const range = q.phaseInRange[status] * 100
  if (taxableBeforeQbiCents > threshold) {
    const excess = Math.min(taxableBeforeQbiCents - threshold, range)
    component = roundDiv(component * (range - excess), range)
  }
  let deduction = Math.min(component, bp(taxableBeforeQbiCents, q.rateBp))
  if (qbiCents >= q.minimumQbi * 100) deduction = Math.max(deduction, q.minimumDeduction * 100)
  return deduction
}

export function januaryPayment(federalCents: number, input: SetAsideInput): JanuaryPayment {
  const e = TAX_2026.estimates
  const paidCents = toCents(input.paid)
  if (federalCents < e.minimumOwed * 100) return { rule: 'under-minimum', requiredCents: 0, dueCents: 0, assumedHighIncome: false }
  const current = bp(federalCents, e.currentYearBp)
  let required = current
  let rule: JanuaryRule = 'current-year'
  let assumedHighIncome = false
  if (input.priorTax !== null) {
    const agiCents = input.priorAgi === null ? null : toCents(input.priorAgi)
    assumedHighIncome = agiCents === null
    const high = agiCents === null || agiCents > e.highIncomeAgi[input.status] * 100
    const prior = bp(toCents(input.priorTax), high ? e.highIncomePriorYearBp : e.priorYearBp)
    if (prior < current) {
      required = prior
      rule = high ? 'prior-year-high-income' : 'prior-year'
    }
  }
  return { rule, requiredCents: required, dueCents: Math.max(0, required - paidCents), assumedHighIncome }
}

export function setAside(input: SetAsideInput): SetAsideResult {
  const t = TAX_2026
  const profitCents = toCents(Math.max(0, input.profit))

  // Self-employment tax: 92.35% of profit, Social Security up to the wage base, Medicare on all of it.
  let netEarningsCents = bp(profitCents, t.seNetFactorBp)
  if (netEarningsCents < t.seMinimum * 100) netEarningsCents = 0
  const socialSecurityCents = bp(Math.min(netEarningsCents, t.socialSecurityWageBase * 100), t.socialSecurityBp)
  const medicareCents = bp(netEarningsCents, t.medicareBp)
  const seTaxCents = socialSecurityCents + medicareCents
  const additionalMedicareCents = bp(Math.max(0, netEarningsCents - t.additionalMedicareThreshold[input.status] * 100), t.additionalMedicareBp)

  // Income tax: half of SE tax comes off, then the standard deduction, then QBI.
  const halfSeTaxCents = roundDiv(seTaxCents, 2)
  const agiCents = Math.max(0, profitCents - halfSeTaxCents)
  const standardDeductionCents = t.standardDeduction[input.status] * 100
  const taxableBeforeQbiCents = Math.max(0, agiCents - standardDeductionCents)
  const qbiCents = Math.max(0, profitCents - halfSeTaxCents)
  const qbiDeduction = qbiDeductionCents(qbiCents, taxableBeforeQbiCents, input.status)
  const taxableIncomeCents = Math.max(0, taxableBeforeQbiCents - qbiDeduction)
  const incomeTax = incomeTaxCents(taxableIncomeCents, input.status)

  const federalCents = seTaxCents + additionalMedicareCents + incomeTax
  const stateCents = bp(profitCents, Math.round(input.stateRate * 100))
  const totalCents = federalCents + stateCents
  const ratePct = profitCents > 0 ? roundDiv(totalCents * 1000, profitCents) / 10 : 0

  return {
    input,
    profitCents,
    netEarningsCents,
    socialSecurityCents,
    medicareCents,
    seTaxCents,
    additionalMedicareCents,
    halfSeTaxCents,
    agiCents,
    standardDeductionCents,
    qbiDeductionCents: qbiDeduction,
    taxableIncomeCents,
    incomeTaxCents: incomeTax,
    federalCents,
    stateCents,
    totalCents,
    ratePct,
    january: januaryPayment(federalCents, input),
  }
}

/** "$28,461.78": always two decimals, since this is money owed. */
export const usd = (cents: number) =>
  `$${(cents / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

export function headline(r: SetAsideResult): string {
  if (r.profitCents === 0) return 'With no profit to tax, there’s nothing to set aside for 2026.'
  if (r.totalCents === 0) return 'At this profit, there’s no federal tax to set aside for 2026.'
  return `Set aside about ${r.ratePct.toFixed(1)}% of your profit: ${usd(r.totalCents)} for 2026.`
}

/** The January line, and the sentence saying which rule set it. */
export function januaryLines(r: SetAsideResult): { line: string; why: string } {
  const j = r.january
  const e = TAX_2026.estimates
  if (j.rule === 'under-minimum')
    return { line: 'You likely don’t need to make estimated payments.', why: `Your 2026 federal tax comes to under ${usd(e.minimumOwed * 100)}, so there’s no penalty for paying it with your return.` }
  const highAgi = usd(e.highIncomeAgi[r.input.status] * 100).replace('.00', '')
  const why =
    j.rule === 'current-year'
      ? `That’s 90% of this year’s federal tax${r.input.priorTax === null ? '. If you have last year’s return, enter its total tax: when it’s smaller, the payment can be too.' : ', which is smaller than the figure from last year’s tax.'}`
      : j.rule === 'prior-year'
        ? 'That’s 100% of last year’s tax, which is smaller than 90% of this year’s.'
        : j.assumedHighIncome
          ? `That’s 110% of last year’s tax, the figure when last year’s AGI was over ${highAgi}. Enter your AGI: at ${highAgi} or less, it’s 100%.`
          : `That’s 110% of last year’s tax, because last year’s AGI was over ${highAgi}, and it’s smaller than 90% of this year’s.`
  if (j.dueCents === 0)
    return {
      line: j.requiredCents === 0 ? 'No January payment is needed to avoid the penalty.' : 'You’ve already paid the year’s safe-harbor amount.',
      why: j.requiredCents === 0 ? 'Your 2025 tax was $0, so the safe-harbor amount is $0.' : `The safe-harbor amount for the year is ${usd(j.requiredCents)}. ${why}`,
    }
  return { line: `Pay ${usd(j.dueCents)} by ${e.dueDate}.`, why: `The safe-harbor amount for the year is ${usd(j.requiredCents)}. ${why}` }
}

/** Said wherever the January payment is: the safe harbor is met quarter by quarter. */
export const EARLIER_QUARTERS = 'Paying in January doesn’t undo a penalty on an earlier quarter that was short.'

/** Validates an amount the API received: dollars and cents, under the cap. */
export const validAmount = (n: unknown, max = MAX_PROFIT): n is number => typeof n === 'number' && isCents(n) && n <= max
