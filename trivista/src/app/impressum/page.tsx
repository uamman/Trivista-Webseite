import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Website trivista.ch – Ein Projekt der Rhycasa AG, Widnau.",
  alternates: {
    canonical: "/impressum/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-primary">
        <Image
          src="/images/hero/Rietblick.0011-scaled.jpg"
          alt="Impressum"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 text-center">
          <h1 className="text-[30px] font-bold leading-[48px] text-white [text-shadow:0px_0px_10px_rgba(38,65,60,0.21)] md:text-[60px] md:leading-[70px]">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-12 md:py-[70px]">
        <div className="prose prose-gray mx-auto max-w-3xl">
          <h2 className="text-[22px] font-normal text-text-dark">Verantwortlich für den Inhalt</h2>

          <div className="mt-6 space-y-1 text-text">
            <p className="font-bold text-text-dark">Rhycasa AG</p>
            <p>Bahnhofstrasse 28</p>
            <p>9443 Widnau</p>
            <p>Schweiz</p>
          </div>

          <div className="mt-6 space-y-1 text-text">
            <p>
              <span className="font-bold text-text-dark">Telefon:</span>{" "}
              <a href="tel:+41717637500" className="text-accent hover:underline">
                +41 71 763 75 00
              </a>
            </p>
            <p>
              <span className="font-bold text-text-dark">E-Mail:</span>{" "}
              <a href="mailto:info@rhycasa.ch" className="text-accent hover:underline">
                info@rhycasa.ch
              </a>
            </p>
            <p>
              <span className="font-bold text-text-dark">Website:</span>{" "}
              <a
                href="https://rhycasa.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                rhycasa.ch
              </a>
            </p>
          </div>

          <h2 className="mt-12 text-[22px] font-normal text-text-dark">Haftungsausschluss</h2>
          <p className="mt-4 leading-relaxed text-text">
            Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
            Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
            Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art,
            welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
            Informationen, durch Missbrauch der Verbindung oder durch technische Störungen
            entstanden sind, werden ausgeschlossen.
          </p>
          <p className="mt-4 leading-relaxed text-text">
            Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile
            der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu
            ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
          </p>

          <h2 className="mt-12 text-[22px] font-normal text-text-dark">Haftung für Links</h2>
          <p className="mt-4 leading-relaxed text-text">
            Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
            Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten
            abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr
            des Nutzers oder der Nutzerin.
          </p>

          <h2 className="mt-12 text-[22px] font-normal text-text-dark">Urheberrechte</h2>
          <p className="mt-4 leading-relaxed text-text">
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen
            Dateien auf der Website gehören ausschliesslich der Rhycasa AG oder den speziell
            genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die
            schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
          </p>
        </div>
      </section>
    </>
  );
}
