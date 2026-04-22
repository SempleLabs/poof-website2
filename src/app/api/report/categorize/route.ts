import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import type { ParsedTransaction } from '@/lib/report-types'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  try {
    const { transactions } = await request.json() as { transactions: ParsedTransaction[] }

    if (!transactions || !Array.isArray(transactions) || transactions.length === 0) {
      return NextResponse.json({ error: 'No transactions provided.' }, { status: 400 })
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

    // Build a compact representation to minimize tokens
    const txSummary = transactions.map(t =>
      `${t.date}|${t.description}|${t.amount}|${t.type}`
    ).join('\n')

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a financial analyst AI. You categorize transactions, calculate spending scores, and write insightful financial narratives.
Return ONLY valid JSON — no markdown, no code fences, no explanation.`,
        },
        {
          role: 'user',
          content: `Here are bank transactions in format: date|description|amount|type (debit/credit)

${txSummary}

Analyze these transactions and return a JSON object with this exact structure:
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
  "narrative": "..."
}

CATEGORIZATION RULES:
- Use these categories: Income, Rent/Mortgage, Utilities, Groceries, Dining Out, Transportation, Entertainment, Subscriptions, Healthcare, Insurance, Shopping, Transfers, Fees/Interest, Savings, Other
- Match transactions to the most specific category possible
- Credits are typically Income or Transfers unless they're clearly refunds

SUMMARY RULES:
- totalIncome = sum of all credit amounts
- totalExpenses = sum of all debit amounts
- net = totalIncome - totalExpenses
- topCategories should include ALL categories found, sorted by total descending, with percentage of total spending (debits only)
- largestTransaction = the single transaction with the highest absolute amount

SPEND SCORE RULES (each sub-score is 0-100):
- savingsRate: Based on (totalIncome - totalExpenses) / totalIncome. 30%+ savings = 100, 20-30% = 80, 10-20% = 60, 0-10% = 40, negative = 20. Label describes the finding (e.g., "You saved 24% of your income").
- spendingDiversity: Based on how evenly spending is distributed across categories. If top category is <25% of spending = 100, 25-40% = 75, 40-60% = 50, >60% = 25. Label describes it (e.g., "Spending is well-balanced across 8 categories").
- subscriptionLoad: Based on recurring/subscription charges as % of total expenses. <5% = 100, 5-10% = 80, 10-20% = 60, 20-30% = 40, >30% = 20. Label describes it (e.g., "Subscriptions are 12% of your spending").
- largestTransactionRatio: Based on largest single transaction as % of total expenses. <5% = 100, 5-15% = 80, 15-25% = 60, 25-40% = 40, >40% = 20. Label describes it (e.g., "Your largest expense was 8% of total spending").
- overall: Weighted average — savingsRate (40%) + spendingDiversity (20%) + subscriptionLoad (20%) + largestTransactionRatio (20%). Round to nearest integer.

NARRATIVE RULES:
- Write a 3-paragraph narrative in second person ("you")
- Paragraph 1: Lead with the Spend Score number and what it means. Overview of income vs expenses and whether they're in the green or red.
- Paragraph 2: Key patterns — top spending categories, notable transactions, recurring charges. Reference the sub-scores.
- Paragraph 3: One specific, actionable tip based on the weakest sub-score.
- Tone: friendly, insightful, conversational — like a smart friend reviewing your finances
- Include specific dollar amounts
- Separate paragraphs with double newlines

Return ONLY the JSON object.`,
        },
      ],
      max_tokens: 4000,
      temperature: 0.3,
      response_format: { type: 'json_object' },
    })

    const content = response.choices[0]?.message?.content?.trim() || '{}'
    const result = JSON.parse(content)

    // Validate required fields exist
    if (!result.transactions || !result.summary || !result.narrative || !result.spendScore) {
      throw new Error('Incomplete analysis result.')
    }

    return NextResponse.json(result)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to analyze transactions.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
