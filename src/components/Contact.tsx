import { Button } from '@/components/ui/button';
import type { ContactLink } from '@/types/portfolio';
import { SiGithub, SiGmail } from '@icons-pack/react-simple-icons';

interface ContactProps {
  contact: ContactLink[];
}

export const Contact = ({ contact }: ContactProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'email':
        return SiGmail;
      case 'github':
        return SiGithub;
      default:
        return SiGmail;
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
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            {contact.map((link) => {
              const Icon = getIcon(link.type);
              return (
                <Button
                  key={link.type}
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-border bg-background hover:bg-secondary transition-colors"
                >
                  <a
                    href={link.url}
                    target={link.type === 'github' ? '_blank' : undefined}
                    rel={link.type === 'github' ? 'noreferrer' : undefined}
                    className="flex items-center justify-center gap-2"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{link.label}</span>
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
