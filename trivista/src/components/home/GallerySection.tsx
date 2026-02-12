"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TabSwitcher from "@/components/ui/TabSwitcher";

const TABS = [
  { id: "innen", label: "Innen" },
  { id: "aussen", label: "Aussen" },
];

const GALLERY_IMAGES = {
  innen: Array.from({ length: 9 }, (_, i) => ({
    id: `innen-${i + 1}`,
    alt: `Innenansicht ${i + 1}`,
    src: `/images/gallery/innen/${i + 1}.webp`,
  })),
  aussen: Array.from({ length: 9 }, (_, i) => ({
    id: `aussen-${i + 1}`,
    alt: `Aussenansicht ${i + 1}`,
    src: `/images/gallery/aussen/${i + 1}.webp`,
  })),
};

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("innen");
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const images = GALLERY_IMAGES[activeTab as keyof typeof GALLERY_IMAGES];
  const desktopMax = Math.max(0, images.length - 2);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setDesktopIndex(0);
    setMobileIndex(0);
  };

  const desktopPrev = () => setDesktopIndex((i) => Math.max(0, i - 1));
  const desktopNext = () => setDesktopIndex((i) => Math.min(desktopMax, i + 1));

  const mobilePrev = useCallback(
    () => setMobileIndex((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length],
  );
  const mobileNext = useCallback(
    () => setMobileIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length],
  );

  // Swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) mobileNext();
    else if (diff < -50) mobilePrev();
    setTouchStart(null);
  };

  return (
    <section className="px-6 py-12 md:py-[70px]">
      <div className="mx-auto max-w-[1140px]">
        <SectionHeading
          title="Impressionen"
          subtitle="Erleben Sie die besondere Atmosphäre des Projekts «Trivista» und lassen Sie sich von den beeindruckenden Wohnungen begeistern."
        />

        <div className="mb-12 flex justify-center">
          <TabSwitcher tabs={TABS} activeTab={activeTab} onChange={handleTabChange} />
        </div>

        {/* ── Mobile Gallery: single image with fade ── */}
        <div className="sm:hidden">
          <div className="relative">
            {/* Arrows */}
            <button
              onClick={mobilePrev}
              className="absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur-sm"
              aria-label="Zurück"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={mobileNext}
              className="absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur-sm"
              aria-label="Weiter"
            >
              <ChevronRight size={20} />
            </button>

            {/* Stacked images – only active one visible */}
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {images.map((image, i) => (
                <Image
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  className={`object-cover transition-opacity duration-400 ${
                    i === mobileIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="mt-4 flex justify-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === mobileIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-border"
                  }`}
                  aria-label={`Bild ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Desktop Gallery: sliding 2-up carousel ── */}
        <div className="relative hidden sm:block">
          {/* Arrows */}
          <button
            onClick={desktopPrev}
            disabled={desktopIndex === 0}
            className="absolute top-1/2 -left-6 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl disabled:opacity-30"
            aria-label="Zurück"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={desktopNext}
            disabled={desktopIndex >= desktopMax}
            className="absolute top-1/2 -right-6 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl disabled:opacity-30"
            aria-label="Weiter"
          >
            <ChevronRight size={20} />
          </button>

          {/* Sliding track */}
          <div className="overflow-hidden rounded-[10px]">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${desktopIndex} * (50% + 8px)))`,
              }}
            >
              {images.map((image) => (
                <div
                  key={image.id}
                  className="relative aspect-[4/3] w-[calc(50%-8px)] shrink-0 overflow-hidden rounded-[10px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {images.map((_, i) => (
              i <= desktopMax && (
                <button
                  key={i}
                  onClick={() => setDesktopIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === desktopIndex
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-border hover:bg-primary/40"
                  }`}
                  aria-label={`Bild ${i + 1}`}
                />
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
