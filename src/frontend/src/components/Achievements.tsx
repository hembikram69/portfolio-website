import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Handshake,
  Star,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Achievement {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  metric?: string;
}

const achievements: Achievement[] = [
  {
    id: "technical",
    icon: Award,
    title: "Technical Skills Enhancement",
    description:
      "Enhanced expertise in front-end development using HTML, CSS, JavaScript, AngularJS, and Bootstrap to deliver responsive and user-friendly interfaces.",
    metric: "Multiple production apps",
  },
  {
    id: "problem-solving",
    icon: Wrench,
    title: "Problem-Solving & Innovation",
    description:
      "Gained extensive experience in debugging and optimizing code to improve application performance and scalability across enterprise-level systems.",
    metric: "Performance optimized",
  },
  {
    id: "project-management",
    icon: Users,
    title: "Project Management",
    description:
      "Enhanced communication and collaboration skills by leading developer teams and working with stakeholders throughout the full project lifecycle.",
    metric: "Led dev team",
  },
  {
    id: "client-handling",
    icon: Handshake,
    title: "Client Handling & Support",
    description:
      "Improved client satisfaction skills by providing regular updates, addressing feedback promptly, and delivering smooth post-deployment support.",
    metric: "Client delivered",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Impact
            </p>
            <h2 className="section-heading">
              Key <span className="text-gradient">Achievements</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className="card-hover border border-border/60 bg-card shadow-subtle group"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-smooth">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <h3 className="text-base font-semibold text-foreground leading-snug">
                          {achievement.title}
                        </h3>
                        {achievement.metric && (
                          <span className="text-xs text-primary font-medium bg-primary/8 px-2 py-0.5 rounded-full shrink-0">
                            {achievement.metric}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
