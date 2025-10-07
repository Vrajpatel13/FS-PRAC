import { Button } from "@/components/ui/button";
import Hero3D from "./Hero3D";
import heroCamera from "@/assets/hero-camera.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-hero-gradient relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCamera}
          alt="Professional camera"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* 3D Scene */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-80">
        <Hero3D />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            <span className="block">CAPTURE</span>
            <span className="block text-primary">YOUR STORY</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Connect with professional photographers who bring your vision to life. 
            From weddings to portraits, find the perfect artist for your special moments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Find Photographers
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Join as Photographer
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Professional Photographers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10k+</div>
              <div className="text-muted-foreground">Photos Captured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;