import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import type { ParsedTransaction } from '@/lib/report-types'

export const runtime = 'edge'

// Pre-built categorization decision tree (simplified BRAID approach)
// This replaces Stage 1 of BRAID — no need to generate per user since categories are fixed
const CATEGORIZATION_TREE = `
CATEGORIZATION DECISION TREE — follow this in order for each transaction:

1. CHECK TRANSACTION TYPE FIRST:
   - If type is "credit" (money IN): category = "Income" UNLESS description clearly indicates a refund/return → then category matches the original purchase category

2. FOR DEBITS (money OUT), follow these keyword rules in priority order:

   RENT/MORTGAGE:
   - Keywords: rent, mortgage, lease, landlord, property management
   - Zelle/Venmo with "rent" in description → Rent/Mortgage (NOT Transfers)
   - Example: "Zelle to Chawla Sumesh February Rent" → Rent/Mortgage

   CREDIT CARD PAYMENTS:
   - Keywords: "credit card", "visa", "mastercard", "amex", "discover", "bill pay.*card", "online transfer.*card", "cash back visa"
   - These are payments TO credit cards → category = "Credit Card Payments"
   - Example: "Online Transfer to Wells Fargo Cash Back VISA" → Credit Card Payments
   - Example: "Bill Pay Target Credit Card" → Credit Card Payments

   GROCERIES:
   - Keywords: walmart grocery, kroger, safeway, whole foods, trader joe, aldi, publix, heb, costco, sam's club, grocery, supermarket, food lion, wegmans, sprouts

   DINING OUT:
   - Keywords: restaurant, mcdonald, starbucks, chipotle, chick-fil-a, pizza, doordash, uber eats, grubhub, cafe, bar, grill, taco, sushi, diner, panera, subway

   TRANSPORTATION:
   - Keywords: gas, shell, chevron, exxon, bp, uber, lyft, parking, toll, transit, metro, fuel, speedway, wawa fuel

   UTILITIES:
   - Keywords: electric, water, gas bill, power, energy, sewage, trash, waste, internet, comcast, att, verizon, tmobile, spectrum, xfinity, phone bill

   SUBSCRIPTIONS:
   - Keywords: netflix, spotify, hulu, disney, apple.com/bill, amazon prime, youtube, adobe, microsoft 365, dropbox, icloud, hbo, paramount, the athletic, gym membership
   - Recurring small charges from tech companies → Subscriptions

   INSURANCE:
   - Keywords: insurance, ins, geico, state farm, allstate, progressive, farmers ins, usaa, liberty mutual, aetna, cigna, blue cross

   HEALTHCARE:
   - Keywords: doctor, hospital, pharmacy, cvs pharmacy, walgreens rx, dental, vision, medical, copay, urgent care, lab, health

   ENTERTAINMENT:
   - Keywords: movie, theater, concert, ticket, gaming, steam, playstation, xbox, amusement, museum, zoo, bowling, golf

   SHOPPING:
   - Keywords: amazon, target, walmart (non-grocery), best buy, home depot, lowes, ikea, tj maxx, marshalls, kohls, macys, nordstrom, etsy, ebay

   SAVINGS/INVESTMENTS:
   - Keywords: savings, 401k, ira, investment, brokerage, fidelity, schwab, vanguard, robinhood, acorns, transfer to savings

   TRANSFERS (use ONLY when no better category fits):
   - Internal bank transfers between own accounts (NOT credit card payments)
   - Zelle/Venmo to individuals WITHOUT context clues about purpose
   - Wire transfers without clear purpose
   - IMPORTANT: Do NOT put credit card payments, rent payments, or contextual Zelle/Venmo here

   FEES/INTEREST:
   - Keywords: fee, service charge, atm fee, overdraft, interest charge, late fee, nsf

   OTHER:
   - Checks without clear payee context
   - Anything that truly doesn't fit above categories

3. VENMO/ZELLE/CASHAPP SPECIAL RULES:
   - Look at the FULL description for context clues
   - "Venmo Payment" with no context → Transfers
   - "Zelle to [name] [purpose]" → categorize by the purpose (e.g., "rent" → Rent/Mortgage)
   - "Venmo Cashout" or "Zelle From" = incoming money → Income
   - "Cashapp" follows same rules as Venmo

4. PAYROLL/DIRECT DEPOSIT:
   - "payroll", "direct dep", "dir dep", "salary" → Income
   - Company name + "payroll" → Income
`

