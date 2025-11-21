import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Check if we're on the home page
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Sustainability", path: "/sustainability" },
    ];

    // Determine if navbar should have solid background
    const hasSolidBg = !isHomePage || isScrolled;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hasSolidBg ? "bg-white/90 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container-wide flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 z-50">
                    <span className={`text-2xl font-semibold tracking-tighter ${hasSolidBg ? "text-foreground" : "text-white"}`}>
                        greenline.
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-colors ${hasSolidBg ? "hover:text-primary" : "hover:text-white hover:opacity-100"
                                } ${location.pathname === link.path
                                    ? hasSolidBg ? "text-primary" : "text-white font-bold"
                                    : hasSolidBg
                                        ? "text-foreground/80"
                                        : "text-white/80"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        asChild
                        variant={hasSolidBg ? "default" : "secondary"}
                        className="rounded-none px-6 font-medium"
                    >
                        <Link to="/contact">
                            Get a Quote
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className={`w-6 h-6 ${hasSolidBg ? "text-foreground" : "text-white"}`} />
                    ) : (
                        <Menu className={`w-6 h-6 ${hasSolidBg ? "text-foreground" : "text-white"}`} />
                    )}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 animate-fade-up">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-3xl font-light text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild size="lg" className="rounded-none mt-4 px-8">
                            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                Get a Quote
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
