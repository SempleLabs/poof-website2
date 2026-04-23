import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import type { ReportSummary, SpendScore, Insight } from '@/lib/report-types'

interface EmailPayload {
  email: string
  transactionCount?: number
  topCategory?: string
  summary?: ReportSummary
  spendScore?: SpendScore
  insights?: Insight[]
}

function getScoreColor(score: number): string {
  if (score >= 70) return '#10b981'
  if (score >= 50) return '#f59e0b'
  return '#ef4444'
}

function getScoreLabel(score: number): string {
  if (score >= 90) return 'Excellent'
  if (score >= 70) return 'Good'
  if (score >= 50) return 'Fair'
  return 'Needs Attention'
}

function buildReportEmail(payload: EmailPayload): string {
  const { summary, spendScore } = payload

  if (!summary || !spendScore) {
    return `<p>Thanks for using the Spend Score tool! Visit <a href="https://www.poofai.com/spend-score">www.poofai.com/spend-score</a> to generate your report.</p>`
  }

  const scoreColor = getScoreColor(spendScore.overall)
  const scoreLabel = getScoreLabel(spendScore.overall)
  const categories = summary.topCategories.slice(0, 6)
  const maxCatTotal = Math.max(...categories.map(c => c.total), 1)

  const categoryRows = categories.map(cat => {
    const barWidth = Math.round((cat.total / maxCatTotal) * 100)
    return `
      <tr>
        <td style="padding: 6px 0; font-size: 14px; color: #334155;">${cat.name}</td>
        <td style="padding: 6px 12px; width: 40%;">
          <div style="background: #f1f5f9; border-radius: 4px; height: 8px; width: 100%;">
            <div style="background: #8b5cf6; border-radius: 4px; height: 8px; width: ${barWidth}%;"></div>
          </div>
        </td>
        <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: 600; text-align: right;">$${cat.total.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
        <td style="padding: 6px 0; font-size: 12px; color: #94a3b8; text-align: right; padding-left: 8px;">${cat.percentage.toFixed(0)}%</td>
      </tr>`
  }).join('')

  const insightRows = (payload.insights || []).map(insight =>
    `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
      <div style="font-size: 14px;"><span style="margin-right: 8px;">${insight.emoji}</span><strong style="color: #0f172a;">${insight.title}</strong></div>
      <div style="font-size: 13px; color: #64748b; margin-top: 4px;">${insight.detail}</div>
    </td></tr>`
  ).join('')

  const subScores = [
    { name: 'Savings Rate', score: spendScore.savingsRate.score, detail: spendScore.savingsRate.label },
    { name: 'Needs vs Wants', score: spendScore.needsVsWants.score, detail: spendScore.needsVsWants.label },
    { name: 'Recurring Costs', score: spendScore.recurringCosts.score, detail: spendScore.recurringCosts.label },
    { name: 'Spending Stability', score: spendScore.spendingStability.score, detail: spendScore.spendingStability.label },
  ]

  const subScoreRows = subScores.map(s => `
    <tr>
      <td style="padding: 8px 0;">
        <div style="font-size: 13px; font-weight: 600; color: #334155;">${s.name}: ${s.score}/100</div>
        <div style="background: #f1f5f9; border-radius: 4px; height: 6px; width: 100%; margin-top: 4px;">
          <div style="background: ${getScoreColor(s.score)}; border-radius: 4px; height: 6px; width: ${s.score}%;"></div>
        </div>
        <div style="font-size: 12px; color: #64748b; margin-top: 4px;">${s.detail}</div>
      </td>
    </tr>`
  ).join('')

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <style>
    :root { color-scheme: light dark; }
    @media (prefers-color-scheme: dark) {
      .email-body { background-color: #1e1e1e !important; }
      .email-card { background-color: #2d2d2d !important; border-color: #404040 !important; }
      .email-text-primary { color: #f0f0f0 !important; }
      .email-text-secondary { color: #a0a0a0 !important; }
      .email-text-muted { color: #888888 !important; }
      .email-bar-bg { background-color: #404040 !important; }
      .email-cta-section { background: #7c3aed !important; }
      .email-cta-text { color: #ffffff !important; }
      .email-cta-subtext { color: #e0d5ff !important; }
    }
  </style>
</head>
<body class="email-body" style="margin: 0; padding: 0; background: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 32px 16px;">

    <!-- Header with Logo -->
    <div style="text-align: center; padding: 24px 0;">
      <img src="https://www.poofai.com/poof-logo.png" alt="Poof" width="48" height="48" style="display: inline-block; vertical-align: middle; margin-right: 4px;" />
      <span style="font-family: 'Righteous', 'Inter', sans-serif; font-size: 28px; font-weight: 800; color: #8b5cf6; vertical-align: middle;">Poof</span>
      <div class="email-text-muted" style="font-size: 13px; color: #94a3b8; margin-top: 6px;">Your Spend Score Report</div>
    </div>

    <!-- Score Card -->
    <div class="email-card" style="background: white; border-radius: 16px; padding: 32px; text-align: center; border: 1px solid #e2e8f0;">
      <div class="email-text-muted" style="font-size: 13px; text-transform: uppercase; letter-spacing: 2px; color: #94a3b8; margin-bottom: 12px;">Spend Score</div>
      <div style="font-size: 64px; font-weight: 800; color: ${scoreColor}; line-height: 1;">${spendScore.overall}</div>
      <div class="email-text-primary" style="font-size: 18px; font-weight: 600; color: #0f172a; margin-top: 8px;">${scoreLabel}</div>
      <div class="email-text-muted" style="font-size: 13px; color: #94a3b8;">out of 100</div>

      <!-- Sub-scores -->
      <div style="margin-top: 24px; text-align: left;">
        <table width="100%" cellpadding="0" cellspacing="0">${subScoreRows}</table>
      </div>
    </div>

    <!-- Financial Summary -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 16px;">
      <tr>
        <td width="33%" style="padding: 4px;">
          <div class="email-card" style="background: white; border-radius: 12px; padding: 16px; text-align: center; border: 1px solid #e2e8f0;">
            <div class="email-text-muted" style="font-size: 12px; color: #94a3b8;">Income</div>
            <div style="font-size: 20px; font-weight: 700; color: #10b981; margin-top: 4px;">$${summary.totalIncome.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          </div>
        </td>
        <td width="33%" style="padding: 4px;">
          <div class="email-card" style="background: white; border-radius: 12px; padding: 16px; text-align: center; border: 1px solid #e2e8f0;">
            <div class="email-text-muted" style="font-size: 12px; color: #94a3b8;">Expenses</div>
            <div style="font-size: 20px; font-weight: 700; color: #ef4444; margin-top: 4px;">$${summary.totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          </div>
        </td>
        <td width="33%" style="padding: 4px;">
          <div class="email-card" style="background: white; border-radius: 12px; padding: 16px; text-align: center; border: 1px solid #e2e8f0;">
            <div class="email-text-muted" style="font-size: 12px; color: #94a3b8;">Net</div>
            <div style="font-size: 20px; font-weight: 700; color: ${summary.net >= 0 ? '#10b981' : '#ef4444'}; margin-top: 4px;">${summary.net >= 0 ? '+' : '-'}$${Math.abs(summary.net).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          </div>
        </td>
      </tr>
    </table>

    <!-- Key Insights -->
    <div class="email-card" style="background: white; border-radius: 16px; padding: 24px; margin-top: 16px; border: 1px solid #e2e8f0;">
      <div class="email-text-primary" style="font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Key Insights</div>
      <table width="100%" cellpadding="0" cellspacing="0">${insightRows}</table>
    </div>

    <!-- Category Breakdown -->
    <div class="email-card" style="background: white; border-radius: 16px; padding: 24px; margin-top: 16px; border: 1px solid #e2e8f0;">
      <div class="email-text-primary" style="font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Spending Breakdown</div>
      <table width="100%" cellpadding="0" cellspacing="0">${categoryRows}</table>
    </div>

    <!-- Quick Stats -->
    <div class="email-card" style="background: white; border-radius: 16px; padding: 24px; margin-top: 16px; border: 1px solid #e2e8f0;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td width="50%" style="padding-right: 12px; vertical-align: top;">
            <div class="email-text-muted" style="font-size: 12px; color: #94a3b8; margin-bottom: 4px;">Transactions Analyzed</div>
            <div class="email-text-primary" style="font-size: 18px; font-weight: 700; color: #0f172a;">${summary.transactionCount}</div>
          </td>
          <td width="50%" style="padding-left: 12px; vertical-align: top;">
            <div class="email-text-muted" style="font-size: 12px; color: #94a3b8; margin-bottom: 4px;">Statement Period</div>
            <div class="email-text-primary" style="font-size: 14px; font-weight: 700; color: #0f172a;">${summary.dateRange.start} to ${summary.dateRange.end}</div>
          </td>
        </tr>
      </table>
    </div>

    <!-- CTA -->
    <div class="email-cta-section" style="background: #7c3aed; border-radius: 16px; padding: 32px; margin-top: 24px; text-align: center;">
      <div class="email-cta-text" style="font-size: 20px; font-weight: 700; color: #ffffff; margin-bottom: 8px;">Want to improve your Spend Score?</div>
      <div class="email-cta-subtext" style="font-size: 14px; color: #e0d5ff; margin-bottom: 20px;">Poof does this automatically, every day. AI categorization, reconciliation, invoicing, and 13 financial reports — $29/mo.</div>
      <a href="https://app.poofai.com/register" style="display: inline-block; background: white; color: #7c3aed; font-weight: 600; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-size: 15px;">Start Free Trial</a>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 24px 0;">
      <a href="https://www.poofai.com" style="text-decoration: none;">
        <img src="https://www.poofai.com/poof-logo.png" alt="Poof" width="24" height="24" style="display: inline-block; vertical-align: middle; margin-right: 4px;" />
        <span style="font-size: 12px; color: #8b5cf6; vertical-align: middle;">www.poofai.com</span>
      </a>
      <div class="email-text-muted" style="font-size: 11px; color: #94a3b8; margin-top: 4px;">Bookkeeping That Does Itself</div>
    </div>

  </div>
</body>
</html>`
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json() as EmailPayload

    if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 })
    }

    // Save lead to Supabase
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey)
      await supabase.from('report_leads').insert({
        email: payload.email,
        source: 'spend_score',
        transaction_count: payload.transactionCount || null,
        top_category: payload.topCategory || null,
      })
    }

    const resendKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL

    if (resendKey) {
      const resend = new Resend(resendKey)

      // Send rich report email to user
      await resend.emails.send({
        from: 'Poof <noreply@poofai.com>',
        to: payload.email,
        subject: `Your Spend Score: ${payload.spendScore?.overall || '?'}/100`,
        html: buildReportEmail(payload),
      })

      // Notify admin
      if (notifyEmail) {
        await resend.emails.send({
          from: 'Poof <noreply@poofai.com>',
          to: notifyEmail,
          subject: 'New Spend Score Lead',
          html: `
            <h2>New Spend Score Lead</h2>
            <p><strong>Email:</strong> ${payload.email}</p>
            <p><strong>Score:</strong> ${payload.spendScore?.overall || 'N/A'}/100</p>
            <p><strong>Transactions:</strong> ${payload.transactionCount || 'N/A'}</p>
            <p><strong>Top category:</strong> ${payload.topCategory || 'N/A'}</p>
            <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          `,
        })
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email save error:', err)
    return NextResponse.json({ success: true })
  }
}
