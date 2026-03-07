import React from 'react';

const SkillTag = ({ name, hoverClass }) => (
  <span className={`px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-medium ${hoverClass} hover:bg-opacity-10 dark:hover:bg-opacity-10 transition-all cursor-default`}>
    {name}
  </span>
);

const LanguageCard = ({ delayClass, flag, name, level }) => (
  <div className={`reveal ${delayClass} glass-panel rounded-2xl p-6 text-center`}>
    <div className="text-2xl mb-2">{flag}</div>
    <div className="text-lg font-bold text-slate-900 dark:text-white">{name}</div>
    <div className="text-sm text-slate-500 dark:text-slate-400">{level}</div>
  </div>
);

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black transition-colors">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900 dark:text-white">Skills & Languages</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="reveal">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              <SkillTag name="Python" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="C++" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="Java" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="TypeScript" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="JavaScript" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="R" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="SQL" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="HTML/CSS" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
            </div>
          </div>
          
          <div className="reveal reveal-delay-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Tools & Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              <SkillTag name="PyTorch" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Scikit-Learn" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Docker" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Git" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Next.js" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Node.js" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="ROS2" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="MongoDB" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="LaTeX" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <LanguageCard delayClass="reveal-delay-1" flag="🇩🇪" name="German" level="Native" />
          <LanguageCard delayClass="reveal-delay-2" flag="🇬🇧" name="English" level="C2 Proficiency (Cambridge)" />
          <LanguageCard delayClass="reveal-delay-3" flag="🇫🇷" name="French" level="B2 Intermediate" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
