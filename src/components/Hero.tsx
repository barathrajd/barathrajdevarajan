import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/gradient-text';
import type { PersonalInfo } from '@/types/portfolio';
import { Suspense, lazy } from 'react';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa6';

const TechStackCarousel = lazy(() =>
  import('@/components/TechStackCarousel').then((module) => ({
    default: module.TechStackCarousel,
  })),
);

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
    <header className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-0 w-72 h-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-12 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pt-24 md:pt-28 pb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground animate-float">
            Web Developer
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl leading-[1.05]">
            Building <GradientText>scalable web systems</GradientText> and
            custom developer tools.
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
            {personal.tagline}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl">
            <div className="rounded-xl border border-border/70 bg-card/65 p-4 backdrop-blur">
              <p className="text-2xl font-extrabold text-foreground">
                5+ Years
              </p>
              <p className="text-sm text-muted-foreground mt-1">Experience</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-card/65 p-4 backdrop-blur">
              <p className="text-2xl font-extrabold text-foreground">
                10+ Tools
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Build and DX stack
              </p>
            </div>
            <div className="rounded-xl border border-border/70 bg-card/65 p-4 backdrop-blur">
              <p className="text-2xl font-extrabold text-foreground">
                End-to-End
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Frontend + Backend
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button
              size="lg"
              className="group min-w-[190px] bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => scrollToSection('projects')}
            >
              View Highlights
              <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[190px] border-primary/35 bg-card/40 backdrop-blur hover:bg-primary/10"
              onClick={() => scrollToSection('contact')}
            >
              <FaEnvelope className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      <div className="h-[152px]">
        <Suspense fallback={<div className="h-[152px]" aria-hidden />}>
          <TechStackCarousel />
        </Suspense>
      </div>
    </header>
  );
};
