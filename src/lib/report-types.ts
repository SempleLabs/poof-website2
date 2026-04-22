export interface ParsedTransaction {
  date: string
  description: string
  amount: number
  type: 'debit' | 'credit'
}

export interface CategorizedTransaction extends ParsedTransaction {
  category: string
}

export interface SpendScore {
  overall: number // 0-100
  savingsRate: { score: number; label: string }
  spendingDiversity: { score: number; label: string }
  subscriptionLoad: { score: number; label: string }
  largestTransactionRatio: { score: number; label: string }
}

export interface ReportSummary {
  totalIncome: number
  totalExpenses: number
  net: number
  transactionCount: number
  dateRange: { start: string; end: string }
  topCategories: { name: string; total: number; percentage: number }[]
  largestTransaction: { description: string; amount: number; date: string }
}

export interface FinancialReport {
  transactions: CategorizedTransaction[]
  summary: ReportSummary
  spendScore: SpendScore
  narrative: string
  imageBase64?: string
}

export type ReportStep = 'upload' | 'processing' | 'email-gate' | 'results'
