'use client'

import { useState, useRef, useCallback } from 'react'

interface FileUploadZoneProps {
  onFileSelected: (file: File) => void
  disabled?: boolean
}

const ACCEPTED_TYPES = [
  'text/csv',
  'application/pdf',
  'image/png',
  'image/jpeg',
  'application/vnd.ms-excel',
]

const MAX_SIZE = 5 * 1024 * 1024 // 5MB

export default function FileUploadZone({ onFileSelected, disabled }: FileUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const validateFile = (file: File): string | null => {
    const ext = file.name.toLowerCase().split('.').pop()
    const validExts = ['csv', 'pdf', 'png', 'jpg', 'jpeg']
    if (!validExts.includes(ext || '')) {
      return 'Please upload a CSV, PDF, PNG, or JPG file.'
    }
    if (file.size > MAX_SIZE) {
      return 'File is too large. Maximum size is 5MB.'
    }
    return null
  }

  const handleFile = useCallback((file: File) => {
    const err = validateFile(file)
    if (err) {
      setError(err)
      setFileName(null)
      return
    }
    setError(null)
    setFileName(file.name)
    onFileSelected(file)
  }, [onFileSelected])

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    if (!disabled) setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (disabled) return
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  const handleClick = () => {
    if (!disabled) inputRef.current?.click()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div>
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-200 ${
          disabled
            ? 'opacity-50 cursor-not-allowed border-slate-200 bg-slate-50'
            : isDragging
              ? 'border-violet-500 bg-violet-50/50'
              : fileName
                ? 'border-teal-400 bg-teal-50/30'
                : 'border-slate-300 hover:border-violet-400 hover:bg-violet-50/30'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".csv,.pdf,.png,.jpg,.jpeg"
          onChange={handleInputChange}
          className="hidden"
          disabled={disabled}
        />

        {fileName ? (
          <div className="space-y-2">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-medium text-slate-900">{fileName}</p>
            <p className="text-sm text-slate-500">Ready to analyze</p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-lg">
                Drop your bank statement here
              </p>
              <p className="text-slate-500 mt-1">
                or <span className="text-violet-600 font-medium">click to browse</span>
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4 text-xs text-slate-400">
              <span>CSV</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>PDF</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>PNG / JPG</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>Max 5MB</span>
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-600 flex items-center">
          <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}
