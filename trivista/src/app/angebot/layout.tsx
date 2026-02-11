import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angebot",
  description:
    "12 exklusive Eigentumswohnungen in drei Gebäudekörpern – Entdecken Sie das Wohnungsangebot von Trivista in Kobelwald.",
  alternates: {
    canonical: "/angebot/",
  },
  openGraph: {
    title: "Angebot | Trivista",
    description:
      "12 exklusive Eigentumswohnungen in drei Gebäudekörpern in Kobelwald.",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/images/hero/Rietblick.0021-scaled.jpg",
        width: 1920,
        height: 1080,
        alt: "Trivista Angebot – Exklusive Eigentumswohnungen in Kobelwald",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angebot | Trivista",
    description:
      "12 exklusive Eigentumswohnungen in drei Gebäudekörpern in Kobelwald.",
    images: ["/images/hero/Rietblick.0021-scaled.jpg"],
  },
};

export default function AngebotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
