import { useEffect, useRef } from 'react';

export function useDirectionalSnapScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);
  const isScrollingDown = useRef(false);
  const currentSnapState = useRef<'enabled' | 'disabled'>('disabled');
  const scrollVelocity = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTime = Date.now();

    const enableSnapScrolling = () => {
      if (currentSnapState.current === 'enabled') return;

      currentSnapState.current = 'enabled';
      container.style.scrollSnapType = 'y mandatory';

      const sections = container.querySelectorAll('.snap-section, .snap-section-last');
      sections.forEach((section) => {
        const element = section as HTMLElement;
        if (section.classList.contains('snap-section-last')) {
          element.style.scrollSnapAlign = 'start';
        } else {
          element.style.scrollSnapAlign = 'center';
        }
        element.style.scrollSnapStop = 'always';
      });
    };

    const disableSnapScrolling = () => {
      if (currentSnapState.current === 'disabled') return;

      currentSnapState.current = 'disabled';
      container.style.scrollSnapType = 'none';

      const sections = container.querySelectorAll('.snap-section, .snap-section-last');
      sections.forEach((section) => {
        const element = section as HTMLElement;
        element.style.scrollSnapAlign = 'none';
        element.style.scrollSnapStop = 'normal';
      });
    };

    const handleScroll = () => {
      const currentScrollTop = container.scrollTop;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastScrollTime;

      // Calculate scroll velocity
      scrollVelocity.current = Math.abs(currentScrollTop - lastScrollTop.current) / timeDelta;

      const scrollDirection = currentScrollTop > lastScrollTop.current ? 'down' : 'up';
      const hasScrolledSignificantly = Math.abs(currentScrollTop - lastScrollTop.current) > 5;

      if (hasScrolledSignificantly) {
        isScrollingDown.current = scrollDirection === 'down';
      }

      lastScrollTop.current = currentScrollTop;
      lastScrollTime = currentTime;

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Only apply snap scrolling on deliberate downward scrolling with reasonable velocity
      if (isScrollingDown.current && scrollVelocity.current > 0.1 && scrollVelocity.current < 2) {
        enableSnapScrolling();
      } else {
        disableSnapScrolling();
      }

      // Disable snap after scroll ends to allow natural scrolling
      scrollTimeout = setTimeout(() => {
        if (!isScrollingDown.current || scrollVelocity.current < 0.05) {
          disableSnapScrolling();
        }
      }, 100);
    };

    // Check if we're on desktop with landscape orientation
    const mediaQuery = window.matchMedia('(min-width: 1024px) and (orientation: landscape)');

    const handleMediaChange = () => {
      if (mediaQuery.matches) {
        container.addEventListener('scroll', handleScroll, { passive: true });
        return;
      }
      container.removeEventListener('scroll', handleScroll);
      disableSnapScrolling();
    };

    // Initial check
    handleMediaChange();

    // Listen for orientation/size changes
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleMediaChange);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return containerRef;
}
