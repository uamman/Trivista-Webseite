"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const allLinks = [...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left Nav - Desktop */}
        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS_LEFT.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  pathname === link.href || pathname === link.href.slice(0, -1)
                    ? "text-secondary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Link href="/" className="text-2xl font-light tracking-[0.3em] text-white uppercase">
          Trivista
        </Link>

        {/* Right Nav - Desktop */}
        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS_RIGHT.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  pathname === link.href || pathname === link.href.slice(0, -1)
                    ? "text-secondary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label={isOpen ? "Menü schliessen" : "Menü öffnen"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-primary md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {allLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-sm tracking-widest uppercase transition-colors ${
                    pathname === link.href || pathname === link.href.slice(0, -1)
                      ? "text-secondary"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
