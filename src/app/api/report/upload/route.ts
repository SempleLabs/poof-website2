import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import Papa from 'papaparse'
import type { ParsedTransaction } from '@/lib/report-types'

export const runtime = 'edge'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

// Rate limiting: simple in-memory store (resets on cold start)
const ipRequestCounts = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = ipRequestCounts.get(ip)
  if (!record || now > record.resetAt) {
    ipRequestCounts.set(ip, { count: 1, resetAt: now + 3600000 }) // 1 hour window
    return true
  }
  if (record.count >= 3) return false
  record.count++
  return true
}

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

  // Auto-detect column names
  const dateCol = headers.find(h =>
    /\b(date|trans.*date|posting.*date|posted)\b/i.test(h)
  ) || headers[0]

  const descCol = headers.find(h =>
    /\b(desc|description|memo|narrative|details|payee|name|transaction)\b/i.test(h)
  ) || headers[1]

  // Some banks use separate debit/credit columns, others use a single amount
  const amountCol = headers.find(h =>
    /\b(amount|value|sum)\b/i.test(h)
  )

  const debitCol = headers.find(h =>
    /\b(debit|withdrawal|expense|charge)\b/i.test(h)
  )

  const creditCol = headers.find(h =>
    /\b(credit|deposit|payment)\b/i.test(h)
  )

  const transactions: ParsedTransaction[] = []

  for (const row of rows) {
    const date = row[dateCol]?.trim()
    const description = row[descCol]?.trim()
    if (!date || !description) continue

    let amount: number
    let type: 'debit' | 'credit'

    if (amountCol && row[amountCol]) {
      const raw = parseFloat(row[amountCol].replace(/[,$()]/g, (m) => m === '(' ? '-' : m === ')' ? '' : ''))
      if (isNaN(raw)) continue
      // Negative = debit/expense, positive = credit/income
      amount = Math.abs(raw)
      type = raw < 0 ? 'debit' : 'credit'
    } else if (debitCol || creditCol) {
      const debitVal = debitCol ? parseFloat((row[debitCol] || '0').replace(/[,$]/g, '')) : 0
      const creditVal = creditCol ? parseFloat((row[creditCol] || '0').replace(/[,$]/g, '')) : 0
      if (isNaN(debitVal) && isNaN(creditVal)) continue
      if (creditVal > 0) {
        amount = creditVal
        type = 'credit'
      } else {
        amount = debitVal || 0
        type = 'debit'
      }
    } else {
      // Fallback: try the third column
      const fallbackCol = headers[2]
      if (!fallbackCol) continue
      const raw = parseFloat((row[fallbackCol] || '0').replace(/[,$()]/g, (m) => m === '(' ? '-' : m === ')' ? '' : ''))
      if (isNaN(raw)) continue
      amount = Math.abs(raw)
      type = raw < 0 ? 'debit' : 'credit'
    }

    if (amount === 0) continue

    transactions.push({ date, description, amount, type })
  }

  if (transactions.length === 0) {
    throw new Error('Could not parse any transactions from the CSV. Please check the file format.')
  }

  return transactions
}

const EXTRACTION_PROMPT = `Extract ALL transactions from this bank statement. Return a JSON array where each object has:
- "date": string (the transaction date as shown)
- "description": string (the transaction description/payee)
- "amount": number (positive value, no currency symbols)
- "type": "debit" or "credit"

Debits are withdrawals/expenses/charges. Credits are deposits/income/payments received.
Return ONLY the JSON array, nothing else.`

function parseTransactionJson(content: string): ParsedTransaction[] {
  const cleaned = content.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '')
  const parsed = JSON.parse(cleaned)
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error('No transactions found in the uploaded file.')
  }
  return parsed.map((t: Record<string, unknown>) => ({
    date: String(t.date || ''),
    description: String(t.description || ''),
    amount: Math.abs(Number(t.amount) || 0),
    type: (t.type === 'credit' ? 'credit' : 'debit') as 'debit' | 'credit',
  })).filter((t: ParsedTransaction) => t.amount > 0 && t.description)
}

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

  return parseTransactionJson(response.choices[0]?.message?.content || '[]')
}

async function parsePdfWithVision(base64Data: string): Promise<ParsedTransaction[]> {
  // PDFs must use the Responses API with input_file (Chat Completions image_url rejects non-image MIME types)
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
              file_data: `data:application/pdf;base64,${base64Data}`,
            },
          ],
        },
      ],
    }),
  })

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}))
    throw new Error(errorData?.error?.message || `OpenAI API error: ${res.status}`)
  }

  const data = await res.json()
  const text = data.output_text
    || data.output?.[0]?.content?.[0]?.text
    || '[]'

  return parseTransactionJson(text)
}

export async function POST(request: NextRequest) {
  // Rate limiting
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

    const fileName = file.name.toLowerCase()
    const ext = fileName.split('.').pop()

    let transactions: ParsedTransaction[]

    if (ext === 'csv') {
      const text = await file.text()
      transactions = parseCSV(text)
    } else if (['pdf', 'png', 'jpg', 'jpeg'].includes(ext || '')) {
      const buffer = await file.arrayBuffer()
      const base64 = btoa(
        new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
      if (ext === 'pdf') {
        transactions = await parsePdfWithVision(base64)
      } else {
        const mimeType = ext === 'png' ? 'image/png' : 'image/jpeg'
        transactions = await parseImageWithVision(base64, mimeType)
      }
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
