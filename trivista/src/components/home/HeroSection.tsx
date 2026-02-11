"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden bg-primary md:h-screen">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero/video-bg.webp"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/aussicht-animation.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content */}
      <div className="relative z-10 w-[80%] max-w-[1140px] px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-[22px] font-light text-white [text-shadow:0px_0px_10px_rgba(38,65,60,0.21)]"
        >
          Trivista – Erhaben Wohnen
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[30px] font-bold leading-[48px] text-white [text-shadow:0px_0px_10px_rgba(38,65,60,0.21)] md:text-[60px] md:leading-[70px]"
        >
          Exklusive Neubauwohnungen in Kobelwald
        </motion.h1>
      </div>
    </section>
  );
}
