import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ExternalLink, FolderGit2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  badge?: string;
}

const projects: Project[] = [
  {
    id: "hospital-mgmt",
    title: "Hospital Management System",
    subtitle: "Full-Stack Healthcare Platform",
    description:
      "Comprehensive system to automate patient records, appointments, billing, and inventory management for healthcare facilities.",
    features: [
      "Automated patient records and appointment scheduling",
      "Integrated billing and payment processing",
      "Inventory management for medical supplies",
      "Intuitive user interface for staff and administrators",
      "Stakeholder-aligned requirements and technical specifications",
    ],
    technologies: [
      "C#",
      ".NET",
      "AngularJS",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    badge: "Major Project",
  },
  {
    id: "lab-software",
    title: "LAB Software",
    subtitle: "Laboratory Information System",
    description:
      "End-to-end laboratory management solution enabling efficient handling of lab tests, patient reports, and inventory for a client.",
    features: [
      "Efficient management of lab tests and patient reports",
      "Automated report generation system",
      "Barcode scanning integration for inventory tracking",
      "Smooth deployment with comprehensive client training",
      "Post-deployment support and maintenance",
    ],
    technologies: ["C#", ".NET", "MySQL", "HTML", "CSS", "JavaScript"],
    badge: "Client Delivered",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Portfolio
            </p>
            <h2 className="section-heading">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
              Real-world applications built end-to-end, from requirements
              gathering to client deployment.
            </p>
          </div>

          <div className="space-y-7">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="card-hover border border-border/60 bg-card shadow-subtle overflow-hidden"
              >
                <div className="h-1 bg-gradient-primary" />
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        index === 0
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10"
                      }`}
                    >
                      <FolderGit2
                        className={`w-5 h-5 ${index === 0 ? "text-primary-foreground" : "text-primary"}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <CardTitle className="text-xl font-bold">
                          {project.title}
                        </CardTitle>
                        {project.badge && (
                          <Badge className="text-xs bg-primary/10 text-primary border-primary/20 font-medium shrink-0">
                            {project.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-primary font-medium mt-0.5">
                        {project.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-muted-foreground leading-snug flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t border-border/40">
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs px-2.5 py-0.5 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
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
