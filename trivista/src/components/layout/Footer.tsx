import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const filteredLinks = SOCIAL_LINKS.filter((l) => l.label !== "YouTube");

  return (
    <footer className="bg-[#325A53] text-white">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-2 px-6 py-3 md:grid-cols-3 md:gap-4">
        {/* Left: Legal links */}
        <div className="flex justify-center gap-6 text-sm md:justify-start">
          <Link href="/impressum/" className="text-white/80 transition-colors hover:text-white">
            Impressum
          </Link>
          <Link
            href="/datenschutzerklaerung/"
            className="text-white/80 transition-colors hover:text-white"
          >
            Datenschutzerklärung
          </Link>
        </div>

        {/* Center: Copyright */}
        <p className="text-center text-sm text-white/60">
          &copy; 2026 Rhycasa AG
        </p>

        {/* Right: Social Icons */}
        <div className="flex items-center justify-center gap-3 md:justify-end">
          {filteredLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-8 w-8 items-center justify-center opacity-70 transition-opacity hover:opacity-100"
              aria-label={link.label}
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={18}
                height={18}
                className="brightness-0 invert"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
