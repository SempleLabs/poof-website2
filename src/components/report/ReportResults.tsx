'use client'

import Link from 'next/link'
import type { FinancialReport } from '@/lib/report-types'
import CategoryBreakdown from './CategoryBreakdown'

interface ReportResultsProps {
  report: FinancialReport
}

function ScoreBar({ score, label }: { score: number; label: string }) {
  const color = score >= 70 ? 'bg-emerald-500' : score >= 50 ? 'bg-amber-500' : 'bg-red-500'
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-slate-600">{label}</span>
        <span className="text-sm font-bold text-slate-900">{score}</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2">
        <div className={`h-2 rounded-full transition-all duration-700 ${color}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  )
}

export default function ReportResults({ report }: ReportResultsProps) {
  const { summary, spendScore, narrative, imageBase64 } = report
  const scoreColor = spendScore.overall >= 70 ? '#10b981' : spendScore.overall >= 50 ? '#f59e0b' : '#ef4444'
  const scoreLabel = spendScore.overall >= 90 ? 'Excellent' : spendScore.overall >= 70 ? 'Good' : spendScore.overall >= 50 ? 'Fair' : 'Needs Attention'

  return (
    <div className="space-y-10">
      {/* Spend Score Hero */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">Your Spend Score</p>
        <div className="relative w-40 h-40 mx-auto mb-4">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#e2e8f0" strokeWidth="10" />
            <circle
              cx="60" cy="60" r="52" fill="none"
              stroke={scoreColor}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${(spendScore.overall / 100) * 2 * Math.PI * 52} ${2 * Math.PI * 52}`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-bold text-slate-900">{spendScore.overall}</span>
          </div>
        </div>
        <p className="text-xl font-bold text-slate-900">{scoreLabel}</p>
        <p className="text-slate-500 text-sm mt-1">out of 100</p>

        {/* Sub-scores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-left max-w-lg mx-auto">
          <div className="bg-slate-50 rounded-xl p-4">
            <ScoreBar score={spendScore.savingsRate.score} label="Savings Rate" />
            <p className="text-xs text-slate-500 mt-2">{spendScore.savingsRate.label}</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-4">
            <ScoreBar score={spendScore.spendingDiversity.score} label="Spending Diversity" />
            <p className="text-xs text-slate-500 mt-2">{spendScore.spendingDiversity.label}</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-4">
            <ScoreBar score={spendScore.subscriptionLoad.score} label="Subscription Load" />
            <p className="text-xs text-slate-500 mt-2">{spendScore.subscriptionLoad.label}</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-4">
            <ScoreBar score={spendScore.largestTransactionRatio.score} label="Expense Concentration" />
            <p className="text-xs text-slate-500 mt-2">{spendScore.largestTransactionRatio.label}</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
          <p className="text-sm text-slate-500 mb-1">Total Income</p>
          <p className="text-2xl font-bold text-emerald-600">
            ${summary.totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
          <p className="text-sm text-slate-500 mb-1">Total Expenses</p>
          <p className="text-2xl font-bold text-red-500">
            ${summary.totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
          <p className="text-sm text-slate-500 mb-1">Net</p>
          <p className={`text-2xl font-bold ${summary.net >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
            {summary.net >= 0 ? '+' : '-'}${Math.abs(summary.net).toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      {/* Narrative */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
        <h3 className="text-xl font-bold font-display text-slate-900 mb-4">Your Financial Narrative</h3>
        <div className="prose prose-slate max-w-none">
          {narrative.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-slate-700 leading-relaxed mb-4 last:mb-0">{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
        <h3 className="text-xl font-bold font-display text-slate-900 mb-6">Spending Breakdown</h3>
        <CategoryBreakdown categories={summary.topCategories} />
      </div>

      {/* AI-Generated Infographic */}
      {imageBase64 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold font-display text-slate-900 mb-4">Your Spend Score Infographic</h3>
          <div className="rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`data:image/png;base64,${imageBase64}`}
              alt="AI-generated Spend Score infographic"
              className="w-full"
            />
          </div>
          <p className="text-xs text-slate-400 mt-3 text-center">AI-generated infographic by Poof</p>
        </div>
      )}

      {/* Quick Stats */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
        <h3 className="text-xl font-bold font-display text-slate-900 mb-4">Quick Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-slate-500">Transactions Analyzed</p>
            <p className="text-lg font-bold text-slate-900">{summary.transactionCount}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Date Range</p>
            <p className="text-lg font-bold text-slate-900">{summary.dateRange.start} — {summary.dateRange.end}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Biggest Transaction</p>
            <p className="text-lg font-bold text-slate-900">${Math.abs(summary.largestTransaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            <p className="text-xs text-slate-500">{summary.largestTransaction.description}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Top Category</p>
            <p className="text-lg font-bold text-slate-900">{summary.topCategories[0]?.name}</p>
            <p className="text-xs text-slate-500">{summary.topCategories[0]?.percentage.toFixed(0)}% of spending</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-8 sm:p-10 text-center text-white">
        <h3 className="text-2xl sm:text-3xl font-bold font-display mb-3">
          Want to improve your Spend Score?
        </h3>
        <p className="text-violet-100 mb-6 max-w-xl mx-auto">
          Poof tracks your score automatically — every transaction, every day. AI categorization, reconciliation, invoicing, budgets, forecasts, and 13 financial reports — all for $29/mo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="https://app.poofai.com/register"
            className="bg-white text-violet-700 px-8 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-all shadow-lg"
          >
            Start Free Trial
          </Link>
          <Link
            href="/features"
            className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            See All 72 Features
          </Link>
        </div>
      </div>
    </div>
  )
}
