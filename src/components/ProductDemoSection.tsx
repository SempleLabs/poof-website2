'use client'

import { PlayCircle } from '@mui/icons-material';

export default function ProductDemoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            See <span className="hero-text">Poof</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how Poof transforms your bookkeeping from hours of manual work to magical automation in just minutes.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-gray-100 rounded-magical overflow-hidden shadow-magical aspect-video">
            {/*
              PLACEHOLDER: Replace this section with your actual video
              You can use either:
              1. <video> tag for uploaded video files
              2. <iframe> for YouTube/Vimeo embeds
              3. Custom video player component
            */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-poof-primary-50 to-poof-secondary-50">
              <div className="text-center">
                <PlayCircle className="text-poof-primary-500 mb-4" sx={{ fontSize: 80 }} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Demo Video</h3>
                <p className="text-gray-600">Coming Soon - Replace this with your video</p>
              </div>
            </div>

            {/* Example of how to add your video - uncomment and modify as needed:

            Option 1: Direct video file
            <video
              controls
              className="w-full h-full object-cover"
              poster="/video-thumbnail.jpg"
            >
              <source src="/poof-demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            Option 2: YouTube embed
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Poof Product Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            Option 3: Vimeo embed
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
              title="Poof Product Demo"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            */}
          </div>
        </div>

        {/* Key Features Highlighted */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-poof-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-poof-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Process transactions in seconds, not hours</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-poof-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-poof-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-gray-600">Smart categorization that learns your business</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-poof-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-poof-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Exceptionally Accurate</h3>
            <p className="text-gray-600">Reliable results you can trust</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your bookkeeping?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="magical-button"
            >
              Request Live Demo
            </a>
            <a
              href="/trial"
              className="px-6 py-3 border border-poof-primary-300 text-poof-primary-600 font-semibold rounded-magical hover:bg-poof-primary-50 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}