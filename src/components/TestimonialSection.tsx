export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Johnson Marketing Agency",
      avatar: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      quote: "Poof saved me 20 hours per month on bookkeeping. I can finally focus on growing my agency instead of drowning in spreadsheets.",
      results: "20hrs saved/month"
    },
    {
      name: "Mike Chen",
      business: "Chen's Auto Repair",
      avatar: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      quote: "The AI categorization is scary accurate. It understands my business better than I do sometimes. Best decision I've made for my shop.",
      results: "Incredibly accurate"
    },
    {
      name: "Lisa Rodriguez",
      business: "Bloom Boutique",
      avatar: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      quote: "I was dreading tax season until I found Poof. Everything was organized and ready to go. My accountant was impressed!",
      results: "Tax-ready books"
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how small business owners are saving time and reducing stress with Poof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:shadow-magical transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-poof-primary-100 rounded-full flex items-center justify-center mr-4 text-poof-primary-600">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-poof-success-50 text-poof-success-700 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {testimonial.results}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="flex justify-center items-center space-x-1 text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600">
            <span className="font-semibold">Loved by</span> small business owners everywhere
          </p>
        </div>
      </div>
    </section>
  )
}