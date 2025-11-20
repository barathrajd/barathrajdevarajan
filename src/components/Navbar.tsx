import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, X } from "lucide-react";
import favicon from "@/assets/favicon.svg";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
    
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
    <nav className="fixed top-0 w-full border-b bg-background z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <button 
          onClick={handleLogoClick}
          className="hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          <img src={favicon} alt="Logo" className="w-10 h-10" />
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
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-[280px] bg-[#18181b] border-l border-border z-[60] md:hidden flex flex-col animate-in slide-in-from-right duration-300 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-semibold">Menu</span>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex flex-col gap-2 p-4 flex-1">
              <button 
                onClick={() => handleNavClick('about')}
                className="text-left py-3 px-4 rounded-md hover:bg-accent transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('skills')}
                className="text-left py-3 px-4 rounded-md hover:bg-accent transition-colors font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => handleNavClick('projects')}
                className="text-left py-3 px-4 rounded-md hover:bg-accent transition-colors font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-left py-3 px-4 rounded-md hover:bg-accent transition-colors font-medium"
              >
                Contact
              </button>
              <NavLink 
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `text-left py-3 px-4 rounded-md transition-colors font-medium ${
                    isActive ? 'bg-accent text-primary' : 'hover:bg-accent'
                  }`
                }
              >
                Blog
              </NavLink>
            </div>
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/barathrajd" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/barathrajd" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
