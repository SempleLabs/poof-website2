'use client'

interface ProcessingAnimationProps {
  currentPhase: number // 0-3
}

const phases = [
  { label: 'Parsing your statement', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { label: 'Categorizing transactions', icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' },
  { label: 'Calculating your Spend Score', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
  { label: 'Creating your infographic', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
]

export default function ProcessingAnimation({ currentPhase }: ProcessingAnimationProps) {
  return (
    <div className="max-w-md mx-auto py-12">
      <div className="flex justify-center mb-8">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
          <div className="absolute inset-0 rounded-full border-4 border-violet-500 border-t-transparent animate-spin" />
          <div className="absolute inset-3 rounded-full bg-violet-100 flex items-center justify-center">
            <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={phases[currentPhase]?.icon || phases[0].icon} />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {phases.map((phase, i) => (
          <div
            key={i}
            className={`flex items-center space-x-3 transition-all duration-300 ${
              i < currentPhase
                ? 'opacity-100'
                : i === currentPhase
                  ? 'opacity-100'
                  : 'opacity-30'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
              i < currentPhase
                ? 'bg-teal-100'
                : i === currentPhase
                  ? 'bg-violet-100'
                  : 'bg-slate-100'
            }`}>
              {i < currentPhase ? (
                <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : i === currentPhase ? (
                <div className="w-2.5 h-2.5 bg-violet-500 rounded-full animate-pulse" />
              ) : (
                <div className="w-2 h-2 bg-slate-300 rounded-full" />
              )}
            </div>
            <span className={`text-sm font-medium ${
              i < currentPhase
                ? 'text-teal-700'
                : i === currentPhase
                  ? 'text-violet-700'
                  : 'text-slate-400'
            }`}>
              {phase.label}
              {i === currentPhase && <span className="animate-pulse">...</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
