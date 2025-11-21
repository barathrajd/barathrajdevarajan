import { TechStackCarousel } from '@/components/TechStackCarousel';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/gradient-text';
import type { PersonalInfo } from '@/types/portfolio';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa6';

interface HeroProps {
  personal: PersonalInfo;
}

export const Hero = ({ personal }: HeroProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background">
      {/* Background gradient effect - Removed for consistency */}
      {/* <div className="absolute inset-0 bg-background -z-10" /> */}

      {/* Main content - centered */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <GradientText>{personal.name}</GradientText>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {personal.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group min-w-[180px]"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[180px]"
              onClick={() => scrollToSection('contact')}
            >
              <FaEnvelope className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Tech stack carousel - bottom */}
      <TechStackCarousel />
    </header>
  );
};
