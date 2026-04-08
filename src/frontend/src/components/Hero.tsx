import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/hembikram-bist-429b92237/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/",
    icon: SiGithub,
    label: "GitHub",
  },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "5+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
];

export default function Hero() {
  const scrollToAbout = () => {
    document
      .querySelector("#about")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Deep gradient hero background */}
      <div className="absolute inset-0 bg-gradient-hero z-0" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 z-0 dot-grid opacity-20" />

      {/* Radial spotlight */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.55_0.22_250/0.35),transparent)]" />

      {/* Floating ambient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl bg-primary animate-float z-0"
        style={{ animationDelay: "0s" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full opacity-15 blur-3xl z-0"
        style={{ background: "oklch(0.60 0.22 200)", animationDelay: "3s" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-7 animate-fade-in-up">
            {/* Location badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-dark text-white/80 text-xs font-medium border border-white/10">
              <MapPin className="w-3.5 h-3.5" />
              Kathmandu, Nepal
            </div>

            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-display-xl font-bold font-display leading-none text-gradient-hero">
                Hembikram
                <br />
                Bist
              </h1>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="h-px w-8 bg-white/30 rounded-full" />
                <p className="text-lg sm:text-xl text-white/80 font-medium tracking-wide">
                  Software Developer &amp; Data Analyst
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-white/65 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Full-stack developer with expertise in .NET, C#, Python, and data
              analytics. Passionate about building scalable, user-centric
              applications and transforming data into actionable insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-primary font-semibold hover:bg-white/90 shadow-premium transition-smooth px-7 py-6 text-base"
                data-ocid="hero-cta-contact"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToAbout}
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-smooth px-7 py-6 text-base"
                data-ocid="hero-cta-about"
              >
                Learn More
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 justify-center lg:justify-start pt-1">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-smooth border border-white/10"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
              <a
                href="mailto:bhembikram@gmail.com"
                className="ml-2 text-sm text-white/60 hover:text-white/90 transition-smooth font-medium"
              >
                bhembikram@gmail.com
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 border-t border-white/10">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-white font-display">
                    {value}
                  </p>
                  <p className="text-xs text-white/55 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="flex-shrink-0 animate-scale-in-bounce"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full glow-ring scale-110 animate-pulse-glow"
                aria-hidden="true"
              />
              {/* Spinning gradient border */}
              <div
                className="absolute -inset-2 rounded-full opacity-60 animate-spin-slow z-0"
                style={{
                  background:
                    "conic-gradient(from 0deg, oklch(0.66 0.22 250), oklch(0.70 0.18 280), oklch(0.60 0.20 200), oklch(0.66 0.22 250))",
                }}
                aria-hidden="true"
              />
              <img
                src="/assets/WhatsApp Image 2026-02-20 at 3.38.40 PM.jpeg"
                alt="Hembikram Bist — Software Developer"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/20 shadow-premium z-10"
              />
              {/* Role card badge */}
              <div className="absolute -bottom-3 -right-3 glass-dark px-4 py-2 rounded-xl border border-white/15 shadow-elevated z-20">
                <p className="text-white text-xs font-semibold">
                  MSc Data Analytics
                </p>
                <p className="text-white/60 text-xs">
                  London Metropolitan Univ.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce-subtle">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
