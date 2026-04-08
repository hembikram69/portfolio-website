import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    id: "msc",
    degree: "MSc IT — Data Analytics",
    institution: "Islington College, London Metropolitan University",
    period: "2025",
    location: "Kathmandu, Nepal",
    description:
      "Pursuing advanced studies in data analytics, focusing on data processing, statistical analysis, and leveraging insights for data-driven decision-making.",
    achievements: [
      "Specializing in data-driven application development",
      "Advanced coursework in analytics tools and methodologies",
    ],
  },
  {
    id: "bsc",
    degree: "BSc (Hons) Computer Science",
    institution: "Herald College of Kathmandu, University of Wolverhampton",
    period: "2022 – 2025",
    location: "Kathmandu, Nepal",
    description:
      "Comprehensive study of software engineering, algorithms, data structures, and modern web technologies with hands-on project experience.",
    achievements: [
      "Developed Hospital Management System and LAB Software",
      "Strong foundation in full-stack development",
      "Expertise in .NET, C#, and database management",
    ],
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary Education",
    institution: "Little Buddha Academy Higher Secondary School",
    period: "Completed",
    location: "Mahendranagar, Kanchanpur",
    description:
      "Completed secondary education with focus on science and mathematics, building strong analytical foundations.",
    achievements: [
      "Strong academic performance in STEM subjects",
      "Developed early interest in technology and programming",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Academic
            </p>
            <h2 className="section-heading">
              Education &amp;{" "}
              <span className="text-gradient">Qualifications</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Timeline */}
          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent hidden sm:block"
              aria-hidden="true"
            />

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={edu.id} className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center z-10 shadow-elevated ${
                        index === 0 ? "bg-primary" : "bg-primary/10"
                      }`}
                    >
                      <GraduationCap
                        className={`w-5 h-5 ${index === 0 ? "text-primary-foreground" : "text-primary"}`}
                      />
                    </div>
                  </div>

                  <Card className="flex-1 card-hover border border-border/60 bg-card shadow-subtle">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <CardTitle className="text-lg font-bold leading-tight">
                          {edu.degree}
                        </CardTitle>
                        {index === 0 && (
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full shrink-0">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-semibold text-primary text-sm">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {edu.description}
                      </p>
                      <div>
                        <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                          Highlights
                        </h4>
                        <ul className="space-y-1.5">
                          {edu.achievements.map((achievement) => (
                            <li
                              key={achievement}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"
                                aria-hidden="true"
                              />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
