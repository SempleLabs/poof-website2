export default function FeatureSection() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
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
      description: "Connect your bank accounts and credit cards securely. Transactions sync automatically with AI-suggested categorization to streamline your reconciliation process.",
      features: [
        "Real-time transaction sync",
        "AI-assisted reconciliation",
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
      description: "Get instant access to P&L statements, balance sheets, and cash flow reports with a live dashboard. Always know exactly where your business stands financially.",
      features: [
        "Live dashboard view",
        "Instant P&L statements",
        "Real-time balance sheets",
        "Cash flow analysis"
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V7H19A1,1 0 0,1 20,8V19A3,3 0 0,1 17,22H7A3,3 0 0,1 4,19V8A1,1 0 0,1 5,7H9V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V7H13V5A1,1 0 0,0 12,4M6,9V19A1,1 0 0,0 7,20H17A1,1 0 0,0 18,19V9H6Z"/>
        </svg>
      ),
      title: "Small Business Focus",
      description: "Built specifically for small businesses with intuitive workflows. No accounting degree required - designed for busy entrepreneurs who need clarity, not complexity.",
      features: [
        "Easy setup in minutes",
        "Intuitive for non-accountants",
        "Small business workflows",
        "Affordable pricing"
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
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
          <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"/>
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
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,12L16,16H13.5V19H10.5V16H8L12,12Z"/>
        </svg>
      ),
      title: "Simple Invoice Tracking",
      description: "Keep track of invoices sent and payments received in one organized view. Never lose track of what customers owe you.",
      features: [
        "Invoice status tracking",
        "Payment reminders",
        "Customer payment history",
        "Overdue alerts"
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"/>
        </svg>
      ),
      title: "Multi-User Access",
      description: "Collaborate with your team, accountant, or bookkeeper. Set permissions and track who made what changes.",
      features: [
        "Role-based permissions",
        "Activity tracking",
        "Accountant collaboration",
        "Team management"
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