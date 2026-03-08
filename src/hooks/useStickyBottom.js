import { useEffect, useRef, useState } from 'react';

export default function useStickyBottom() {
  const ref = useRef(null);
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        // Lock at top if shorter than viewport, or lock at bottom if taller.
        setTopOffset(Math.min(0, viewportHeight - height));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Also re-calculate if content changes height dynamically
    const observer = new ResizeObserver(handleResize);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return { ref, topOffset };
}
