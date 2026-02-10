import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-light tracking-[0.3em] text-white uppercase"
          >
            Trivista
          </Link>

          {/* Links */}
          <div className="flex gap-8 text-sm">
            <Link href="/impressum/" className="transition-colors hover:text-white">
              Impressum
            </Link>
            <Link
              href="/datenschutzerklaerung/"
              className="transition-colors hover:text-white"
            >
              Datenschutzerklärung
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Rhycasa AG. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
