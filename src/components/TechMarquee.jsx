import React from 'react';

const TechMarquee = () => {
  return (
    <div className="w-full bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/50 backdrop-blur-sm py-8 overflow-hidden transition-colors">
      <div className="flex gap-16 items-center justify-center text-slate-500 font-bold font-display text-lg tracking-wider opacity-60 whitespace-nowrap flex-wrap px-4">
        <span>PYTHON</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
        <span>C++</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
        <span>JAVA</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
        <span>PYTORCH</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
        <span>DOCKER</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
        <span>NEXT.JS</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
        <span>TYPESCRIPT</span><span className="w-1.5 h-1.5 rounded-full bg-primary/50 hidden sm:block"></span>
        <span>ROS2</span>
      </div>
    </div>
  );
};

export default TechMarquee;
