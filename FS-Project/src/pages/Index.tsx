import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedPortfolios from "@/components/FeaturedPortfolios";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedPortfolios />
      <Footer />
    </div>
  );
};

export default Index;
