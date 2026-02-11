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
        <div className="grid items-start gap-12 md:grid-cols-[1.2fr_1fr]">
          {/* Left: Image with text overlay – all images preloaded, toggle via opacity */}
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

              {/* Gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="mb-2 text-[26px] font-bold text-white">
                    {ADVANTAGES[active].title}
                  </h3>
                  <p className="max-w-md text-base leading-[26px] text-white/90">
                    {ADVANTAGES[active].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: Heading + vertical list of advantages */}
          <div>
            <h2 className="mb-8 text-3xl font-normal text-text-dark md:text-[44px] md:leading-tight">
              Vorteile des Projekts
            </h2>

            <div className="flex flex-col gap-4">
              {ADVANTAGES.map((adv, index) => (
                <button
                  key={adv.title}
                  onClick={() => setActive(index)}
                  className="flex items-center gap-5 text-left"
                >
                  {/* Circle icon */}
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
