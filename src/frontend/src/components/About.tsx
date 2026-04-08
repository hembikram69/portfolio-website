import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    id: "technical",
    icon: Code2,
    title: "Technical Excellence",
    description:
      "Expertise in full-stack development using .NET, C#, Python, JavaScript, AngularJS, and Bootstrap to build scalable, high-performance applications.",
  },
  {
    id: "problem-solver",
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Data-driven analytical approach to debugging, optimizing code, and designing efficient database schemas that improve performance.",
  },
  {
    id: "team-player",
    icon: Users,
    title: "Team Player",
    description:
      "Strong communication and collaboration skills, working closely with clients, team members, and stakeholders across the full project lifecycle.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About Me
            </p>
            <h2 className="section-heading">
              Crafting Code,{" "}
              <span className="text-gradient">Driving Insights</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
              <p>
                I'm a dedicated software developer with a dual background in
                software engineering and data processing. Currently pursuing an{" "}
                <strong className="text-foreground font-semibold">
                  MSc in Data Analytics
                </strong>{" "}
                at London Metropolitan University (Islington College), I blend
                technical expertise with analytical thinking to create
                innovative solutions.
              </p>
              <p>
                My passion lies in leveraging data insights to support robust,
                user-friendly application development. With hands-on experience
                building scalable systems like Hospital Management and LAB
                Software, I deliver{" "}
                <strong className="text-foreground font-semibold">
                  client-focused solutions
                </strong>{" "}
                that make a real impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 pt-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={highlight.id}
                  className="card-hover border border-border/60 bg-card shadow-subtle group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6 text-center pb-7">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5 group-hover:bg-primary/15 transition-smooth">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
