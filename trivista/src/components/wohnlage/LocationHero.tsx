"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LocationHero() {
  return (
    <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden bg-primary md:min-h-[700px]">
      {/* Background image */}
      <Image
        src="/images/wohnlage/hero.jpg"
        alt="Wohnlage Kobelwald"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-[80%] px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-[22px] font-light text-white [text-shadow:0px_0px_10px_rgba(38,65,60,0.21)]"
        >
          Trivista &middot; Wohnlage
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[30px] font-bold leading-[48px] text-white [text-shadow:0px_0px_10px_rgba(38,65,60,0.21)] md:text-[60px] md:leading-[70px]"
        >
          Wohnlage
        </motion.h1>
      </div>
    </section>
  );
}
