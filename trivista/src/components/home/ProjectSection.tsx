"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { PROJECT_DESCRIPTION } from "@/lib/constants";

export default function ProjectSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={PROJECT_DESCRIPTION.title} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-lg leading-relaxed text-text-light">
            {PROJECT_DESCRIPTION.text}
          </p>

          <div className="mt-12 flex justify-center">
            <Button href="/angebot/">Zum Wohnungsangebot</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
