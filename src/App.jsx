import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  const { navbarProgress, heroProgress } = useScrollAnimation();

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
      {/* Global Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* Angled background shape stretching down */}
        <div className="background-angled-line"></div>
        
        {/* Blue dot at the top right, slightly lower */}
        <div className="background-blue-dot"></div>
      </div>
      
      <Navbar navbarProgress={navbarProgress} />
      <Hero heroProgress={heroProgress} />
      <TechMarquee />
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
