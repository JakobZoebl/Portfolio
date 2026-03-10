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
    <section id="skills" className="py-32 px-6 bg-transparent transition-colors">
      <div className="max-w-[1200px] mx-auto">

        {/* ── Skills Header ── */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900 dark:text-white">Skills & Languages</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        {/* ── Skill Tag Grids ── */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="reveal">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              <SkillTag name="Python" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="C++" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="C" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="Java" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="TypeScript" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="JavaScript" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="Scala" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="Ocaml" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="SQL" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
              <SkillTag name="HTML/CSS" hoverClass="hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/10" />
            </div>
          </div>
          
          <div className="reveal reveal-delay-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Tools & Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              <SkillTag name="React" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Tailwind" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Docker" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Git" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Next.js" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Node.js" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Latex" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Supabase" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Vercel" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="D3" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="REST" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Spark" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Flink" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Scikit-Learn" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
              <SkillTag name="Numpy" hoverClass="hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/10" />
            </div>
          </div>
        </div>

        {/* ── Separator ── */}
        <div className="w-16 h-px bg-slate-300 dark:bg-slate-700 mx-auto mb-24"></div>

        {/* ── Contact CTA ── */}
        <div id="contact" className="max-w-[800px] mx-auto text-center reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight font-display text-slate-900 dark:text-white">Let's Build Something Together</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto font-light">
            I'm currently looking for working student and internship opportunities. Let's connect!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              className="h-14 px-8 w-full sm:w-auto rounded-lg bg-primary text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-dark hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,101,189,0.3)]" 
              href="mailto:jakob.zoebl1@gmail.com"
            >
              <span className="material-symbols-outlined">mail</span> Get In Touch
            </a>
            <a 
              className="h-14 px-8 w-full sm:w-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all hover:border-slate-300 dark:hover:border-slate-500" 
              href="CV2026_english.pdf" 
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined">download</span> Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
