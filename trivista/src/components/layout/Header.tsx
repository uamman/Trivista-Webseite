"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT, WHATSAPP } from "@/lib/constants";

const allLinks = [...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] mb-[-90px] transition-all duration-500 ${
          scrolled
            ? "bg-black/42 backdrop-blur-[20px] backdrop-saturate-[180%]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-2.5">
          {/* Left Nav - Desktop */}
          <ul className="hidden gap-8 md:flex">
            {NAV_LINKS_LEFT.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[22px] font-normal text-white transition-colors hover:underline hover:underline-offset-4 ${
                    pathname === link.href || pathname === link.href.slice(0, -1)
                      ? "underline underline-offset-4"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo – crossfade between full logo and scrolled logo */}
          <Link
            href="/"
            onClick={() => isOpen && setIsOpen(false)}
            className="relative z-[10001] h-[36px] w-[96px] shrink-0 md:h-[55px] md:w-[140px]"
          >
            <Image
              src="/images/logo/trivista-color-logo.webp"
              alt="Trivista"
              width={100}
              height={55}
              className={`absolute inset-0 h-full w-full object-contain transition-all duration-500 ease-in-out ${
                isOpen
                  ? "scale-100 opacity-100"
                  : scrolled
                    ? "scale-90 opacity-0"
                    : "scale-100 opacity-100 brightness-0 invert"
              }`}
              priority
            />
            <Image
              src="/images/logo/trivista-logo-white.png"
              alt="Trivista"
              width={140}
              height={50}
              className={`absolute inset-0 h-full w-full object-contain transition-all duration-500 ease-in-out ${
                isOpen
                  ? "scale-110 opacity-0"
                  : scrolled
                    ? "scale-100 opacity-100"
                    : "scale-110 opacity-0"
              }`}
            />
          </Link>

          {/* Right Nav - Desktop */}
          <ul className="hidden gap-8 md:flex">
            {NAV_LINKS_RIGHT.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[22px] font-normal text-white transition-colors hover:underline hover:underline-offset-4 ${
                    pathname === link.href || pathname === link.href.slice(0, -1)
                      ? "underline underline-offset-4"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle – Animated Hamburger/X */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[10001] flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={isOpen ? "Menü schliessen" : "Menü öffnen"}
          >
            <div className="flex h-[18px] w-6 flex-col justify-between">
              <motion.span
                animate={
                  isOpen
                    ? { rotate: 45, y: 8, backgroundColor: "#26413C" }
                    : { rotate: 0, y: 0, backgroundColor: "#ffffff" }
                }
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="block h-[2px] w-full origin-center rounded-full"
              />
              <motion.span
                animate={
                  isOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block h-[2px] w-full rounded-full bg-white"
              />
              <motion.span
                animate={
                  isOpen
                    ? { rotate: -45, y: -8, backgroundColor: "#26413C" }
                    : { rotate: 0, y: 0, backgroundColor: "#ffffff" }
                }
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="block h-[2px] w-full origin-center rounded-full"
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-[10000] bg-white md:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 pt-24 pb-8">
              {/* Nav Links */}
              <nav>
                <ul className="space-y-1">
                  {allLinks.map((link, i) => {
                    const isActive =
                      pathname === link.href ||
                      pathname === link.href.slice(0, -1);
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + i * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="group relative flex items-center py-4"
                        >
                          {/* Active indicator */}
                          <span
                            className={`absolute left-0 h-8 w-[3px] rounded-full transition-all duration-300 ${
                              isActive
                                ? "scale-y-100 bg-primary opacity-100"
                                : "scale-y-0 bg-primary opacity-0"
                            }`}
                          />
                          <span
                            className={`pl-6 text-[32px] tracking-tight transition-colors duration-200 ${
                              isActive
                                ? "font-normal text-primary"
                                : "font-light text-text-dark group-hover:text-primary"
                            }`}
                          >
                            {link.label}
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Bottom: Berater + Close */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="border-t border-border pt-6">
                  {/* Berater */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src="/images/contact/ueli-ammann.webp"
                        alt={WHATSAPP.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-dark">{WHATSAPP.name}</p>
                      <p className="text-xs text-text">{WHATSAPP.role}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-4">
                    <a
                      href="tel:+41717637500"
                      className="flex items-center gap-2 text-[14px] text-text transition-colors hover:text-primary"
                    >
                      <Phone size={14} className="text-primary" />
                      +41 71 763 75 00
                    </a>
                    <a
                      href="mailto:info@rhycasa.ch"
                      className="flex items-center gap-2 text-[14px] text-text transition-colors hover:text-primary"
                    >
                      <Mail size={14} className="text-primary" />
                      info@rhycasa.ch
                    </a>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-6 w-full rounded-[30px] border border-border py-3 text-sm font-bold text-text transition-all hover:border-primary hover:text-primary"
                >
                  Menü schliessen
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
