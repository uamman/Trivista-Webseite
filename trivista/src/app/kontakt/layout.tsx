import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie uns für Informationen zum Projekt Trivista – Rhycasa AG, Ihr Ansprechpartner für exklusive Neubauwohnungen in Kobelwald.",
  alternates: {
    canonical: "/kontakt/",
  },
  openGraph: {
    title: "Kontakt | Trivista",
    description:
      "Kontaktieren Sie uns für Informationen zum Projekt Trivista in Kobelwald.",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/images/hero/Rietblick.0022-scaled.jpg",
        width: 1920,
        height: 1080,
        alt: "Trivista Kontakt – Ihr Ansprechpartner Rhycasa AG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Trivista",
    description:
      "Kontaktieren Sie uns für Informationen zum Projekt Trivista in Kobelwald.",
    images: ["/images/hero/Rietblick.0022-scaled.jpg"],
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
