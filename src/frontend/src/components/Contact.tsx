import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ContactMethod {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
  description: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "bhembikram@gmail.com",
    href: "mailto:bhembikram@gmail.com",
    description: "Send me an email anytime",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: "+977 9865970043",
    href: "tel:9865970043",
    description: "Available during business hours",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    value: "New Baneshwor, Kathmandu",
    href: null,
    description: "Based in Nepal 🇳🇵",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/hembikram-bist-429b92237/",
    description: "View my professional profile",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Contact
            </p>
            <h2 className="section-heading">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-base leading-relaxed">
              Open to new opportunities, collaborations, and conversations about
              technology. Reach out through any channel below.
            </p>
          </div>

          {/* CTA Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 p-8 text-center shadow-premium">
            <div className="absolute inset-0 bg-gradient-hero" />
            <div className="absolute inset-0 dot-grid opacity-15" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass-dark mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Ready to build something great?
              </h3>
              <p className="text-white/65 text-sm mb-5 max-w-sm mx-auto">
                Whether it's a new project or just a tech chat — I'd love to
                hear from you.
              </p>
              <Button
                asChild
                className="bg-white text-primary font-semibold hover:bg-white/90 shadow-elevated transition-smooth"
                data-ocid="contact-cta-email"
              >
                <a href="mailto:bhembikram@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send a Message
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card
                  key={method.id}
                  className="card-hover border border-border/60 bg-card shadow-subtle group"
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-smooth">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          {method.label}
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-0.5">
                          {method.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      {method.href ? (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="w-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
                          data-ocid={`contact-method-${method.id}`}
                        >
                          <a
                            href={method.href}
                            target={
                              method.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              method.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {method.value}
                            {method.href.startsWith("http") && (
                              <ExternalLink className="ml-2 h-3.5 w-3.5" />
                            )}
                          </a>
                        </Button>
                      ) : (
                        <p className="text-sm font-medium text-foreground px-1">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
