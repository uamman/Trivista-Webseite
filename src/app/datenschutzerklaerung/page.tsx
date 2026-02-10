import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Website trivista.ch – Informationen zum Umgang mit personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero */}
      <section className="flex h-[40vh] items-center justify-center bg-primary">
        <div className="px-6 text-center">
          <h1 className="text-4xl font-light tracking-wide text-white md:text-5xl">
            Datenschutzerklärung
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-secondary" />
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-24">
        <div className="prose prose-gray mx-auto max-w-3xl">
          <h2 className="text-2xl font-light text-primary">Allgemeines</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die
            datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede
            Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer
            persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
            entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>
          <p className="mt-4 leading-relaxed text-text-light">
            In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so
            gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu
            schützen.
          </p>

          <h2 className="mt-12 text-2xl font-light text-primary">
            Bearbeitung von Personendaten
          </h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare Person
            beziehen. Eine betroffene Person ist eine Person, über die Personendaten bearbeitet
            werden. Bearbeiten umfasst jeden Umgang mit Personendaten, unabhängig von den
            angewandten Mitteln und Verfahren, insbesondere das Aufbewahren, Bekanntgeben,
            Beschaffen, Löschen, Speichern, Verändern, Vernichten und Verwenden von
            Personendaten.
          </p>

          <h2 className="mt-12 text-2xl font-light text-primary">
            Kontaktformular
          </h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
            dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
            Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h2 className="mt-12 text-2xl font-light text-primary">Cookies</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Diese Website verwendet teilweise sogenannte Cookies. Cookies richten auf Ihrem
            Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser
            Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine
            Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
          </p>
          <p className="mt-4 leading-relaxed text-text-light">
            Die meisten der von uns verwendeten Cookies sind sogenannte «Session-Cookies». Sie
            werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem
            Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren
            Browser beim nächsten Besuch wiederzuerkennen.
          </p>

          <h2 className="mt-12 text-2xl font-light text-primary">
            Rechte der betroffenen Person
          </h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Sie haben das Recht, unentgeltlich Auskunft über Ihre gespeicherten
            personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
            Datenbearbeitung zu erhalten. Sie haben ausserdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
            Datenschutz können Sie sich jederzeit an uns wenden.
          </p>

          <h2 className="mt-12 text-2xl font-light text-primary">
            Änderungen
          </h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt
            die jeweils aktuelle, auf unserer Website publizierte Fassung.
          </p>

          <div className="mt-12 rounded-sm bg-surface p-6">
            <p className="text-sm text-text-light">
              <span className="font-medium text-primary">Verantwortliche Stelle:</span>
              <br />
              Rhycasa AG, Poststrasse 5, 9443 Widnau
              <br />
              <a href="mailto:info@rhycasa.ch" className="text-secondary hover:underline">
                info@rhycasa.ch
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
