"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { LOCATION_HIGHLIGHTS } from "@/lib/constants";

export default function HighlightsSection() {
  return (
    <section className="px-6 py-12 md:py-[70px]">
      <div className="mx-auto max-w-[1140px]">
        <SectionHeading
          title="Idyllisches Wohnen mit Fernblick"
          subtitle="Kobelwald im St. Galler Rheintal bietet alles, was das Herz begehrt"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {LOCATION_HIGHLIGHTS.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-default rounded-[10px] border border-border bg-white p-6 text-center md:p-8 shadow-[0px_10px_10px_0px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-primary/40 hover:bg-primary hover:shadow-[0px_10px_20px_0px_rgba(38,65,60,0.15)]"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(44%)_sepia(22%)_saturate(1838%)_hue-rotate(314deg)_brightness(89%)_contrast(88%)]">
                <Image
                  src={highlight.icon}
                  alt={highlight.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mb-3 text-[22px] font-normal text-text-dark transition-colors duration-300 group-hover:text-white">
                {highlight.title}
              </h3>
              <p className="text-base leading-relaxed text-text transition-colors duration-300 group-hover:text-white/80">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
