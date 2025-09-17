import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatch = () => setMatches(media.matches);
    updateMatch();

    // Use the newer addEventListener if available, fallback to addListener
    if (media.addEventListener) {
      media.addEventListener('change', updateMatch);
      return () => media.removeEventListener('change', updateMatch);
    } else {
      // @ts-ignore - for older browsers
      media.addListener(updateMatch);
      // @ts-ignore - for older browsers
      return () => media.removeListener(updateMatch);
    }
  }, [query]);

  return matches;
}