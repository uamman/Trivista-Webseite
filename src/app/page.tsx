import HeroSection from "@/components/home/HeroSection";
import ProjectSection from "@/components/home/ProjectSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import GallerySection from "@/components/home/GallerySection";
import MilestonesTimeline from "@/components/home/MilestonesTimeline";
import PartnersSection from "@/components/home/PartnersSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <AdvantagesSection />
      <GallerySection />
      <MilestonesTimeline />
      <PartnersSection />
    </>
  );
}
