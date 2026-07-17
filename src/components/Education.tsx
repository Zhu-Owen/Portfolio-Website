import { GraduationCap } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolio } from "@/data/portfolio";

export function Education() {
  const edu = portfolio.education;

  return (
    <section id="education" className="section-padding bg-muted/30 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <Card className="reveal-on-scroll overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="font-heading text-xl">{edu.school}</CardTitle>
                  <CardDescription className="mt-1 text-base font-medium text-foreground">
                    {edu.degree}
                  </CardDescription>
                </div>
              </div>
              <div className="sm:text-right">
                <Badge variant="secondary" className="whitespace-nowrap">
                  {edu.duration}
                </Badge>
                <p className="mt-1 text-sm text-muted-foreground">{edu.location}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm font-medium text-primary">{edu.honors}</p>
            {edu.scholarship && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Scholarship
                </p>
                <p className="mt-1 text-sm text-foreground">{edu.scholarship}</p>
              </div>
            )}
            {edu.courses && edu.courses.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Relevant Coursework
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <Badge key={course} variant="secondary" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
