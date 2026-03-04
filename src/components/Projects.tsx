import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Project } from '@/types/portfolio';
import { SiGithub } from '@icons-pack/react-simple-icons';

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Highlights</h2>
          <div className="h-px bg-border/60 flex-1" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col h-full border-border/70 bg-card/55 backdrop-blur hover:border-primary/35 transition-all duration-300 group hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-foreground transition-colors leading-snug">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base text-foreground/85">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {project.longDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-primary/35 bg-primary/10 text-foreground/90"
                    >
                      {project.title === 'Books Management System' &&
                      tag === 'JavaScript' ? (
                        <span className="mr-1">🚀</span>
                      ) : null}
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4 md:pt-6 border-t border-border/50">
                <Button
                  className="w-full border-primary/35 bg-background/80 text-foreground hover:bg-primary/12 transition-colors"
                  variant="outline"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <SiGithub className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
