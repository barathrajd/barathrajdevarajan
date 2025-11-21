import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { SkillCategory } from '@/types/portfolio';
import type { IconType } from 'react-icons';
import { FaCode, FaDatabase, FaTerminal, FaWrench } from 'react-icons/fa6';

interface SkillsProps {
  skills: SkillCategory[];
}

const iconMap: Record<string, IconType> = {
  Code2: FaCode,
  Database: FaDatabase,
  Terminal: FaTerminal,
  Wrench: FaWrench,
};

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span>Tech Stack</span>
          <div className="h-px bg-border/50 flex-1 ml-4" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, index) => {
            const Icon = iconMap[category.icon] || FaCode;
            const colorClass =
              index === 0
                ? 'text-blue-400'
                : index === 1
                  ? 'text-purple-400'
                  : index === 2
                    ? 'text-green-400'
                    : 'text-orange-400';

            return (
              <Card
                key={category.title}
                className="border-border/80 bg-card/20 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div
                      className={
                        'p-2 rounded-lg bg-background/50 border border-border/50 group-hover:border-primary/20 transition-colors'
                      }
                    >
                      <Icon className={`h-6 w-6 ${colorClass}`} />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <a
                        key={skill.name}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 text-sm rounded-md bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-secondary transition-all duration-300 cursor-pointer no-underline"
                      >
                        {skill.name}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
