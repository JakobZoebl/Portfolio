import React from 'react';

const EducationCard = ({ delayClass, icon, bgClass, textClass, badgeText, title, subtitle, description }) => (
  <div className={`reveal ${delayClass} rounded-2xl p-8 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-all group relative overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none`}>
    <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
      <span className="material-symbols-outlined text-8xl">{icon}</span>
    </div>
    <div className="relative z-10">
      <span className={`inline-block px-3 py-1 rounded-full ${bgClass} ${textClass} text-xs font-bold uppercase tracking-wider mb-4`}>
        {badgeText}
      </span>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 mb-3">{subtitle}</p>
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="parallax-slide py-24 px-6 bg-slate-100 dark:bg-[#2C2B2B] transition-colors">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900 dark:text-white">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <EducationCard 
            delayClass="reveal-delay-1"
            icon="flight"
            bgClass="bg-accent/20"
            textClass="text-accent"
            badgeText="ERASMUS+ Exchange"
            title="TU Delft"
            subtitle="Netherlands · 2025 – 2026"
            description="Exchange semester in the 5th semester of B.Sc. Computer Science. Focus on NLP and advanced CS courses."
          />
          <EducationCard 
            delayClass="reveal-delay-2"
            icon="school"
            bgClass="bg-primary/20"
            textClass="text-primary"
            badgeText="Bachelor's Degree"
            title="TU Munich (TUM)"
            subtitle="Germany · 2023 – 2026 · GPA: 2.1"
            description="B.Sc. Computer Science. Strong foundations in algorithms, systems, AI, and software engineering."
          />
          <EducationCard 
            delayClass="reveal-delay-3"
            icon="history_edu"
            bgClass="bg-purple-500/20"
            textClass="text-purple-400"
            badgeText="Secondary School"
            title="Franziskanerinnen Wels"
            subtitle="Austria · 2014 – 2022 · A-Levels: 1.14"
            description="Pre-Scientific Paper on N.E.A.T. (Grade 1.0). Cambridge C2 English. Informatics elective (3 yrs). French (4 yrs)."
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
