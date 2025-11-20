import { Skills } from '@/components/Skills';
import { portfolioData } from '@/data/portfolio';

export const SkillsPage = () => {
  return <Skills skills={portfolioData.skills} />;
};
