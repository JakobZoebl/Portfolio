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

    // Navbar flies in and Hero text centers simultaneously over 150vh of scrolling
    const phase1End = vh * 1.5;
    // Hero text moves to top, marquees slide in over the next 150vh
    const phase2End = vh * 3.0;
    // Marquees slide out over the next 150vh
    const phase3End = vh * 4.5;
    
    const animationEnd = phase3End;

    const navbarProgress = Math.min(1, Math.max(0, scrollY / phase1End));
    const heroProgress = Math.min(1, Math.max(0, scrollY / phase1End));
    
    // Progress from 0 to 1 during the second 150vh
    const phase2Progress = Math.min(1, Math.max(0, (scrollY - phase1End) / (phase2End - phase1End)));
    
    // Progress from 0 to 1 during the third 150vh
    const phase3Progress = Math.min(1, Math.max(0, (scrollY - phase2End) / (phase3End - phase2End)));

    return { navbarProgress, heroProgress, phase2Progress, phase3Progress, scrollY, animationEnd };
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
