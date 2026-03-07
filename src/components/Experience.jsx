import React from 'react';

const ExperienceItem = ({ role, company, period, duration, description, colorClass, dotColorClass, bgHoverClass }) => (
  <div className="reveal relative mb-16 md:grid md:grid-cols-2 md:gap-12 items-center group">
    <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 ${dotColorClass} bg-slate-50 dark:bg-[#0a0a0a] -translate-x-[9px] md:-translate-x-[9px] z-10 transition-colors`}></div>
    
    <div className="hidden md:block text-right">
      <h3 className={`text-xl font-bold text-slate-900 dark:text-white group-hover:${colorClass} transition-colors font-display`}>{role}</h3>
      <p className="text-slate-500 dark:text-slate-400 font-medium">{company}</p>
    </div>
    
    <div className="ml-8 md:ml-0 md:col-start-2">
      <div className={`glass-panel p-6 rounded-2xl hover:bg-white dark:hover:bg-slate-800/30 transition-colors border-slate-200 dark:border-slate-800/60`}>
        <div className="md:hidden mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{role}</h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium">{company}</p>
        </div>
        <span className={`text-xs font-mono mb-3 block tracking-wide ${colorClass}`}>
          {period} · {duration}
        </span>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const ExperienceItemRTL = ({ role, company, period, duration, description, colorClass, dotColorClass }) => (
  <div className="reveal relative mb-16 md:grid md:grid-cols-2 md:gap-12 items-center group">
    <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 ${dotColorClass} bg-slate-50 dark:bg-[#0a0a0a] -translate-x-[9px] md:-translate-x-[9px] z-10 transition-colors`}></div>
    
    <div className="ml-8 md:ml-0 md:text-right">
      <div className="glass-panel p-6 rounded-2xl hover:bg-white dark:hover:bg-slate-800/30 transition-colors border-slate-200 dark:border-slate-800/60">
        <div className="md:hidden mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{role}</h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium">{company}</p>
        </div>
        <span className={`text-xs font-mono mb-3 block tracking-wide ${colorClass}`}>
          {period} · {duration}
        </span>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
    
    <div className="hidden md:block">
      <h3 className={`text-xl font-bold text-slate-900 dark:text-white group-hover:${colorClass} transition-colors font-display`}>{role}</h3>
      <p className="text-slate-500 dark:text-slate-400 font-medium">{company}</p>
    </div>
  </div>
);


const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50 dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900 dark:text-white">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 md:-ml-[0.5px]"></div>
          
          <ExperienceItem 
            role="Software Engineer (Working Student)"
            company="Hensoldt AG"
            period="2024 – 2025"
            duration="9 MONTHS"
            description="Backend C++ and Python development in the area of Drone-Defense. Built robust systems for real-time threat detection and response."
            colorClass="text-primary"
            dotColorClass="border-primary group-hover:bg-primary shadow-[0_0_10px_rgba(0,101,189,0.5)]"
          />

          <ExperienceItemRTL 
            role="Content Management"
            company="FH OÖ Management GmbH"
            period="2023"
            duration="2 MONTHS"
            description="Managed the conversion from Typo3 to CraftCMS, migrating content and ensuring seamless transition."
            colorClass="text-accent"
            dotColorClass="border-accent group-hover:bg-accent shadow-[0_0_10px_rgba(0,196,214,0.5)]"
          />

          <div className="reveal relative md:grid md:grid-cols-2 md:gap-12 items-center group">
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-slate-400 dark:border-slate-500 bg-slate-50 dark:bg-[#0a0a0a] -translate-x-[9px] md:-translate-x-[9px] z-10 group-hover:bg-slate-400 dark:group-hover:bg-slate-500 transition-colors"></div>
            
            <div className="hidden md:block text-right">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors font-display">Civil Service</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Lebenshilfe Wels</p>
            </div>
            
            <div className="ml-8 md:ml-0 md:col-start-2">
              <div className="glass-panel p-6 rounded-2xl hover:bg-white dark:hover:bg-slate-800/30 transition-colors border-slate-200 dark:border-slate-800/60">
                <div className="md:hidden mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Civil Service</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Lebenshilfe Wels</p>
                </div>
                <span className="text-xs font-mono text-slate-500 mb-3 block tracking-wide">
                  2022 – 2023 · 9 MONTHS
                </span>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Supported people with various mental impairments in a day care center. Developed empathy and communication skills.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
