import type { CSSProperties } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

import { portfolio } from "@/data/portfolio";
import profileAsset from "@/assets/owen-zhu-profile.jpg";
import resumePreviewAsset from "@/assets/owen-zhu-resume-preview.jpg";

const socialLinks = [
  {
    href: portfolio.github,
    icon: Github,
    label: "GitHub",
    external: true,
  },
  {
    href: portfolio.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    href: `mailto:${portfolio.email}`,
    icon: Mail,
    label: "Email",
    external: false,
  },
];

export function Hero() {
  return (
    <section
      id="about"
      className="hero-gradient relative flex min-h-[84vh] items-center px-6 pb-8 pt-24 sm:pb-10 lg:pb-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column: profile, intro, summary, social links */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="hero-rise mb-8 flex justify-center lg:justify-start" style={{ "--hero-delay": "0ms" } as CSSProperties}>
              <div className="relative animate-float-slow">
                <div className="animate-ring-spin absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,transparent,var(--color-accent),transparent_40%,var(--color-primary),transparent_80%)] opacity-60 blur-md" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent to-primary opacity-60 blur-sm" />
                <img
                  src={profileAsset}
                  alt={`${portfolio.name}, ${portfolio.title}`}
                  className="relative h-72 w-72 rounded-full border-4 border-background object-cover shadow-xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                  loading="eager"
                />
              </div>
            </div>

            <p className="hero-rise mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={{ "--hero-delay": "120ms" } as CSSProperties}>
              {portfolio.title} — {portfolio.location}
            </p>
            <h1 className="hero-rise font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl" style={{ "--hero-delay": "200ms" } as CSSProperties}>
              {portfolio.name.split(" ")[0]}{" "}
              <span className="animated-gradient-text">{portfolio.name.split(" ")[1]}</span>
            </h1>
            <p className="hero-rise mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-balance lg:mx-0" style={{ "--hero-delay": "300ms" } as CSSProperties}>
              {portfolio.summary}
            </p>

            <div className="hero-rise mt-8 flex flex-wrap justify-center gap-3 lg:justify-start" style={{ "--hero-delay": "400ms" } as CSSProperties}>
              {socialLinks.map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right column: large resume PDF preview */}
          <div className="hero-rise flex items-center justify-center lg:justify-end" style={{ "--hero-delay": "250ms" } as CSSProperties}>
            <a
              href={portfolio.resumeUrl}
              download="Owen Zhu Resume.pdf"
              aria-label={`${portfolio.name} resume PDF download`}
              className="group block w-full max-w-md rounded-xl border bg-card p-3 text-left shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:max-w-lg"
            >
              <div className="flex items-center justify-between px-2 pb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span>Resume PDF</span>
                <Download className="h-4 w-4 text-primary transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              </div>
              <div className="overflow-hidden rounded-lg border bg-background">
                <img
                  src={resumePreviewAsset}
                  alt={`${portfolio.name} resume preview`}
                  className="aspect-[8.5/11] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
