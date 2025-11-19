import { PersonalInfo } from "@/types/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Zap, Target, Briefcase, Sparkles } from "lucide-react";

interface AboutProps {
  personal: PersonalInfo;
}

const icons = [Rocket, Zap, Target, Briefcase, Sparkles];

export const About = ({ personal }: AboutProps) => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span>About Me</span>
          <div className="h-px bg-border/50 flex-1 ml-4"></div>
        </h2>
        <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <CardContent className="p-8 md:p-10">
            <ul className="space-y-4">
              {personal.about.map((point, index) => {
                const Icon = icons[index] || Rocket;
                return (
                  <li key={index} className="text-lg text-foreground leading-relaxed flex items-start gap-3">
                    <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
