import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Website trivista.ch – Informationen zum Umgang mit Personendaten gemäss dem Schweizer Datenschutzgesetz (DSG).",
  alternates: {
    canonical: "/datenschutzerklaerung/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DatenschutzPage() {
  const h2Class = "mt-12 text-[22px] font-normal text-text-dark";
  const h3Class = "mt-8 text-lg font-bold text-text-dark";
  const pClass = "mt-4 leading-relaxed text-text";

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-primary">
        <Image
          src="/images/hero/Rietblick.0001-1-scaled.jpg"
          alt="Datenschutzerklärung"
          fill
          className="object-cover"
          sizes="100vw"
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
      <section className="bg-surface px-6 py-12 md:py-[70px]">
        <div className="mx-auto max-w-3xl">
          {/* Last updated */}
          <p className="mb-8 text-sm text-text/60">
            Letzte Aktualisierung: 11. Februar 2026
          </p>

          {/* 1. Verantwortliche Stelle */}
          <div className="rounded-[10px] border border-border bg-white p-6 shadow-[0px_10px_10px_0px_rgba(0,0,0,0.04)]">
            <h2 className="text-[22px] font-normal text-text-dark">
              1. Verantwortliche Stelle
            </h2>
            <p className={pClass}>
              Verantwortlich für die Datenbearbeitung auf dieser Website ist:
            </p>
            <p className={pClass}>
              <strong className="text-text-dark">Rhycasa AG</strong>
              <br />
              Bahnhofstrasse 28
              <br />
              9443 Widnau
              <br />
              Schweiz
            </p>
            <p className={pClass}>
              Telefon:{" "}
              <a
                href="tel:+41717637500"
                className="text-primary hover:underline"
              >
                +41 71 763 75 00
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@rhycasa.ch"
                className="text-primary hover:underline"
              >
                info@rhycasa.ch
              </a>
              <br />
              Website:{" "}
              <a
                href="https://rhycasa.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                rhycasa.ch
              </a>
            </p>
          </div>

          {/* 2. Geltungsbereich und Rechtsgrundlage */}
          <h2 className={h2Class}>2. Geltungsbereich und Rechtsgrundlage</h2>
          <p className={pClass}>
            Diese Datenschutzerklärung gilt für die Website{" "}
            <strong className="text-text-dark">trivista.ch</strong> und
            informiert Sie über die Art, den Umfang und den Zweck der
            Bearbeitung von Personendaten.
          </p>
          <p className={pClass}>
            Rechtsgrundlage bildet das Schweizer Bundesgesetz über den
            Datenschutz (DSG) in der revidierten Fassung vom 1. September 2023
            sowie, soweit anwendbar, die Verordnung über den Datenschutz
            (DSV). Sofern Sie aus dem Europäischen Wirtschaftsraum (EWR)
            auf unsere Website zugreifen, kann zudem die
            Datenschutz-Grundverordnung (DSGVO) zur Anwendung kommen.
          </p>

          {/* 3. Grundsätze der Datenbearbeitung */}
          <h2 className={h2Class}>
            3. Grundsätze der Datenbearbeitung
          </h2>
          <p className={pClass}>
            Personendaten sind alle Angaben, die sich auf eine bestimmte oder
            bestimmbare natürliche Person beziehen. Wir bearbeiten
            Personendaten im Einklang mit dem Schweizer Datenschutzrecht. Wir
            bearbeiten Personendaten nur, soweit dies für die Bereitstellung
            der Website und unserer Dienstleistungen erforderlich ist.
          </p>
          <p className={pClass}>
            Die Bearbeitung erfolgt grundsätzlich gestützt auf folgende
            Rechtsgrundlagen:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-text">
            <li>
              <strong className="text-text-dark">Einwilligung</strong> (Art. 6
              Abs. 6 DSG): Sie haben Ihre Einwilligung für einen bestimmten
              Zweck erteilt (z.&thinsp;B. Analyse-Cookies).
            </li>
            <li>
              <strong className="text-text-dark">
                Vertragserfüllung und vorvertragliche Massnahmen
              </strong>{" "}
              (Art. 6 Abs. 3 DSG): Die Bearbeitung ist erforderlich, um einen
              Vertrag zu erfüllen oder vorvertragliche Anfragen zu bearbeiten.
            </li>
            <li>
              <strong className="text-text-dark">
                Überwiegende Interessen
              </strong>{" "}
              (Art. 6 Abs. 1 Bst. a und b DSG): Die Bearbeitung ist zur
              Wahrung berechtigter Interessen erforderlich, z.&thinsp;B. für
              den sicheren Betrieb der Website.
            </li>
          </ul>

          {/* 4. Erhebung von Personendaten */}
          <h2 className={h2Class}>
            4. Automatisch erhobene Daten (Server-Logfiles)
          </h2>
          <p className={pClass}>
            Beim Besuch unserer Website werden durch den Hosting-Provider
            automatisch Informationen in sogenannten Server-Logfiles
            gespeichert, die Ihr Browser automatisch übermittelt. Diese
            umfassen:
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-6 leading-relaxed text-text">
            <li>IP-Adresse des anfragenden Geräts</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Seite</li>
            <li>Übertragene Datenmenge</li>
            <li>
              Browsertyp und -version, Betriebssystem, Bildschirmauflösung
            </li>
            <li>Referrer-URL (zuvor besuchte Seite)</li>
          </ul>
          <p className={pClass}>
            Diese Daten werden ausschliesslich zur Sicherstellung eines
            störungsfreien Betriebs und zur Verbesserung unseres Angebots
            ausgewertet. Eine Zusammenführung mit anderen Datenquellen findet
            nicht statt. Die Daten werden nach 30 Tagen automatisch gelöscht.
          </p>

          {/* 5. Hosting */}
          <h2 className={h2Class}>5. Hosting</h2>
          <p className={pClass}>
            Diese Website wird von{" "}
            <strong className="text-text-dark">Vercel Inc.</strong> (340 S Lemon
            Ave #4133, Walnut, CA 91789, USA) gehostet. Vercel verarbeitet die
            unter Ziffer 4 genannten Daten im Rahmen der Auftragsbearbeitung in
            unserem Auftrag. Server von Vercel befinden sich weltweit,
            einschliesslich in den USA und Europa. Vercel setzt hierfür Edge
            Nodes ein, die Inhalte möglichst nahe am Standort des Nutzers
            ausliefern.
          </p>
          <p className={pClass}>
            Für die Datenübermittlung in die USA stützt sich Vercel auf
            Standardvertragsklauseln (SCC) der EU-Kommission. Weitere
            Informationen finden Sie in der{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Datenschutzerklärung von Vercel
            </a>
            .
          </p>

          {/* 6. SSL/TLS-Verschlüsselung */}
          <h2 className={h2Class}>6. SSL/TLS-Verschlüsselung</h2>
          <p className={pClass}>
            Diese Website nutzt aus Sicherheitsgründen eine
            SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
            erkennen Sie daran, dass die Adresszeile des Browsers von
            «http://» auf «https://» wechselt und an dem Schloss-Symbol.
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
            Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
            werden.
          </p>

          {/* 7. Cookies */}
          <h2 className={h2Class}>7. Cookies und lokale Speicherung</h2>
          <p className={pClass}>
            Unsere Website verwendet Cookies und den lokalen Speicher
            (localStorage) Ihres Browsers. Cookies sind kleine Textdateien, die
            auf Ihrem Endgerät abgelegt werden. Der lokale Speicher
            funktioniert ähnlich, speichert jedoch grössere Datenmengen direkt
            im Browser.
          </p>

          <h3 className={h3Class}>a) Technisch notwendige Speicherung</h3>
          <p className={pClass}>
            Wir speichern Ihre Cookie-Einwilligung im lokalen Speicher Ihres
            Browsers (Schlüssel:{" "}
            <code className="rounded bg-primary/5 px-1.5 py-0.5 text-sm text-text-dark">
              trivista_cookie_consent
            </code>
            ). Diese Speicherung ist für den Betrieb der Website erforderlich
            und erfolgt auf Grundlage unseres berechtigten Interesses. Die
            gespeicherten Informationen umfassen: ob Sie der Nutzung von
            Analyse-Cookies zugestimmt haben sowie den Zeitpunkt Ihrer
            Entscheidung.
          </p>

          <h3 className={h3Class}>b) Analyse-Cookies (Google Analytics)</h3>
          <p className={pClass}>
            Nur wenn Sie über unser Cookie-Banner ausdrücklich zustimmen,
            werden folgende Cookies von Google Analytics gesetzt:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 pr-4 text-left font-bold text-text-dark">
                    Cookie
                  </th>
                  <th className="pb-3 pr-4 text-left font-bold text-text-dark">
                    Zweck
                  </th>
                  <th className="pb-3 text-left font-bold text-text-dark">
                    Speicherdauer
                  </th>
                </tr>
              </thead>
              <tbody className="text-text">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">
                    <code className="rounded bg-primary/5 px-1.5 py-0.5 text-sm">
                      _ga
                    </code>
                  </td>
                  <td className="py-3 pr-4">
                    Unterscheidung von Website-Besuchern
                  </td>
                  <td className="py-3">2 Jahre</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">
                    <code className="rounded bg-primary/5 px-1.5 py-0.5 text-sm">
                      _gid
                    </code>
                  </td>
                  <td className="py-3 pr-4">
                    Unterscheidung von Website-Besuchern
                  </td>
                  <td className="py-3">24 Stunden</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={pClass}>
            Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die
            Cookies in Ihrem Browser löschen. Beim nächsten Besuch wird das
            Cookie-Banner erneut angezeigt.
          </p>

          {/* 8. Google Analytics */}
          <h2 className={h2Class}>8. Google Analytics</h2>
          <p className={pClass}>
            Diese Website nutzt Google Analytics 4, einen Webanalysedienst der
            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Irland («Google»). Google Analytics verwendet Cookies (siehe
            Ziffer 7b), die eine Analyse Ihrer Nutzung der Website
            ermöglichen.
          </p>
          <p className={pClass}>
            <strong className="text-text-dark">
              Google Analytics wird nur mit Ihrer ausdrücklichen Einwilligung
              geladen.
            </strong>{" "}
            Ohne Ihre Zustimmung über unser Cookie-Banner findet keine Analyse
            Ihrer Nutzung statt.
          </p>
          <p className={pClass}>Wir haben folgende Massnahmen getroffen:</p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-text">
            <li>
              <strong className="text-text-dark">IP-Anonymisierung:</strong>{" "}
              Ihre IP-Adresse wird von Google innerhalb der EU/des EWR gekürzt,
              bevor sie an Google-Server übertragen wird.
            </li>
            <li>
              <strong className="text-text-dark">Kein Data-Sharing:</strong>{" "}
              Wir haben die Weitergabe von Daten an Google für
              Werbezwecke deaktiviert.
            </li>
          </ul>
          <p className={pClass}>
            Google kann die erhobenen Daten in die USA übermitteln. Für die
            Datenübermittlung in die USA stützt sich Google auf
            Standardvertragsklauseln der EU-Kommission. Weitere Informationen
            finden Sie in der{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Datenschutzerklärung von Google
            </a>
            .
          </p>
          <p className={pClass}>
            Sie können die Erfassung durch Google Analytics verhindern, indem
            Sie das Browser-Add-on zur{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Deaktivierung von Google Analytics
            </a>{" "}
            installieren.
          </p>

          {/* 9. Kontaktformular */}
          <h2 className={h2Class}>9. Kontaktformular</h2>
          <p className={pClass}>
            Wenn Sie uns über das Kontaktformular eine Anfrage senden,
            erheben wir folgende Personendaten:
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-6 leading-relaxed text-text">
            <li>Anrede</li>
            <li>Vorname und Nachname</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer</li>
            <li>Freitextfeld (Bemerkung)</li>
          </ul>
          <p className={pClass}>
            <strong className="text-text-dark">Zweck:</strong> Bearbeitung
            Ihrer Anfrage und Kontaktaufnahme im Zusammenhang mit dem Projekt
            Trivista.
          </p>
          <p className={pClass}>
            <strong className="text-text-dark">Rechtsgrundlage:</strong>{" "}
            Vorvertragliche Massnahmen bzw. Ihre Einwilligung durch das aktive
            Absenden des Formulars.
          </p>
          <p className={pClass}>
            <strong className="text-text-dark">Speicherdauer:</strong> Ihre
            Anfrage wird so lange gespeichert, wie es für die Bearbeitung
            erforderlich ist, in der Regel bis zum Abschluss des
            Immobilienprojekts, längstens jedoch 3 Jahre nach letztem Kontakt.
            Gesetzliche Aufbewahrungspflichten bleiben vorbehalten.
          </p>
          <p className={pClass}>
            Ihre Daten werden nicht ohne Ihre ausdrückliche Einwilligung an
            Dritte weitergegeben, es sei denn, dies ist zur Vertragserfüllung
            erforderlich oder wir sind gesetzlich dazu verpflichtet.
          </p>

          {/* 10. WhatsApp */}
          <h2 className={h2Class}>10. WhatsApp-Kontakt</h2>
          <p className={pClass}>
            Unsere Website bietet die Möglichkeit, uns über WhatsApp zu
            kontaktieren. Wenn Sie auf den WhatsApp-Link klicken, werden Sie
            zur App oder Web-Anwendung von WhatsApp (Meta Platforms Ireland
            Ltd.) weitergeleitet. Ab diesem Zeitpunkt gelten die{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy-eea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Datenschutzbestimmungen von WhatsApp/Meta
            </a>
            .
          </p>
          <p className={pClass}>
            Bitte beachten Sie, dass WhatsApp Daten in die USA übermitteln
            kann. Die Nutzung von WhatsApp erfolgt freiwillig und auf Ihre
            eigene Initiative.
          </p>

          {/* 11. Externe Links und Social Media */}
          <h2 className={h2Class}>
            11. Externe Links und Social Media
          </h2>
          <p className={pClass}>
            Unsere Website enthält Links zu externen Websites und
            Social-Media-Plattformen (Instagram, LinkedIn, YouTube). Beim
            Anklicken dieser Links verlassen Sie unsere Website. Wir haben
            keinen Einfluss auf die Datenbearbeitung durch die Betreiber dieser
            externen Seiten. Es gelten die jeweiligen Datenschutzbestimmungen
            der betreffenden Anbieter.
          </p>
          <p className={pClass}>
            Auf unserer Website sind{" "}
            <strong className="text-text-dark">keine Social-Media-Plugins</strong>{" "}
            eingebunden. Es werden erst Daten an die jeweiligen Plattformen
            übermittelt, wenn Sie aktiv auf einen Link klicken.
          </p>

          {/* 12. Externe Dokumente (Flipsnack) */}
          <h2 className={h2Class}>12. Externe Dokumentenanzeige</h2>
          <p className={pClass}>
            Für die Darstellung unserer Verkaufsbroschüre verwenden wir den
            Dienst Flipsnack (Smartketer LLC). Wenn Sie den Link zur Broschüre
            anklicken, werden Sie auf die externe Plattform von Flipsnack
            weitergeleitet. Es gelten die{" "}
            <a
              href="https://www.flipsnack.com/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Datenschutzbestimmungen von Flipsnack
            </a>
            . Flipsnack kann dabei Nutzungsdaten (z.&thinsp;B. IP-Adresse,
            Zugriffszeit) erfassen.
          </p>

          {/* 13. Datenübermittlung ins Ausland */}
          <h2 className={h2Class}>
            13. Datenübermittlung ins Ausland
          </h2>
          <p className={pClass}>
            Einzelne Dienstleister, deren Dienste wir auf dieser Website
            einsetzen, können Personendaten ausserhalb der Schweiz bearbeiten.
            Insbesondere kann eine Datenübermittlung in die USA erfolgen bei:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-text">
            <li>
              <strong className="text-text-dark">Vercel</strong> (Hosting) –
              USA/weltweit, gestützt auf Standardvertragsklauseln
            </li>
            <li>
              <strong className="text-text-dark">Google</strong> (Analytics) –
              USA, gestützt auf Standardvertragsklauseln
            </li>
            <li>
              <strong className="text-text-dark">Meta/WhatsApp</strong> – USA,
              nur bei aktiver Nutzung durch Sie
            </li>
            <li>
              <strong className="text-text-dark">Flipsnack</strong> – USA, nur
              bei aktivem Aufruf der Broschüre
            </li>
          </ul>
          <p className={pClass}>
            Wir stellen durch geeignete Garantien (Standardvertragsklauseln,
            Angemessenheitsbeschlüsse oder andere geeignete Massnahmen gemäss
            Art. 16 f. DSG) sicher, dass der Datenschutz auch bei der
            Übermittlung ins Ausland gewährleistet ist.
          </p>

          {/* 14. Datensicherheit */}
          <h2 className={h2Class}>14. Datensicherheit</h2>
          <p className={pClass}>
            Wir treffen angemessene technische und organisatorische
            Sicherheitsvorkehrungen zum Schutz Ihrer Personendaten vor
            unberechtigtem Zugriff, Verlust, Missbrauch oder Zerstörung.
            Dazu gehören unter anderem:
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-6 leading-relaxed text-text">
            <li>SSL/TLS-Verschlüsselung der gesamten Website</li>
            <li>Restriktive Sicherheitsheader (X-Frame-Options, CSP, Referrer-Policy)</li>
            <li>Deaktivierung von Kamera-, Mikrofon- und Standortzugriff</li>
            <li>Regelmässige Aktualisierung der eingesetzten Software</li>
          </ul>
          <p className={pClass}>
            Eine absolute Sicherheit kann jedoch nicht gewährleistet werden. Sie
            sind selbst dafür verantwortlich, Ihre Zugangsdaten vertraulich zu
            behandeln.
          </p>

          {/* 15. Ihre Rechte */}
          <h2 className={h2Class}>15. Ihre Rechte</h2>
          <p className={pClass}>
            Gemäss dem Schweizer Datenschutzgesetz (DSG) stehen Ihnen
            insbesondere folgende Rechte zu:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-text">
            <li>
              <strong className="text-text-dark">Auskunftsrecht</strong>{" "}
              (Art. 25 DSG): Sie haben das Recht, unentgeltlich Auskunft
              darüber zu erhalten, ob und welche Personendaten wir über Sie
              bearbeiten.
            </li>
            <li>
              <strong className="text-text-dark">
                Recht auf Berichtigung
              </strong>{" "}
              (Art. 32 Abs. 1 DSG): Sie können die Berichtigung unrichtiger
              Personendaten verlangen.
            </li>
            <li>
              <strong className="text-text-dark">Recht auf Löschung</strong>:
              Sie können die Löschung Ihrer Personendaten verlangen, sofern
              keine gesetzliche Aufbewahrungspflicht entgegensteht.
            </li>
            <li>
              <strong className="text-text-dark">
                Recht auf Datenherausgabe und -übertragung
              </strong>{" "}
              (Art. 28 DSG): Sie können verlangen, dass wir Ihnen Ihre
              Personendaten in einem gängigen elektronischen Format
              herausgeben.
            </li>
            <li>
              <strong className="text-text-dark">Widerspruchsrecht</strong>:
              Sie können der Bearbeitung Ihrer Personendaten jederzeit
              widersprechen.
            </li>
            <li>
              <strong className="text-text-dark">
                Widerruf der Einwilligung
              </strong>
              : Sofern die Datenbearbeitung auf Ihrer Einwilligung beruht,
              können Sie diese jederzeit widerrufen, ohne dass die
              Rechtmässigkeit der bis zum Widerruf erfolgten Bearbeitung
              berührt wird.
            </li>
          </ul>
          <p className={pClass}>
            Um Ihre Rechte geltend zu machen, kontaktieren Sie uns bitte per
            E-Mail an{" "}
            <a
              href="mailto:info@rhycasa.ch"
              className="text-primary hover:underline"
            >
              info@rhycasa.ch
            </a>{" "}
            oder postalisch an die unter Ziffer 1 genannte Adresse. Wir können
            einen Identitätsnachweis verlangen.
          </p>

          {/* 16. Aufsichtsbehörde */}
          <h2 className={h2Class}>16. Aufsichtsbehörde</h2>
          <p className={pClass}>
            Zuständige Datenschutz-Aufsichtsbehörde in der Schweiz ist der
            Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB):
          </p>
          <p className={pClass}>
            Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)
            <br />
            Feldeggweg 1
            <br />
            3003 Bern
            <br />
            <a
              href="https://www.edoeb.admin.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.edoeb.admin.ch
            </a>
          </p>
          <p className={pClass}>
            Sie haben das Recht, eine Beschwerde beim EDÖB einzureichen, wenn
            Sie der Ansicht sind, dass die Bearbeitung Ihrer Personendaten
            gegen das Datenschutzrecht verstösst.
          </p>

          {/* 17. Änderungen */}
          <h2 className={h2Class}>17. Änderungen</h2>
          <p className={pClass}>
            Wir können diese Datenschutzerklärung jederzeit anpassen. Die
            jeweils aktuelle Fassung ist auf unserer Website abrufbar. Bei
            wesentlichen Änderungen informieren wir Sie in geeigneter Weise.
            Es gilt die jeweils aktuelle, auf dieser Website publizierte
            Fassung.
          </p>

          {/* Verantwortliche Stelle Box */}
          <div className="mt-12 rounded-[10px] border border-border bg-white p-6 shadow-[0px_10px_10px_0px_rgba(0,0,0,0.04)]">
            <p className="text-base text-text">
              <span className="font-bold text-text-dark">
                Verantwortliche Stelle:
              </span>
              <br />
              Rhycasa AG, Bahnhofstrasse 28, 9443 Widnau
              <br />
              <a
                href="mailto:info@rhycasa.ch"
                className="text-primary hover:underline"
              >
                info@rhycasa.ch
              </a>
              {" · "}
              <a
                href="tel:+41717637500"
                className="text-primary hover:underline"
              >
                +41 71 763 75 00
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
