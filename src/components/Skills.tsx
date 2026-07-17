import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolio } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-experience section-padding px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies"
          subtitle="The stack I use most often."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.skills.map((group, index) => (
            <Card
              key={group.category}
              className="reveal-on-scroll h-full"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="font-heading text-base">{group.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="text-xs"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
