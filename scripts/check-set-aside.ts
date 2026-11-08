// Run: npx tsx scripts/check-set-aside.ts — exits non-zero on a failure.
import assert from 'node:assert/strict'
import { parseAmount } from '../src/lib/form1099'
import { headline, incomeTaxCents, januaryLines, parseRate, qbiDeductionCents, setAside, type SetAsideInput } from '../src/lib/setAside'

const input = (over: Partial<SetAsideInput>): SetAsideInput => ({ status: 'single', profit: 0, stateRate: 0, priorTax: null, priorAgi: null, paid: 0, ...over })
const run = (over: Partial<SetAsideInput>) => setAside(input(over))

// The table in content/blog/how-much-to-set-aside-for-taxes.mdx: single, no other income, standard deduction.
{
  const r = run({ profit: 60_000 })
  assert.equal(r.seTaxCents, 847_773)
  assert.equal(r.halfSeTaxCents, 423_887)
  assert.equal(r.qbiDeductionCents, 793_223, 'limited to 20% of taxable income')
  assert.equal(r.taxableIncomeCents, 3_172_890)
  assert.equal(r.incomeTaxCents, 355_947)
  assert.equal(r.totalCents, 1_203_720)
  assert.equal(r.ratePct, 20.1)
  assert.equal(headline(r), 'Set aside about 20.1% of your profit: $12,037.20 for 2026.')
}
{
  const r = run({ profit: 120_000 })
  assert.equal(r.seTaxCents, 1_695_546)
  assert.equal(r.incomeTaxCents, 1_150_632)
  assert.equal(r.totalCents, 2_846_178)
  assert.equal(r.ratePct, 23.7)
}
{
  const r = run({ profit: 200_000 })
  assert.equal(r.seTaxCents, 2_823_430)
  assert.equal(r.incomeTaxCents, 2_519_631)
  assert.equal(r.totalCents, 5_343_061)
  assert.equal(r.ratePct, 26.7)
  assert.equal(r.additionalMedicareCents, 0, 'net earnings of $184,700 are under $200,000')
}

// SE tax: the $400 floor, and the wage base.
assert.equal(run({ profit: 433.12 }).seTaxCents, 0, 'net earnings of $399.99')
assert.equal(run({ profit: 433.13 }).netEarningsCents, 40_000)
assert.equal(run({ profit: 433.13 }).seTaxCents, 6_120)
{
  // Net earnings of exactly $184,500 pay the full 12.4%; every dollar of profit past that adds Medicare only.
  const at = run({ profit: 199_783.43 })
  assert.equal(at.netEarningsCents, 18_450_000)
  assert.equal(at.socialSecurityCents, 2_287_800)
  const past = run({ profit: 200_783.43 })
  assert.equal(past.socialSecurityCents, 2_287_800)
  assert.equal(past.medicareCents - at.medicareCents, 2_678, '$923.50 more net earnings × 2.9%')
}

// Additional Medicare: 0.9% of net earnings above $200,000 single, $250,000 joint, $125,000 separate.
{
  const profitFor = (net: number) => net / 0.9235
  assert.equal(run({ profit: Number(profitFor(200_000).toFixed(2)) }).additionalMedicareCents, 0)
  const r = run({ profit: Number(profitFor(201_000).toFixed(2)) })
  assert.equal(r.netEarningsCents, 20_100_000)
  assert.equal(r.additionalMedicareCents, 900)
  assert.equal(run({ status: 'joint', profit: Number(profitFor(201_000).toFixed(2)) }).additionalMedicareCents, 0)
  assert.equal(run({ status: 'separate', profit: Number(profitFor(126_000).toFixed(2)) }).additionalMedicareCents, 900)
}

