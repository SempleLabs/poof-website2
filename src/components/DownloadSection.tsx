'use client'

import { useState } from 'react'
import DownloadModal from './DownloadModal'

interface Guide {
  title: string
  description: string
  downloadType: string
  pages: string
  fileName: string
  downloadUrl: string
}

const guides: Guide[] = [
  {
    title: "Small Business Bookkeeping Setup Guide",
    description: "Step-by-step guide to setting up bookkeeping for your new business",
    downloadType: "PDF Guide",
    pages: "24 pages",
    fileName: "bookkeeping-setup-guide.pdf",
    downloadUrl: "/downloads/bookkeeping-setup-guide.pdf"
  },
  {
    title: "Expense Categorization Cheat Sheet",
    description: "Quick reference for properly categorizing business expenses",
    downloadType: "Printable PDF",
    pages: "2 pages",
    fileName: "expense-categorization-cheat-sheet.pdf",
    downloadUrl: "/downloads/expense-categorization-cheat-sheet.pdf"
  },
  {
    title: "Monthly Bookkeeping Checklist",
    description: "Never miss important bookkeeping tasks with this monthly checklist",
    downloadType: "PDF Template",
    pages: "4 pages",
    fileName: "monthly-bookkeeping-checklist.pdf",
    downloadUrl: "/downloads/monthly-bookkeeping-checklist.pdf"
  },
  {
    title: "Year-End Closing Procedures",
    description: "Complete guide to closing your books at the end of the year",
    downloadType: "PDF Guide",
    pages: "16 pages",
    fileName: "year-end-closing-procedures.pdf",
    downloadUrl: "/downloads/year-end-closing-procedures.pdf"
  }
]

export default function DownloadSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null)

  const handleDownloadClick = (guide: Guide) => {
    setSelectedGuide(guide)
    setModalOpen(true)
  }

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Downloads</h2>
            <p className="text-gray-600">Practical templates and guides to improve your bookkeeping</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-poof-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-poof-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                <div className="text-xs text-gray-500 mb-4">
                  {guide.downloadType} • {guide.pages}
                </div>
                <button
                  onClick={() => handleDownloadClick(guide)}
                  className="w-full bg-poof-primary-600 text-white font-semibold py-2 px-4 rounded-magical hover:bg-poof-primary-700 transition-colors text-sm"
                >
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {selectedGuide && (
        <DownloadModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedGuide.title}
          description="Enter your email to download this free guide"
          downloadUrl={selectedGuide.downloadUrl}
          fileName={selectedGuide.fileName}
        />
      )}
    </>
  )
}
