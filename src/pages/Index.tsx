import GameNavbar from "@/components/GameNavbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DownloadSection from "@/components/DownloadSection";
import GameFooter from "@/components/GameFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GameNavbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
      </main>
      <GameFooter />
    </div>
  );
};

export default Index;
