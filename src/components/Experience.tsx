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
            className="pointer-events-none absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
            aria-hidden
          />

          <div className="relative mb-10 flex justify-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Present
              </span>
            </div>
          </div>

          <ol className="space-y-12 md:space-y-16">
            {jobs.map((job, index) => {
              const isLeft = index % 2 === 0;
              return (
                <li
                  key={`${job.company}-${index}`}
                  className="timeline-item relative grid grid-cols-2 gap-3 sm:gap-6 md:gap-10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className="absolute top-4 left-1/2 z-10 -translate-x-1/2"
                    aria-hidden
                  >
                    <span className="block h-4 w-4 rounded-full border-2 border-background bg-primary shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.15)]" />
                  </div>
                  <div
                    className={`absolute top-4 z-10 left-1/2 ${
                      isLeft
                        ? "translate-x-4 sm:translate-x-6 md:translate-x-8"
                        : "-translate-x-[calc(100%+1rem)] sm:-translate-x-[calc(100%+1.5rem)] md:-translate-x-[calc(100%+2rem)]"
                    }`}
                  >
                    <span className="rounded-md bg-background/80 px-1.5 py-0.5 font-heading text-[10px] font-semibold text-primary backdrop-blur sm:px-2 sm:text-xs">
                      {job.duration}
                    </span>
                  </div>


                  <div
                    className={`${
                      isLeft
                        ? "col-start-1 pr-2 sm:pr-6 md:pr-12"
                        : "col-start-2 pl-2 sm:pl-6 md:pl-12"
                    }`}
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
                                  className={`h-12 w-12 object-cover sm:h-16 sm:w-16 md:h-20 md:w-20 ${
                                    job.company === "theScore" ? "scale-[0.85]" : ""
                                  }`}
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