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
              className="group relative cursor-default overflow-hidden rounded-[10px] border border-border bg-white text-center shadow-[0px_10px_10px_0px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-primary/20 hover:shadow-[0px_16px_32px_0px_rgba(38,65,60,0.12)]"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="p-6 md:p-8">
                {/* Icon with background circle */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-surface transition-colors duration-500 group-hover:bg-coral">
                  <Image
                    src={highlight.icon}
                    alt={highlight.title}
                    width={36}
                    height={36}
                    className="transition-all duration-500 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                <h3 className="mb-3 text-[22px] font-normal text-text-dark">
                  {highlight.title}
                </h3>

                {/* Small divider */}
                <div className="mx-auto mb-4 h-0.5 w-10 rounded-full bg-accent/40 transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />

                <p className="text-base leading-relaxed text-text">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
