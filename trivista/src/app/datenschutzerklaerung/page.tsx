import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Website trivista.ch – Informationen zum Umgang mit personenbezogenen Daten.",
  alternates: {
    canonical: "/datenschutzerklaerung/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-primary">
        <Image
          src="/images/hero/Rietblick.0001-1-scaled.jpg"
          alt="Datenschutzerklärung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 text-center">
          <h1 className="text-[30px] font-bold leading-[48px] text-white [text-shadow:0px_0px_10px_rgba(38,65,60,0.21)] md:text-[60px] md:leading-[70px]">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-12 md:py-[70px]">
        <div className="prose prose-gray mx-auto max-w-3xl">
          <h2 className="text-[22px] font-normal text-text-dark">Allgemeines</h2>
          <p className="mt-4 leading-relaxed text-text">
            Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die
            datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede
            Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer
            persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
            entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>
          <p className="mt-4 leading-relaxed text-text">
            In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so
            gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu
            schützen.
          </p>

          <h2 className="mt-12 text-[22px] font-normal text-text-dark">
            Bearbeitung von Personendaten
          </h2>
          <p className="mt-4 leading-relaxed text-text">
            Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare Person
            beziehen. Eine betroffene Person ist eine Person, über die Personendaten bearbeitet
            werden. Bearbeiten umfasst jeden Umgang mit Personendaten, unabhängig von den
            angewandten Mitteln und Verfahren, insbesondere das Aufbewahren, Bekanntgeben,
            Beschaffen, Löschen, Speichern, Verändern, Vernichten und Verwenden von
            Personendaten.
          </p>

          <h2 className="mt-12 text-[22px] font-normal text-text-dark">
            Kontaktformular
          </h2>
          <p className="mt-4 leading-relaxed text-text">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
            dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
            Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h2 className="mt-12 text-[22px] font-normal text-text-dark">Cookies</h2>
          <p className="mt-4 leading-relaxed text-text">
            Diese Website verwendet teilweise sogenannte Cookies. Cookies richten auf Ihrem
            Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser
            Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine
            Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
          </p>
          <p className="mt-4 leading-relaxed text-text">
            Die meisten der von uns verwendeten Cookies sind sogenannte «Session-Cookies». Sie
            werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem
            Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren
            Browser beim nächsten Besuch wiederzuerkennen.
          </p>

          <h2 className="mt-12 text-[22px] font-normal text-text-dark">
            Rechte der betroffenen Person
          </h2>
          <p className="mt-4 leading-relaxed text-text">
            Sie haben das Recht, unentgeltlich Auskunft über Ihre gespeicherten
            personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
            Datenbearbeitung zu erhalten. Sie haben ausserdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
            Datenschutz können Sie sich jederzeit an uns wenden.
          </p>

          <h2 className="mt-12 text-[22px] font-normal text-text-dark">
            Änderungen
          </h2>
          <p className="mt-4 leading-relaxed text-text">
            Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt
            die jeweils aktuelle, auf unserer Website publizierte Fassung.
          </p>

          <div className="mt-12 rounded-[10px] bg-surface p-6">
            <p className="text-base text-text">
              <span className="font-bold text-text-dark">Verantwortliche Stelle:</span>
              <br />
              Rhycasa AG, Bahnhofstrasse 28, 9443 Widnau
              <br />
              <a href="mailto:info@rhycasa.ch" className="text-accent hover:underline">
                info@rhycasa.ch
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
