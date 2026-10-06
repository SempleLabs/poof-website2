// Run: npx tsx scripts/check-job-margin.ts — exits non-zero on a failure.
import assert from 'node:assert/strict'
import { analyzeJobs, driverSentence, headline } from '../src/lib/jobMargin'

const near = (a: number, b: number, d = 0.0005) => assert.ok(Math.abs(a - b) < d, `${a} ≉ ${b}`)

// Poof's demo jobs (the same ones the Shop Math and Poof videos show).
const garza = { name: 'Garza', price: 11200, labor: 2436.5, materials: 9811.34, other: 0 }
const delgado = { name: 'Delgado', price: 9200, labor: 1782, materials: 4118.6, other: 0 }
const okafor = { name: 'Okafor', price: 13400, labor: 2512, materials: 6084.27, other: 0 }
const hughes = { name: 'Hughes', price: 13900, labor: 2618, materials: 6197.35, other: 0 }

const r = analyzeJobs([delgado, garza, okafor, hughes])
const g = r.jobs[0]
assert.equal(g.name, 'Garza', 'worst job first')
near(g.profit, -1047.84, 0.005)
near(g.margin, -0.0936, 0.0005)
assert.equal(g.flag, 'red')
assert.equal(g.driver?.line, 'materials')
const d = r.jobs.find((j) => j.name === 'Delgado')!
near(d.profit, 3299.4, 0.005)
near(d.margin, 0.3586, 0.0005)
assert.equal(d.flag, 'green')
assert.match(headline(r), /^Garza lost \$1,048\. Your other jobs made \d+\.\d% on average\.$/)
assert.match(driverSentence(g)!, /^Materials ran 88% of the price against \d+% on your other jobs\.$/)

// Fewer than 3 jobs: margins only, no comparison.
const two = analyzeJobs([garza, delgado])
assert.equal(two.compared, false)
assert.equal(two.jobs[0].peerMargin, null)
// Jobs with no price are ignored rather than dividing by zero.
assert.equal(analyzeJobs([{ ...garza, price: 0 }, delgado, okafor]).jobs.length, 2)

console.log('job margin: all checks pass')
