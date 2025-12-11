import { AboutSection } from "./AboutSection";
import { UE5Section } from "./UE5Section";
import { ArtworkSection } from "./ArtworkSection";
import { PlaydateSection } from "./PlaydateSection";
import { SoftwareDevSection } from "./SoftwareDevSection";
import { Footer } from "./Footer";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <AboutSection onNavigate={onNavigate} />
      <UE5Section onNavigate={onNavigate} />
      <PlaydateSection />
      <SoftwareDevSection />
      <ArtworkSection />
      <Footer />
    </>
  );
}