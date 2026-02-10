"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TabSwitcher from "@/components/ui/TabSwitcher";

const TABS = [
  { id: "innen", label: "Innen" },
  { id: "aussen", label: "Aussen" },
];

// Placeholder images - replace with actual images from wp-content/uploads/
const GALLERY_IMAGES = {
  innen: Array.from({ length: 9 }, (_, i) => ({
    id: `innen-${i + 1}`,
    alt: `Innenansicht ${i + 1}`,
    src: `/images/innen/${i + 1}.webp`,
  })),
  aussen: Array.from({ length: 9 }, (_, i) => ({
    id: `aussen-${i + 1}`,
    alt: `Aussenansicht ${i + 1}`,
    src: `/images/aussen/${i + 1}.webp`,
  })),
};

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("innen");

  const images = GALLERY_IMAGES[activeTab as keyof typeof GALLERY_IMAGES];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Impressionen"
          subtitle="Einblicke in das Projekt Trivista"
        />

        <div className="mb-12 flex justify-center">
          <TabSwitcher tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-sm bg-surface"
              >
                {/* Placeholder for actual images */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 transition-transform duration-500 group-hover:scale-105">
                  <div className="text-center text-gray-400">
                    <p className="text-sm font-medium">
                      {activeTab === "innen" ? "Innenansicht" : "Aussenansicht"}{" "}
                      {index + 1}
                    </p>
                    <p className="mt-1 text-xs">Bild wird nachgeladen</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