// Bracket edges: at each threshold and a cent above it.
const edges: [Parameters<typeof incomeTaxCents>[1], number, number][] = [
  ['single', 12_400, 124_000], ['single', 50_400, 580_000], ['single', 105_700, 1_796_600], ['single', 201_775, 4_102_400],
  ['single', 256_225, 5_844_800], ['single', 640_600, 19_297_925],
  ['joint', 24_800, 248_000], ['joint', 100_800, 1_160_000], ['joint', 211_400, 3_593_200], ['joint', 403_550, 8_204_800],
  ['joint', 512_450, 11_689_600], ['joint', 768_700, 20_658_350],
  ['separate', 384_350, 10_329_175],
  ['head', 17_700, 177_000], ['head', 67_450, 774_000], ['head', 105_700, 1_615_500], ['head', 201_750, 3_920_700], ['head', 256_200, 5_663_100], ['head', 640_600, 19_117_100],
]
const nextRate = (status: Parameters<typeof incomeTaxCents>[1], dollars: number) => {
  const order = { single: [12, 22, 24, 32, 35, 37], joint: [12, 22, 24, 32, 35, 37], separate: [12, 22, 24, 32, 35, 37], head: [12, 22, 24, 32, 35, 37] }[status]
  const edgesFor = edges.filter((e) => e[0] === status).map((e) => e[1])
  return status === 'separate' ? 37 : order[edgesFor.indexOf(dollars)]
}
for (const [status, dollars, taxCents] of edges) {
  assert.equal(incomeTaxCents(dollars * 100, status), taxCents, `${status} at $${dollars}`)
  // A dollar over the line is taxed at the next rate (a cent rounds away, so test a dollar).
  assert.equal(incomeTaxCents(dollars * 100 + 100, status) - taxCents, nextRate(status, dollars), `${status} a dollar over $${dollars}`)
}
assert.equal(incomeTaxCents(1, 'single'), 0, 'a tenth of a cent rounds down')
assert.equal(incomeTaxCents(5, 'single'), 1, 'half a cent rounds up')

// QBI: under the threshold, at it, mid-way, past it, and the $400 minimum.
assert.equal(qbiDeductionCents(100_000_00, 150_000_00, 'single'), 20_000_00, 'under the threshold: full 20%')
assert.equal(qbiDeductionCents(300_000_00, 201_750_00, 'single'), 40_350_00, 'at the threshold: limited to 20% of taxable income')
assert.equal(qbiDeductionCents(300_000_00, 239_250_00, 'single'), 30_000_00, 'half-way through the $75,000 range: half of 20% of QBI')
assert.equal(qbiDeductionCents(300_000_00, 276_750_00, 'single'), 400_00, 'end of the range: only the $400 minimum')
assert.equal(qbiDeductionCents(300_000_00, 400_000_00, 'single'), 400_00, 'past the range: only the $400 minimum')
assert.equal(qbiDeductionCents(600_000_00, 478_500_00, 'joint'), 60_000_00, 'joint: half-way through the $150,000 range')
assert.equal(qbiDeductionCents(1_000_00, 0, 'single'), 400_00, 'QBI of $1,000 gets the $400 minimum even with no taxable income')
assert.equal(qbiDeductionCents(999_99, 0, 'single'), 0, 'QBI of $999.99 gets no minimum')
assert.equal(run({ profit: 1_100 }).taxableIncomeCents, 0)

