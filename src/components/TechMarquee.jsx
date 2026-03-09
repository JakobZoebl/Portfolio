import React from 'react';

const TechMarquee = ({ phase2Progress = 0, phase3Progress = 0 }) => {
  // Easing function for smoother movement
  const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const ease2 = easeInOutCubic(phase2Progress);
  const ease3 = easeInOutCubic(phase3Progress);

  // Top stripe enters from RIGHT (100%), exits to LEFT (-100%)
  const topTranslateX = (1 - ease2) * 100 - ease3 * 100;

  // Bottom stripe enters from LEFT (-100%), exits to RIGHT (100%)
  const bottomTranslateX = (ease2 - 1) * 100 + ease3 * 100;

  return (
    <div className="absolute top-[80%] -translate-y-1/2 left-0 w-full flex flex-col gap-6 z-30 pointer-events-none">
      <div 
        className="w-full bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/50 backdrop-blur-sm py-8 overflow-hidden transition-colors"
        style={{ transform: `translateX(${topTranslateX}%)`, willChange: 'transform' }}
      >
        <div className="flex gap-16 items-center justify-center text-slate-500 dark:text-white font-bold font-display text-lg tracking-wider opacity-60 dark:opacity-90 whitespace-nowrap flex-wrap px-4">
          <span>PYTHON</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
          <span>C++</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
          <span>JAVA</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
          <span>C</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
          <span>REACT</span>
        </div>
      </div>
      <div 
        className="w-full bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/50 backdrop-blur-sm py-8 overflow-hidden transition-colors"
        style={{ transform: `translateX(${bottomTranslateX}%)`, willChange: 'transform' }}
      >
        <div className="flex gap-16 items-center justify-center text-slate-500 dark:text-white font-bold font-display text-lg tracking-wider opacity-60 dark:opacity-90 whitespace-nowrap flex-wrap px-4">
          <span>QT</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
          <span>TYPESCRIPT</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
          <span>SCALA</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
          <span>SPARK</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
          <span>OCAML</span>
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
