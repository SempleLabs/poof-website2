'use client'

import { AutoAwesome, TableChart, Business } from '@mui/icons-material';

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="hero-text">Poof vs.</span> Traditional Bookkeeping
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Poof transforms your bookkeeping experience compared to QuickBooks and manual methods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Traditional Bookkeeping */}
          <div className="bg-white rounded-magical p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TableChart className="text-gray-600" sx={{ fontSize: 32 }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Traditional Methods</h3>
              <p className="text-sm text-gray-500">Spreadsheets & Manual Entry</p>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-0.5">❌</span>
                <span className="text-gray-600">20+ hours per month</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-0.5">❌</span>
                <span className="text-gray-600">Prone to human error</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-0.5">❌</span>
                <span className="text-gray-600">Manual data entry</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-0.5">❌</span>
                <span className="text-gray-600">Delayed reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-0.5">❌</span>
                <span className="text-gray-600">Tax season stress</span>
              </li>
            </ul>
          </div>

          {/* QuickBooks */}
          <div className="bg-white rounded-magical p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Business className="text-blue-600" sx={{ fontSize: 32 }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">QuickBooks Online</h3>
              <p className="text-sm text-gray-500">Feature-Rich but Complex</p>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2 mt-0.5">⚠️</span>
                <span className="text-gray-600">10-15 hours per month</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2 mt-0.5">⚠️</span>
                <span className="text-gray-600">Steep learning curve</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2 mt-0.5">⚠️</span>
                <span className="text-gray-600">Designed for larger businesses</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2 mt-0.5">⚠️</span>
                <span className="text-gray-600">Complex interface</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2 mt-0.5">⚠️</span>
                <span className="text-gray-600">Many features small businesses don't need</span>
              </li>
            </ul>
          </div>

          {/* Poof */}
          <div className="glass-card p-8 border-2 border-poof-primary-200 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-magical-gradient text-white px-4 py-1 rounded-full text-xs font-medium">
                RECOMMENDED
              </span>
            </div>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-magical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/poof-logo-with-purple-background.png"
                  alt="Poof Logo"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Poof</h3>
              <p className="text-sm hero-text font-medium">Magical Automation</p>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✅</span>
                <span className="text-gray-700 font-medium">2-3 hours per month</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✅</span>
                <span className="text-gray-700 font-medium">AI-native design</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✅</span>
                <span className="text-gray-700 font-medium">Automatic categorization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✅</span>
                <span className="text-gray-700 font-medium">Real-time insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✅</span>
                <span className="text-gray-700 font-medium">Built for small businesses</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-poof-primary-100">
              <div className="text-center">
                <div className="text-2xl font-bold hero-text mb-1">85% Time Savings</div>
                <div className="text-sm text-gray-600">vs Traditional Methods</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}