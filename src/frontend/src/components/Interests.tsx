import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, Cpu, GitBranch, Globe, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Interest {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

const interests: Interest[] = [
  {
    id: "web-tech",
    icon: Globe,
    title: "Exploring New Web Technologies",
    description:
      "Continuously learning and experimenting with emerging web technologies and frameworks to stay current with industry trends.",
    tag: "Learning",
  },
  {
    id: "open-source",
    icon: GitBranch,
    title: "Contributing to Open-Source",
    description:
      "Actively contributing to open-source projects to give back to the developer community and collaborate with developers worldwide.",
    tag: "Community",
  },
  {
    id: "coding-challenges",
    icon: Code,
    title: "Coding Challenges",
    description:
      "Engaging in coding competitions to sharpen problem-solving skills and discover new algorithms and techniques.",
    tag: "Competition",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="py-24 lg:py-32 section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Passions
            </p>
            <h2 className="section-heading">
              Interests &amp; <span className="text-gradient">Pursuits</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {interests.map((interest) => (
              <Card
                key={interest.id}
                className="card-hover border border-border/60 bg-card shadow-subtle group text-center"
              >
                <CardContent className="pt-8 pb-7">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5 group-hover:bg-primary/15 transition-smooth">
                    <interest.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-full mb-3">
                    {interest.tag}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mb-3 leading-snug">
                    {interest.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
