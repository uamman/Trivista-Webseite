"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("innen");
  const [page, setPage] = useState(0);
  const [[slideKey, direction], setSlide] = useState([0, 0]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      setPage(0);
      setSlide([Date.now(), 0]);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const images = GALLERY_IMAGES[activeTab as keyof typeof GALLERY_IMAGES];
  const perView = isMobile ? 1 : 2;
  const totalPages = Math.ceil(images.length / perView);

  const currentImages = images.slice(page * perView, page * perView + perView);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setPage(0);
    setSlide([Date.now(), 0]);
  };

  const paginate = (dir: number) => {
    const next = (page + dir + totalPages) % totalPages;
    setPage(next);
    setSlide([Date.now(), dir]);
  };

  const goToPage = (i: number) => {
    if (i === page) return;
    setSlide([Date.now(), i > page ? 1 : -1]);
    setPage(i);
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

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl md:-left-6"
            aria-label="Zurück"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl md:-right-6"
            aria-label="Weiter"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slides */}
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={slideKey}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {currentImages.map((image) => (
                  <div
                    key={image.id}
                    className="group relative aspect-[4/3] overflow-hidden rounded-[10px]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-border hover:bg-primary/40"
                }`}
                aria-label={`Seite ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
