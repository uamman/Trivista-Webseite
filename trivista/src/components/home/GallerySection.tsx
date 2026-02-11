"use client";

import { useState } from "react";
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
  const [index, setIndex] = useState(0);

  const images = GALLERY_IMAGES[activeTab as keyof typeof GALLERY_IMAGES];
  // On desktop we show 2 images, so max index is length - 2
  // On mobile we show 1, so max index is length - 1
  // We handle this with CSS (hide second image on mobile)
  const maxIndex = Math.max(0, images.length - 2);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIndex(0);
  };

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

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

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            disabled={index === 0}
            className="absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl disabled:opacity-30 disabled:hover:shadow-lg md:-left-6"
            aria-label="Zurück"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={index >= maxIndex}
            className="absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl disabled:opacity-30 disabled:hover:shadow-lg md:-right-6"
            aria-label="Weiter"
          >
            <ChevronRight size={20} />
          </button>

          {/* Sliding Track */}
          <div className="overflow-hidden rounded-[10px]">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{
                // Each image is 50% minus half the gap (calc(50% - 8px))
                // Shift by index * (50% + half gap)
                transform: `translateX(calc(-${index} * (50% + 8px)))`,
              }}
            >
              {images.map((image) => (
                <div
                  key={image.id}
                  className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-[10px] sm:w-[calc(50%-8px)]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {images.map((_, i) => (
              i <= maxIndex && (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index
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
