import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'

const MCP_URL = 'https://mcp.poofai.com/mcp'

export const metadata: Metadata = {
  title: 'Poof in Claude, ChatGPT and Grok — Ask Your AI About Your Books | Poof',
  description:
    'Connect Poof to Claude or ChatGPT and ask about your books in plain words: last month’s profit, who owes you, what bills are due, which jobs made money. Read-only, follows your role, disconnect any time.',
  keywords: 'Claude connector, ChatGPT app, bookkeeping AI, MCP, ask AI about my books',
  alternates: {
    canonical: 'https://www.poofai.com/ai',
  },
  openGraph: {
    title: 'Poof in Claude and ChatGPT',
    description: 'Ask Claude or ChatGPT about your books. Poof keeps the numbers; your AI reads them, read-only.',
    url: 'https://www.poofai.com/ai',
    siteName: 'Poof',
    type: 'website',
  },
}

const questions = [
  'How did we do last month?',
  'Who owes us money, and how late are they?',
  'What bills are due this week?',
  'Which jobs made money this quarter?',
  'Is last month closed? What’s still open?',
  'What’s waiting for my approval in Poof?',
]

const promises = [
  {
    title: 'Read-only',
    body: 'Your AI reads your books. It can’t post an entry, move money, send an invoice or approve a card. Changes still happen in Poof, by a person.',
  },
  {
    title: 'Your role, not more',
    body: 'It sees exactly what you’d see in Poof. An office manager’s AI gets receivables and invoices, not the P&L.',
  },
  {
    title: 'Names stay home',
    body: 'Customer and vendor names are swapped for codes before anything leaves Poof, and personal details are removed.',
  },
  {
    title: 'Off in one click',
    body: 'Disconnect any time from Settings → Chat apps → AI assistants in Poof. Removing someone from your company ends their AI’s access too.',
  },
]

function Steps({ steps }: { steps: React.ReactNode[] }) {
  return (
    <ol className="space-y-3">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ledger-100 text-ledger-700 text-sm font-bold flex items-center justify-center">{i + 1}</span>
          <span className="text-slate-700 leading-relaxed">{step}</span>
        </li>
      ))}
    </ol>
  )
}

export default function AiPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />

      <PageHero
        title={<>Ask Claude, ChatGPT or Grok about <span className="text-ledger-600">your books</span></>}
        subtitle="Poof keeps the numbers. Connect it to the AI you already use, and ask in plain words: profit, who owes you, what’s due, which jobs made money. Read-only, and only what your role can see."
      />

      {/* What you can ask */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-8 text-center">What you can ask</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions.map((q, i) => (
              <AnimateOnScroll key={q} animation="fade-up" delay={80 + i * 60}>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-slate-800 font-medium">“{q}”</div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How to connect */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-3 text-center">Connect in a minute</h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              You’ll need a Poof account. You sign in to Poof the normal way, pick Allow, and you’re back in your AI.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 h-full">
                <h3 className="text-xl font-bold font-display text-slate-900 mb-4">Claude</h3>
                <Steps
                  steps={[
                    <>In Claude, open <b>Settings → Connectors</b> and choose <b>Add custom connector</b>.</>,
                    <>Name it <b>Poof</b> and paste <code className="bg-ledger-100 text-ledger-700 px-1.5 py-0.5 rounded text-sm break-all">{MCP_URL}</code></>,
                    <>Press <b>Connect</b>, sign in to Poof, and choose <b>Allow</b>.</>,
                    <>Ask Claude about your books.</>,
                  ]}
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={140}>
              <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 h-full">
                <h3 className="text-xl font-bold font-display text-slate-900 mb-4">Grok</h3>
                <Steps
                  steps={[
                    <>In Grok, open <b>Connectors</b> and add a <b>custom</b> connector.</>,
                    <>Name it <b>Poof</b> and paste <code className="bg-ledger-100 text-ledger-700 px-1.5 py-0.5 rounded text-sm break-all">{MCP_URL}</code></>,
                    <>If it asks for a client ID, type <b>poof</b> and leave the secret empty.</>,
                    <>Connect, sign in to Poof, and choose <b>Allow</b>.</>,
                  ]}
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={180}>
              <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 h-full">
                <h3 className="text-xl font-bold font-display text-slate-900 mb-4">ChatGPT</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Poof is on its way to ChatGPT’s app directory. Once it’s listed, search for <b>Poof</b> in ChatGPT’s apps, press
                  Connect, sign in to Poof and choose <b>Allow</b>.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Want it sooner? <Link href="/contact" className="text-ledger-700 font-semibold hover:underline">Tell us</Link> and we’ll
                  let you know the day it’s live.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What it can and can't do */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-10 text-center">Your books stay yours</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {promises.map((p, i) => (
              <AnimateOnScroll key={p.title} animation="fade-up" delay={80 + i * 60}>
                <div className="border border-slate-200 rounded-xl p-6 h-full">
                  <h3 className="text-lg font-bold font-display text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{p.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <p className="text-slate-500 text-sm text-center mt-10">
            Building your own agent?{' '}
            <a href="https://app.poofai.com/docs/mcp.html" className="text-ledger-700 font-semibold hover:underline">Read the developer reference</a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl font-bold font-display text-white mb-6">Your books, in the AI you already use</h2>
            <p className="text-xl text-slate-400 mb-8">Start with Poof, then connect Claude or ChatGPT.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.poofai.com/register"
                className="bg-ledger-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-ledger-600 transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
              >
                Start free trial →
              </Link>
              <Link
                href="/security"
                className="border-2 border-slate-600 text-white font-semibold px-8 py-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg"
              >
                How Poof protects your data
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
