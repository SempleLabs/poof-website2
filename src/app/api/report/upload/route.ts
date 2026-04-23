import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import Papa from 'papaparse'
// pdf-parse is dynamically imported only when needed to avoid breaking other upload paths
import type { ParsedTransaction } from '@/lib/report-types'

// Use Node.js serverless runtime (not Edge) so we can use pdf-parse
// CSV and text-PDF paths are fast (<5s), Vision fallback may be slower

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

// Rate limiting: simple in-memory store (resets on cold start)
const ipRequestCounts = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = ipRequestCounts.get(ip)
  if (!record || now > record.resetAt) {
    ipRequestCounts.set(ip, { count: 1, resetAt: now + 3600000 })
    return true
  }
  if (record.count >= 3) return false
  record.count++
  return true
}

// --- Amount parsing (matches Poof app logic) ---

function cleanAmount(raw: string): number {
  if (!raw || !raw.trim()) return 0
  let cleaned = raw.trim()
  // Handle accounting format: (100.00) = -100
  const isNegative = cleaned.startsWith('(') && cleaned.endsWith(')')
  if (isNegative) cleaned = cleaned.slice(1, -1)
  // Strip $, commas, spaces
  cleaned = cleaned.replace(/[$,\s]/g, '')
  const num = parseFloat(cleaned)
  if (isNaN(num)) return 0
  return isNegative ? -num : num
}

// --- CSV Parsing (improved column detection) ---

function parseCSV(text: string): ParsedTransaction[] {
  const result = Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h: string) => h.trim().toLowerCase(),
  })

  if (!result.data || result.data.length === 0) {
    throw new Error('No transactions found in the CSV file.')
  }

  const rows = result.data as Record<string, string>[]
  const headers = Object.keys(rows[0] || {})

  // Auto-detect columns with broader patterns
  const dateCol = headers.find(h =>
    /\b(date|trans.*date|posting.*date|posted|post date|effective date|settlement date)\b/i.test(h)
  ) || headers[0]

  const descCol = headers.find(h =>
    /\b(desc|description|memo|narrative|details|payee|name|merchant|transaction|reference)\b/i.test(h)
  ) || headers[1]

  // Single amount column
  const amountCol = headers.find(h =>
    /\b(amount|value|sum|total)\b/i.test(h)
  )

  // Separate debit/credit columns
  const debitCol = headers.find(h =>
    /\b(debit|withdrawal|expense|charge|money out|outflow)\b/i.test(h)
  )
  const creditCol = headers.find(h =>
    /\b(credit|deposit|payment|money in|inflow)\b/i.test(h)
  )

  // Type column (some banks have explicit credit/debit labels)
  const typeCol = headers.find(h =>
    /\b(type|transaction type|trans type|cr\/dr|direction)\b/i.test(h)
  )

  const transactions: ParsedTransaction[] = []

  for (const row of rows) {
    const date = row[dateCol]?.trim()
    const description = row[descCol]?.trim()
    if (!date || !description) continue

    let amount: number
    let type: 'debit' | 'credit'

    if (amountCol && row[amountCol]?.trim()) {
      const raw = cleanAmount(row[amountCol])
      if (raw === 0) continue
      amount = Math.abs(raw)

      // Check if there's a type column that overrides sign
      if (typeCol && row[typeCol]) {
        const typeVal = row[typeCol].trim().toLowerCase()
        type = /credit|deposit|cr/i.test(typeVal) ? 'credit' : 'debit'
      } else {
        // Negative = debit/expense, positive = credit/income
        type = raw < 0 ? 'debit' : 'credit'
      }
    } else if (debitCol || creditCol) {
      const debitVal = debitCol ? Math.abs(cleanAmount(row[debitCol] || '')) : 0
      const creditVal = creditCol ? Math.abs(cleanAmount(row[creditCol] || '')) : 0
      if (debitVal === 0 && creditVal === 0) continue
      if (creditVal > 0) {
        amount = creditVal
        type = 'credit'
      } else {
        amount = debitVal
        type = 'debit'
      }
    } else {
      // Fallback: try the third column as amount
      const fallbackCol = headers[2]
      if (!fallbackCol) continue
      const raw = cleanAmount(row[fallbackCol] || '')
      if (raw === 0) continue
      amount = Math.abs(raw)
      type = raw < 0 ? 'debit' : 'credit'
    }

    transactions.push({ date, description, amount, type })
  }

  if (transactions.length === 0) {
    throw new Error('Could not parse any transactions from the CSV. Please check the file format.')
  }

  return transactions
}

