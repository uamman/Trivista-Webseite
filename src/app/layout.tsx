import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

export const metadata: Metadata = {
  title: {
    default: "Trivista – Erhaben Wohnen in Kobelwald",
    template: "%s | Trivista",
  },
  description:
    "Exklusive Neubauwohnungen in Kobelwald – Erhaben Wohnen mit Fernblick auf das Rheintal. Ein Projekt der Rhycasa AG.",
  metadataBase: new URL("https://trivista.ch"),
  openGraph: {
    title: "Trivista – Erhaben Wohnen in Kobelwald",
    description:
      "Exklusive Neubauwohnungen in Kobelwald – Erhaben Wohnen mit Fernblick auf das Rheintal.",
    url: "https://trivista.ch",
    siteName: "Trivista",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
