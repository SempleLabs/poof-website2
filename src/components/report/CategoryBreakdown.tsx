'use client'

interface CategoryBreakdownProps {
  categories: { name: string; total: number; percentage: number }[]
  blurred?: boolean
}

const COLORS = [
  '#8b5cf6', // violet
  '#6366f1', // indigo
  '#14b8a6', // teal
  '#f59e0b', // amber
  '#ef4444', // red
  '#3b82f6', // blue
  '#10b981', // emerald
  '#f97316', // orange
  '#ec4899', // pink
  '#64748b', // slate
]

export default function CategoryBreakdown({ categories, blurred }: CategoryBreakdownProps) {
  const sorted = [...categories].sort((a, b) => b.total - a.total)

  // Build donut chart segments
  const radius = 70
  const cx = 90
  const cy = 90
  const circumference = 2 * Math.PI * radius
  let cumulativePercent = 0

  return (
    <div className={`relative ${blurred ? 'filter blur-sm select-none pointer-events-none' : ''}`}>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Donut Chart */}
        <div className="flex-shrink-0">
          <svg width="180" height="180" viewBox="0 0 180 180">
            {sorted.map((cat, i) => {
              const percent = cat.percentage / 100
              const dashLength = circumference * percent
              const dashOffset = circumference * (1 - cumulativePercent)
              cumulativePercent += percent

              return (
                <circle
                  key={cat.name}
                  cx={cx}
                  cy={cy}
                  r={radius}
                  fill="none"
                  stroke={COLORS[i % COLORS.length]}
                  strokeWidth="24"
                  strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                  strokeDashoffset={dashOffset}
                  transform={`rotate(-90 ${cx} ${cy})`}
                  className="transition-all duration-500"
                />
              )
            })}
            <circle cx={cx} cy={cy} r="56" fill="white" />
            <text x={cx} y={cy - 6} textAnchor="middle" className="text-xs fill-slate-500" fontSize="11">
              Top Category
            </text>
            <text x={cx} y={cy + 12} textAnchor="middle" className="font-bold fill-slate-900" fontSize="13">
              {sorted[0]?.name || ''}
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="flex-1 w-full space-y-3">
          {sorted.slice(0, 8).map((cat, i) => (
            <div key={cat.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5 min-w-0">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: COLORS[i % COLORS.length] }}
                />
                <span className="text-sm text-slate-700 truncate">{cat.name}</span>
              </div>
              <div className="flex items-center space-x-3 flex-shrink-0 ml-3">
                <span className="text-sm font-medium text-slate-900">
                  ${cat.total.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </span>
                <div className="w-20 bg-slate-100 rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(cat.percentage, 100)}%`,
                      backgroundColor: COLORS[i % COLORS.length],
                    }}
                  />
                </div>
                <span className="text-xs text-slate-500 w-10 text-right">{cat.percentage.toFixed(0)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
