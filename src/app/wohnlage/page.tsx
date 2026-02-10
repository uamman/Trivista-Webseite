import type { Metadata } from "next";
import LocationHero from "@/components/wohnlage/LocationHero";
import HighlightsSection from "@/components/wohnlage/HighlightsSection";
import InfrastructureTabs from "@/components/wohnlage/InfrastructureTabs";
import PartnersSection from "@/components/home/PartnersSection";

export const metadata: Metadata = {
  title: "Wohnlage",
  description:
    "Idyllisches Wohnen mit Fernblick in Kobelwald – naturnahe Umgebung, Ruhe und beste Infrastruktur im St. Galler Rheintal.",
  openGraph: {
    title: "Wohnlage | Trivista",
    description:
      "Idyllisches Wohnen mit Fernblick in Kobelwald – naturnahe Umgebung, Ruhe und beste Infrastruktur.",
    locale: "de_CH",
    type: "website",
  },
};

export default function WohnlagePage() {
  return (
    <>
      <LocationHero />
      <HighlightsSection />
      <InfrastructureTabs />
      <PartnersSection />
    </>
  );
}
