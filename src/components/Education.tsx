import { Card, CardContent } from '@/components/ui/card';
import type { Education as EducationType } from '@/types/portfolio';
import { FaGraduationCap } from 'react-icons/fa6';

interface EducationProps {
  education: EducationType[];
}

export const Education = ({ education }: EducationProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          <div className="h-px bg-border/60 flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <Card
              key={`${edu.institution}-${edu.degree}`}
              className="h-full border-border/70 bg-card/55 backdrop-blur hover:border-primary/35 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1 rounded-lg border border-primary/30 bg-primary/15 p-2">
                    <FaGraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-foreground/80 mt-1 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
