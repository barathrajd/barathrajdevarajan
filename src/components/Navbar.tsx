import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa6';
import { MdClose, MdMenu } from 'react-icons/md';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const root = document.documentElement;
    const isDark = root.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    const root = document.documentElement;
    if (next === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', next);
  };

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
    <nav className="fixed top-0 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <button
            type="button"
            onClick={handleLogoClick}
            className="group rounded-md px-1 py-1 hover:text-primary transition-colors"
            aria-label="Home"
          >
            <span className="text-lg md:text-[1.15rem] font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Barathraj Devarajan
            </span>
          </button>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button
            type="button"
            onClick={() => handleNavClick('about')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('skills')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('projects')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </button>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? 'text-foreground font-semibold bg-secondary/80 px-2 py-1 rounded-md'
                  : 'hover:text-foreground'
              }`
            }
          >
            Blog
          </NavLink>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <span className="sr-only">Toggle theme</span>
            {theme === 'dark' ? (
              <FaSun className="h-5 w-5" />
            ) : (
              <FaMoon className="h-5 w-5" />
            )}
          </Button>
          <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/barathrajd"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/barathrajd"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Menu</span>
            <MdMenu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-border/70 z-[60] md:hidden shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between p-4 border-b border-border/60">
            <span className="font-semibold">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MdClose className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className="text-left py-3 px-4 rounded-md hover:bg-accent transition-colors font-medium"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('skills')}
              className="text-left py-3 px-4 rounded-md hover:bg-accent transition-colors font-medium"
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('projects')}
              className="text-left py-3 px-4 rounded-md hover:bg-accent transition-colors font-medium"
            >
              Projects
            </button>
            <button
              type="button"
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
                  isActive
                    ? 'bg-secondary/70 text-foreground border border-border/70'
                    : 'hover:bg-accent'
                }`
              }
            >
              Blog
            </NavLink>
            <button
              type="button"
              onClick={toggleTheme}
              className="text-left py-3 px-4 rounded-md hover:bg-accent transition-colors font-medium flex items-center gap-3"
            >
              {theme === 'dark' ? (
                <FaSun className="h-4 w-4" />
              ) : (
                <FaMoon className="h-4 w-4" />
              )}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
          <div className="p-4 border-t border-border/60">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/barathrajd"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/barathrajd"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
