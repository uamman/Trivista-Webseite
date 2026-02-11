"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { MILESTONES } from "@/lib/constants";

export default function MilestonesTimeline() {
  return (
    <section className="px-6 py-12 md:py-[70px]">
      <div className="mx-auto max-w-[1140px]">
        <SectionHeading
          title="Meilensteine"
          subtitle="Der Weg zu Ihrem neuen Zuhause"
        />

        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left: Large image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden rounded-[10px]"
          >
            <Image
              src="/images/gallery/aussen/2.webp"
              alt="Trivista Gebäude"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right: Vertical timeline */}
          <div className="relative pl-10 md:pl-12">
            {/* Vertical line */}
            <div className="absolute top-2 bottom-2 left-[19px] w-px bg-border" />

            <div className="flex flex-col gap-10">
              {MILESTONES.map((milestone, index) => (
                <motion.div
                  key={milestone.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center gap-5"
                >
                  {/* Dot on the line */}
                  <div
                    className={`absolute -left-10 z-10 flex h-10 w-10 md:-left-12 items-center justify-center rounded-full border-2 ${
                      milestone.status === "completed"
                        ? "border-primary bg-primary"
                        : milestone.status === "active"
                          ? "border-primary bg-white"
                          : "border-border bg-white"
                    }`}
                  >
                    {milestone.status === "completed" ? (
                      <Check size={18} className="text-white" />
                    ) : milestone.status === "active" ? (
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    ) : (
                      <div className="h-3 w-3 rounded-full bg-border" />
                    )}
                  </div>

                  {/* Icon + Label */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                      <Image
                        src={milestone.icon}
                        alt={milestone.label}
                        width={28}
                        height={28}
                        className={
                          milestone.status === "completed" || milestone.status === "active"
                            ? "opacity-80"
                            : "opacity-30"
                        }
                      />
                    </div>
                    <p
                      className={`text-lg ${
                        milestone.status === "completed"
                          ? "font-bold text-primary"
                          : milestone.status === "active"
                            ? "font-bold text-text-dark"
                            : "text-text/50"
                      }`}
                    >
                      {milestone.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
