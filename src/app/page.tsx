import FeatureSection from "@/app/_components/FeatureSection";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import HeroSection from "@/app/_components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}
