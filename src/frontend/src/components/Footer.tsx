import { Heart, Linkedin, Mail, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/hembikram-bist-429b92237/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/", icon: SiGithub, label: "GitHub" },
  { href: "mailto:bhembikram@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "portfolio-app";

  const scrollToSection = (href: string) => {
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top footer */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-bold font-display text-gradient">
                HB
              </p>
              <p className="text-sm font-semibold text-foreground mt-1">
                Hembikram Bist
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Software Developer &amp; Data Analyst
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </p>
            <nav>
              <ul className="space-y-2">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
              Get In Touch
            </p>
            <div className="space-y-2">
              <a
                href="mailto:bhembikram@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-4 h-4" />
                bhembikram@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                New Baneshwor, Kathmandu
              </div>
            </div>
            <div className="pt-2">
              <a
                href="mailto:bhembikram@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Open to opportunities →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-5 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {currentYear} Hembikram Bist. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-destructive fill-destructive" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-primary transition-smooth"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
