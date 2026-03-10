import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-[#0a0a0a] dark:to-[#040508] transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[800px] mx-auto text-center relative z-10 reveal">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight font-display text-slate-900 dark:text-white">Let's Build Something Together</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto font-light">
          I'm currently looking for internship and working student opportunities. Let's connect!
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
    </section>
  );
};

export default Contact;
