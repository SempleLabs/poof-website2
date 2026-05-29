import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Poof',
  description: 'The terms that govern your use of the Poof website, tools, and product, operated by Semple Labs LLC.',
  alternates: {
    canonical: 'https://www.poofai.com/terms',
  },
}

const UPDATED = 'May 29, 2026'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold font-display text-slate-900 mb-3">{title}</h2>
      <div className="space-y-3 text-slate-700 leading-relaxed">{children}</div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <h1 className="text-4xl sm:text-5xl font-bold font-display text-slate-900 mb-3">Terms of Service</h1>
        <p className="text-slate-500">Last updated: {UPDATED}</p>

        <p className="mt-6 text-slate-700 leading-relaxed">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Poof website, tools, and
          product (the &ldquo;Service&rdquo;), operated by Semple Labs LLC (&ldquo;Poof,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us&rdquo;). By using the Service, you agree to these Terms.
        </p>

        <Section title="Use of the Service">
          <p>You may use the Service only in compliance with these Terms and applicable law. You agree not to misuse the Service, interfere with its operation, attempt to access it using a method other than the interface we provide, or use it to infringe the rights of others.</p>
        </Section>

        <Section title="Accounts">
          <p>If you create an account, you are responsible for safeguarding your credentials and for all activity under your account. You must provide accurate information and keep it current. Notify us promptly of any unauthorized use.</p>
        </Section>

        <Section title="Free trial &amp; billing">
          <p>Paid plans and any free trial are described on our <Link href="/pricing" className="text-gold-600 underline hover:text-gold-700">pricing page</Link>. Unless stated otherwise, subscriptions renew automatically until cancelled, and fees are billed in advance and are non-refundable except where required by law. We may change pricing on prospective notice.</p>
        </Section>

        <Section title="The Spend Score tool and not financial advice">
          <p>The free Spend Score tool and other analyses are provided for informational purposes only. They are not a CPA audit, attestation, tax, accounting, investment, or legal advice. You are responsible for verifying results and for your own financial and tax decisions.</p>
        </Section>

        <Section title="Intellectual property">
          <p>The Service, including its software, content, and trademarks, is owned by Semple Labs LLC or its licensors and is protected by law. We grant you a limited, non-exclusive, non-transferable right to use the Service as permitted by these Terms. You retain ownership of data you submit and grant us a license to process it solely to provide the Service.</p>
        </Section>

        <Section title="Disclaimers">
          <p>The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or fully accurate.</p>
        </Section>

        <Section title="Limitation of liability">
          <p>To the maximum extent permitted by law, Semple Labs LLC will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits or data, arising from your use of the Service. Our aggregate liability will not exceed the greater of the amounts you paid us in the twelve months before the claim or USD $100.</p>
        </Section>

        <Section title="Termination">
          <p>You may stop using the Service at any time. We may suspend or terminate access if you violate these Terms or to protect the Service. Provisions that by their nature should survive termination will survive.</p>
        </Section>

        <Section title="Governing law">
          <p>These Terms are governed by the laws of the State in which Semple Labs LLC is organized, without regard to its conflict-of-laws rules. Disputes will be resolved in the courts located there, unless applicable law requires otherwise.</p>
        </Section>

        <Section title="Changes to these Terms">
          <p>We may update these Terms from time to time. We will post the updated version here and revise the &ldquo;Last updated&rdquo; date. Your continued use of the Service after changes take effect constitutes acceptance.</p>
        </Section>

        <Section title="Contact us">
          <p>
            Questions about these Terms? Email{' '}
            <a href="mailto:semplelabs@gmail.com" className="text-gold-600 underline hover:text-gold-700">semplelabs@gmail.com</a>{' '}
            or use our <Link href="/contact" className="text-gold-600 underline hover:text-gold-700">contact page</Link>.
          </p>
        </Section>
      </article>
      <Footer />
    </main>
  )
}
