import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import { getFaqPageSchema, getBreadcrumbSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'File your 1099s with Poof — the first 3 forms free | Poof',
  description:
    'Tell Poof who you paid. Poof collects the W-9s, files your 1099-NEC and 1099-MISC forms with the IRS, and emails or mails every contractor their copy. No IRS filer code needed. The first 3 forms each year are free, then $2.49 a form. 2026 forms are due February 1, 2027.',
  alternates: { canonical: 'https://www.poofai.com/1099s' },
  openGraph: {
    title: 'Tell Poof who you paid. Poof files the 1099s.',
    description: 'W-9s collected, forms filed with the IRS, copies emailed or mailed. The first 3 forms each year free.',
    url: 'https://www.poofai.com/1099s',
    siteName: 'Poof',
    type: 'website',
  },
}

// The sign-up link carries the reason for coming: a new account lands on the guided 1099 page, not the books.
const FILE = 'https://app.poofai.com/register?for=1099s'

const STEPS: [string, string][] = [
  ['Your business', 'Your legal name, EIN, address and phone, typed once.'],
  ['Who you paid', 'Type your contractors in, upload a spreadsheet, or connect your bank and tick the ones Poof finds. Poof brings in the year’s payments back to January 1 and keeps them out of any books. An amount you type is marked “entered by you”.'],
  ['Their W-9s', 'One click emails every contractor a W-9 link, and for anyone without an email Poof gives you a link to text them. A board shows who’s in, and Poof reminds the rest every five days, up to three times. You can type a tax ID or upload a W-9 you already have.'],
  ['Review and approve', 'Every contractor, the form and box, the amount, and how their copy goes. One signature, your name, title and “I agree”, approves the forms and authorizes Poof to file them.'],
  ['Poof files', 'Poof files with the IRS, emails each contractor who agreed to it their copy, and mails the rest first-class. You get the IRS receipt by email, or exactly what to fix.'],
]

const PRICES: [string, string][] = [
  ['Preparing the forms', 'Free'],
  ['Filing: the first 3 forms each year', 'Free'],
  ['Filing: each form after that', '$2.49'],
  ['Each copy Poof emails', 'Free'],
  ['Each copy Poof mails', '$1.79'],
]

const faqs = [
  { question: 'Do I need an IRS filer code (TCC)?', answer: 'No. Poof files under its own. You sign one authorization when you approve the forms, and you can withdraw it any time before they are filed.' },
  { question: 'My books aren’t in Poof. Can I still file here?', answer: 'Yes. Type your contractors in, upload a spreadsheet, or connect your bank and let Poof find the payments. None of it touches any books unless you start them. If you want them later, your books can run from the same bank, free.' },
  { question: 'When does Poof file?', answer: 'After the year ends. Forms for 2026 are filed in January 2027 and are due to the IRS and to your contractors by February 1, 2027. If Poof is mailing paper copies, approve by late January so they are in the mail in time. Signing up after the deadline still works; Poof files them late.' },
  { question: 'Which forms does Poof file?', answer: 'Form 1099-NEC, for contractors, and Form 1099-MISC, for rent and the other boxes. Poof counts payments by check, ACH, cash and Zelle against the $2,000 line for 2026, and leaves out card and PayPal payments, which the processor reports on a 1099-K.' },
  { question: 'What if a contractor never sends their W-9?', answer: 'Poof reminds them every five days, up to three times, with a fresh link each time, and from December 1 shows you who is still missing. You can type in a tax ID you already have or upload a W-9 PDF instead.' },
  { question: 'I’m a bookkeeper. Can I file for my clients?', answer: 'Yes. Every client’s forms, missing W-9s and signatures are on one page. Send for signature emails the client’s owner a one-use link, with no login, and you pay for all your clients’ forms in one checkout: $2.49 a form up to 25 a year, then $1.49, with each client’s first 3 free.' },
]

