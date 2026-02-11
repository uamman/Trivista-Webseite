import type { Metadata } from "next";
import Image from "next/image";
import LocationHero from "@/components/wohnlage/LocationHero";
import HighlightsSection from "@/components/wohnlage/HighlightsSection";
import DiscoverSection from "@/components/wohnlage/DiscoverSection";
import InfrastructureTabs from "@/components/wohnlage/InfrastructureTabs";

export const metadata: Metadata = {
  title: "Wohnlage",
  description:
    "Geniessen Sie den wunderbaren Ausblick auf das Rheintal und die Ruhe von Kobelwald. Hier, inmitten einer malerischen Landschaft, finden Sie Ihr neues Zuhause.",
  alternates: {
    canonical: "/wohnlage/",
  },
  openGraph: {
    title: "Wohnlage | Trivista",
    description:
      "Geniessen Sie den wunderbaren Ausblick auf das Rheintal und die Ruhe von Kobelwald.",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/images/wohnlage/Wohnlage-Kobelwald-scaled.jpg",
        width: 1920,
        height: 1080,
        alt: "Wohnlage Kobelwald – Idyllisches Wohnen mit Fernblick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wohnlage | Trivista",
    description:
      "Geniessen Sie den wunderbaren Ausblick auf das Rheintal und die Ruhe von Kobelwald.",
    images: ["/images/wohnlage/Wohnlage-Kobelwald-scaled.jpg"],
  },
};

export default function WohnlagePage() {
  return (
    <>
      <LocationHero />
      <HighlightsSection />
      <DiscoverSection />
      <InfrastructureTabs />

      {/* Transition image before footer */}
      <section className="relative h-[400px] w-full md:h-[500px]">
        <Image
          src="/images/wohnlage/Wohnlage-Kobelwald-section-5.jpg"
          alt="Kobelwald Umgebung"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>
    </>
  );
}
