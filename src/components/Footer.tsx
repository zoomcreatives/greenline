import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border py-20">
            <div className="container-wide">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="md:col-span-2">
                        <Link to="/" className="text-2xl font-semibold tracking-tighter mb-6 block">
                            greenline.
                        </Link>
                        <p className="text-muted-foreground max-w-sm font-light leading-relaxed">
                            Elevating hospitality standards through sustainable, impeccable housekeeping solutions.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-6">Company</h4>
                        <ul className="space-y-4">
                            {["About", "Services", "Sustainability", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-6">Connect</h4>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Greenline. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
