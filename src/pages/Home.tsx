import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Separator } from "@/components/ui/separator";
import { portfolioData } from "@/data/portfolio";

export const HomePage = () => {
  return (
    <div className="relative">
      <Hero personal={portfolioData.personal} />
      
      <Separator className="my-12" />
      
      <section id="about" className="scroll-mt-20">
        <About personal={portfolioData.personal} />
      </section>
      
      <section id="skills" className="scroll-mt-20">
        <Skills skills={portfolioData.skills} />
      </section>
      
      <section id="projects" className="scroll-mt-20">
        <Projects projects={portfolioData.projects} />
      </section>
      
      <Separator className="my-12" />
      
      <section id="contact" className="scroll-mt-20">
        <Contact contact={portfolioData.contact} />
      </section>
    </div>
  );
};
