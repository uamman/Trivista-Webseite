"use client";

import { motion } from "framer-motion";

export default function LocationHero() {
  return (
    <section className="relative flex h-[60vh] items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[repeating-linear-gradient(-45deg,transparent,transparent_35px,rgba(139,115,85,0.1)_35px,rgba(139,115,85,0.1)_70px)]" />
      </div>

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-sm tracking-[0.4em] text-secondary uppercase"
        >
          Trivista
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-light tracking-wide text-white md:text-6xl"
        >
          Wohnlage
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 h-px w-24 bg-secondary"
        />
      </div>
    </section>
  );
}
