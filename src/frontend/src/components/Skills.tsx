import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Code2,
  Database,
  Globe,
  Layers,
  MessageSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  id: string;
  category: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    category: "Programming Languages",
    icon: Code2,
    skills: ["C#", "Python", "JavaScript"],
    color: "text-blue-500",
  },
  {
    id: "web",
    category: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "Bootstrap", "AngularJS"],
    color: "text-emerald-500",
  },
  {
    id: "frameworks",
    category: "Frameworks",
    icon: Layers,
    skills: [".NET"],
    color: "text-purple-500",
  },
  {
    id: "database",
    category: "Database Management",
    icon: Database,
    skills: ["MySQL", "SQL Server"],
    color: "text-orange-500",
  },
  {
    id: "analytics",
    category: "Data & Analytics Tools",
    icon: BarChart3,
    skills: ["Pandas", "NumPy"],
    color: "text-pink-500",
  },
  {
    id: "soft",
    category: "Soft Skills",
    icon: MessageSquare,
    skills: [
      "Analytical Thinking",
      "Problem-Solving",
      "Client Handling",
      "Team Collaboration",
      "Communication",
    ],
    color: "text-teal-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Capabilities
            </p>
            <h2 className="section-heading">
              Skills &amp; <span className="text-gradient">Expertise</span>
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
              Technologies and methodologies I use to build robust, scalable
              software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category) => (
              <Card
                key={category.id}
                className="card-hover border border-border/60 bg-card shadow-subtle group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-smooth">
                      <category.icon
                        className={`w-4.5 h-4.5 ${category.color}`}
                      />
                    </div>
                    <CardTitle className="text-sm font-semibold leading-tight">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs px-2.5 py-1 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default font-medium"
                      >
                        {skill}
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