// --- AI Extraction Prompt (with verification totals) ---

const EXTRACTION_PROMPT = `Extract ALL transactions from this bank statement. Return a JSON object with:
{
  "transactions": [
    { "date": "YYYY-MM-DD", "description": "merchant/payee name", "amount": 123.45, "type": "debit" }
  ],
  "totalDeposits": 1234.56,
  "totalWithdrawals": 5678.90
}

Rules:
- "date" must be in YYYY-MM-DD format
- "description" is the merchant or payee name (clean it up, remove extra whitespace)
- "amount" is always a POSITIVE number (no currency symbols, no commas)
- "type" is "debit" for withdrawals/expenses/charges, "credit" for deposits/income/payments received
- "totalDeposits" and "totalWithdrawals" are the statement summary totals if visible (for verification), or your calculated sums
- Include EVERY transaction on the statement — do not skip any
- Return ONLY valid JSON, no markdown, no code fences, no explanation`

// --- Parse AI response with number cleaning + reconciliation ---

interface ParseResult {
  transactions: ParsedTransaction[]
  totalDeposits?: number
  totalWithdrawals?: number
}

function parseTransactionJson(content: string): ParseResult {
  let cleaned = content.trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')

  // Fix comma-formatted numbers in JSON (e.g., "amount": 7,000.00 → 7000.00)
  cleaned = cleaned.replace(/"amount"\s*:\s*(\d{1,3}(,\d{3})+(\.\d+)?)/g, (match) => {
    return match.replace(/,(?=\d{3})/g, '')
  })

  const parsed = JSON.parse(cleaned)

  // Handle both array format and object-with-transactions format
  const txArray = Array.isArray(parsed) ? parsed : parsed.transactions
  if (!Array.isArray(txArray) || txArray.length === 0) {
    throw new Error('No transactions found in the uploaded file.')
  }

  const transactions = txArray.map((t: Record<string, unknown>) => ({
    date: String(t.date || ''),
    description: String(t.description || '').trim(),
    amount: Math.abs(Number(String(t.amount).replace(/[,$]/g, '')) || 0),
    type: (t.type === 'credit' ? 'credit' : 'debit') as 'debit' | 'credit',
  })).filter((t: ParsedTransaction) => t.amount > 0 && t.description)

  return {
    transactions,
    totalDeposits: parsed.totalDeposits ? Number(String(parsed.totalDeposits).replace(/[,$]/g, '')) : undefined,
    totalWithdrawals: parsed.totalWithdrawals ? Number(String(parsed.totalWithdrawals).replace(/[,$]/g, '')) : undefined,
  }
}

// Reconcile transaction types against statement totals
function reconcileTransactions(result: ParseResult): ParsedTransaction[] {
  const { transactions, totalDeposits, totalWithdrawals } = result

  // If no statement totals available, can't reconcile
  if (!totalDeposits || !totalWithdrawals) return transactions

  const round = (n: number) => Math.round(n * 100) / 100

  // Calculate current sums
  let creditSum = round(transactions.filter(t => t.type === 'credit').reduce((s, t) => s + t.amount, 0))
  let debitSum = round(transactions.filter(t => t.type === 'debit').reduce((s, t) => s + t.amount, 0))
  const expectedCredits = round(totalDeposits)
  const expectedDebits = round(totalWithdrawals)

  // If sums already match (within $0.02 tolerance), no reconciliation needed
  if (Math.abs(creditSum - expectedCredits) < 0.02 && Math.abs(debitSum - expectedDebits) < 0.02) {
    return transactions
  }

  // Try to fix misclassified transactions by flipping them
  // Sort by amount ascending so we try small fixes first
  const sortedTxs = [...transactions].sort((a, b) => a.amount - b.amount)

  for (const tx of sortedTxs) {
    // Recalculate current sums
    creditSum = round(transactions.filter(t => t.type === 'credit').reduce((s, t) => s + t.amount, 0))
    debitSum = round(transactions.filter(t => t.type === 'debit').reduce((s, t) => s + t.amount, 0))

    // Check if flipping this transaction would bring both sums closer to expected
    if (tx.type === 'credit') {
      const newCreditSum = round(creditSum - tx.amount)
      const newDebitSum = round(debitSum + tx.amount)
      const currentError = Math.abs(creditSum - expectedCredits) + Math.abs(debitSum - expectedDebits)
      const newError = Math.abs(newCreditSum - expectedCredits) + Math.abs(newDebitSum - expectedDebits)
      if (newError < currentError) {
        tx.type = 'debit'
      }
    } else {
      const newCreditSum = round(creditSum + tx.amount)
      const newDebitSum = round(debitSum - tx.amount)
      const currentError = Math.abs(creditSum - expectedCredits) + Math.abs(debitSum - expectedDebits)
      const newError = Math.abs(newCreditSum - expectedCredits) + Math.abs(newDebitSum - expectedDebits)
      if (newError < currentError) {
        tx.type = 'credit'
      }
    }
  }

  return transactions
}

