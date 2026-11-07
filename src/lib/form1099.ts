/**
 * The 1099 checker — the rules. Pure, so it is checked by scripts/check-1099.ts.
 *
 * For payments made in calendar year 2026, per the IRS's Instructions for Forms 1099-MISC
 * and 1099-NEC (rev. 12/2026) and Publication 1099 (2026): the threshold is $2,000 (it was
 * $600), card and payment-network payments are reported by the processor on a 1099-K, and
 * corporations are exempt except for legal fees and medical payments. The site's posts
 * (1099-threshold-2026, who-gets-a-1099) say the same thing.
 */

import { FILING_1099, dollars } from './pricing1099'

export const THRESHOLD = 2000
export const MAX_PAYEES = 50
/** Jan 31, 2027 is a Sunday, so 2026 forms are due the next business day. */
export const DUE_DATE = 'February 1, 2027'

export type Purpose = 'services' | 'legal' | 'rent' | 'medical' | 'goods'
/** How the payee is taxed, from their W-9 (or W-8), or that they're an employee. */
export type Payee = 'individual' | 'partnership' | 'corporation' | 'foreign' | 'employee' | 'unknown'
export type Form = '1099-NEC' | '1099-MISC' | 'W-2' | null

export const PURPOSES: { value: Purpose; label: string }[] = [
  { value: 'services', label: 'Work or services (labor, or parts and labor)' },
  { value: 'legal', label: 'Legal services' },
  { value: 'rent', label: 'Rent (a building, land or equipment)' },
  { value: 'medical', label: 'Medical or health care' },
  { value: 'goods', label: 'Merchandise or materials only' },
]

export const PAYEES: { value: Payee; label: string }[] = [
  { value: 'unknown', label: 'No W-9 yet' },
  { value: 'individual', label: 'Individual, sole prop or single-member LLC' },
  { value: 'partnership', label: 'Partnership, or an LLC taxed as one' },
  { value: 'corporation', label: 'C or S corporation, or an LLC taxed as one' },
  { value: 'foreign', label: 'Foreign person with a W-8' },
  { value: 'employee', label: 'My employee' },
]

export interface PayeeInput {
  name: string
  /** Paid by check, ACH, cash, Zelle or wire: what counts toward the $2,000. */
  paid: number
  /** Paid by credit or debit card, PayPal, Venmo for business and the like: on the processor's 1099-K. */
  card: number
  purpose: Purpose
  payee: Payee
}

export interface PayeeResult extends PayeeInput {
  form: Form
  /** The box on the form, e.g. "box 1". */
  box: string | null
  /** The amount that goes on the form (or would, at $2,000 or more). */
  counted: number
  reason: string
  /** Over the line with no W-9 yet: counted as reportable until the W-9 says otherwise. */
  needsW9: boolean
}

export interface FilingCost {
  forms: number
  free: number
  paid: number
  total: number
  sentence: string
}

export interface Report1099 {
  payees: PayeeResult[]
  /** 1099-NEC and 1099-MISC forms, together. */
  forms: number
  nec: number
  misc: number
  missingW9: number
  cost: FilingCost
}

const cents = (n: number) => Math.round(n * 100)
const atLeastThreshold = (n: number) => cents(n) >= cents(THRESHOLD)
export const money = (n: number) => `$${(Math.round(n * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })}`

export function classify(p: PayeeInput): PayeeResult {
  const counted = Math.max(0, p.paid)
  const base = { ...p, counted, needsW9: false }
  const none = (reason: string): PayeeResult => ({ ...base, form: null, box: null, reason })
  const cardNote = p.card > 0 ? ` The ${money(p.card)} paid by card or app is on the processor’s 1099-K, not yours.` : ''

  if (p.payee === 'employee') return { ...base, form: 'W-2', box: null, reason: 'An employee’s pay goes on a W-2, not a 1099.' }
  if (p.purpose === 'goods') return none('Payments for merchandise or materials alone aren’t reported on a 1099.')
  if (p.payee === 'foreign')
    return none('A foreign person with a valid W-8 who did the work outside the U.S. doesn’t get a 1099. Work done inside the U.S. goes on a 1042-S instead.')
  if (!atLeastThreshold(counted)) {
    const under = counted > 0 ? `${money(counted)} by check, ACH or cash is under the $2,000 line for 2026.` : 'Nothing paid by check, ACH or cash.'
    return none(under + cardNote)
  }
  if (p.payee === 'corporation' && (p.purpose === 'services' || p.purpose === 'rent'))
    return none(`Corporations don’t get a 1099 for ${p.purpose === 'rent' ? 'rent' : 'services'}. Their W-9 is your record of that.`)

  const needsW9 = p.payee === 'unknown'
  const w9Note = needsW9 ? ' No W-9 yet, so it’s counted until their W-9 shows how they’re taxed.' : ''
  const reportable = (form: Form, box: string, why: string): PayeeResult => ({ ...base, form, box, needsW9, reason: why + w9Note + cardNote })

  if (p.purpose === 'legal')
    return reportable('1099-NEC', 'box 1', p.payee === 'corporation' ? 'Legal fees get a 1099-NEC even when the firm is a corporation.' : `${money(counted)} in legal fees, at least $2,000.`)
  if (p.purpose === 'medical')
    return reportable('1099-MISC', 'box 6', p.payee === 'corporation' ? 'Medical payments get a 1099-MISC even when the provider is a corporation.' : `${money(counted)} in medical payments, at least $2,000.`)
  if (p.purpose === 'rent') return reportable('1099-MISC', 'box 1', `${money(counted)} in rent, at least $2,000.`)
  return reportable('1099-NEC', 'box 1', `${money(counted)} for work, at least $2,000.`)
}

export function filingCost(forms: number): FilingCost {
  const free = Math.min(forms, FILING_1099.freeFormsPerYear)
  const paid = forms - free
  const total = Math.round(paid * FILING_1099.perForm * 100) / 100
  const word = forms === 1 ? 'form' : 'forms'
  let sentence: string
  if (forms === 0) sentence = 'No forms to file.'
  else if (paid === 0) sentence = `${forms} ${word}: free. The first ${FILING_1099.freeFormsPerYear} forms each year cost nothing to file.`
  else sentence = `${forms} ${word}: the first ${free} free, then ${paid} × ${dollars(FILING_1099.perForm)} = ${dollars(total)}.`
  return { forms, free, paid, total, sentence }
}

export function check1099(input: PayeeInput[]): Report1099 {
  const payees = input.map(classify)
  const nec = payees.filter((p) => p.form === '1099-NEC').length
  const misc = payees.filter((p) => p.form === '1099-MISC').length
  return { payees, forms: nec + misc, nec, misc, missingW9: payees.filter((p) => p.needsW9).length, cost: filingCost(nec + misc) }
}

export function headline(r: Report1099): string {
  const n = r.payees.length
  if (r.forms === 0) return n === 1 ? 'They don’t get a 1099 for 2026.' : `None of these ${n} get a 1099 for 2026.`
  return `${n === 1 ? 'They get' : `${r.forms} of your ${n} get`} a 1099 for 2026. Due ${DUE_DATE}.`
}

/** Form name and box for a row, or what to do instead. */
export function formLabel(p: PayeeResult): string {
  if (p.form === 'W-2') return 'W-2'
  if (!p.form) return 'No 1099'
  return `${p.form}, ${p.box}`
}
