import { useState, type MouseEvent } from "react";
import { Menu, Github, Linkedin, Mail, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { portfolio } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md shadow-sm"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-heading text-lg font-bold tracking-tight text-foreground"
        >
          {portfolio.name}
          <span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => scrollToAnchor(event, link.href)}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Github className="h-[1.125rem] w-[1.125rem]" />
            </Button>
          </a>
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-[1.125rem] w-[1.125rem]" />
            </Button>
          </a>
          <a href={`mailto:${portfolio.email}`} aria-label="Email">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-[1.125rem] w-[1.125rem]" />
            </Button>
          </a>
          <a href={portfolio.resumeUrl} download>
            <Button size="sm" className="gap-1.5">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-72 flex-col">
            <div className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    scrollToAnchor(event, link.href);
                    setOpen(false);
                  }}
                  className="rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-3 border-t pt-6">
              <a href={portfolio.resumeUrl} download>
                <Button className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </a>
              <div className="flex gap-3">
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Button variant="outline" size="icon" className="flex-1">
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Button variant="outline" size="icon" className="flex-1">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
                <a href={`mailto:${portfolio.email}`} aria-label="Email">
                  <Button variant="outline" size="icon" className="flex-1">
                    <Mail className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function scrollToAnchor(event: MouseEvent<HTMLAnchorElement>, href: string) {
  event.preventDefault();

  if (href === "#") {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const target = document.getElementById(href.slice(1));
  if (!target) return;

  window.history.replaceState(null, "", href);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
