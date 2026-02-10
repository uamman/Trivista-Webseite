"use client";

import { motion } from "framer-motion";
import { Home, Palette, Mountain, Leaf } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ADVANTAGES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  palette: Palette,
  mountain: Mountain,
  leaf: Leaf,
};

export default function AdvantagesSection() {
  return (
    <section className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Ihre Vorteile"
          subtitle="Was Trivista besonders macht"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((advantage, index) => {
            const Icon = iconMap[advantage.icon] || Home;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-sm bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <Icon className="text-secondary" size={24} />
                </div>
                <h3 className="mb-3 text-lg font-medium text-primary">
                  {advantage.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
