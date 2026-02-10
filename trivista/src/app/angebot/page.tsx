"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { APARTMENTS } from "@/lib/constants";

const STATUS_CONFIG = {
  available: { label: "Verfügbar", color: "bg-green-500" },
  reserved: { label: "Reserviert", color: "bg-amber-500" },
  sold: { label: "Verkauft", color: "bg-red-500" },
} as const;

export default function AngebotPage() {
  const [openBuilding, setOpenBuilding] = useState<string | null>("Haus A");

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[repeating-linear-gradient(60deg,transparent,transparent_35px,rgba(139,115,85,0.1)_35px,rgba(139,115,85,0.1)_70px)]" />
        </div>
        <div className="relative z-10 px-6 text-center">
          <p className="mb-4 text-sm tracking-[0.4em] text-secondary uppercase">
            Trivista
          </p>
          <h1 className="text-4xl font-light tracking-wide text-white md:text-6xl">
            Angebot
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-secondary" />
          <p className="mt-6 text-lg font-light text-white/70">
            12 exklusive Eigentumswohnungen in drei Gebäudekörpern
          </p>
        </div>
      </section>

      {/* Apartment Listings */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Wohnungsangebot"
            subtitle="Wählen Sie Ihr neues Zuhause"
          />

          {/* Legend */}
          <div className="mb-12 flex flex-wrap justify-center gap-6">
            {Object.entries(STATUS_CONFIG).map(([key, config]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${config.color}`} />
                <span className="text-sm text-text-light">{config.label}</span>
              </div>
            ))}
          </div>

          {/* Buildings */}
          <div className="space-y-4">
            {APARTMENTS.map((building) => (
              <div
                key={building.building}
                className="overflow-hidden rounded-sm border border-gray-200"
              >
                {/* Building Header */}
                <button
                  onClick={() =>
                    setOpenBuilding(
                      openBuilding === building.building
                        ? null
                        : building.building
                    )
                  }
                  className="flex w-full items-center justify-between bg-white px-6 py-5 transition-colors hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <Building2 className="text-secondary" size={24} />
                    <div className="text-left">
                      <h3 className="text-lg font-medium text-primary">
                        {building.building}
                      </h3>
                      <p className="text-sm text-text-light">
                        {building.units.length} Wohnungen &middot;{" "}
                        {
                          building.units.filter((u) => u.status === "available")
                            .length
                        }{" "}
                        verfügbar
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`text-text-light transition-transform ${
                      openBuilding === building.building ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                {/* Units */}
                <AnimatePresence>
                  {openBuilding === building.building && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100">
                        {/* Table Header */}
                        <div className="grid grid-cols-5 gap-4 bg-surface px-6 py-3 text-xs font-medium tracking-wider text-text-light uppercase">
                          <span>Wohnung</span>
                          <span>Geschoss</span>
                          <span>Zimmer</span>
                          <span>Fläche</span>
                          <span>Status</span>
                        </div>

                        {/* Table Rows */}
                        {building.units.map((unit, index) => {
                          const status = STATUS_CONFIG[unit.status];
                          return (
                            <motion.div
                              key={unit.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="grid grid-cols-5 items-center gap-4 border-t border-gray-50 px-6 py-4"
                            >
                              <span className="font-medium text-primary">
                                {unit.id}
                              </span>
                              <span className="text-text-light">
                                {unit.floor}
                              </span>
                              <span className="text-text-light">
                                {unit.rooms}
                              </span>
                              <span className="text-text-light">
                                {unit.area} m²
                              </span>
                              <span className="flex items-center gap-2">
                                <span
                                  className={`h-2.5 w-2.5 rounded-full ${status.color}`}
                                />
                                <span className="text-sm">{status.label}</span>
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-text-light">
              Interessiert? Kontaktieren Sie uns für weitere Informationen und
              Grundrisse.
            </p>
            <Button href="/kontakt/">Kontakt aufnehmen</Button>
          </div>
        </div>
      </section>
    </>
  );
}
