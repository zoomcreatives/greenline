import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Users, Leaf, Shirt, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Hotel Room Cleaning",
      description: "Comprehensive daily housekeeping services that maintain the highest standards of cleanliness and comfort for your guests.",
      features: [
        "Daily housekeeping and turndown service",
        "Deep cleaning and sanitization",
        "Linen and towel replacement",
        "Bathroom sanitization and restocking",
        "Dusting and vacuuming",
        "Window and mirror cleaning",
      ],
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    },
    {
      icon: Users,
      title: "Lobby & Common Area Cleaning",
      description: "Create lasting first impressions with pristine lobbies and inviting common spaces that reflect your hotel's premium standards.",
      features: [
        "Floor polishing and maintenance",
        "Furniture and fixture dusting",
        "Upholstery cleaning and care",
        "Glass and surface polishing",
        "Air freshening and deodorizing",
        "High-traffic area maintenance",
      ],
      image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&h=600&fit=crop",
    },
    {
      icon: Shirt,
      title: "Laundry & Linen Services",
      description: "Full-service laundry solutions ensuring your linens are always fresh, pristine, and ready for your guests.",
      features: [
        "Collection and delivery service",
        "Commercial-grade washing and drying",
        "Professional ironing and folding",
        "Stain removal and treatment",
        "Inventory management",
        "Emergency same-day service available",
      ],
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&h=600&fit=crop",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Solutions",
      description: "Sustainable cleaning practices that protect the environment while delivering exceptional results for your hotel.",
      features: [
        "Biodegradable cleaning chemicals",
        "Water-saving cleaning techniques",
        "Waste reduction and recycling programs",
        "Energy-efficient equipment",
        "Green certification support",
        "Sustainable supply chain",
      ],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive cleaning solutions designed to meet every need of your hospitality operation.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    !isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={!isEven ? "md:order-2" : ""}>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="bg-primary hover:bg-accent">
                      <Link to="/contact">Request This Service</Link>
                    </Button>
                  </div>

                  <div className={!isEven ? "md:order-1" : ""}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-medium w-full h-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer specialized services to meet your unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border shadow-soft">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Emergency Cleaning</h3>
                <p className="text-muted-foreground">
                  24/7 rapid response for urgent cleaning needs and unexpected situations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Deep Cleaning</h3>
                <p className="text-muted-foreground">
                  Intensive cleaning services for renovations, seasonal maintenance, or special events.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Custom Solutions</h3>
                <p className="text-muted-foreground">
                  Tailored cleaning programs designed specifically for your hotel's unique needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Hotel's Standards?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our services can be customized for your property.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
