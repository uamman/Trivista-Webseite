"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ADVANTAGES } from "@/lib/constants";

export default function AdvantagesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-surface px-6 py-12 md:py-[70px]">
      <div className="mx-auto max-w-[1140px]">
        {/* Section title – always on top */}
        <h2 className="mb-6 text-center text-3xl font-normal text-text-dark md:mb-0 md:text-left md:text-[44px] md:leading-tight">
          Vorteile des Projekts
        </h2>

        {/* Mobile: icon row above image */}
        <div className="mb-4 flex justify-center gap-3 md:hidden">
          {ADVANTAGES.map((adv, index) => (
            <button
              key={adv.title}
              onClick={() => setActive(index)}
              aria-label={adv.title}
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                active === index ? "scale-110 bg-coral" : "bg-primary"
              }`}
            >
              <Image
                src={adv.icon}
                alt={adv.title}
                width={22}
                height={22}
                className="brightness-0 invert"
              />
            </button>
          ))}
        </div>

        <div className="grid items-start gap-12 md:grid-cols-[1.2fr_1fr]">
          {/* Left: Image with text overlay */}
          <div className="relative overflow-hidden rounded-[10px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.11)]">
            <div className="relative aspect-[4/3] w-full">
              {ADVANTAGES.map((adv, index) => (
                <Image
                  key={adv.title}
                  src={adv.image}
                  alt={adv.title}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    active === index ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 768px) 100vw, 55vw"
                  priority={index === 0}
                />
              ))}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="mb-1 text-lg font-bold text-white md:mb-2 md:text-[26px]">
                    {ADVANTAGES[active].title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/90 md:text-base md:leading-[26px]">
                    {ADVANTAGES[active].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: vertical list – desktop only */}
          <div className="hidden md:block">
            <div className="mt-20 flex flex-col gap-4">
              {ADVANTAGES.map((adv, index) => (
                <button
                  key={adv.title}
                  onClick={() => setActive(index)}
                  className="flex items-center gap-5 text-left"
                >
                  <div
                    className={`flex h-14 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      active === index ? "w-[70px] bg-coral" : "w-14 bg-primary"
                    }`}
                  >
                    <Image
                      src={adv.icon}
                      alt={adv.title}
                      width={28}
                      height={28}
                      className="brightness-0 invert"
                    />
                  </div>
                  <span className="text-lg font-bold text-text-dark">
                    {adv.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
