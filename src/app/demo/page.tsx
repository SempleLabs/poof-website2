import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'
import DemoBookingEmbed from '@/components/DemoBookingEmbed'

export const metadata: Metadata = {
  title: 'Book a Demo | Poof',
  description:
    'Pick a time for a personalized 30-minute demo of Poof. See how AI-powered, controller-reviewed bookkeeping works for your business — no pressure.',
  alternates: {
    canonical: 'https://www.poofai.com/demo',
  },
}

const whatToExpect = [
  {
    title: 'Personalized walkthrough',
    body: 'See how Poof works specifically for your business type.',
  },
  {
    title: 'Live AI demonstration',
    body: 'Watch our AI categorize real transactions in real-time.',
  },
  {
    title: 'Q&A session',
    body: 'Get answers to your specific questions and concerns.',
  },
]

export default function DemoPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />

      <PageHero
        title={<>See <span className="text-gradient-gold">Poof</span> in Action</>}
        subtitle="Pick a time below for a personalized demo and see how Poof can transform your bookkeeping."
      >
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-slate-600 mt-6">
          {['30-minute demo', 'Personalized for your business', 'No pressure'].map((item) => (
            <div key={item} className="flex items-center">
              <svg className="w-5 h-5 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </PageHero>

      {/* Booking Section */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="scale-up" delay={200}>
            <div className="bg-white border border-slate-200 rounded-2xl p-2 sm:p-4 h-[680px] md:h-[760px] overflow-hidden">
              <DemoBookingEmbed />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 text-center mb-10">
              What to expect
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatToExpect.map((item, i) => (
              <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 100}>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 h-full text-center">
                  <div className="w-8 h-8 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {i + 1}
                  </div>
                  <div className="font-semibold text-slate-900 mb-1">{item.title}</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{item.body}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-10">
            We respect your privacy. Your information is only used to schedule and conduct your demo.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
