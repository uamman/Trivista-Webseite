"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PARTNERS } from "@/lib/constants";

export default function PartnersSection() {
  return (
    <section className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Partner"
          subtitle="Gemeinsam für höchste Qualität"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {PARTNERS.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-sm bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Placeholder for partner logo */}
              <div className="mx-auto mb-6 flex h-20 w-40 items-center justify-center rounded bg-surface">
                <span className="text-sm font-medium text-text-light">
                  {partner.name}
                </span>
              </div>

              <p className="text-sm font-medium tracking-wider text-secondary uppercase">
                {partner.role}
              </p>
              <h3 className="mt-2 text-lg font-medium text-primary">
                {partner.name}
              </h3>
              <p className="mt-1 text-sm text-text-light">{partner.address}</p>

              <div className="mt-4 flex items-center justify-center gap-1 text-sm text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                <span>Website besuchen</span>
                <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
