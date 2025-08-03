import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BentoGridSection } from "@/components/sections/BentoGridSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <BentoGridSection />
      </main>
      <Footer />
    </div>
  );
}