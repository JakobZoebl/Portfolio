import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <header id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-panel border-b-0">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(0,101,189,0.2)]">
            <span className="material-symbols-outlined text-2xl">code</span>
          </div>
          <span className="text-xl font-bold font-display tracking-tight text-white">
            Jakob<span className="text-primary">.dev</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#about">About</a>
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#experience">Experience</a>
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#education">Education</a>
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button 
            id="theme-toggle" 
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {isDark ? (
              <span className="material-symbols-outlined">light_mode</span>
            ) : (
              <span className="material-symbols-outlined">dark_mode</span>
            )}
          </button>
          <a href="CV2026_english.pdf" target="_blank" rel="noreferrer" className="hidden sm:flex h-10 px-6 items-center justify-center rounded-lg border border-primary/30 text-slate-800 dark:text-white font-semibold text-sm hover:border-primary hover:bg-primary/10 transition-all duration-300">
            Resume
          </a>
          <button 
            id="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 rounded-lg"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden px-6 pb-4">
          <nav className="flex flex-col gap-3">
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-400 hover:text-primary transition-colors py-2" href="#about">About</a>
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-400 hover:text-primary transition-colors py-2" href="#experience">Experience</a>
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-400 hover:text-primary transition-colors py-2" href="#projects">Projects</a>
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-400 hover:text-primary transition-colors py-2" href="#education">Education</a>
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-400 hover:text-primary transition-colors py-2" href="#contact">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
