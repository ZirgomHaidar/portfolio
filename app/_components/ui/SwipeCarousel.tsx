"use client"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import { SsType } from "../Projects/ProjectList"

export default function ImageCarousel({ images }: { images: SsType[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isAutoPlaying && !isModalOpen) {
      interval = setInterval(() => {
        setCurrentIndex((current) => (current + 1) % images.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, isModalOpen])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const previousSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    )
  }

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % images.length)
  }

  return (
    <>
      <div className="group relative mx-auto aspect-[16/9] w-full max-w-7xl sm:aspect-[2/1] lg:aspect-[21/9]">
        <div
          className="relative h-full overflow-hidden rounded-2xl shadow-xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <CarouselSlide key={index} images={image} fullscreen={false} />
            ))}
          </div>

          <CarouselControls onPrevious={previousSlide} onNext={nextSlide} />

          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/30 opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-white/40 group-hover:opacity-100 sm:h-12 sm:w-12"
          >
            <Expand className="h-5 w-5 text-white sm:h-6 sm:w-6" />
          </button>

          <CarouselNavigation
            totalSlides={images.length}
            currentIndex={currentIndex}
            goToSlide={goToSlide}
          />
        </div>
      </div>

      <CarouselModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        currentIndex={currentIndex}
        onIndexChange={setCurrentIndex}
      />
    </>
  )
}

function CarouselSlide({
  images,
  fullscreen,
}: {
  images: SsType
  fullscreen: boolean
}) {
  return (
    <div className="relative h-full w-full flex-shrink-0">
      <Image
        src={images.url}
        alt="pic"
        height={9999}
        width={9999}
        loading="lazy"
        className={`absolute inset-0 h-full w-full ${fullscreen ? "object-contain" : "object-cover"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
        <div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
          <h3 className="truncate text-lg font-bold sm:text-2xl">
            {images.title}
          </h3>
          {images.desc && (
            <p className="line-clamp-2 text-xs opacity-80 sm:text-sm">
              {images.desc}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

interface CarouselNavigationProps {
  totalSlides: number
  currentIndex: number
  goToSlide: (index: number) => void
}

function CarouselNavigation({
  totalSlides,
  currentIndex,
  goToSlide,
}: CarouselNavigationProps) {
  return (
    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-1.5 sm:bottom-4 sm:space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`h-1.5 w-1.5 rounded-full transition-all duration-300 sm:h-2.5 sm:w-2.5 ${
            index === currentIndex
              ? "w-6 bg-white sm:w-8"
              : "bg-white/50 hover:bg-white/80"
          }`}
        />
      ))}
    </div>
  )
}

interface ChevronProps {
  className?: string
}

function ChevronLeft({ className = "" }: ChevronProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRight({ className = "" }: ChevronProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

interface IconProps {
  className?: string
}

function Expand({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  )
}

interface CarouselModalProps {
  isOpen: boolean
  onClose: () => void
  images: Array<SsType>
  currentIndex: number
  onIndexChange: (index: number) => void
}

function CarouselModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
}: CarouselModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const previousSlide = () => {
    onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const nextSlide = () => {
    onIndexChange((currentIndex + 1) % images.length)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 flex size-10 items-center justify-center rounded-full bg-white/30 p-2 backdrop-blur-sm transition-opacity duration-300 hover:bg-white/40"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>

        <div className="group relative aspect-[16/9] w-full p-16">
          <div className="relative h-full overflow-hidden rounded-xl">
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <CarouselSlide key={index} images={image} fullscreen={true} />
              ))}
            </div>

            <CarouselControls
              onPrevious={previousSlide}
              onNext={nextSlide}
              size="large"
            />

            <CarouselNavigation
              totalSlides={images.length}
              currentIndex={currentIndex}
              goToSlide={onIndexChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface CarouselControlsProps {
  onPrevious: () => void
  onNext: () => void
  size?: "normal" | "large"
}

function CarouselControls({
  onPrevious,
  onNext,
  size = "normal",
}: CarouselControlsProps) {
  const buttonClasses =
    size === "large" ? "w-12 h-12 sm:w-16 sm:h-16" : "w-10 h-10 sm:w-14 sm:h-14"

  const iconClasses =
    size === "large" ? "w-6 h-6 sm:w-8 sm:h-8" : "w-5 h-5 sm:w-6 sm:h-6"

  return (
    <>
      <button
        onClick={onPrevious}
        className={`absolute left-4 top-1/2 -translate-y-1/2 sm:left-8 ${buttonClasses} flex items-center justify-center rounded-full bg-white/30 opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-white/40 group-hover:opacity-100`}
      >
        <ChevronLeft className={`${iconClasses} text-white`} />
      </button>
      <button
        onClick={onNext}
        className={`absolute right-4 top-1/2 -translate-y-1/2 sm:right-8 ${buttonClasses} flex items-center justify-center rounded-full bg-white/30 opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-white/40 group-hover:opacity-100`}
      >
        <ChevronRight className={`${iconClasses} text-white`} />
      </button>
    </>
  )
}