// --- PDF Parsing: Text-first with Vision fallback ---

async function parsePdf(buffer: Buffer): Promise<ParsedTransaction[]> {
  // Stage 1: Try text extraction first (fast, cheap)
  try {
    const { PDFParse } = await import('pdf-parse')
    const parser = new PDFParse({ data: buffer })
    const result = await parser.getText()
    const text = result.text || ''

    if (text.length > 200) {
      // Got enough text — send to GPT-4o as text (not Vision)
      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You extract financial transactions from bank statement text. Return ONLY valid JSON — no markdown, no code fences, no explanation.',
          },
          {
            role: 'user',
            content: `Here is the raw text extracted from a bank statement PDF:\n\n${text.slice(0, 15000)}\n\n${EXTRACTION_PROMPT}`,
          },
        ],
        max_tokens: 4000,
        temperature: 0,
        response_format: { type: 'json_object' },
      })

      const parseResult = parseTransactionJson(response.choices[0]?.message?.content || '[]')
      return reconcileTransactions(parseResult)
    }
  } catch {
    // Text extraction failed — fall through to Vision
  }

  // Stage 2: Vision fallback (for scanned/image PDFs)
  const base64 = buffer.toString('base64')
  const res = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      instructions: 'You extract financial transactions from bank statements. Return ONLY valid JSON — no markdown, no code fences, no explanation.',
      input: [
        {
          role: 'user',
          content: [
            { type: 'input_text', text: EXTRACTION_PROMPT },
            {
              type: 'input_file',
              filename: 'statement.pdf',
              file_data: `data:application/pdf;base64,${base64}`,
            },
          ],
        },
      ],
    }),
  })

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}))
    throw new Error(errorData?.error?.message || `PDF parsing failed (${res.status})`)
  }

  const data = await res.json()
  const text = data.output_text
    || data.output?.[0]?.content?.[0]?.text
    || '[]'

  return reconcileTransactions(parseTransactionJson(text))
}

// --- Image parsing via GPT-4o Vision ---

async function parseImageWithVision(base64Data: string, mimeType: string): Promise<ParsedTransaction[]> {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You extract financial transactions from bank statements. Return ONLY valid JSON — no markdown, no code fences, no explanation.',
      },
      {
        role: 'user',
        content: [
          { type: 'text', text: EXTRACTION_PROMPT },
          {
            type: 'image_url',
            image_url: {
              url: `data:${mimeType};base64,${base64Data}`,
              detail: 'high',
            },
          },
        ],
      },
    ],
    max_tokens: 4000,
    temperature: 0,
  })

  return reconcileTransactions(parseTransactionJson(response.choices[0]?.message?.content || '[]'))
}

// --- Main handler ---

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. You can generate up to 3 reports per hour.' },
      { status: 429 }
    )
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded.' }, { status: 400 })
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File too large. Maximum size is 5MB.' }, { status: 400 })
    }

    const ext = file.name.toLowerCase().split('.').pop()
    let transactions: ParsedTransaction[]

    if (ext === 'csv') {
      const text = await file.text()
      transactions = parseCSV(text)
    } else if (ext === 'pdf') {
      const arrayBuffer = await file.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      transactions = await parsePdf(buffer)
    } else if (['png', 'jpg', 'jpeg'].includes(ext || '')) {
      const arrayBuffer = await file.arrayBuffer()
      const base64 = Buffer.from(arrayBuffer).toString('base64')
      const mimeType = ext === 'png' ? 'image/png' : 'image/jpeg'
      transactions = await parseImageWithVision(base64, mimeType)
    } else {
      return NextResponse.json(
        { error: 'Unsupported file type. Please upload a CSV, PDF, PNG, or JPG.' },
        { status: 400 }
      )
    }

    // Limit to 500 transactions to control costs
    if (transactions.length > 500) {
      transactions = transactions.slice(0, 500)
    }

    return NextResponse.json({ transactions, count: transactions.length })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to parse the file.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
