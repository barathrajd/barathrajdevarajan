import { Button } from '@/components/ui/button';
import type { ContactLink } from '@/types/portfolio';
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaLink,
} from 'react-icons/fa6';

interface ContactProps {
  contact: ContactLink[];
}

export const Contact = ({ contact }: ContactProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'email':
        return FaEnvelope;
      case 'github':
        return FaGithub;
      case 'linkedin':
        return FaLinkedin;
      case 'website':
        return FaGlobe;
      default:
        return FaLink;
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-lg max-w-2xl mx-auto">
            Open to frontend platform work, tooling projects, and collaboration
            on scalable React or Node.js systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {contact.map((link) => {
              const Icon = getIcon(link.type);
              return (
                <Button
                  key={link.type}
                  variant="outline"
                  size="lg"
                  asChild
                  className="h-14 border-border/50 bg-secondary/30 hover:bg-secondary hover:border-primary/50 transition-all duration-300"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 w-full"
                  >
                    <Icon className="h-5 w-5 text-primary opacity-80 group-hover:opacity-100" />
                    <span className="font-semibold tracking-tight uppercase text-[10px] letter-spacing-[0.05em]">
                      {link.label}
                    </span>
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
