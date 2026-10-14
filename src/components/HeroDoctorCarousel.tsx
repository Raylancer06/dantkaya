"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

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
    role: "SENIOR ORAL & DENTAL SURGEON",
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
    role: "MDS ROOT CANAL & FACIAL SPECIALIST",
    credentials: "BDS, MDS, FFAC • Ex-Max Hospital, New Delhi",
    image: "/images/dr-anisha.jpeg",
    slug: "dr-anisha-deb",
  },
];

// For seamless infinite loop sliding: [clone_last, slide_0, slide_1, slide_2, clone_first]
const EXTENDED_SLIDES = [
  { ...DOCTOR_SLIDES[2], cloneKey: "clone-end" },
  { ...DOCTOR_SLIDES[0], cloneKey: "slide-0" },
  { ...DOCTOR_SLIDES[1], cloneKey: "slide-1" },
  { ...DOCTOR_SLIDES[2], cloneKey: "slide-2" },
  { ...DOCTOR_SLIDES[0], cloneKey: "clone-start" },
];

const AUTOPLAY_INTERVAL_MS = 4000;
const TRANSITION_DURATION_MS = 600;

export function HeroDoctorCarousel() {
  // Start at index 1 (the first real slide: Dr. Abhinav)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const isJumping = useRef(false);
  const touchStartX = useRef<number | null>(null);

  // Determine active doctor index (0, 1, or 2) for indicators
  const activeSlideIndex =
    currentIndex === 0
      ? 2
      : currentIndex === 4
      ? 0
      : currentIndex - 1;

  const goToNext = useCallback(() => {
    if (isJumping.current) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const goToPrev = useCallback(() => {
    if (isJumping.current) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const goToSlide = useCallback((targetIndex: number) => {
    if (isJumping.current) return;
    setIsTransitioning(true);
    setCurrentIndex(targetIndex + 1);
  }, []);

  // Handle wrap-around when hitting clones without visible jump
  const handleTransitionEnd = () => {
    if (currentIndex === EXTENDED_SLIDES.length - 1) {
      // Reached clone of first slide (index 4) -> instantly reset to real first slide (index 1)
      isJumping.current = true;
      setIsTransitioning(false);
      setCurrentIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isJumping.current = false;
        });
      });
    } else if (currentIndex === 0) {
      // Reached clone of last slide (index 0) -> instantly reset to real last slide (index 3)
      isJumping.current = true;
      setIsTransitioning(false);
      setCurrentIndex(EXTENDED_SLIDES.length - 2);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isJumping.current = false;
        });
      });
    }
  };

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
      {/* Top Floating Authority Badge */}
      <div className="hidden sm:flex items-center gap-2.5 absolute -top-4 -left-5 z-30 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-border-subtle shadow-[0_12px_30px_-10px_rgba(41,37,31,0.15)] pointer-events-none">
        <ShieldCheck
          className="w-4 h-4 text-champagne-gold shrink-0"
          aria-hidden="true"
        />
        <div>
          <p className="text-[11px] font-bold text-espresso leading-none">
            Class-B Autoclave Sterility
          </p>
          <p className="text-[10px] text-muted-grey mt-0.5">
            3D Digital RVG Diagnostics
          </p>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-ivory-secondary border border-border-subtle shadow-[0_24px_48px_-15px_rgba(41,37,31,0.16)] group">
        
        {/* Horizontal Infinite Slider Track */}
        <div
          className="flex h-full w-full"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
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
            className="pointer-events-auto w-9 h-9 rounded-full bg-espresso/50 hover:bg-espresso/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 opacity-80 group-hover:opacity-100 hover:scale-105 shadow-md active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next specialist"
            className="pointer-events-auto w-9 h-9 rounded-full bg-espresso/50 hover:bg-espresso/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 opacity-80 group-hover:opacity-100 hover:scale-105 shadow-md active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
