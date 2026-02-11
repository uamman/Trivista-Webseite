import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import ProjectSection from "@/components/home/ProjectSection";

const AdvantagesSection = dynamic(() => import("@/components/home/AdvantagesSection"));
const GallerySection = dynamic(() => import("@/components/home/GallerySection"));
const MilestonesTimeline = dynamic(() => import("@/components/home/MilestonesTimeline"));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <AdvantagesSection />
      <GallerySection />
      <MilestonesTimeline />
    </>
  );
}
