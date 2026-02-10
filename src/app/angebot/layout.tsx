import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angebot",
  description:
    "12 exklusive Eigentumswohnungen in drei Gebäudekörpern – Entdecken Sie das Wohnungsangebot von Trivista in Kobelwald.",
  openGraph: {
    title: "Angebot | Trivista",
    description:
      "12 exklusive Eigentumswohnungen in drei Gebäudekörpern in Kobelwald.",
    locale: "de_CH",
    type: "website",
  },
};

export default function AngebotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
