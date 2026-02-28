import { Card, CardContent } from '@/components/ui/card';
import type { PersonalInfo } from '@/types/portfolio';
import {
  FaBolt,
  FaBriefcase,
  FaBullseye,
  FaCodeBranch,
  FaRocket,
} from 'react-icons/fa6';

interface AboutProps {
  personal: PersonalInfo;
}

const icons = [FaRocket, FaBolt, FaBullseye, FaBriefcase, FaCodeBranch];

export const About = ({ personal }: AboutProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="h-px bg-border/60 flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {personal.about.map((point, index) => {
            const Icon = icons[index % icons.length] || FaRocket;
            return (
              <Card
                key={point}
                className="border-border/70 bg-card/55 backdrop-blur hover:border-primary/35 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1 rounded-lg border border-primary/30 bg-primary/15 p-2">
                      <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <p className="text-base md:text-lg text-foreground/95 leading-relaxed">
                      {point}
                    </p>
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
