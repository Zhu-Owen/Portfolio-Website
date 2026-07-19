import { ExternalLink } from "lucide-react";

import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolio } from "@/data/portfolio";


export function Experience() {
  const jobs = portfolio.experience;

  return (
    <section id="experience" className="section-experience section-padding px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="A track record of shipping high-impact systems across robotics, fintech, e-commerce, and media."
        />

        <div className="relative mt-10">
          <div
            className="pointer-events-none absolute top-0 bottom-0 left-3 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <div className="relative mb-10 flex justify-center md:pl-0 pl-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Present
              </span>
            </div>
          </div>

          <ol className="space-y-10 md:space-y-16">
            {jobs.map((job, index) => {
              const isLeft = index % 2 === 0;
              return (
                <li
                  key={`${job.company}-${index}`}
                  className="timeline-item relative pl-8 md:grid md:grid-cols-2 md:gap-10 md:pl-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className="absolute top-5 left-3 z-10 -translate-x-1/2 md:top-4 md:left-1/2"
                    aria-hidden
                  >
                    <span className="block h-3.5 w-3.5 rounded-full border-2 border-background bg-primary shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.15)] md:h-4 md:w-4" />
                  </div>

                  <p className="mb-3 md:hidden">
                    <span className="inline-flex rounded-md bg-background/80 px-2 py-0.5 font-heading text-[11px] font-semibold leading-snug text-primary backdrop-blur sm:text-xs">
                      {job.duration}
                    </span>
                  </p>

                  <div
                    className={`hidden md:block absolute top-4 z-10 left-1/2 ${
                      isLeft
                        ? "translate-x-8"
                        : "-translate-x-[calc(100%+2rem)]"
                    }`}
                  >
                    <span className="rounded-md bg-background/80 px-2 py-0.5 font-heading text-xs font-semibold text-primary backdrop-blur">
                      {job.duration}
                    </span>
                  </div>

                  <div
                    className={
                      isLeft
                        ? "min-w-0 md:col-start-1 md:pr-12"
                        : "min-w-0 md:col-start-2 md:pl-12"
                    }
                  >
                    <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <span
                        className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary via-primary/70 to-accent"
                        aria-hidden
                      />
                      <div className="flex flex-col gap-4 p-3 sm:gap-5 sm:p-5 md:gap-6 md:p-6">
                        <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                          {job.logo && (
                            <div className="shrink-0">
                              <span className="block overflow-hidden rounded-full border border-border/50 bg-background shadow-sm">
                                <img
                                  src={job.logo}
                                  alt={`${job.company} logo`}
                                  className={`h-12 w-12 object-cover sm:h-16 sm:w-16 md:h-20 md:w-20 ${""}`}
                                  loading="lazy"
                                />
                              </span>
                            </div>
                          )}
                          <div className="flex flex-1 flex-col items-start gap-0.5 sm:gap-1">
                            <CardTitle className="font-heading text-base sm:text-lg md:text-xl">
                              {job.link ? (
                                <a
                                  href={job.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 hover:text-primary"
                                >
                                  {job.company}
                                  <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground sm:h-3.5 sm:w-3.5" />
                                </a>
                              ) : (
                                job.company
                              )}
                            </CardTitle>
                            <CardDescription className="text-sm font-medium text-foreground sm:text-base">
                              {job.role}
                            </CardDescription>
                            <p className="text-xs text-muted-foreground sm:text-sm">{job.location}</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-left">
                          {job.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground sm:text-sm"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary sm:mt-2" />
                              <span dangerouslySetInnerHTML={{ __html: highlightMetrics(bullet) }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function highlightMetrics(text: string) {
  return text
    .replace(/(\b\d+[\d,.]*%?|\b\d+\.\d+[ms]?|\b99\.99%|\b[A-Z]{2,}\b)/g, (match) => {
      if (/^[A-Z]{2,}$/.test(match) && !["SDLC", "NLBs", "S3", "NFC", "SSO", "AES", "MVVM", "AI"].includes(match)) {
        return match;
      }
      return `<strong class="text-foreground font-medium">${match}</strong>`;
    });
}