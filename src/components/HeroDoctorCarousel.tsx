"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

interface DoctorSlide {
  name: string;
  role: string;
  credentials: string;
  image: string;
  slug: string;
}

const DOCTOR_SLIDES: DoctorSlide[] = [
  {
    name: "Dr. Abhinav Kumar",
    role: "SENIOR ORAL & DENTAL SURGEON",
    credentials: "BDS, MBA, MIDA • Ex-Senior Dentist, Smile Foundation",
    image: "/images/dr-abhinav.jpeg",
    slug: "dr-abhinav-kumar",
  },
  {
    name: "Dr. Sumit Kumar",
    role: "ORAL SURGEON & FACIAL AESTHETICS",
    credentials: "BDS, FFAC • Ex-Realtooth, Lucknow",
    image: "/images/dr-sumit.jpeg",
    slug: "dr-sumit-kumar",
  },
  {
    name: "Dr. Anisha Deb",
    role: "MDS ROOT CANAL & FACIAL SPECIALIST",
    credentials: "BDS, MDS, FFAC • Ex-Max Hospital, New Delhi",
    image: "/images/dr-anisha.jpeg",
    slug: "dr-anisha-deb",
  },
];

const AUTOPLAY_INTERVAL_MS = 4500;

export function HeroDoctorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % DOCTOR_SLIDES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + DOCTOR_SLIDES.length) % DOCTOR_SLIDES.length
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
  };

  const currentDoctor = DOCTOR_SLIDES[currentIndex];

  return (
    <div
      className="relative w-full max-w-md select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Clinical Specialists Carousel"
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

      {/* Main Card Viewport */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-ivory-secondary border border-border-subtle shadow-[0_24px_48px_-15px_rgba(41,37,31,0.16)] group">
        {/* Render all doctor images for instant preloaded crossfade */}
        {DOCTOR_SLIDES.map((doc, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={doc.slug}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={doc.image}
                alt={`${doc.name}, ${doc.role} at Dant काया`}
                fill
                priority={idx === 0}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          );
        })}

        {/* Ambient Dark Scrim Gradient for Crisp Typography */}
        <div
          className="absolute inset-0 z-15 bg-gradient-to-t from-espresso/90 via-espresso/25 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Top-Right Segmented Progress Pills */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-espresso/50 backdrop-blur-md p-1.5 rounded-full border border-white/15">
          {DOCTOR_SLIDES.map((doc, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={doc.slug}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-6 h-2 bg-champagne-gold"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}: ${doc.name}`}
                aria-current={isActive}
              />
            );
          })}
        </div>

        {/* Left / Right Nav Arrows (Subtle Frosted Circular Buttons) */}
        <div className="absolute inset-y-0 left-2 right-2 z-20 flex items-center justify-between pointer-events-none">
          <button
            onClick={goToPrev}
            aria-label="Previous doctor"
            className="pointer-events-auto w-8 h-8 rounded-full bg-espresso/40 hover:bg-espresso/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 opacity-70 group-hover:opacity-100 hover:scale-105"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next doctor"
            className="pointer-events-auto w-8 h-8 rounded-full bg-espresso/40 hover:bg-espresso/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 opacity-70 group-hover:opacity-100 hover:scale-105"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Overlay: Animated Doctor Information */}
        <div className="absolute bottom-5 left-5 right-5 z-20 text-white flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#fedb9b] mb-1 truncate">
              {currentDoctor.role}
            </p>
            <h2 className="font-heading font-bold text-[22px] sm:text-[23px] text-white leading-tight">
              <Link
                href={`/doctors/${currentDoctor.slug}`}
                className="hover:text-champagne-gold transition-colors"
              >
                {currentDoctor.name}
              </Link>
            </h2>
            <p className="text-[12px] text-white/80 font-normal mt-0.5 line-clamp-1">
              {currentDoctor.credentials}
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
    </div>
  );
}
