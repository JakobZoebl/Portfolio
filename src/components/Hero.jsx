import React, { useRef, useEffect, useState } from "react";


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
      
      const w1 = line1Ref.current ? line1Ref.current.offsetWidth : 0;
      const w2 = line2Ref.current ? line2Ref.current.offsetWidth : 0;
      const maxW = Math.max(w1, w2, el.offsetWidth);

      setRect({
        // Position relative to the sticky container
        x: el.offsetLeft,
        y: el.offsetTop,
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
    const timer = setTimeout(measure, 1500);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measure);
    };
  }, [ref, line1Ref, line2Ref]);

  return rect;
}

const Hero = ({ heroProgress = 0 }) => {
  const textRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const rect = useTextRect(textRef, line1Ref, line2Ref);

  // Use easeOutCubic for smoother feel
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const easedProgress = ease(heroProgress);

  // Compute inline styles that interpolate from the original position
  // to centered + smaller as heroProgress goes 0 → 1
  const getTextStyle = () => {
    if (!rect || heroProgress <= 0) {
      return { willChange: 'transform' };
    }

    // Where the text center is right now
    const currentCenterX = rect.x + rect.width / 2;
    const currentCenterY = rect.y + rect.height / 2;

    // Where we want the text center to be (middle of viewport)
    const targetCenterX = rect.parentWidth / 2;
    const targetCenterY = rect.parentHeight / 2;

    const smoothTranslateX = (targetCenterX - currentCenterX) * easedProgress;
    const smoothTranslateY = (targetCenterY - currentCenterY) * easedProgress;
    const smoothScale = 1 - easedProgress * 0.3;

    return {
      transform: `translate(${smoothTranslateX}px, ${smoothTranslateY}px) scale(${smoothScale})`,
      willChange: 'transform',
      transformOrigin: 'center center',
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
    <div className="hero-scroll-container relative" style={{ height: '300vh' }}>
      <section className="hero-sticky sticky top-0 h-screen flex items-center overflow-hidden">

        <div className="max-w-[1400px] mx-auto px-6 w-full relative z-20 flex flex-col items-start justify-center font-display pointer-events-none min-h-[80vh]">
          <h1
            ref={textRef}
            style={getTextStyle()}
            className="text-[35vw] sm:text-[31vw] md:text-[28vw] lg:text-[25vw] font-black leading-[1.1] tracking-[-0.04em] text-slate-900 dark:text-white drop-shadow-2xl transition-colors opacity-0 text-left animate-[fadeIn_2s_ease-out_1s_forwards] font-['IBM_Plex_Sans'] uppercase"
          >
            <span ref={line1Ref} className="inline-block" style={getLineStyle(0)}>JAKOB</span>
            <br />
            <span ref={line2Ref} className="text-gradient inline-block" style={getLineStyle(1)}>ZÖBL</span>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Hero;
