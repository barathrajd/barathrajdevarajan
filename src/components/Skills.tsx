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
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
          <div className="h-px bg-border/60 flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, index) => {
            const Icon = iconMap[category.icon] || FaCode;
            const colorClass =
              index === 0
                ? 'text-[#4f7e32]'
                : index === 1
                  ? 'text-[#3d612a]'
                  : index === 2
                    ? 'text-[#679f43]'
                    : 'text-[#85ba61]';

            return (
              <Card
                key={category.title}
                className="h-full border-border bg-card"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                    <div
                      className={
                        'p-2 rounded-lg bg-secondary border border-border'
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
                        className="px-3 py-1.5 text-sm rounded-md bg-secondary border border-border text-muted-foreground hover:text-foreground transition-colors cursor-pointer no-underline"
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
