import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import type { ReportSummary, SpendScore } from '@/lib/report-types'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  try {
    const { summary, spendScore } = await request.json() as { summary: ReportSummary; spendScore: SpendScore }

    if (!summary) {
      return NextResponse.json({ error: 'No summary data provided.' }, { status: 400 })
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

    // Build the category breakdown for the prompt
    const categoryList = summary.topCategories
      .slice(0, 6)
      .map(c => `${c.name}: $${c.total.toLocaleString()} (${c.percentage.toFixed(0)}%)`)
      .join(', ')

    const netStatus = summary.net >= 0
      ? `Net Positive: +$${summary.net.toLocaleString()}`
      : `Net Negative: -$${Math.abs(summary.net).toLocaleString()}`

    const prompt = `Create a beautiful, clean financial report infographic. The design should be modern, minimal, and professional — suitable for sharing on social media.

Layout (top to bottom):
1. HEADER: "Your Spend Score" in a bold, modern sans-serif font. Below it, a subtle tagline: "Powered by Poof AI"
2. SPEND SCORE: A large circular gauge/ring showing the score "${spendScore?.overall || 75}/100" prominently in the center. The ring should be colored based on the score (green for 70+, amber for 50-69, red for below 50). Label it "${spendScore?.overall >= 90 ? 'Excellent' : spendScore?.overall >= 70 ? 'Good' : spendScore?.overall >= 50 ? 'Fair' : 'Needs Attention'}"
3. THREE KEY METRICS in large bold numbers side by side:
   - Total Income: $${summary.totalIncome.toLocaleString()} (in green)
   - Total Expenses: $${summary.totalExpenses.toLocaleString()} (in red/coral)
   - ${netStatus} (in ${summary.net >= 0 ? 'green' : 'red/coral'})
4. SPENDING BREAKDOWN: A stylized horizontal bar chart or donut chart showing the top spending categories: ${categoryList}
5. QUICK STATS: "${summary.transactionCount} transactions analyzed | ${summary.dateRange.start} — ${summary.dateRange.end}"
6. FOOTER: Small text "poofai.com — Bookkeeping That Does Itself" with a subtle violet accent

Color palette: Primary violet (#8b5cf6), indigo (#6366f1), teal (#14b8a6) as accents on a clean white/light gray background. Use the violet and teal for chart colors.
Typography: Clean, modern sans-serif. Large bold numbers for the metrics.
Overall feel: Polished and trustworthy, like a premium fintech product.`

    const response = await openai.images.generate({
      model: 'gpt-image-2',
      prompt,
      n: 1,
      size: '1024x1536',
      quality: 'medium',
    })

    const imageBase64 = response.data?.[0]?.b64_json

    if (!imageBase64) {
      return NextResponse.json({ error: 'Image generation failed.' }, { status: 500 })
    }

    return NextResponse.json({ imageBase64 })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to generate infographic.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
