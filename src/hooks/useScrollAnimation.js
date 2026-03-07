import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook that tracks scroll position and computes progress values
 * for the navbar fly-in and hero text centering animations.
 *
 * @returns {{ navbarProgress: number, heroProgress: number, scrollY: number }}
 */
export default function useScrollAnimation() {
  const rafId = useRef(null);

  const compute = useCallback(() => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    // Phase 1: Navbar flies in over the first 40vh of scrolling
    const navbarEnd = vh * 0.4;
    const navbarProgress = Math.min(1, Math.max(0, scrollY / navbarEnd));

    // Phase 2: Hero text centers/shrinks from 40vh to 200vh of scrolling
    const heroStart = navbarEnd;
    const heroEnd = vh * 2;
    const heroProgress = Math.min(
      1,
      Math.max(0, (scrollY - heroStart) / (heroEnd - heroStart))
    );

    return { navbarProgress, heroProgress, scrollY };
  }, []);

  const [state, setState] = useState(() => compute());

  useEffect(() => {
    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        setState(compute());
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [compute]);

  return state;
}
