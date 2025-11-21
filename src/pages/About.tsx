import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Sustainability",
      description: "We prioritize eco-friendly practices in every aspect of our service delivery.",
    },
    {
      icon: Users,
      title: "Reliability",
      description: "Consistent, dependable service that you can count on, day after day.",
    },
    {
      icon: Target,
      title: "Quality",
      description: "Uncompromising standards that exceed industry benchmarks.",
    },
    {
      icon: Eye,
      title: "Hygiene",
      description: "Meticulous attention to cleanliness and sanitation protocols.",
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
              About Greenline
            </h1>
            <p className="text-xl text-muted-foreground">
              Setting new standards in hotel cleaning with a commitment to excellence, sustainability, and guest satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Greenline, our mission is to deliver premium, eco-friendly cleaning services that help hotels maintain exceptional standards of cleanliness and guest satisfaction.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We believe that outstanding hospitality begins with impeccable cleanliness. Our team of dedicated professionals works tirelessly to ensure every guest room, lobby, and common area reflects the high standards your hotel is known for.
              </p>
              <p className="text-lg text-muted-foreground">
                Founded over a decade ago, Greenline has grown from a small local operation to a trusted partner for hotels across the region, always staying true to our core values of sustainability, reliability, and quality.
              </p>
            </div>
            <div>
              <img
                src={teamImage}
                alt="Greenline team"
                className="rounded-lg shadow-medium w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              To become the leading provider of sustainable hotel cleaning services, recognized for our innovative approach, environmental stewardship, and unwavering commitment to helping hotels achieve 5-star guest satisfaction through immaculate cleanliness.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              These core values guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Journey</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2013
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">The Beginning</h3>
                  <p className="text-muted-foreground">
                    Greenline was founded with a vision to revolutionize hotel cleaning services through eco-friendly practices and exceptional quality standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2016
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">ISO Certification</h3>
                  <p className="text-muted-foreground">
                    Achieved ISO certification, establishing ourselves as a leader in quality and consistency within the hospitality cleaning industry.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2019
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Regional Expansion</h3>
                  <p className="text-muted-foreground">
                    Expanded our operations to serve hotels across the entire region, growing our team to over 200 dedicated professionals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2025
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Innovation & Growth</h3>
                  <p className="text-muted-foreground">
                    Serving 20+ hotels with cutting-edge sustainable cleaning solutions and maintaining a 98% customer satisfaction rate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
