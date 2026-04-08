import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "glass border-b border-border/50 shadow-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className="text-xl lg:text-2xl font-bold font-display text-foreground hover:text-primary transition-smooth"
            aria-label="Go to home section"
          >
            <span className="text-gradient">HB</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`nav-link px-3 py-1.5 rounded-md text-sm font-medium transition-smooth hover:bg-muted/50 ${
                  activeSection === item.href.slice(1)
                    ? "active text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col space-y-1 mt-8">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-4">
                  Navigation
                </p>
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left text-base font-medium px-3 py-2.5 rounded-lg transition-smooth ${
                      activeSection === item.href.slice(1)
                        ? "text-primary bg-primary/8"
                        : "text-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