// The January payment.
{
  // 2025 tax of $18,000 on AGI of $120,000; 2026 tax is bigger, so 100% of last year's is the safe harbor.
  const r = run({ profit: 140_000, priorTax: 18_000, priorAgi: 120_000, paid: 13_500 })
  assert.ok(r.federalCents * 0.9 > 1_800_000)
  assert.equal(r.january.rule, 'prior-year')
  assert.equal(r.january.requiredCents, 1_800_000)
  assert.equal(r.january.dueCents, 450_000)
  assert.equal(januaryLines(r).line, 'Pay $4,500.00 by January 15, 2027.')
}
{
  const at = run({ profit: 140_000, priorTax: 18_000, priorAgi: 150_000, paid: 13_500 })
  assert.equal(at.january.requiredCents, 1_800_000, 'AGI of exactly $150,000 stays at 100%')
  const over = run({ profit: 140_000, priorTax: 18_000, priorAgi: 150_000.01, paid: 13_500 })
  assert.equal(over.january.rule, 'prior-year-high-income')
  assert.equal(over.january.requiredCents, 1_980_000)
  assert.equal(over.january.dueCents, 630_000)
  const sepAt = run({ status: 'separate', profit: 140_000, priorTax: 18_000, priorAgi: 75_000 })
  assert.equal(sepAt.january.requiredCents, 1_800_000, 'separate: $75,000 stays at 100%')
  const sepOver = run({ status: 'separate', profit: 140_000, priorTax: 18_000, priorAgi: 75_000.01 })
  assert.equal(sepOver.january.requiredCents, 1_980_000)
  const noAgi = run({ profit: 140_000, priorTax: 18_000 })
  assert.equal(noAgi.january.requiredCents, 1_980_000, 'no AGI given: assume 110%, the safe side')
  assert.ok(noAgi.january.assumedHighIncome)
  assert.match(januaryLines(noAgi).why, /Enter your AGI/)
}
{
  const r = run({ profit: 120_000 })
  assert.equal(r.january.rule, 'current-year', 'no prior-year figures: 90% of this year')
  assert.equal(r.january.requiredCents, Math.floor((r.federalCents * 9000 * 2 + 10_000) / 20_000))
  const bigPrior = run({ profit: 120_000, priorTax: 50_000, priorAgi: 100_000 })
  assert.equal(bigPrior.january.rule, 'current-year', 'last year bigger: 90% of this year wins')
  const overpaid = run({ profit: 120_000, paid: 40_000 })
  assert.equal(overpaid.january.dueCents, 0)
  assert.equal(januaryLines(overpaid).line, 'You’ve already paid the year’s safe-harbor amount.')
  const zeroPrior = run({ profit: 120_000, priorTax: 0, priorAgi: 30_000 })
  assert.equal(zeroPrior.january.dueCents, 0)
  assert.equal(januaryLines(zeroPrior).line, 'No January payment is needed to avoid the penalty.')
}
{
  // The $1,000 line: find profits whose federal tax lands either side of it.
  let under = 0
  let over = 0
  for (let p = 6_000_00; p < 8_000_00; p += 1) {
    const f = run({ profit: p / 100 }).federalCents
    if (f === 99_999) under = p
    if (f === 100_000) over = p
    if (under && over) break
  }
  assert.ok(under && over, 'found profits with federal tax of $999.99 and $1,000.00')
  assert.equal(run({ profit: under / 100 }).january.rule, 'under-minimum')
  assert.equal(run({ profit: over / 100 }).january.rule, 'current-year')
}

// State: a flat rate on profit.
assert.equal(run({ profit: 100_000, stateRate: 4.95 }).stateCents, 495_000)
assert.equal(run({ profit: 100_000, stateRate: 0 }).stateCents, 0)

// No profit, nothing to set aside.
assert.equal(run({ profit: 0 }).totalCents, 0)
assert.equal(headline(run({ profit: 0 })), 'With no profit to tax, there’s nothing to set aside for 2026.')

// Inputs that can't be read come back flagged, never as a number.
for (const bad of ['18k', '1,2.3x', '100.005', '-5', 'O', '']) assert.equal(parseAmount(bad), null, `"${bad}" is flagged`)
assert.equal(parseAmount('$84,250.50'), 84_250.5)
for (const bad of ['15.01', '5.555', 'five', '-1', '100']) assert.equal(parseRate(bad), null, `rate "${bad}" is flagged`)
assert.equal(parseRate('4.95%'), 4.95)
assert.equal(parseRate('0'), 0)

// Commas only in thousands places: a typo is flagged, never read as a bigger number.
for (const bad of ['84,250,50', '1,00', '1,2,3', '5$0', '18 400']) assert.equal(parseAmount(bad), null, `"${bad}" is flagged`)
assert.equal(parseAmount(' $ 1,234,567.89 '), 1_234_567.89)
assert.equal(parseAmount('1234567'), 1_234_567)
assert.equal(parseRate('1 5'), null, 'inner space is flagged')
assert.equal(parseRate(' 5 % '), 5)

// The 110% line names the right AGI for each filing status.
assert.match(januaryLines(run({ status: 'separate', profit: 140_000, priorTax: 18_000, priorAgi: 80_000 })).why, /over \$75,000/)
assert.match(januaryLines(run({ status: 'separate', profit: 140_000, priorTax: 18_000 })).why, /at \$75,000 or less/)
assert.match(januaryLines(run({ profit: 140_000, priorTax: 18_000, priorAgi: 160_000 })).why, /over \$150,000/)

// A small profit with no tax isn't "no profit".
assert.equal(headline(run({ profit: 300 })), 'At this profit, there’s no federal tax to set aside for 2026.')

console.log('set-aside: all checks passed')
