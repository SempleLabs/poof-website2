import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Poof',
  description: 'How Poof (Semple Labs LLC) collects, uses, shares, and protects your information, and the choices and rights you have.',
  alternates: {
    canonical: 'https://www.poofai.com/privacy',
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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <h1 className="text-4xl sm:text-5xl font-bold font-display text-slate-900 mb-3">Privacy Policy</h1>
        <p className="text-slate-500">Last updated: {UPDATED}</p>

        <p className="mt-6 text-slate-700 leading-relaxed">
          This Privacy Policy explains how Poof, a product of Semple Labs LLC (&ldquo;Poof,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us&rdquo;), collects, uses, shares, and protects information when you visit{' '}
          <span className="font-medium">poofai.com</span>, use our website tools (including the free Spend Score
          analyzer), or sign up for our product.
        </p>

        <Section title="Information we collect">
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Information you provide:</span> your name, email address, business details, and any message you submit through our contact, demo, newsletter, or analysis-request forms.</li>
            <li><span className="font-medium">Spend Score uploads:</span> when you use the free Spend Score tool, the bank statement (CSV, PDF, or image) you upload and the transactions it contains.</li>
            <li><span className="font-medium">Account &amp; product data:</span> if you create a Poof account, the financial data you connect or import in order to use the bookkeeping product.</li>
            <li><span className="font-medium">Usage &amp; device data:</span> pages viewed, referring URLs, IP address, browser and device information, and similar analytics data collected through cookies and similar technologies (only where permitted by your consent — see &ldquo;Cookies &amp; tracking&rdquo;).</li>
          </ul>
        </Section>

        <Section title="How we use your information">
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide, operate, and improve our website, tools, and product.</li>
            <li>To generate your Spend Score report and respond to your requests.</li>
            <li>To communicate with you about your account, support, and — where you have opted in — product updates and marketing.</li>
            <li>To measure website performance and, with your consent, advertising effectiveness.</li>
            <li>To protect against fraud and abuse and to comply with legal obligations.</li>
          </ul>
        </Section>

        <Section title="Service providers &amp; sharing">
          <p>We do not sell your personal information. We share data only with service providers (processors) that help us operate, and only as needed:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">OpenAI</span> — processes the contents of your Spend Score upload (and certain in-product AI features) to generate results. It is not used to train their models via our API usage.</li>
            <li><span className="font-medium">Supabase</span> — stores form submissions and account data.</li>
            <li><span className="font-medium">Resend</span> — sends transactional and (where opted in) marketing email.</li>
            <li><span className="font-medium">Plaid</span> — securely connects bank accounts in the product with read-only access; we never receive your banking credentials.</li>
            <li><span className="font-medium">Google Analytics</span> and <span className="font-medium">X (Twitter) Ads</span> — measure traffic and ad performance, loaded only after you grant consent.</li>
          </ul>
          <p>We may also disclose information if required by law or to protect our rights, and in connection with a merger, acquisition, or sale of assets.</p>
        </Section>

        <Section title="Cookies &amp; tracking">
          <p>
            Essential cookies are required for the site to function. Analytics and advertising technologies (Google
            Analytics and the X/Twitter pixel) are loaded <span className="font-medium">only after you accept</span> via
            our consent banner, and we apply Google Consent Mode defaults that deny tracking storage until then. You can
            change your choice at any time by clearing the <span className="font-mono text-sm">poof-consent</span> setting
            in your browser storage.
          </p>
        </Section>

        <Section title="Data retention">
          <p>
            Spend Score uploads are processed to create your report and are not retained by us afterward. If you provide
            your email to receive or unlock a report, we retain that email. Account and form data is retained for as long
            as needed to provide the service and meet legal obligations, after which it is deleted or anonymized.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            Depending on where you live (e.g., the EEA/UK under GDPR or California under the CCPA/CPRA), you may have the
            right to access, correct, delete, or port your personal information, to object to or restrict certain
            processing, and to opt out of targeted advertising or &ldquo;sharing.&rdquo; To exercise these rights, contact
            us using the details below. We will not discriminate against you for exercising them.
          </p>
        </Section>

        <Section title="Security">
          <p>
            We use industry-standard safeguards, including encryption in transit (HTTPS/TLS) and access controls, to
            protect your information. No method of transmission or storage is completely secure, so we cannot guarantee
            absolute security.
          </p>
        </Section>

        <Section title="Children&apos;s privacy">
          <p>Our services are not directed to children under 16, and we do not knowingly collect their personal information.</p>
        </Section>

        <Section title="Changes to this policy">
          <p>We may update this policy from time to time. We will post the updated version here and revise the &ldquo;Last updated&rdquo; date above.</p>
        </Section>

        <Section title="Contact us">
          <p>
            Questions about this policy or your data? Email{' '}
            <a href="mailto:support@poofai.com" className="text-gold-600 underline hover:text-gold-700">support@poofai.com</a>{' '}
            or reach us through our <Link href="/contact" className="text-gold-600 underline hover:text-gold-700">contact page</Link>.
            Poof is operated by Semple Labs LLC.
          </p>
        </Section>
      </article>
      <Footer />
    </main>
  )
}
