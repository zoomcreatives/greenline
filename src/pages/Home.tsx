import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle2, Sparkles, Leaf, Clock, ShieldCheck, Star, ArrowRight,
  Hotel, Users, Trophy, CalendarCheck
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navigation />

      {/* Hero Section - Revamped */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/60"></div>

        <div className="relative z-10 container mx-auto text-center pt-20">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white mb-8 backdrop-blur-md animate-fade-up">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            The Gold Standard in Hotel Housekeeping
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight max-w-6xl mx-auto leading-tight animate-fade-up delay-100">
            Impeccable Cleanliness, <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Unforgettable Stays</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light animate-fade-up delay-200 leading-relaxed">
            We partner with luxury hotels to deliver sustainable, consistent, and high-quality housekeeping solutions that elevate the guest experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up delay-300">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 h-auto rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:shadow-2xl">
              <Link to="/contact">Get a Custom Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10 text-lg px-10 py-7 h-auto rounded-full backdrop-blur-sm transition-all hover:scale-105">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - New */}
      <section className="py-12 border-b border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">Trusted by Leading Hotel Chains</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos using text for now as I don't have actual logo assets */}
            <div className="text-2xl font-serif font-bold text-foreground">MARRIOTT</div>
            <div className="text-2xl font-serif font-bold text-foreground">HILTON</div>
            <div className="text-2xl font-serif font-bold text-foreground">HYATT</div>
            <div className="text-2xl font-serif font-bold text-foreground">FOUR SEASONS</div>
            <div className="text-2xl font-serif font-bold text-foreground">RITZ CARLTON</div>
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center mb-4 text-primary"><Hotel className="h-8 w-8" /></div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-muted-foreground">Hotels Served</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-4 text-primary"><Users className="h-8 w-8" /></div>
              <h3 className="text-4xl font-bold">2,000+</h3>
              <p className="text-muted-foreground">Trained Staff</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-4 text-primary"><Trophy className="h-8 w-8" /></div>
              <h3 className="text-4xl font-bold">98%</h3>
              <p className="text-muted-foreground">Client Retention</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-4 text-primary"><CalendarCheck className="h-8 w-8" /></div>
              <h3 className="text-4xl font-bold">1M+</h3>
              <p className="text-muted-foreground">Rooms Cleaned</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Greenline?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We bring a new standard of hygiene and sustainability to the hospitality industry, ensuring your guests feel safe and pampered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-secondary/30 hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Eco-Friendly Products</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use 100% biodegradable and non-toxic cleaning agents that are safe for guests, staff, and the planet, without compromising on efficacy.
              </p>
            </div>
            <div className="group p-8 rounded-3xl bg-secondary/30 hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Vetted Professionals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our staff undergoes rigorous background checks, health screenings, and intensive training modules to ensure top-tier service and security.
              </p>
            </div>
            <div className="group p-8 rounded-3xl bg-secondary/30 hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">24/7 Availability</h3>
              <p className="text-muted-foreground leading-relaxed">
                We offer round-the-clock support to handle emergency cleanups, unexpected guest needs, and peak season demands with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Comprehensive Solutions</h2>
              <p className="text-muted-foreground text-lg">
                From daily housekeeping to specialized deep cleaning, we cover every inch of your property.
              </p>
            </div>
            <Button variant="link" className="text-primary text-lg p-0 h-auto group">
              <Link to="/services" className="flex items-center">
                View all services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Daily Housekeeping</CardTitle>
                <CardDescription>Routine cleaning for guest rooms and common areas.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Bed making & linen change
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Bathroom sanitization
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Dusting & vacuuming
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-spray-can"><path d="M3 3h.01" /><path d="M7 5h.01" /><path d="M11 7h.01" /><path d="M3 7h.01" /><path d="M7 9h.01" /><path d="M3 11h.01" /><rect width="4" height="4" x="15" y="5" /><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" /><path d="m13 14 8-2" /><path d="m13 19 8-2" /></svg>
                </div>
                <CardTitle className="text-2xl">Deep Cleaning</CardTitle>
                <CardDescription>Intensive cleaning for carpets, upholstery, and more.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Carpet shampooing
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Upholstery steam cleaning
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" /> High-touch surface disinfection
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-droplets"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" /><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" /></svg>
                </div>
                <CardTitle className="text-2xl">Post-Event Cleanup</CardTitle>
                <CardDescription>Rapid turnaround for conference rooms and banquet halls.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Trash removal & recycling
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Floor polishing
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Furniture arrangement
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Trusted by Top Hotels</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic text-lg">
                  "Greenline transformed our housekeeping operations. The quality of service is unmatched, and our guests have noticed the difference."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="User" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">General Manager, The Grand Hotel</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - New */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about our services.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">Do you provide your own cleaning supplies?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Yes, we bring our own eco-friendly, industrial-grade cleaning supplies and equipment. However, if you have specific product preferences, we are happy to accommodate them.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">Are your staff insured and bonded?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Absolutely. Every member of our team is fully insured, bonded, and undergoes strict background checks for your peace of mind.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">Can you handle large-scale events?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Yes, we specialize in post-event cleanups for large conferences, weddings, and banquets, ensuring rapid turnaround times.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">What areas do you serve?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                We currently serve major metropolitan areas and luxury resort destinations. Contact us to check availability in your specific location.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Upgrade Your Standards?</h2>
          <p className="text-primary-foreground/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
            Join the growing list of premium hotels that trust Greenline for impeccable cleanliness.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-xl px-12 py-8 h-auto rounded-full shadow-2xl transition-transform hover:scale-105">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
