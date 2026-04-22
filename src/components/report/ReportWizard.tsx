'use client'

import { useState, useCallback } from 'react'
import type { ReportStep, FinancialReport, ReportSummary } from '@/lib/report-types'
import FileUploadZone from './FileUploadZone'
import ProcessingAnimation from './ProcessingAnimation'
import EmailGateForm from './EmailGateForm'
import ReportResults from './ReportResults'
import PrivacyNotice from './PrivacyNotice'
import CategoryBreakdown from './CategoryBreakdown'

export default function ReportWizard() {
  const [step, setStep] = useState<ReportStep>('upload')
  const [processingPhase, setProcessingPhase] = useState(0)
  const [report, setReport] = useState<FinancialReport | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [emailLoading, setEmailLoading] = useState(false)

  const handleFileSelected = useCallback(async (file: File) => {
    setStep('processing')
    setProcessingPhase(0)
    setError(null)

    try {
      // Phase 1: Upload & parse
      const formData = new FormData()
      formData.append('file', file)

      const uploadRes = await fetch('/api/report/upload', {
        method: 'POST',
        body: formData,
      })

      if (!uploadRes.ok) {
        const data = await uploadRes.json()
        throw new Error(data.error || 'Failed to parse your statement. Please try a different file.')
      }

      const { transactions } = await uploadRes.json()
      setProcessingPhase(1)

      // Phase 2: Categorize + narrative
      const categorizeRes = await fetch('/api/report/categorize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transactions }),
      })

      if (!categorizeRes.ok) {
        const data = await categorizeRes.json()
        throw new Error(data.error || 'Failed to analyze transactions. Please try again.')
      }

      const categorized = await categorizeRes.json()
      setProcessingPhase(2)

      // Store partial report and show email gate
      setReport({
        transactions: categorized.transactions,
        summary: categorized.summary,
        spendScore: categorized.spendScore,
        narrative: categorized.narrative,
      })
      setStep('email-gate')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStep('upload')
    }
  }, [])

  const handleEmailSubmit = useCallback(async (email: string) => {
    if (!report) return
    setEmailLoading(true)

    try {
      // Phase 3: Generate infographic image
      setStep('processing')
      setProcessingPhase(3)

      const imageRes = await fetch('/api/report/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ summary: report.summary, spendScore: report.spendScore }),
      })

      let imageBase64: string | undefined
      if (imageRes.ok) {
        const imageData = await imageRes.json()
        imageBase64 = imageData.imageBase64
      }
      // If image gen fails, we still show the report without the infographic

      const fullReport: FinancialReport = {
        ...report,
        imageBase64,
      }
      setReport(fullReport)

      // Send rich report email to user (fire and forget)
      fetch('/api/report/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          transactionCount: report.summary.transactionCount,
          topCategory: report.summary.topCategories[0]?.name,
          summary: report.summary,
          spendScore: report.spendScore,
          narrative: report.narrative,
        }),
      }).catch(() => {})  // Don't block on email save

      setStep('results')
    } catch {
      // Even if image fails, show the text report
      setStep('results')
    } finally {
      setEmailLoading(false)
    }
  }, [report])

  const handleStartOver = () => {
    setStep('upload')
    setReport(null)
    setError(null)
    setProcessingPhase(0)
  }

  return (
    <div>
      {step === 'upload' && (
        <div className="space-y-6">
          <FileUploadZone onFileSelected={handleFileSelected} />
          <PrivacyNotice />
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 flex items-start space-x-3">
              <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="font-medium">Analysis failed.</span> {error}
              </div>
            </div>
          )}
        </div>
      )}

      {step === 'processing' && (
        <ProcessingAnimation currentPhase={processingPhase} />
      )}

      {step === 'email-gate' && report && (
        <div className="space-y-8">
          {/* Spend Score - the big reveal */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">Your Spend Score</p>
            <div className="relative w-36 h-36 mx-auto mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                <circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke={report.spendScore.overall >= 70 ? '#10b981' : report.spendScore.overall >= 50 ? '#f59e0b' : '#ef4444'}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${(report.spendScore.overall / 100) * 2 * Math.PI * 52} ${2 * Math.PI * 52}`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-slate-900">{report.spendScore.overall}</span>
              </div>
            </div>
            <p className="text-lg font-semibold text-slate-900">
              {report.spendScore.overall >= 90 ? 'Excellent' : report.spendScore.overall >= 70 ? 'Good' : report.spendScore.overall >= 50 ? 'Fair' : 'Needs Attention'}
            </p>
            <p className="text-slate-500 text-sm mt-1">out of 100</p>
          </div>

          {/* Blurred breakdown + narrative teaser */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold font-display text-slate-900 mb-4">Spending Breakdown</h3>
            <CategoryBreakdown categories={report.summary.topCategories} blurred />
          </div>

          {/* Email gate */}
          <EmailGateForm onSubmit={handleEmailSubmit} isLoading={emailLoading} />
        </div>
      )}

      {step === 'results' && report && (
        <div className="space-y-6">
          <ReportResults report={report} />
          <div className="text-center pt-4">
            <button
              onClick={handleStartOver}
              className="text-violet-600 hover:text-violet-500 font-medium text-sm transition-colors"
            >
              Analyze another statement
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
