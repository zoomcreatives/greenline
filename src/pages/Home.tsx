import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Leaf, Shield, Users, Sparkles, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Hotel Room Cleaning",
      description: "Daily housekeeping, deep cleaning, linen replacement, and bathroom sanitization.",
    },
    {
      icon: Users,
      title: "Lobby & Common Areas",
      description: "Professional polishing, dusting, floor care, and upholstery cleaning.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Solutions",
      description: "Biodegradable cleaning chemicals and sustainable waste management.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service to meet your hotel's unique schedule.",
    },
  ];

  const stats = [
    { number: "20+", label: "Hotels Served" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      quote: "Greenline transformed our housekeeping operations. Their attention to detail and eco-friendly approach perfectly aligns with our hotel's values.",
      author: "Sarah Johnson",
      role: "General Manager, Grand Plaza Hotel",
    },
    {
      quote: "Consistent quality, professional staff, and exceptional service. Greenline has been our trusted partner for over 5 years.",
      author: "Michael Chen",
      role: "Operations Director, Seaside Resort",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Professional hotel cleaning service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Premium Hotel Cleaning<br />Services You Can Trust
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Sustainable, consistent, and high-quality housekeeping solutions for hotels of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="bg-primary hover:bg-accent text-lg px-8">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Greenline?
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine professional excellence with environmental responsibility to deliver the highest quality hotel cleaning services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">ISO Certified Quality</h3>
                <p className="text-muted-foreground">
                  Certified excellence in every service we provide, ensuring consistent, reliable results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Eco-Friendly Approach</h3>
                <p className="text-muted-foreground">
                  Using only biodegradable, sustainable cleaning products that protect the environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Trusted by Hotels</h3>
                <p className="text-muted-foreground">
                  Over 20 hotels trust us for their daily cleaning operations and guest satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive cleaning solutions tailored to your hotel's unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all hover:scale-105">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-accent">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sustainability Promise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Sustainability Promise
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Greenline, we believe that exceptional cleaning and environmental responsibility go hand in hand.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Biodegradable Products:</strong>
                    <span className="text-muted-foreground"> All our cleaning chemicals are eco-friendly and safe.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Waste Reduction:</strong>
                    <span className="text-muted-foreground"> We minimize waste through efficient processes and recycling.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Water Conservation:</strong>
                    <span className="text-muted-foreground"> Advanced techniques that reduce water usage by 30%.</span>
                  </div>
                </li>
              </ul>
              <Button asChild className="mt-8 bg-primary hover:bg-accent">
                <Link to="/sustainability">Learn More About Our Commitment</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop"
                alt="Eco-friendly cleaning products"
                className="rounded-lg shadow-medium w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border shadow-soft">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Hotel's Cleanliness?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and discover how Greenline can elevate your guest experience.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
