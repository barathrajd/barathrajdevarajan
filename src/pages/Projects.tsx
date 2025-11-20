import { Projects } from '@/components/Projects';
import { portfolioData } from '@/data/portfolio';

export const ProjectsPage = () => {
  return <Projects projects={portfolioData.projects} />;
};
