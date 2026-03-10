import React, { useState, useEffect } from 'react';

const Navbar = ({ navbarProgress = 1 }) => {
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

  // Navbar slides in from above: translateY(-100%) → translateY(0)
  const navbarStyle = {
    transform: `translateY(${-100 + navbarProgress * 100}%)`,
    opacity: navbarProgress,
    willChange: 'transform, opacity',
  };

  return (
    <header
      id="navbar"
      className="fixed top-4 left-4 right-4 md:top-5 md:left-6 md:right-6 z-50 transition-none glass-panel rounded-2xl"
      style={navbarStyle}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold font-display tracking-tight text-slate-400 dark:text-white">
            Jakob Zöbl
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#about">About</a>
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#experience">Experience</a>
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#education">Education</a>
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#skills">Skills</a>
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
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-400 hover:text-primary transition-colors py-2" href="#skills">Skills</a>
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-400 hover:text-primary transition-colors py-2" href="#contact">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
