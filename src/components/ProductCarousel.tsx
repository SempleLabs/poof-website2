'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

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
        <p className="text-gray-600">No images to display</p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Main Image Container */}
      <div className="relative bg-gray-100 rounded-magical overflow-hidden shadow-magical">
        {/* Image */}
        <div className="relative aspect-video bg-white">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            fill
            className="object-contain"
            priority={currentSlide === 0}
          />
        </div>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-gray-800" sx={{ fontSize: 28 }} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="text-gray-800" sx={{ fontSize: 28 }} />
            </button>
          </>
        )}

        {/* Slide Counter */}
        {slides.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {slides[currentSlide].title}
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {slides[currentSlide].description}
        </p>
      </div>

      {/* Dot Indicators */}
      {slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-poof-primary-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Keyboard Navigation */}
      <div className="sr-only">
        Press left and right arrow keys to navigate between slides
      </div>
    </div>
  )
}
