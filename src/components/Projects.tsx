import { ExternalLink, Github } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolio } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted/30 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Selected engineering work."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {portfolio.projects.map((project, index) => (
            <Card
              key={index}
              className="reveal-on-scroll group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="font-heading text-xl transition-colors group-hover:text-primary">
                  {project.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="gap-1.5">
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" size="sm" className="gap-1.5">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
