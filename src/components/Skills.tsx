import { Code2, Database, Terminal, Wrench, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillCategory } from "@/types/portfolio";

interface SkillsProps {
  skills: SkillCategory[];
}

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  Terminal,
  Wrench
};

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span>Tech Stack</span>
          <div className="h-px bg-border/50 flex-1 ml-4"></div>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            const colorClass = index === 0 ? "text-primary" : 
                              index === 1 ? "text-secondary" : 
                              index === 2 ? "text-accent" : "text-primary";
            
            return (
              <Card key={category.title} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon className={`h-5 w-5 ${colorClass}`} /> {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