export default function File1099sPage() {
  return (
    <main id="main-content" className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(faqs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.poofai.com' },
              { name: 'File your 1099s', url: 'https://www.poofai.com/1099s' },
            ])
          ),
        }}
      />
      <Header />

      <section className="pt-32 pb-10">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">1099s for 2026 · due February 1, 2027</p>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[76px] leading-[1] tracking-[-0.035em] text-ink mb-5 text-balance">Tell Poof who you paid. Poof files the 1099s.</h1>
          <p className="text-lg sm:text-xl text-muted max-w-[58ch] leading-[1.45]">
            No IRS filer code and no books to set up. Poof collects the W-9s, files with the IRS once you approve, and sends every contractor their copy. <b className="text-ink font-semibold">Your first 3 forms each year are free.</b>
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            <Link href={FILE} className="inline-block rounded-lg bg-ledger-500 text-white font-semibold text-[15px] px-[18px] py-[11px] hover:bg-ledger-600 transition-colors">File my 1099s</Link>
            <a href="#prices" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">See the prices</a>
          </div>
          <p className="text-sm text-muted mt-4 max-w-[60ch]">A free Poof account opens straight onto the five steps. No card until you file more than three.</p>
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Five steps</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-6 text-balance">From a list of names to the IRS receipt.</h2>
          <ol className="border-t border-ink">
            {STEPS.map(([h, t], i) => (
              <li key={h} className="grid grid-cols-[40px_1fr] gap-3 py-5 border-b border-rule items-start">
                <span className="font-mono tabular text-sm text-muted pt-0.5">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-ink text-[16px]">{h}</h3>
                  <p className="text-[15px] text-muted leading-relaxed mt-1 max-w-[62ch]">{t}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-muted mt-4">Want to total the year first? The <Link href="/blog/1099-threshold-2026" className="text-ledger-600 font-semibold hover:text-ledger-700">2026 threshold, explained</Link>, and a <Link href="/downloads/1099-vendor-tracker-2026.csv" className="text-ledger-600 font-semibold hover:text-ledger-700">free vendor tracker</Link>.</p>
        </div>
      </section>

      <section className="py-14 border-t border-rule" id="prices">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">The prices</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-6 text-balance">A one-contractor shop pays nothing.</h2>
          <div className="bg-white border border-rule px-[18px] pt-1.5 pb-4 max-w-[560px]">
            <table className="w-full border-collapse">
              <tbody>
                {PRICES.map(([k, v]) => (
                  <tr key={k}>
                    <td className="py-2.5 border-b border-rule text-[15px]">{k}</td>
                    <td className="py-2.5 border-b border-rule text-right font-mono tabular whitespace-nowrap">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-muted mt-3">Paid in one checkout before Poof files or mails. A business with 8 contractors who all take their copy by email pays 5 × $2.49 = <span className="font-mono tabular">$12.45</span>.</p>
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Next January</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance">Next year&apos;s 1099s are one approval.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-ink mt-6">
            {[
              ['The W-9 at the first payment', 'With the bank connected, Poof spots a new contractor when you first pay them and asks for the W-9 then, while they still answer email.'],
              ['A line on the 1st of each month', '“You’ve paid 4 contractors $18,400 this year; 3 of 4 W-9s are in.” By email, or in Telegram or Slack. You can switch it off.'],
              ['Ready in December', 'Every form made from the year’s payments, waiting for one look and one signature.'],
              ['Your books, from the same bank', 'The bank you connected for 1099s is half your bookkeeping already. Poof keeps the books free whenever you want them.'],
            ].map(([h, t]) => (
              <div key={h} className="py-5 border-b border-rule">
                <h3 className="font-semibold text-ink text-[16px]">{h}</h3>
                <p className="text-sm text-muted leading-relaxed mt-1.5 max-w-[48ch]">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Six questions</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-8 text-balance">Before you file.</h2>
          <dl className="border-t border-ink">
            {faqs.map((f) => (
              <div key={f.question} className="py-5 border-b border-rule">
                <dt className="font-semibold text-ink">{f.question}</dt>
                <dd className="text-[15px] text-muted leading-relaxed mt-2 max-w-[68ch]">{f.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm text-muted mt-4">General information, not tax advice; your CPA has the final word.</p>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