export async function POST(request: NextRequest) {
  try {
    const { transactions } = await request.json() as { transactions: ParsedTransaction[] }

    if (!transactions || !Array.isArray(transactions) || transactions.length === 0) {
      return NextResponse.json({ error: 'No transactions provided.' }, { status: 400 })
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

    const txSummary = transactions.map(t =>
      `${t.date}|${t.description}|${t.amount}|${t.type}`
    ).join('\n')

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a financial analyst AI. You categorize transactions using a decision tree and generate spending scores and insights.
Return ONLY valid JSON — no markdown, no code fences, no explanation.`,
        },
        {
          role: 'user',
          content: `Here are bank transactions in format: date|description|amount|type (debit/credit)

${txSummary}

${CATEGORIZATION_TREE}

Return a JSON object with this exact structure:
{
  "transactions": [
    { "date": "...", "description": "...", "amount": number, "type": "debit"|"credit", "category": "..." }
  ],
  "summary": {
    "totalIncome": number,
    "totalExpenses": number,
    "net": number,
    "transactionCount": number,
    "dateRange": { "start": "...", "end": "..." },
    "topCategories": [{ "name": "...", "total": number, "percentage": number }],
    "largestTransaction": { "description": "...", "amount": number, "date": "..." }
  },
  "spendScore": {
    "overall": number,
    "savingsRate": { "score": number, "label": "..." },
    "needsVsWants": { "score": number, "label": "..." },
    "recurringCosts": { "score": number, "label": "..." },
    "spendingStability": { "score": number, "label": "..." }
  },
  "insights": [
    { "emoji": "...", "title": "short title", "detail": "1-2 sentence actionable insight" }
  ]
}

CRITICAL COUNTING RULES:
- EVERY credit transaction MUST be counted in totalIncome — payroll, Zelle incoming, Venmo cashouts, mobile deposits, interest, refunds — ALL of them
- EVERY debit transaction MUST be counted in totalExpenses — even credit card payments, transfers, rent, everything
- transactionCount = total number of transactions in the array
- net = totalIncome - totalExpenses (can be negative)
- Double-check your sums. If the statement shows totals, your numbers should match.
- topCategories: include ALL expense categories found (debits only), sorted by total descending, percentage = category total / totalExpenses * 100
- largestTransaction: the single transaction with highest amount (debit or credit)

SPEND SCORE RULES (each sub-score is 0-100, AI generates labels only — scores are recalculated server-side):
- savingsRate: How much income was saved. Label: describe the finding concisely.
- needsVsWants: How spending splits between essentials (Rent/Mortgage, Utilities, Groceries, Insurance, Healthcare, Transportation) vs discretionary (Dining Out, Entertainment, Shopping, Subscriptions). Based on 50/30/20 rule. Label: e.g., "62% of spending went to essentials, 18% to wants"
- recurringCosts: All recurring/fixed costs (Rent, Utilities, Insurance, Subscriptions) as % of income. Shows how "locked in" spending is. Label: e.g., "Fixed costs are 45% of your income"
- spendingStability: Whether spending is dominated by a few large transactions or spread evenly. Label: e.g., "Your top 3 transactions account for 58% of spending"
- overall: Will be recalculated server-side.

INSIGHTS RULES (generate exactly 4):
- Each insight MUST be specific to THIS person's data with actual dollar amounts — never generic
- Insight 1 (Discovery): Something surprising they probably didn't realize — a hidden pattern, a merchant they're spending more at than they'd guess, or a trend (e.g., "You spent $847 at Amazon across 6 transactions — that's $141/month if this is typical")
- Insight 2 (Opportunity): A specific, actionable saving opportunity with dollar estimate (e.g., "Your 3 subscriptions total $22/mo. If you dropped just The Athletic ($1/mo trial), you'd save $60-120/year at full price")
- Insight 3 (Benchmark): Compare one aspect of their spending to a common benchmark like the 50/30/20 rule (e.g., "Your needs-to-wants ratio is 72/28 — tighter than the recommended 50/30, which means most of your money goes to essentials")
- Insight 4 (Action): One concrete thing they can do THIS WEEK based on the data (e.g., "Set up a $500 auto-transfer to savings on payday — based on your income, that's 3% and you wouldn't feel it")
- Use emojis: "🔍", "💰", "📊", "✅"
- Tone: like a sharp friend reviewing your bank statement over coffee — specific, honest, no fluff

Return ONLY the JSON object.`,
        },
      ],
      max_tokens: 4000,
      temperature: 0.3,
      response_format: { type: 'json_object' },
    })

    const content = response.choices[0]?.message?.content?.trim() || '{}'
    const result = JSON.parse(content)

    if (!result.transactions || !result.spendScore || !result.insights) {
      throw new Error('Incomplete analysis result.')
    }

    // Restore original debit/credit types from parsed data — AI only provides categories
    // The original parsing (from the bank statement) is the source of truth for debit/credit
    const aiTxs = result.transactions as { amount: number; type: string; category: string; date: string; description: string }[]
    for (let i = 0; i < aiTxs.length && i < transactions.length; i++) {
      aiTxs[i].type = transactions[i].type
      aiTxs[i].amount = transactions[i].amount
    }

    // Recalculate totals ourselves — LLMs can't do math reliably
    const txs = aiTxs
    const totalIncome = txs.filter(t => t.type === 'credit').reduce((s, t) => s + t.amount, 0)
    const totalExpenses = txs.filter(t => t.type === 'debit').reduce((s, t) => s + t.amount, 0)
    const net = totalIncome - totalExpenses

    // Recalculate category totals (debits only)
    const catMap: Record<string, number> = {}
    for (const t of txs) {
      if (t.type === 'debit') {
        catMap[t.category] = (catMap[t.category] || 0) + t.amount
      }
    }
    const topCategories = Object.entries(catMap)
      .map(([name, total]) => ({
        name,
        total: Math.round(total * 100) / 100,
        percentage: totalExpenses > 0 ? Math.round((total / totalExpenses) * 10000) / 100 : 0,
      }))
      .sort((a, b) => b.total - a.total)

    // Find largest transaction
    const largest = txs.reduce((max, t) => t.amount > max.amount ? t : max, txs[0])

    // Find date range
    const dates = txs.map(t => t.date).sort()

    // Recalculate spend score with improved metrics
    const savingsRatio = totalIncome > 0 ? net / totalIncome : -1
    const savingsScore = savingsRatio >= 0.3 ? 100 : savingsRatio >= 0.2 ? 80 : savingsRatio >= 0.1 ? 60 : savingsRatio >= 0 ? 40 : 20

    // Needs vs Wants: essentials vs discretionary spending
    const needsCats = ['Rent/Mortgage', 'Utilities', 'Groceries', 'Insurance', 'Healthcare', 'Transportation']
    const wantsCats = ['Dining Out', 'Entertainment', 'Shopping', 'Subscriptions']
    const needsTotal = topCategories.filter(c => needsCats.includes(c.name)).reduce((s, c) => s + c.total, 0)
    const wantsTotal = topCategories.filter(c => wantsCats.includes(c.name)).reduce((s, c) => s + c.total, 0)
    const wantsPct = totalExpenses > 0 ? (wantsTotal / totalExpenses) * 100 : 0
    // 50/30/20: wants should be ≤30% of spending
    const needsWantsScore = wantsPct <= 20 ? 100 : wantsPct <= 30 ? 80 : wantsPct <= 40 ? 60 : wantsPct <= 50 ? 40 : 20

    // Recurring costs as % of income
    const recurringCats = ['Rent/Mortgage', 'Utilities', 'Insurance', 'Subscriptions']
    const recurringTotal = topCategories.filter(c => recurringCats.includes(c.name)).reduce((s, c) => s + c.total, 0)
    const recurringPct = totalIncome > 0 ? (recurringTotal / totalIncome) * 100 : 100
    const recurringScore = recurringPct <= 30 ? 100 : recurringPct <= 40 ? 80 : recurringPct <= 50 ? 60 : recurringPct <= 65 ? 40 : 20

    // Spending stability: how much top 3 transactions dominate
    const sortedDebits = txs.filter(t => t.type === 'debit').sort((a, b) => b.amount - a.amount)
    const top3Total = sortedDebits.slice(0, 3).reduce((s, t) => s + t.amount, 0)
    const top3Pct = totalExpenses > 0 ? (top3Total / totalExpenses) * 100 : 0
    const stabilityScore = top3Pct <= 25 ? 100 : top3Pct <= 40 ? 80 : top3Pct <= 55 ? 60 : top3Pct <= 70 ? 40 : 20

    const overall = Math.round(savingsScore * 0.35 + needsWantsScore * 0.25 + recurringScore * 0.2 + stabilityScore * 0.2)

    result.summary = {
      totalIncome: Math.round(totalIncome * 100) / 100,
      totalExpenses: Math.round(totalExpenses * 100) / 100,
      net: Math.round(net * 100) / 100,
      transactionCount: txs.length,
      dateRange: { start: dates[0] || '', end: dates[dates.length - 1] || '' },
      topCategories,
      largestTransaction: { description: largest.description, amount: largest.amount, date: largest.date },
    }

    const needsPct = totalExpenses > 0 ? (needsTotal / totalExpenses) * 100 : 0
    result.spendScore = {
      overall,
      savingsRate: { score: savingsScore, label: result.spendScore.savingsRate?.label || `You saved ${(savingsRatio * 100).toFixed(1)}% of your income` },
      needsVsWants: { score: needsWantsScore, label: result.spendScore.needsVsWants?.label || `${needsPct.toFixed(0)}% needs, ${wantsPct.toFixed(0)}% wants` },
      recurringCosts: { score: recurringScore, label: result.spendScore.recurringCosts?.label || `Fixed costs are ${recurringPct.toFixed(0)}% of your income` },
      spendingStability: { score: stabilityScore, label: result.spendScore.spendingStability?.label || `Your top 3 transactions are ${top3Pct.toFixed(0)}% of spending` },
    }

    return NextResponse.json(result)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to analyze transactions.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
