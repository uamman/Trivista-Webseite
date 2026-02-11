"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import { PROJECT_DESCRIPTION } from "@/lib/constants";

const YOUTUBE_ID = "veq01f1dDjQ";

export default function ProjectSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="px-6 py-12 md:py-[70px]">
        <div className="mx-auto max-w-[1140px]">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-normal text-text-dark md:text-[44px] md:leading-tight">
                {PROJECT_DESCRIPTION.title}
              </h2>
              <p className="text-lg leading-[30px] text-text">
                {PROJECT_DESCRIPTION.text}
              </p>
              <div className="mt-8">
                <Button href="/angebot/">Zum Wohnungsangebot</Button>
              </div>
            </motion.div>

            {/* Right: Video thumbnail with play button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[10px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.11)]"
                onClick={() => setShowVideo(true)}
              >
                <Image
                  src="/images/gallery/aussen/1.webp"
                  alt="Trivista Gebäudekomplex"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
                {/* Play button - centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-white/60 group-hover:bg-white/30">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="ml-0.5 h-8 w-8 text-primary"
                      >
                        <path
                          d="M8.5 6.5a1 1 0 011.55-.83l8.4 5.5a1 1 0 010 1.66l-8.4 5.5A1 1 0 018.5 17.5v-11z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85"
            onClick={() => setShowVideo(false)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20"
              aria-label="Video schliessen"
            >
              <X size={22} />
            </motion.button>

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 250, damping: 22, delay: 0.05 }}
              className="w-full max-w-[900px] px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                  title="Trivista Projektfilm"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
