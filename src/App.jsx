import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';

import Footer from './components/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  const { navbarProgress, heroProgress, phase2Progress, phase3Progress, scrollY, animationEnd } = useScrollAnimation();


  useEffect(() => {
    // Scroll Reveal with IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col z-0">
      {/* Shared Continuous Background Plane */}
      <div
        className="fixed inset-0 pointer-events-none z-[-2]"
      >
        <div className="w-full h-full bg-white dark:bg-black transition-colors duration-300" />
      </div>

      {/* Global Background Layer */}
      <div
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{
          transform: `translateY(${-Math.max(0, scrollY - animationEnd) * 0.2}px)`
        }}
      >
        {/* Graffiti spray background elements */}
        {/* TUM Blue blurred dot (top right) */}
        <div className="tum-blue-spray"></div>

        {/* Diagonal blurred white stroke */}
        <div className="white-diagonal-stroke"></div>
      </div>
      
      <Navbar navbarProgress={navbarProgress} />
      <Hero heroProgress={heroProgress} phase2Progress={phase2Progress} phase3Progress={phase3Progress} />
      {/* Parallax group 1: About sticks, Experience slides over */}
      <div className="parallax-group">
        <About />
        <Experience />
      </div>
      {/* Parallax group 2: Projects sticks, Education slides over */}
      <div className="parallax-group">
        <Projects />
        <Education />
      </div>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
