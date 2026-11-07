// Run: npx tsx scripts/check-1099.ts — exits non-zero on a failure.
import assert from 'node:assert/strict'
import { check1099, classify, filingCost, headline, type PayeeInput } from '../src/lib/form1099'

const p = (over: Partial<PayeeInput>): PayeeInput => ({ name: 'Rivera', paid: 0, card: 0, purpose: 'services', payee: 'individual', ...over })

// The $2,000 line: at least $2,000 counts, a cent under doesn't.
assert.equal(classify(p({ paid: 2000 })).form, '1099-NEC')
assert.equal(classify(p({ paid: 2000 })).box, 'box 1')
assert.equal(classify(p({ paid: 1999.99 })).form, null)
assert.match(classify(p({ paid: 1999.99 })).reason, /under the \$2,000 line/)
assert.equal(classify(p({ paid: 600 })).form, null, 'the old $600 line is gone for 2026')

// Card and app payments don't count toward the line; they're on the processor's 1099-K.
const mixed = classify(p({ paid: 1500, card: 4000 }))
assert.equal(mixed.form, null)
assert.equal(mixed.counted, 1500)
assert.match(mixed.reason, /1099-K/)
const mixedOver = classify(p({ paid: 2500, card: 900 }))
assert.equal(mixedOver.form, '1099-NEC')
assert.equal(mixedOver.counted, 2500)
assert.equal(classify(p({ card: 50000 })).form, null)

// Corporations: none for services or rent; legal and medical still get one.
assert.equal(classify(p({ paid: 9000, payee: 'corporation' })).form, null)
assert.equal(classify(p({ paid: 9000, payee: 'corporation', purpose: 'rent' })).form, null)
assert.equal(classify(p({ paid: 9000, payee: 'corporation', purpose: 'legal' })).form, '1099-NEC')
const med = classify(p({ paid: 9000, payee: 'corporation', purpose: 'medical' }))
assert.equal(med.form, '1099-MISC')
assert.equal(med.box, 'box 6')

// Rent to a person or partnership: 1099-MISC box 1.
const rent = classify(p({ paid: 24000, payee: 'partnership', purpose: 'rent' }))
assert.equal(rent.form, '1099-MISC')
assert.equal(rent.box, 'box 1')

// Merchandise only, employees, foreign persons.
assert.equal(classify(p({ paid: 30000, purpose: 'goods' })).form, null)
assert.equal(classify(p({ paid: 30000, payee: 'employee' })).form, 'W-2')
assert.equal(classify(p({ paid: 30000, payee: 'foreign' })).form, null)

// No W-9 yet: counted as reportable and flagged, but only when over the line.
const noW9 = classify(p({ paid: 5000, payee: 'unknown' }))
assert.equal(noW9.form, '1099-NEC')
assert.equal(noW9.needsW9, true)
assert.equal(classify(p({ paid: 500, payee: 'unknown' })).needsW9, false)
assert.equal(classify(p({ paid: 5000, payee: 'unknown', purpose: 'goods' })).needsW9, false)

// Filing cost: the first 3 forms free, then $2.49 each.
assert.equal(filingCost(0).total, 0)
assert.equal(filingCost(3).total, 0)
assert.equal(filingCost(7).total, 9.96)
assert.equal(filingCost(7).sentence, '7 forms: the first 3 free, then 4 × $2.49 = $9.96.')
assert.equal(filingCost(8).total, 12.45, 'matches the worked example on /1099s')

// A whole list.
const r = check1099([
  p({ name: 'Rivera', paid: 18400 }),
  p({ name: 'Ace Electric Inc', paid: 22000, payee: 'corporation' }),
  p({ name: 'Lopez', paid: 1200 }),
  p({ name: 'Kim Law', paid: 3500, purpose: 'legal', payee: 'corporation' }),
  p({ name: 'Shop landlord', paid: 36000, purpose: 'rent', payee: 'unknown' }),
])
assert.equal(r.forms, 3)
assert.equal(r.nec, 2)
assert.equal(r.misc, 1)
assert.equal(r.missingW9, 1)
assert.equal(headline(r), '3 of your 5 get a 1099 for 2026. Due February 1, 2027.')
assert.equal(headline(check1099([p({ paid: 100 })])), 'They don’t get a 1099 for 2026.')

console.log('1099 checker: all checks passed')
