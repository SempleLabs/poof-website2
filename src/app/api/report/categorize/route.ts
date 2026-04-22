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
    "spendingDiversity": { "score": number, "label": "..." },
    "subscriptionLoad": { "score": number, "label": "..." },
    "largestTransactionRatio": { "score": number, "label": "..." }
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

SPEND SCORE RULES (each sub-score is 0-100):
- savingsRate: Based on net / totalIncome. 30%+ = 100, 20-30% = 80, 10-20% = 60, 0-10% = 40, negative = 20. Label: describe the finding.
- spendingDiversity: How evenly REAL spending (exclude Credit Card Payments and Transfers) is distributed. Top real category <25% = 100, 25-40% = 75, 40-60% = 50, >60% = 25. Label: describe.
- subscriptionLoad: Subscriptions as % of total expenses. <5% = 100, 5-10% = 80, 10-20% = 60, 20-30% = 40, >30% = 20. Label: describe.
- largestTransactionRatio: Largest single debit as % of total expenses. <5% = 100, 5-15% = 80, 15-25% = 60, 25-40% = 40, >40% = 20. Label: describe.
- overall: Weighted average — savingsRate 40% + spendingDiversity 20% + subscriptionLoad 20% + largestTransactionRatio 20%. Round to integer.

INSIGHTS RULES (generate exactly 4):
- Each insight should be specific, actionable, and reference actual dollar amounts from this data
- Insight 1: The most surprising or notable finding (biggest category, unusual pattern)
- Insight 2: A specific money-saving opportunity based on the weakest sub-score
- Insight 3: Something positive to acknowledge (best sub-score or good habit)
- Insight 4: A concrete next step they can take this week
- Use a relevant emoji for each (e.g., "💡", "⚠️", "✅", "🎯")
- Tone: direct and specific, like a friend who's good with money — NOT generic financial advice
- Do NOT just restate the numbers — tell them something they didn't already know

Return ONLY the JSON object.`,
        },
      ],
      max_tokens: 4000,
      temperature: 0.3,
      response_format: { type: 'json_object' },
    })

    const content = response.choices[0]?.message?.content?.trim() || '{}'
    const result = JSON.parse(content)

    if (!result.transactions || !result.summary || !result.spendScore || !result.insights) {
      throw new Error('Incomplete analysis result.')
    }

    return NextResponse.json(result)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to analyze transactions.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
