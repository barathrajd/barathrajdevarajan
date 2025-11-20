import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactLink } from "@/types/portfolio";

interface ContactProps {
  contact: ContactLink[];
}

export const Contact = ({ contact }: ContactProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'email':
        return Mail;
      case 'github':
        return Github;
      default:
        return Mail;
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Let's Connect
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-lg">
          Interested in working together? Reach out!
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
                className="border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
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
    </section>
  );
};
