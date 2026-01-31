'use client'

import { useState } from 'react'
import Image from 'next/image'

interface CarouselSlide {
  image: string
  title: string
  description: string
  alt: string
}

interface ProductCarouselProps {
  slides: CarouselSlide[]
}

export default function ProductCarousel({ slides }: ProductCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  if (slides.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">No images to display</p>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="relative rounded-2xl overflow-hidden shadow-hover border border-slate-200">
        <div className="relative aspect-video bg-slate-100">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            fill
            className="object-contain"
            priority={currentSlide === 0}
          />
        </div>

        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border border-slate-200 hover:border-gold-500 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border border-slate-200 hover:border-gold-500 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {slides.length > 1 && (
          <div className="absolute top-4 right-4 bg-slate-900/60 text-white px-3 py-1 rounded-full text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          {slides[currentSlide].title}
        </h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          {slides[currentSlide].description}
        </p>
      </div>

      {slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-gold-500 w-8'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="sr-only">
        Press left and right arrow keys to navigate between slides
      </div>
    </div>
  )
}
