import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};
