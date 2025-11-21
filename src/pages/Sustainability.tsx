import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Droplets, Recycle, Award, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ecoImage from "@/assets/eco-products.jpg";

const Sustainability = () => {
  const commitments = [
    {
      icon: Leaf,
      title: "Biodegradable Products",
      description: "100% of our cleaning chemicals are biodegradable and eco-certified.",
      stat: "100%",
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Advanced cleaning techniques that reduce water usage significantly.",
      stat: "30% Less",
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      description: "Comprehensive recycling and waste management programs.",
      stat: "85% Recycled",
    },
    {
      icon: Award,
      title: "Green Certifications",
      description: "Certified by leading environmental organizations.",
      stat: "5+ Certs",
    },
  ];

  const practices = [
    "Using only EPA-approved, biodegradable cleaning solutions",
    "Implementing microfiber technology to reduce chemical usage",
    "Utilizing energy-efficient equipment and vehicles",
    "Training staff in sustainable cleaning practices",
    "Partnering with eco-certified suppliers",
    "Regular environmental impact assessments",
    "Carbon offset programs for all operations",
    "Paperless documentation and reporting systems",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Sustainability Commitment
            </h1>
            <p className="text-xl text-muted-foreground">
              Leading the hospitality cleaning industry in environmental responsibility and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Cleaning That Cares for Our Planet
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Greenline, sustainability isn't just a buzzword—it's the foundation of everything we do. We believe that exceptional cleaning and environmental stewardship go hand in hand.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our commitment to the environment drives innovation in our cleaning methods, product selection, and operational practices. We continuously invest in research and development to find better, more sustainable ways to deliver outstanding results.
              </p>
              <p className="text-lg text-muted-foreground">
                By choosing Greenline, you're not just selecting a cleaning service—you're partnering with a company that shares your values and actively works to protect our planet for future generations.
              </p>
            </div>
            <div>
              <img
                src={ecoImage}
                alt="Eco-friendly cleaning products"
                className="rounded-lg shadow-medium w-full h-auto"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <Card key={index} className="border-border shadow-soft text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{commitment.stat}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{commitment.title}</h3>
                    <p className="text-sm text-muted-foreground">{commitment.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Green Practices
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive sustainability initiatives integrated into every aspect of our operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {practices.map((practice, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Certifications & Recognition
            </h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to sustainability is recognized by leading environmental organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border shadow-soft">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">ISO 14001 Certified</h3>
                <p className="text-muted-foreground">
                  Environmental management systems certification demonstrating our commitment to reducing environmental impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Green Seal Approved</h3>
                <p className="text-muted-foreground">
                  All our cleaning products meet rigorous Green Seal standards for environmental responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Zero Waste Partner</h3>
                <p className="text-muted-foreground">
                  Recognized for our comprehensive waste reduction and recycling programs across all operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Environmental Impact in 2024
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Gallons of Water Saved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">25T</div>
              <div className="text-muted-foreground">Waste Recycled</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Biodegradable Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with Greenline and contribute to a more sustainable future for the hospitality industry.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
            <Link to="/contact">Start Your Green Journey</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;
