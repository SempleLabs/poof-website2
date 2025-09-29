export default function FeatureSection() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 6c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/>
        </svg>
      ),
      title: "AI-Powered Categorization",
      description: "Our advanced AI learns your business patterns and categorizes transactions with exceptional accuracy. No more manual sorting through hundreds of transactions.",
      features: [
        "Exceptional accuracy rate",
        "Learns your business patterns",
        "Handles complex transactions",
        "Reduces manual work by 90%"
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
        </svg>
      ),
      title: "Bank Sync & Auto-Reconciliation",
      description: "Connect all your bank accounts and credit cards. Transactions sync automatically and reconcile in real-time, giving you an always up-to-date view.",
      features: [
        "Real-time transaction sync",
        "Automatic reconciliation",
        "Support for 10,000+ banks",
        "Secure bank-level encryption"
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: "Real-Time Financial Reports",
      description: "Get instant access to P&L statements, balance sheets, and cash flow reports. Always know exactly where your business stands financially.",
      features: [
        "Instant P&L statements",
        "Real-time balance sheets",
        "Cash flow analysis",
        "Custom date ranges"
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      title: "Smart Receipt Processing",
      description: "Simply take a photo of any receipt and our AI extracts all the details automatically. No more manual data entry or lost receipts.",
      features: [
        "OCR technology",
        "Automatic data extraction",
        "Cloud storage & backup",
        "Mobile app integration"
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      ),
      title: "Tax-Ready Books",
      description: "Your books stay tax-ready year-round with proper categorization and documentation. Make tax season stress-free.",
      features: [
        "IRS-compliant categorization",
        "Automatic tax prep",
        "Audit trail tracking",
        "Year-end reporting"
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10zM7 3h10c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z"/>
        </svg>
      ),
      title: "Mobile-First Design",
      description: "Manage your books on the go with our beautiful mobile app. Everything syncs seamlessly across all your devices.",
      features: [
        "Native mobile apps",
        "Offline capability",
        "Cross-device sync",
        "Responsive design"
      ]
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Small Businesses
            <span className="hero-text"> Choose Poof</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop spending hours on bookkeeping. Our AI handles the tedious work so you can focus on what matters most - growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-poof-primary-500 to-poof-secondary-500"></div>

              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-poof-primary-500 to-poof-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 text-white shadow-lg flex-shrink-0">
                  {feature.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-poof-success-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-poof-success-50 text-poof-success-700 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            No setup fees • Cancel anytime • 30-day free trial
          </div>
        </div>
      </div>
    </section>
  )
}