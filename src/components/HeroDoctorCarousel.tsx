"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface DoctorSlide {
  id: string;
  name: string;
  role: string;
  credentials: string;
  image: string;
  slug: string;
}

const DOCTOR_SLIDES: DoctorSlide[] = [
  {
    id: "dr-abhinav",
    name: "Dr. Abhinav Kumar",
    role: "ORAL & DENTAL SURGEON",
    credentials: "BDS, MBA, MIDA • Ex-Senior Dentist, Smile Foundation",
    image: "/images/dr-abhinav.jpeg",
    slug: "dr-abhinav-kumar",
  },
  {
    id: "dr-sumit",
    name: "Dr. Sumit Kumar",
    role: "ORAL SURGEON & FACIAL AESTHETICS",
    credentials: "BDS, FFAC • Ex-Realtooth, Lucknow",
    image: "/images/dr-sumit.jpeg",
    slug: "dr-sumit-kumar",
  },
  {
    id: "dr-anisha",
    name: "Dr. Anisha Deb",
    role: "ROOT CANAL SPECIALIST",
    credentials: "BDS, MDS, FFAC • Ex-Max Hospital, New Delhi",
    image: "/images/dr-anisha.jpeg",
    slug: "dr-anisha-deb",
  },
];

// For seamless infinite loop sliding: [clone_last, slide_0, slide_1, slide_2, clone_first]
const EXTENDED_SLIDES = [
  { ...DOCTOR_SLIDES[2], cloneKey: "clone-end" },    // index 0: Clone of Dr. Anisha
  { ...DOCTOR_SLIDES[0], cloneKey: "slide-0" },       // index 1: Dr. Abhinav
  { ...DOCTOR_SLIDES[1], cloneKey: "slide-1" },       // index 2: Dr. Sumit
  { ...DOCTOR_SLIDES[2], cloneKey: "slide-2" },       // index 3: Dr. Anisha
  { ...DOCTOR_SLIDES[0], cloneKey: "clone-start" },     // index 4: Clone of Dr. Abhinav
];

const AUTOPLAY_INTERVAL_MS = 4000;
const TRANSITION_DURATION_MS = 600;

export function HeroDoctorCarousel() {
  // Start at index 1 (the first real slide: Dr. Abhinav)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Strictly clamp index to array bounds so it can NEVER slide into blank space
  const safeIndex = Math.max(0, Math.min(currentIndex, EXTENDED_SLIDES.length - 1));

  // Determine active doctor index (0, 1, or 2) for indicator dots
  const activeSlideIndex =
    safeIndex === 0 || safeIndex === 3
      ? 2
      : safeIndex === 4 || safeIndex === 1
      ? 0
      : 1;

  // Next slide with strict boundary wrapping
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      // If already at or beyond the clone of slide 0 (index 4), loop immediately
      if (prev >= EXTENDED_SLIDES.length - 1) {
        setIsTransitioning(false);
        return 2;
      }
      setIsTransitioning(true);
      return prev + 1;
    });
  }, []);

  // Previous slide with strict boundary wrapping
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        setIsTransitioning(false);
        return EXTENDED_SLIDES.length - 3;
      }
      setIsTransitioning(true);
      return prev - 1;
    });
  }, []);

  // Jump to specific slide (0, 1, or 2)
  const goToSlide = useCallback((targetIndex: number) => {
    setIsTransitioning(true);
    setCurrentIndex(targetIndex + 1);
  }, []);

  // Guaranteed timer-based snap to prevent getting stuck on clones (even if transitionend is skipped by browser)
  useEffect(() => {
    if (currentIndex === EXTENDED_SLIDES.length - 1) {
      // We slid to the clone of slide 0 (index 4). After the transition ends, snap back to real slide 0 (index 1).
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, TRANSITION_DURATION_MS);
      return () => clearTimeout(timer);
    }

    if (currentIndex === 0) {
      // We slid to the clone of slide 2 (index 0). After transition ends, snap to real slide 2 (index 3).
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(EXTENDED_SLIDES.length - 2);
      }, TRANSITION_DURATION_MS);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Pause autoplay when browser tab is inactive to prevent out-of-sync jumps
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Autoplay loop timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  // Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full max-w-md select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Clinical Specialists Infinite Loop Slider"
    >
      {/* Main Viewport Container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-ivory-secondary border border-border-subtle shadow-[0_24px_48px_-15px_rgba(41,37,31,0.16)] group">
        
        {/* Horizontal Infinite Slider Track */}
        <div
          className="flex h-full w-full"
          style={{
            transform: `translateX(-${safeIndex * 100}%)`,
            transition: isTransitioning
              ? `transform ${TRANSITION_DURATION_MS}ms cubic-bezier(0.25, 1, 0.5, 1)`
              : "none",
          }}
        >
          {EXTENDED_SLIDES.map((doc, idx) => (
            <div
              key={`${doc.cloneKey}-${idx}`}
              className="relative w-full h-full shrink-0 flex-none"
            >
              <Image
                src={doc.image}
                alt={`${doc.name}, ${doc.role} at Dant काया`}
                fill
                priority={idx === 1}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="w-full h-full object-cover object-center"
              />

              {/* Gradient Scrim for Content Readability */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/30 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Slide Caption / Doctor Details */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-white flex items-end justify-between gap-3">
                <div className="min-w-0 pr-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#fedb9b] mb-1 truncate">
                    {doc.role}
                  </p>
                  <h2 className="font-heading font-bold text-[22px] sm:text-[24px] text-white leading-tight">
                    <Link
                      href={`/doctors/${doc.slug}`}
                      className="hover:text-champagne-gold transition-colors"
                    >
                      {doc.name}
                    </Link>
                  </h2>
                  <p className="text-[12px] text-white/85 font-normal mt-1 leading-snug line-clamp-2">
                    {doc.credentials}
                  </p>
                </div>

                <Link
                  href="/doctors"
                  className="shrink-0 inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold px-3 py-2 rounded-lg transition-colors"
                >
                  <span>3 Specialists</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Top-Right Segmented Slide Indicators */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-espresso/60 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/15 shadow-sm">
          {DOCTOR_SLIDES.map((doc, idx) => {
            const isActive = idx === activeSlideIndex;
            return (
              <button
                key={doc.id}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-6 h-2 bg-champagne-gold"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Jump to slide ${idx + 1}: ${doc.name}`}
                aria-current={isActive}
              />
            );
          })}
        </div>

        {/* Left / Right Navigation Arrow Buttons */}
        <div className="absolute inset-y-0 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          <button
            onClick={goToPrev}
            aria-label="Previous specialist"
            className="pointer-events-auto w-9 h-9 rounded-full bg-espresso/50 hover:bg-espresso/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 opacity-80 group-hover:opacity-100 hover:scale-105 shadow-md active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next specialist"
            className="pointer-events-auto w-9 h-9 rounded-full bg-espresso/50 hover:bg-espresso/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 opacity-80 group-hover:opacity-100 hover:scale-105 shadow-md active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
