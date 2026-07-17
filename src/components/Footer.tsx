import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer id="contact" className="section-experience px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="max-w-md">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
              Let's build something together!
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, side projects, or
              interesting engineering problems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${portfolio.email}`}>
                <Button className="gap-2">
                  <Mail className="h-4 w-4" />
                  Email me
                </Button>
              </a>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>

          <div className="w-full max-w-sm space-y-4 lg:w-auto">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a
                href={`mailto:${portfolio.email}`}
                className="text-sm hover:text-foreground hover:underline"
              >
                {portfolio.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm">{portfolio.location}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Github className="h-4 w-4 shrink-0 text-primary" />
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-foreground hover:underline"
              >
                github.com/Zhu-Owen
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Linkedin className="h-4 w-4 shrink-0 text-primary" />
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-foreground hover:underline"
              >
                linkedin.com/in/Zhu-Owen
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
          <p>
            Built with{" "}
            <a
              href="https://tanstack.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              TanStack Start
            </a>{" "}
            &{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
