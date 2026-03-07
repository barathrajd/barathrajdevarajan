import { Button } from '@/components/ui/button';
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
    <header className="min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center px-4 pt-24 md:pt-28 pb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
            Web Developer
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl leading-[1.05]">
            Building scalable web systems and custom developer tools.
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
            {personal.tagline}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl">
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="text-2xl font-extrabold text-foreground">
                5+ Years
              </p>
              <p className="text-sm text-muted-foreground mt-1">Experience</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="text-2xl font-extrabold text-foreground">
                10+ Tools
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Build and DX stack
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
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
              className="min-w-[190px] bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => scrollToSection('projects')}
            >
              View Highlights
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[190px] border-border bg-background hover:bg-secondary"
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
