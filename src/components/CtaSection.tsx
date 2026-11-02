import Link from 'next/link'

/** The site's closing panel. One sentence, two doors, and a line for the owner who would rather hand the books
 *  to a person. Pages written for bookkeepers (`/close`) pass `person={false}`: a firm's clients are its own. */
export default function CtaSection({ person = true }: { person?: boolean }) {
  return (
    <section className="py-24 bg-ink">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-paper mb-5 leading-[1.05] tracking-[-0.035em] text-balance">
          The work disappears. The evidence doesn&apos;t.
        </h2>
        <p className="text-lg text-ledger-400 mb-8 max-w-2xl mx-auto">
          Free for good, with Poof Agent free for 30 days. Or book a demo and bring your books.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="https://app.poofai.com/register"
            className="bg-ledger-500 text-paper font-semibold px-7 py-3.5 rounded-lg hover:bg-ledger-400 hover:text-ink transition-colors text-base"
          >
            Start free
          </Link>
          <Link
            href="/demo"
            className="border-[1.5px] border-paper text-paper font-semibold px-7 py-3.5 rounded-lg hover:bg-paper/10 transition-colors text-base"
          >
            Book a demo
          </Link>
        </div>
        {person && (
          <p className="text-[15px] text-paper/80 mt-6">
            Rather not do the books at all?{' '}
            <Link href="/bookkeeper" className="text-ledger-400 font-semibold underline underline-offset-2 hover:text-paper">Ask for a bookkeeper</Link>
          </p>
        )}
      </div>
    </section>
  )
}
