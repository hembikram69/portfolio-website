import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: "ridhi-sidhi",
    title: "Developer",
    company: "Ridhi Sidhi Soft",
    period: "February 2025 – Present",
    type: "Full-time",
    responsibilities: [
      "Developed and maintained web applications using HTML, CSS, JavaScript, .NET, C#, and MySQL",
      "Led a team of developers, ensuring timely delivery of projects and adherence to quality standards",
      "Contributed to the full software development lifecycle, from planning and design to deployment and maintenance",
      "Collaborated with clients to gather requirements, provide technical solutions, and ensure client satisfaction",
    ],
    technologies: ["HTML", "CSS", "JavaScript", ".NET", "C#", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Career
            </p>
            <h2 className="section-heading">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card
                key={exp.id}
                className="card-hover border border-border/60 bg-card shadow-subtle overflow-hidden"
              >
                {/* Colored top accent */}
                <div className="h-1 bg-gradient-primary" />
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <CardTitle className="text-xl font-bold">
                          {exp.title}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs shrink-0">
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1.5 text-sm">
                        <span className="font-semibold text-primary">
                          {exp.company}
                        </span>
                        <span className="hidden sm:inline text-muted-foreground">
                          ·
                        </span>
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2.5 mb-5">
                    {exp.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs px-2.5 py-0.5 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
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
