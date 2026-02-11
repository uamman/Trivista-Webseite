"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Download, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BuildingNavigator from "@/components/angebot/BuildingNavigator";
import { APARTMENTS, DOCUMENTS, PARKING, PROCESS_STEPS } from "@/lib/constants";

const STEP_ICONS: Record<string, string> = {
  interesse: "/images/icons/process/interesse.svg",
  finanzierung: "/images/icons/process/finanzierung.svg",
  reservation: "/images/icons/process/reservation.svg",
  kaufvertrag: "/images/icons/process/kaufvertrag.svg",
  wohnungsuebergabe: "/images/icons/process/wohnungsuebergabe.svg",
  nachbetreuung: "/images/icons/process/nachbetreuung.svg",
};

const STATUS_CONFIG = {
  available: { label: "Verfügbar", icon: "/images/icons/status/verfuegbar.svg" },
  reserved: { label: "Reserviert", icon: "/images/icons/status/reserviert.svg" },
  sold: { label: "Verkauft", icon: "/images/icons/status/verkauft.svg" },
} as const;

export default function AngebotPage() {
  const [activeApartment, setActiveApartment] = useState<number | null>(null);
  const [hoveredApartment, setHoveredApartment] = useState<number | null>(null);
  const [openStep, setOpenStep] = useState<string | null>("interesse");

  // The highlighted apartment is either hovered or clicked
  const highlightedApt = hoveredApartment ?? activeApartment;

  const handleApartmentClick = (id: number) => {
    setActiveApartment(id);
    // Scroll to table row
    const row = document.getElementById(`apt-row-${id}`);
    if (row) row.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleRowClick = (id: number) => {
    setActiveApartment(id);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden bg-primary md:min-h-[700px]">
        <Image
          src="/images/hero/Rietblick.0021-scaled.jpg"
          alt="Trivista Angebot"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-[80%] px-6 text-center">
          <p className="mb-4 text-[22px] font-light text-white [text-shadow:0px_0px_10px_rgba(38,65,60,0.21)]">
            Trivista &middot; Angebot
          </p>
          <h1 className="text-[30px] font-bold leading-[48px] text-white [text-shadow:0px_0px_10px_rgba(38,65,60,0.21)] md:text-[60px] md:leading-[70px]">
            Angebot
          </h1>
        </div>
      </section>

      {/* Wohnungen */}
      <section className="px-6 py-12 md:py-[70px]">
        <div className="mx-auto max-w-[1140px]">
          <SectionHeading
            title="Wohnungen"
            subtitle="Entdecken Sie mit unserem interaktiven Navigator das exklusive Wohnungsangebot im Projekt Trivista und finden Sie Ihr perfektes Zuhause."
          />

          {/* Interactive Building SVG */}
          <div className="mb-12">
            <BuildingNavigator
              activeApartment={highlightedApt}
              onApartmentHover={setHoveredApartment}
              onApartmentClick={handleApartmentClick}
            />
          </div>

          {/* Desktop Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="hidden overflow-hidden rounded-[10px] border border-border md:block"
          >
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-0 bg-primary-medium px-6 py-3 text-sm font-bold tracking-wide text-white uppercase">
              <span>Whg-Nr.</span>
              <span>Geschoss</span>
              <span className="text-right">Kaufpreis</span>
              <span className="text-right">Zimmer</span>
              <span className="text-right">Wohnfläche</span>
              <span className="text-center">Grundriss</span>
            </div>

            {APARTMENTS.map((apt, index) => {
              const status = STATUS_CONFIG[apt.status];
              const isActive = highlightedApt === apt.id;
              return (
                <div
                  key={apt.id}
                  id={`apt-row-${apt.id}`}
                  onClick={() => handleRowClick(apt.id)}
                  onMouseEnter={() => setHoveredApartment(apt.id)}
                  onMouseLeave={() => setHoveredApartment(null)}
                  className={`grid cursor-pointer grid-cols-6 items-center gap-0 px-6 py-4 transition-all duration-200 ${
                    isActive
                      ? "bg-accent/20"
                      : index % 2 === 1
                        ? "bg-border/30"
                        : "bg-white"
                  } hover:bg-primary/5`}
                >
                  <span className="font-bold text-text-dark">Wohnung {apt.id}</span>
                  <span className="text-text">{apt.floor}</span>
                  <span className="text-right text-text">{apt.price}</span>
                  <span className="text-right text-text">{apt.rooms}</span>
                  <span className="text-right text-text">{apt.area} m²</span>
                  <span className="flex items-center justify-center">
                    <span className="flex w-8 justify-center">
                      {apt.status === "available" ? (
                        <a
                          href={apt.floorPlan}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center text-sm text-primary transition-colors hover:text-coral"
                        >
                          <FileText size={16} />
                        </a>
                      ) : null}
                    </span>
                    <span className="flex w-8 justify-center">
                      <Image src={status.icon} alt={status.label} width={16} height={16} />
                    </span>
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Mobile Cards – sticky stack on scroll */}
          <div className="md:hidden">
            {APARTMENTS.map((apt, index) => {
              const status = STATUS_CONFIG[apt.status];
              const isActive = highlightedApt === apt.id;
              return (
                <div
                  key={apt.id}
                  id={`apt-row-${apt.id}`}
                  onClick={() => handleRowClick(apt.id)}
                  className={`sticky cursor-pointer rounded-[10px] border p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] transition-colors duration-200 ${
                    isActive
                      ? "border-accent bg-accent/10"
                      : "border-border bg-white"
                  }`}
                  style={{
                    top: `${64 + index * 6}px`,
                    zIndex: index,
                    marginBottom: index < APARTMENTS.length - 1 ? "12px" : "0",
                  }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-text-dark">Wohnung {apt.id}</span>
                    <div className="flex items-center gap-2">
                      {apt.status === "available" ? (
                        <a
                          href={apt.floorPlan}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-primary transition-colors hover:text-coral"
                        >
                          <FileText size={18} />
                        </a>
                      ) : null}
                      <Image src={status.icon} alt={status.label} width={16} height={16} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <span className="text-text/60">Geschoss</span>
                    <span className="text-right text-text">{apt.floor}</span>
                    <span className="text-text/60">Kaufpreis</span>
                    <span className="text-right font-bold text-text-dark">{apt.price}</span>
                    <span className="text-text/60">Zimmer</span>
                    <span className="text-right text-text">{apt.rooms}</span>
                    <span className="text-text/60">Wohnfläche</span>
                    <span className="text-right text-text">{apt.area} m²</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legende */}
          <div className="mt-4 flex flex-wrap items-center gap-6 px-2">
            {Object.entries(STATUS_CONFIG).map(([key, val]) => (
              <div key={key} className="flex items-center gap-2">
                <Image src={val.icon} alt={val.label} width={14} height={14} />
                <span className="text-sm text-text">{val.label}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-primary" />
              <span className="text-sm text-text">Grundriss (PDF)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Parkplätze */}
      <section className="bg-surface px-6 py-12 md:py-[70px]">
        <div className="mx-auto max-w-[1140px]">
          <SectionHeading
            title="Parkplätze"
            subtitle="In der gemeinsamen Tiefgarage stehen 18 Parkplätze zur Verfügung. Die Parkplätze sind für E-Mobilität vorbereitet und können bei Bedarf mit einer Ladestation ausgestattet werden."
          />

          {/* Desktop Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="hidden overflow-hidden rounded-[10px] border border-border md:block"
          >
            <div className="grid grid-cols-5 gap-0 bg-primary-medium px-6 py-3 text-sm font-bold tracking-wide text-white uppercase">
              <span>Typ</span>
              <span className="text-right">Freie Plätze</span>
              <span className="text-right">Kaufpreis</span>
              <span className="text-center">Grundriss</span>
              <span className="text-center">Status</span>
            </div>
            <div className="grid grid-cols-5 items-center gap-0 bg-white px-6 py-4">
              <span className="font-bold text-text-dark">{PARKING.type}</span>
              <span className="text-right text-text">{PARKING.available}</span>
              <span className="text-right text-text">{PARKING.price}</span>
              <span className="text-center">
                <a
                  href={PARKING.floorPlan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary transition-colors hover:text-coral"
                >
                  Grundriss
                </a>
              </span>
              <span className="flex justify-center">
                <Image src="/images/icons/status/verfuegbar.svg" alt="Verfügbar" width={16} height={16} />
              </span>
            </div>
          </motion.div>

          {/* Mobile Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="rounded-[10px] border border-border bg-white p-4 md:hidden"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-lg font-bold text-text-dark">{PARKING.type}</span>
              <Image src="/images/icons/status/verfuegbar.svg" alt="Verfügbar" width={16} height={16} />
            </div>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <span className="text-text/60">Freie Plätze</span>
              <span className="text-right text-text">{PARKING.available}</span>
              <span className="text-text/60">Kaufpreis</span>
              <span className="text-right font-bold text-text-dark">{PARKING.price}</span>
              <span className="text-text/60">Grundriss</span>
              <span className="text-right">
                <a
                  href={PARKING.floorPlan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary transition-colors hover:text-coral"
                >
                  PDF anzeigen
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Downloads */}
      <section className="px-6 py-12 md:py-[70px]">
        <div className="mx-auto max-w-[1140px]">
          <SectionHeading
            title="Downloads"
            subtitle="Detaillierte Informationen rund um das Neubauprojekt «Trivista»."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {DOCUMENTS.map((doc, index) => (
              <motion.a
                key={doc.href}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative block overflow-hidden rounded-[10px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.11)] transition-shadow duration-300 hover:shadow-[0px_10px_25px_0px_rgba(0,0,0,0.16)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Download banner floating above image */}
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-[8px] bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-white">
                    <div>
                      <span className="text-base font-bold text-text-dark">{doc.label}</span>
                      <p className="mt-0.5 text-xs text-text/60">PDF-Dokument</p>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors duration-300 group-hover:bg-coral">
                      <Download size={16} />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Weiteres Vorgehen */}
      <section className="bg-surface px-6 py-12 md:py-[70px]">
        <div className="mx-auto max-w-[1140px]">
          <SectionHeading
            title="Weiteres Vorgehen"
            subtitle="Schritt für Schritt zu Ihrem neuen Zuhause – Wir begleiten Sie auf diesem Weg."
          />

          <div className="space-y-3">
            {PROCESS_STEPS.map((step, index) => {
              const isOpen = openStep === step.id;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="rounded-[10px]"
                >
                  <button
                    onClick={() => setOpenStep(isOpen ? null : step.id)}
                    className={`flex w-full items-center gap-5 rounded-[10px] px-6 py-5 text-left transition-all duration-500 ease-out ${
                      isOpen
                        ? "bg-primary text-white shadow-[0px_10px_20px_0px_rgba(0,0,0,0.12)]"
                        : "bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] hover:shadow-[0px_6px_20px_0px_rgba(0,0,0,0.08)]"
                    }`}
                  >
                    <Image
                      src={STEP_ICONS[step.id]}
                      alt={step.title}
                      width={28}
                      height={28}
                      className={`shrink-0 transition-all duration-500 ease-out ${isOpen ? "brightness-0 invert" : ""}`}
                    />
                    <span className={`flex-1 text-lg font-bold transition-colors duration-500 ease-out ${isOpen ? "text-white" : "text-text-dark"}`}>
                      {step.title}
                    </span>
                    <ChevronRight
                      size={20}
                      className={`shrink-0 transition-transform duration-500 ease-out ${
                        isOpen ? "rotate-90 text-white" : "text-text"
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows,opacity] duration-500 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pt-4 pb-2 leading-relaxed text-text">
                        {step.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
