import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import WhyGrowMantra from "@/components/WhyGrowVanta";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <HowItWorks />
    <WhyGrowMantra />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
