"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function DiscoverSection() {
  const [showTour, setShowTour] = useState(false);
  const [preloaded, setPreloaded] = useState(false);

  // Preload VR tour iframe in background when section comes into view
  useEffect(() => {
    const timer = setTimeout(() => setPreloaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="bg-surface px-6 py-12 md:py-[70px]">
        <div className="mx-auto max-w-[1140px]">
          <SectionHeading
            title="Entdecken Sie die Umgebung"
            subtitle="Erleben Sie Kobelwald hautnah – starten Sie die virtuelle 360°-Tour und entdecken Sie die einzigartige Umgebung."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-[800px]"
          >
            <div
              className="group relative cursor-pointer overflow-hidden rounded-[10px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.11)]"
              onClick={() => setShowTour(true)}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/wohnlage/Wohnlage-Kobelwald-1-scaled.jpg"
                  alt="Panorama Kobelwald"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/60 group-hover:via-black/20" />
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-white/60 group-hover:bg-white/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
                    <span className="text-base font-bold text-primary">360°</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white [text-shadow:0px_2px_8px_rgba(0,0,0,0.4)]">
                    Virtuelle Tour starten
                  </p>
                  <p className="mt-1 text-[13px] text-white/70 [text-shadow:0px_2px_8px_rgba(0,0,0,0.4)]">
                    Kobelwald in 360° entdecken
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hidden preload iframe */}
      {preloaded && !showTour && (
        <iframe
          src="/vr-tour/index.htm"
          className="fixed -left-[9999px] h-1 w-1 opacity-0"
          title="VR Tour Preload"
          tabIndex={-1}
          aria-hidden="true"
        />
      )}

      {/* VR Tour Fullscreen Modal */}
      {showTour && (
        <div className="fixed inset-0 z-[10002] bg-black">
          <button
            onClick={() => setShowTour(false)}
            className="absolute top-6 right-6 z-50 flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-text-dark shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all hover:bg-[#C55A66] hover:text-white"
            aria-label="Tour schliessen"
          >
            <X size={20} strokeWidth={2.5} />
            Schliessen
          </button>
          <iframe
            src="/vr-tour/index.htm"
            className="h-full w-full border-0"
            title="Trivista VR Tour"
            allowFullScreen
          />
        </div>
      )}
    </>
  );
}
