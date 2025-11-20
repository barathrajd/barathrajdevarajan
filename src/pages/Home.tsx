import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Separator } from "@/components/ui/separator";
import { portfolioData } from "@/data/portfolio";

export const HomePage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger when 30% of the section is visible
      rootMargin: "-10% 0px -10% 0px"
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const titleMap: Record<string, string> = {
            'about': 'About | Barathraj',
            'skills': 'Skills | Barathraj',
            'projects': 'Projects | Barathraj',
            'contact': 'Contact | Barathraj'
          };
          
          if (titleMap[id]) {
            document.title = titleMap[id];
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all sections
    ['about', 'skills', 'projects', 'contact'].forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Handle scroll to top (Hero section)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        document.title = 'Barathraj Devarajan | Portfolio';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Hero personal={portfolioData.personal} />
      
      <section id="about" className="scroll-mt-20">
        <About personal={portfolioData.personal} />
      </section>
      
      <section id="skills" className="scroll-mt-20">
        <Skills skills={portfolioData.skills} />
      </section>
      
      <section id="projects" className="scroll-mt-20">
        <Projects projects={portfolioData.projects} />
      </section>
      
      <section id="contact" className="scroll-mt-20">
        <Contact contact={portfolioData.contact} />
      </section>
    </div>
  );
};
