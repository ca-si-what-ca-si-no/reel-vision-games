import { useEffect, useRef } from 'react';

import { COMMON_NUMBERS } from '@/constants/numbers';

export function useDirectionalSnapScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);
  const isScrollingDown = useRef(false);
  const currentSnapState = useRef<'enabled' | 'disabled'>('disabled');
  const scrollVelocity = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      let scrollTimeout: NodeJS.Timeout;
      let lastScrollTime = Date.now();

      const enableSnapScrolling = () => {
        if (currentSnapState.current === 'enabled') {
          return;
        }

        currentSnapState.current = 'enabled';
        container.style.scrollSnapType = 'y mandatory';

        const sections = container.querySelectorAll('.snap-section, .snap-section-last');
        sections.forEach((section) => {
          const element = section as HTMLElement;
          element.style.scrollSnapAlign = 'start';
          element.style.scrollSnapStop = 'always';
        });
      };

      const disableSnapScrolling = () => {
        if (currentSnapState.current === 'disabled') {
          return;
        }

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
        const hasScrolledSignificantly =
          Math.abs(currentScrollTop - lastScrollTop.current) > COMMON_NUMBERS.SCROLL_THRESHOLD;

        if (hasScrolledSignificantly) {
          isScrollingDown.current = scrollDirection === 'down';
        }

        // Check if we're near the bottom (in footer area)
        const containerHeight = container.scrollHeight;
        const visibleHeight = container.clientHeight;
        const scrollProgress = (currentScrollTop + visibleHeight) / containerHeight;
        const isInFooterArea = scrollProgress > COMMON_NUMBERS.FOOTER_AREA_THRESHOLD;

        lastScrollTop.current = currentScrollTop;
        lastScrollTime = currentTime;

        // Clear existing timeout
        clearTimeout(scrollTimeout);

        // Apply snap scrolling only on downward scrolling, but disable in footer area
        if (
          isScrollingDown.current &&
          !isInFooterArea &&
          scrollVelocity.current > COMMON_NUMBERS.MIN_SCROLL_VELOCITY &&
          scrollVelocity.current < COMMON_NUMBERS.MAX_SCROLL_VELOCITY
        ) {
          enableSnapScrolling();
        } else {
          disableSnapScrolling();
        }

        // Disable snap after scroll ends to allow natural scrolling
        scrollTimeout = setTimeout(() => {
          if (
            !isScrollingDown.current ||
            isInFooterArea ||
            scrollVelocity.current < COMMON_NUMBERS.SCROLL_END_VELOCITY
          ) {
            disableSnapScrolling();
          }
        }, COMMON_NUMBERS.SCROLL_TIMEOUT);
      };

      // Check if we're on desktop with landscape orientation
      const mediaQuery = window.matchMedia('(min-width: 1024px) and (orientation: landscape)');

      const handleMediaChange = () => {
        if (mediaQuery.matches) {
          container.addEventListener('scroll', handleScroll, { passive: true });
        } else {
          container.removeEventListener('scroll', handleScroll);
          disableSnapScrolling();
        }
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
    }
    return () => {
      // No cleanup needed when container is not available
    };
  }, []);

  return containerRef;
}
