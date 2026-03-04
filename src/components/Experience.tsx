import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Experience as ExperienceType } from '@/types/portfolio';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface ExperienceProps {
  experience: ExperienceType[];
}

const calculateDuration = (startDateStr?: string, staticDuration?: string) => {
  if (!startDateStr) return staticDuration;

  const start = new Date(startDateStr);
  const now = new Date();

  let months = (now.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += now.getMonth();

  // If the current day is past the start day in the month, add a month
  if (now.getDate() >= start.getDate()) {
    months += 1;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  if (remainingMonths > 0)
    parts.push(
      `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`,
    );

  return parts.join(' ') || 'Just started';
};

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <div className="h-px bg-border/60 flex-1" />
        </div>

        <div className="relative border-l-2 border-primary/30 pl-6 md:pl-8 ml-2 md:ml-4 space-y-12">
          {experience.map((exp) => (
            <div key={`${exp.company}-${exp.role}`} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[35px] md:-left-[43px] top-6 h-5 w-5 rounded-full border-4 border-background bg-primary transition-transform duration-300 group-hover:scale-125" />

              <Card className="border-border/70 bg-card/55 backdrop-blur hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-primary">
                        {exp.role}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2 text-foreground/90 font-medium">
                        <FaBriefcase className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 text-sm text-muted-foreground md:text-right">
                      <div className="flex items-center md:justify-end gap-2">
                        <FaCalendarAlt className="h-3.5 w-3.5 shrink-0" />
                        <span>
                          {exp.period} (
                          {calculateDuration(exp.startDate, exp.duration)})
                        </span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center md:justify-end gap-2">
                          <FaMapMarkerAlt className="h-3.5 w-3.5 shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {exp.description && exp.description.length > 0 && (
                    <ul className="mt-4 space-y-2 list-disc list-inside text-foreground/80 leading-relaxed marker:text-primary/60">
                      {exp.description.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
