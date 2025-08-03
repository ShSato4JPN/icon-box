import FeatureSection from "@/app/_components/FeatureSection";
import HeroSection from "@/app/_components/HeroSection";
import TopLayout from "@/components/layout/top-layout";

export default function Page() {
  return (
    <TopLayout>
      <HeroSection />
      <FeatureSection />
    </TopLayout>
  );
}
