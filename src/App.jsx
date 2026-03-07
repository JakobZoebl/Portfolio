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

function App() {
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
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
