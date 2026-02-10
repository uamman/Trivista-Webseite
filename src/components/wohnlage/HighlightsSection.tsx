"use client";

import { motion } from "framer-motion";
import { Eye, Trees, VolumeX } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { LOCATION_HIGHLIGHTS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  eye: Eye,
  trees: Trees,
  "volume-x": VolumeX,
};

export default function HighlightsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Idyllisches Wohnen mit Fernblick"
          subtitle="Kobelwald im St. Galler Rheintal bietet alles, was das Herz begehrt"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {LOCATION_HIGHLIGHTS.map((highlight, index) => {
            const Icon = iconMap[highlight.icon] || Eye;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <Icon className="text-secondary" size={28} />
                </div>
                <h3 className="mb-3 text-xl font-medium text-primary">
                  {highlight.title}
                </h3>
                <p className="leading-relaxed text-text-light">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
