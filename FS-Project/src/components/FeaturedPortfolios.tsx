import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, MapPin, Star } from "lucide-react";

const portfolios = [
  {
    id: 1,
    name: "Sarah Chen",
    specialty: "Wedding Photography",
    location: "San Francisco, CA",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=400&auto=format&fit=crop",
    ]
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    specialty: "Portrait Photography",
    location: "New York, NY",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=400&auto=format&fit=crop",
    ]
  },
  {
    id: 3,
    name: "Elena Vasquez",
    specialty: "Event Photography",
    location: "Los Angeles, CA",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b90c?q=80&w=800&auto=format&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400&auto=format&fit=crop",
    ]
  }
];

const FeaturedPortfolios = () => {
  return (
    <section id="portfolios" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Featured Photographers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover talented photographers in your area, ready to capture your special moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((photographer) => (
            <Card key={photographer.id} className="bg-card border-border hover:shadow-elegant transition-smooth overflow-hidden group">
              <div className="relative">
                <img
                  src={photographer.image}
                  alt={photographer.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{photographer.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    {photographer.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Camera className="w-4 h-4" />
                    <span className="text-sm">{photographer.specialty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{photographer.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {photographer.portfolio.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Portfolio ${index + 1}`}
                      className="w-full h-20 object-cover rounded-md"
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="portfolio" className="flex-1">
                    View Portfolio
                  </Button>
                  <Button variant="hero" size="sm">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Photographers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolios;