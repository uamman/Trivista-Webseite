"use client";

import { motion } from "framer-motion";
import { Check, Circle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { MILESTONES } from "@/lib/constants";

export default function MilestonesTimeline() {
  return (
    <section className="bg-primary px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Meilensteine"
          subtitle="Der Weg zu Ihrem neuen Zuhause"
          light
        />

        {/* Desktop: Horizontal */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Line */}
            <div className="absolute top-6 left-0 h-px w-full bg-white/20" />

            <div className="flex justify-between">
              {MILESTONES.map((milestone, index) => (
                <motion.div
                  key={milestone.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Dot */}
                  <div
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                      milestone.status === "completed"
                        ? "border-secondary bg-secondary"
                        : milestone.status === "active"
                          ? "border-secondary bg-transparent"
                          : "border-white/30 bg-transparent"
                    }`}
                  >
                    {milestone.status === "completed" ? (
                      <Check size={20} className="text-white" />
                    ) : (
                      <Circle
                        size={8}
                        className={
                          milestone.status === "active"
                            ? "fill-secondary text-secondary"
                            : "fill-white/30 text-white/30"
                        }
                      />
                    )}
                  </div>

                  {/* Label */}
                  <p
                    className={`mt-4 text-center text-sm ${
                      milestone.status === "completed"
                        ? "font-medium text-secondary"
                        : milestone.status === "active"
                          ? "font-medium text-white"
                          : "text-white/50"
                    }`}
                  >
                    {milestone.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical */}
        <div className="md:hidden">
          <div className="relative ml-6">
            {/* Vertical line */}
            <div className="absolute top-0 left-0 h-full w-px bg-white/20" />

            <div className="flex flex-col gap-8">
              {MILESTONES.map((milestone, index) => (
                <motion.div
                  key={milestone.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center gap-4"
                >
                  {/* Dot */}
                  <div
                    className={`relative z-10 -ml-3 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                      milestone.status === "completed"
                        ? "border-secondary bg-secondary"
                        : milestone.status === "active"
                          ? "border-secondary bg-transparent"
                          : "border-white/30 bg-transparent"
                    }`}
                  >
                    {milestone.status === "completed" && (
                      <Check size={12} className="text-white" />
                    )}
                  </div>

                  {/* Label */}
                  <p
                    className={`text-sm ${
                      milestone.status === "completed"
                        ? "font-medium text-secondary"
                        : milestone.status === "active"
                          ? "font-medium text-white"
                          : "text-white/50"
                    }`}
                  >
                    {milestone.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
