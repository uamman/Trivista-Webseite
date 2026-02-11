import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const filteredLinks = SOCIAL_LINKS.filter((l) => l.label !== "YouTube");

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-4 px-6 py-5 md:grid-cols-3">
        {/* Left: Legal links */}
        <div className="flex justify-center gap-6 text-sm md:justify-start">
          <Link href="/impressum/" className="transition-colors hover:text-coral">
            Impressum
          </Link>
          <Link
            href="/datenschutzerklaerung/"
            className="transition-colors hover:text-coral"
          >
            Datenschutzerklärung
          </Link>
        </div>

        {/* Center: Copyright */}
        <p className="text-center text-sm text-white/70">
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
              className="group flex h-8 w-8 items-center justify-center"
              aria-label={link.label}
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={18}
                height={18}
                className="brightness-0 invert transition-all group-hover:[filter:brightness(0)_saturate(100%)_invert(44%)_sepia(22%)_saturate(1838%)_hue-rotate(314deg)_brightness(89%)_contrast(88%)]"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
