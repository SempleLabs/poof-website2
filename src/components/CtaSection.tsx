import Link from 'next/link'

/** The site's closing panel. One sentence, two doors. */
export default function CtaSection() {
  return (
    <section className="py-24 bg-ink">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-paper mb-5 leading-[1.05] tracking-[-0.035em] text-balance">
          The work disappears. The evidence doesn&apos;t.
        </h2>
        <p className="text-lg text-ledger-400 mb-8 max-w-2xl mx-auto">
          Thirty days free, then half price for three months. Every feature. Or book a demo and bring your books.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="https://app.poofai.com/register"
            className="bg-ledger-500 text-paper font-semibold px-7 py-3.5 rounded-lg hover:bg-ledger-400 hover:text-ink transition-colors text-base"
          >
            Start free trial
          </Link>
          <Link
            href="/demo"
            className="border-[1.5px] border-paper text-paper font-semibold px-7 py-3.5 rounded-lg hover:bg-paper/10 transition-colors text-base"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  )
}
