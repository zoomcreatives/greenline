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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Professional hotel cleaning service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white py-32">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <span className="text-sm font-medium">🌿 Eco-Friendly • ISO Certified • Trusted by 20+ Hotels</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
            Premium Hotel Cleaning<br />
            <span className="text-accent">Services You Can Trust</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/95 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Sustainable, consistent, and high-quality housekeeping solutions for hotels of all sizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 h-auto shadow-medium">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 h-auto">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Floating Trust Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">98%</div>
              <div className="text-sm text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">20+</div>
              <div className="text-sm text-white/80">Hotels Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">10+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80">Available Support</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Why Choose Section with Image */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&h=600&fit=crop"
                alt="Luxury hotel lobby"
                className="rounded-2xl shadow-medium w-full h-auto"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary">Why Choose Greenline</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Excellence in Every Clean
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                We combine professional excellence with environmental responsibility to deliver the highest quality hotel cleaning services.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">ISO Certified Quality</h3>
                    <p className="text-muted-foreground">Certified excellence in every service we provide, ensuring consistent, reliable results.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Eco-Friendly Approach</h3>
                    <p className="text-muted-foreground">Using only biodegradable, sustainable cleaning products that protect the environment.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">24/7 Availability</h3>
                    <p className="text-muted-foreground">Round-the-clock service to meet your hotel's unique schedule and emergency needs.</p>
                  </div>
                </div>
              </div>

              <Button asChild className="mt-8 bg-primary hover:bg-accent">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
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
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Client Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from hotel managers who trust Greenline for their cleaning needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
                <CardContent className="pt-8 pb-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/contact">Share Your Experience</Link>
            </Button>
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
