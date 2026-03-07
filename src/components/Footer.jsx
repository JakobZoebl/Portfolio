import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-[#050505] transition-colors py-12 px-6 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-slate-800 dark:text-slate-300 font-bold tracking-tight">
            Jakob Zöbl
          </span>
        </div>
        
        <div className="flex gap-8 text-slate-500 dark:text-slate-400">
          <a className="hover:text-primary transition-colors" href="mailto:jakob.zoebl1@gmail.com">Email</a>
          <a className="hover:text-primary transition-colors" href="tel:+4367763971639">Phone</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
