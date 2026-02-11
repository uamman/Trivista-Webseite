"use client";

import { useEffect, useRef, useCallback } from "react";
import { APARTMENTS } from "@/lib/constants";

// Reverse lookup: svgId → apartment id
const SVG_TO_APT = Object.fromEntries(
  APARTMENTS.map((apt) => [apt.svgId, apt.id])
);

// Floor levels per building (bottom to top)
const BUILDING_LEVELS: Record<number, string[]> = {
  1: ["apartment-1--ground", "apartment-1--first", "apartment-1--roof"],
  2: ["apartment-2--ground", "apartment-2--first", "apartment-2--roof"],
  3: ["apartment-3--ground", "apartment-3--first", "apartment-3--roof"],
};

// Reverse lookup: svgId → { building, levelIndex }
const SVG_LEVEL_INFO: Record<string, { building: number; levelIndex: number }> =
  {};
Object.entries(BUILDING_LEVELS).forEach(([building, levels]) => {
  levels.forEach((svgId, index) => {
    SVG_LEVEL_INFO[svgId] = { building: Number(building), levelIndex: index };
  });
});

// How far the compact block above the selected floor shifts up (SVG user units)
const EXPLODE_OFFSET = 80;

interface BuildingNavigatorProps {
  activeApartment: number | null;
  onApartmentHover: (id: number | null) => void;
  onApartmentClick: (id: number) => void;
}

export default function BuildingNavigator({
  activeApartment,
  onApartmentHover,
  onApartmentClick,
}: BuildingNavigatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgLoadedRef = useRef(false);

  // Load SVG once
  useEffect(() => {
    fetch("/images/angebot/building-navigator.svg")
      .then((res) => res.text())
      .then((svgText) => {
        if (!containerRef.current) return;
        containerRef.current.innerHTML = svgText;
        svgLoadedRef.current = true;

        // Style the SVG element itself
        const svg = containerRef.current.querySelector("svg");
        if (svg) {
          svg.style.width = "100%";
          svg.style.height = "auto";
          svg.style.maxWidth = "800px";
          svg.style.display = "block";
          svg.style.margin = "0 auto";
        }
      });
  }, []);

  // Update exploded view + highlight when activeApartment changes
  useEffect(() => {
    if (!containerRef.current || !svgLoadedRef.current) return;

    // Reset all transforms and active classes
    containerRef.current
      .querySelectorAll(".apartment-level")
      .forEach((el) => {
        el.classList.remove("svg-level-active");
        (el as SVGElement).style.transform = "";
      });

    if (activeApartment !== null) {
      const apt = APARTMENTS.find((a) => a.id === activeApartment);
      if (apt) {
        // Highlight the selected apartment
        const activeEl = containerRef.current.querySelector(`#${apt.svgId}`);
        if (activeEl) activeEl.classList.add("svg-level-active");

        // Exploded view: shift ALL floors above the selected one
        // by the same amount (compact block, no gaps between them)
        const info = SVG_LEVEL_INFO[apt.svgId];
        if (info) {
          const levels = BUILDING_LEVELS[info.building];
          levels.forEach((svgId, index) => {
            if (index > info.levelIndex) {
              const levelEl = containerRef.current!.querySelector(`#${svgId}`);
              if (levelEl) {
                (levelEl as SVGElement).style.transform = `translateY(-${EXPLODE_OFFSET}px)`;
              }
            }
          });
        }
      }
    }
  }, [activeApartment]);

  // Find apartment from SVG element
  const findApartment = useCallback((target: Element): number | null => {
    // Check if target or parent is an apartment-level group
    const level = target.closest(".apartment-level");
    if (level && level.id) {
      return SVG_TO_APT[level.id] ?? null;
    }
    // Check overlay paths
    const overlay = target.closest("[class*='overlay']");
    if (overlay) {
      const cls = overlay.getAttribute("class") || "";
      const match = cls.match(/building-(\d+)--overlay/);
      if (match) {
        // Clicking overlay = select the roof (top) apartment of that building
        const buildingNum = match[1];
        const roofId = `apartment-${buildingNum}--roof`;
        return SVG_TO_APT[roofId] ?? null;
      }
    }
    return null;
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const aptId = findApartment(e.target as Element);
      if (aptId !== null) onApartmentClick(aptId);
    },
    [findApartment, onApartmentClick]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const aptId = findApartment(e.target as Element);
      onApartmentHover(aptId);
    },
    [findApartment, onApartmentHover]
  );

  return (
    <div
      ref={containerRef}
      className="building-navigator"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => onApartmentHover(null)}
      role="img"
      aria-label="Interaktive Gebäudeübersicht Trivista"
    />
  );
}
