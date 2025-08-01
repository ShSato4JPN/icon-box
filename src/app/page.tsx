import FeatureSection from "@/app/_components/FeatureSection";
import HeroSection from "@/app/_components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      <HeroSection />
      <FeatureSection />
    </div>
  );
}
