import React, { useRef, useEffect, useState } from "react";
import TechMarquee from './TechMarquee';


/**
 * Attempt to measure the initial bounding rect of the h1 text so we can
 * interpolate from its natural position to the viewport centre.
 */
function useTextRect(ref, line1Ref, line2Ref) {
  const [rect, setRect] = useState(null);

  useEffect(() => {
    if (!ref.current) return;

    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const parent = el.closest('.hero-sticky');
      if (!parent) return;
      const parentRect = parent.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      
      const w1 = line1Ref.current ? line1Ref.current.offsetWidth : 0;
      const w2 = line2Ref.current ? line2Ref.current.offsetWidth : 0;
      const maxW = Math.max(w1, w2, el.offsetWidth);

      setRect({
        // Position relative to the sticky container
        x: elRect.left - parentRect.left,
        y: elRect.top - parentRect.top,
        width: el.offsetWidth,
        height: el.offsetHeight,
        parentWidth: parentRect.width,
        parentHeight: parentRect.height,
        w1,
        w2,
        maxWidth: maxW
      });
    };

    // Wait for fonts + fadeIn animation to finish
    const timer = setTimeout(measure, 0);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measure);
    };
  }, [ref, line1Ref, line2Ref]);

  return rect;
}

const Hero = ({ heroProgress = 0, phase2Progress = 0, phase3Progress = 0 }) => {
  const textRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const rect = useTextRect(textRef, line1Ref, line2Ref);

  // Use easeOutCubic for smoother feel
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const easedProgress = ease(heroProgress);
  const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const easedPhase2 = easeInOutCubic(phase2Progress);

  // Compute inline styles that interpolate from the original position
  // to centered + smaller as heroProgress goes 0 → 1
  const getTextStyle = () => {
    if (!rect || heroProgress <= 0) {
      return { willChange: 'transform' };
    }

    // Where the text center is right now
    const currentCenterX = rect.x + rect.width / 2;
    const currentCenterY = rect.y + rect.height / 2;

    // Phase 1 Target (Middle of Viewport)
    const targetCenterX = rect.parentWidth / 2;
    const targetCenterY = rect.parentHeight / 2;

    // Phase 2 Target (Top of Viewport, below header)
    // Adjusted from 0.15 to 0.25 to stay comfortably below the header
    const phase2TargetY = rect.parentHeight * 0.30;

    // Base Translation for Phase 1
    const baseTranslateX = (targetCenterX - currentCenterX) * easedProgress;
    const baseTranslateY = (targetCenterY - currentCenterY) * easedProgress;
    
    // Additional Translation for Phase 2
    const phase2TranslateY = (phase2TargetY - targetCenterY) * easedPhase2;

    const smoothTranslateX = baseTranslateX;
    const smoothTranslateY = baseTranslateY + phase2TranslateY;
    const smoothScale = 1 - easedProgress * 0.3;

    return {
      transform: `translate(${smoothTranslateX}px, ${smoothTranslateY}px) scale(${smoothScale})`,
      willChange: 'transform',
      transformOrigin: 'center center',
    };
  };

  const getSubtextStyle = () => {
    if (!rect || heroProgress <= 0) {
      return { willChange: 'transform, opacity' };
    }

    // Fly out to the right (e.g., move 100vw across) and fade out
    const translateX = easedProgress * 1500; // Move 1500px to the right
    const opacity = 1 - easedProgress * 1.5; // Fade out faster than the move

    return {
      transform: `translateX(${translateX}px)`,
      opacity: Math.max(0, opacity),
      willChange: 'transform, opacity',
    };
  };

  const getLineStyle = (index) => {
    if (!rect || heroProgress <= 0) {
      return { willChange: 'transform' };
    }
    const w = index === 0 ? rect.w1 : rect.w2;
    const maxW = rect.maxWidth;
    if (w === 0 || maxW === 0) return { willChange: 'transform' };

    // Shift line from left edge (0) to center of the max-width container ((maxW - w) / 2)
    const shiftX = ((maxW - w) / 2) * easedProgress;
    return {
      transform: `translateX(${shiftX}px)`,
      willChange: 'transform',
    };
  };

  return (
    <div className="hero-scroll-container relative" style={{ height: '400vh' }}>
      <section className="hero-sticky sticky top-0 h-screen flex items-center overflow-hidden">

        <div className="max-w-[1400px] mx-auto px-6 w-full relative z-20 flex flex-col items-start justify-center font-display pointer-events-none min-h-[80vh]">
          <h1
            ref={textRef}
            style={getTextStyle()}
            className="text-[28vw] sm:text-[25vw] md:text-[22vw] lg:text-[20vw] font-black leading-[1.1] tracking-[-0.04em] text-slate-900 dark:text-white drop-shadow-2xl transition-colors opacity-100 text-left font-['IBM_Plex_Sans'] uppercase z-10"
          >
            <span ref={line1Ref} className="inline-block relative z-10" style={getLineStyle(0)}>
              {/* First large circle (visual height of capitals, placed further to the RIGHT side of JAKOB) */}
              <span className="absolute top-1/2 -right-[1.5em] -translate-y-1/2 h-[0.8em] w-[0.8em] rounded-full z-[-1]" style={{ backgroundColor: '#0775B8' }}></span>
              
              JAKOB
              
              {/* Small dot (next to JAKOB text like ° degree sign, nudged down to align with top of characters) */}
              <span className="absolute top-[0.1em] -right-[0.2em] h-[0.15em] w-[0.15em] rounded-full" style={{ backgroundColor: '#0775B8' }}></span>
            </span>
            <br />
            <span ref={line2Ref} className="inline-block relative z-10" style={getLineStyle(1)}>
              <span className="text-gradient">ZÖBL</span>
              {/* Subtext description - scaled up, bolded, and flies out on scroll */}
              <span 
                className="absolute top-full left-0 md:left-full md:top-1/2 mt-[0.5em] md:mt-0 md:ml-[3em] text-[0.08em] lg:text-[0.1em] font-bold text-slate-900 dark:text-white normal-case font-['IBM_Plex_Sans'] tracking-tight whitespace-nowrap -webkit-text-fill-color-initial pointer-events-auto"
                style={getSubtextStyle()}
              >
                B.Sc. Computer Science Student at TUM
              </span>
            </span>
          </h1>
        </div>

        {/* The TechMarquee element embedded inside the sticky container so it stays centered */}
        <TechMarquee phase2Progress={phase2Progress} phase3Progress={phase3Progress} />

      </section>
    </div>
  );
};

export default Hero;
