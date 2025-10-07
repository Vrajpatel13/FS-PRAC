import { Camera, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <Camera className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-primary">CapturePro</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Connecting talented photographers with clients who value exceptional visual storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-smooth">Home</a></li>
              <li><a href="#portfolios" className="text-muted-foreground hover:text-primary transition-smooth">Portfolios</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-smooth">Pricing</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* For Photographers */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">For Photographers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Join as Photographer</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Portfolio Guidelines</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Success Stories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@capturepro.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 CapturePro. All rights reserved. | 
            <a href="#" className="hover:text-primary transition-smooth ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-primary transition-smooth ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;