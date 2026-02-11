"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";
import { PARTNERS } from "@/lib/constants";

export default function PartnersSection() {
  return (
    <section className="bg-primary px-6 py-12 md:py-[70px]">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-8 md:grid-cols-3">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <p className="text-sm font-bold text-white/70 uppercase">
                {partner.role}
              </p>

              <div className="mx-auto my-6 flex h-16 w-32 items-center justify-center md:w-40">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={50}
                  className="object-contain"
                />
              </div>

              <h3 className="text-[22px] font-normal text-white">
                {partner.name}
              </h3>
              <p className="mt-1 text-base text-white/70">{partner.address}</p>

              {/* Contact icons */}
              <div className="mt-4 flex items-center justify-center gap-3">
                {partner.showAllContacts && (
                  <>
                    <a
                      href={`mailto:info@${partner.url.replace("https://", "")}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:border-white hover:text-white"
                      aria-label={`E-Mail an ${partner.name}`}
                    >
                      <Mail size={16} />
                    </a>
                    <a
                      href="tel:+41717637500"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:border-white hover:text-white"
                      aria-label={`${partner.name} anrufen`}
                    >
                      <Phone size={16} />
                    </a>
                  </>
                )}
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:border-white hover:text-white"
                  aria-label={`Website von ${partner.name}`}
                >
                  <Globe size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
