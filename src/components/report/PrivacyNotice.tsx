'use client'

export default function PrivacyNotice() {
  return (
    <div className="flex items-start space-x-3 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <div>
        <span className="font-medium text-slate-700">Your statement isn&apos;t retained.</span>{' '}
        We send it to our AI provider to generate your report and don&apos;t keep it afterward or use it to train AI models. If you ask us to email you the report, we store only your email address.
      </div>
    </div>
  )
}
