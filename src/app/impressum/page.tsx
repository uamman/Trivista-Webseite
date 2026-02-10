import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Website trivista.ch – Ein Projekt der Rhycasa AG, Widnau.",
};

export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <section className="flex h-[40vh] items-center justify-center bg-primary">
        <div className="px-6 text-center">
          <h1 className="text-4xl font-light tracking-wide text-white md:text-5xl">
            Impressum
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-secondary" />
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-24">
        <div className="prose prose-gray mx-auto max-w-3xl">
          <h2 className="text-2xl font-light text-primary">Verantwortlich für den Inhalt</h2>

          <div className="mt-6 space-y-1 text-text-light">
            <p className="font-medium text-primary">Rhycasa AG</p>
            <p>Poststrasse 5</p>
            <p>9443 Widnau</p>
            <p>Schweiz</p>
          </div>

          <div className="mt-6 space-y-1 text-text-light">
            <p>
              <span className="font-medium text-primary">Telefon:</span>{" "}
              <a href="tel:+41717637500" className="text-secondary hover:underline">
                +41 71 763 75 00
              </a>
            </p>
            <p>
              <span className="font-medium text-primary">E-Mail:</span>{" "}
              <a href="mailto:info@rhycasa.ch" className="text-secondary hover:underline">
                info@rhycasa.ch
              </a>
            </p>
            <p>
              <span className="font-medium text-primary">Website:</span>{" "}
              <a
                href="https://rhycasa.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                rhycasa.ch
              </a>
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-light text-primary">Haftungsausschluss</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
            Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
            Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art,
            welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
            Informationen, durch Missbrauch der Verbindung oder durch technische Störungen
            entstanden sind, werden ausgeschlossen.
          </p>
          <p className="mt-4 leading-relaxed text-text-light">
            Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile
            der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu
            ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
          </p>

          <h2 className="mt-12 text-2xl font-light text-primary">Haftung für Links</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
            Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten
            abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr
            des Nutzers oder der Nutzerin.
          </p>

          <h2 className="mt-12 text-2xl font-light text-primary">Urheberrechte</h2>
          <p className="mt-4 leading-relaxed text-text-light">
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
