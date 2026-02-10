import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie uns für Informationen zum Projekt Trivista – Rhycasa AG, Ihr Ansprechpartner für exklusive Neubauwohnungen in Kobelwald.",
  openGraph: {
    title: "Kontakt | Trivista",
    description:
      "Kontaktieren Sie uns für Informationen zum Projekt Trivista in Kobelwald.",
    locale: "de_CH",
    type: "website",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
