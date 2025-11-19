import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { Github, Linkedin } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleLogoClick = () => {
    if (isHomePage) {
      // Scroll to top if already on home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home if on another page
      navigate('/');
    }
  };

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      // If already on home, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If on another page, navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <button 
          onClick={handleLogoClick}
          className="text-xl font-bold hover:opacity-80 transition-opacity"
        >
          <GradientText>Barathraj Devarajan</GradientText>
        </button>
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => handleNavClick('about')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('skills')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => handleNavClick('projects')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </button>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors ${isActive ? 'text-primary font-semibold' : 'hover:text-primary'}`
            }
          >
            Blog
          </NavLink>
          <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/barathrajd" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/barathrajd" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};
