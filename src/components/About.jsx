import React from 'react';
import useStickyBottom from '../hooks/useStickyBottom';

const StatCard = ({ value, label }) => (
  <div className="glass-panel rounded-2xl p-6 text-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
    <div className="text-3xl font-bold text-slate-900 dark:text-white font-display mb-1">{value}</div>
    <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
  </div>
);

const Pill = ({ icon, text }) => (
  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
    {icon} {text}
  </span>
);

const About = () => {
  const { ref, topOffset } = useStickyBottom();

  return (
    <section 
      ref={ref}
      id="about" 
      className="parallax-sticky py-24 px-6 bg-transparent transition-colors min-h-[100lvh] flex flex-col justify-center"
      style={{ top: `${topOffset}px` }}
    >
      <div className="max-w-[1200px] w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-slate-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            I'm a Computer Science student at the <strong className="text-slate-900 dark:text-white">Technical University of Munich (TUM)</strong>, currently on an ERASMUS+ exchange at <strong className="text-slate-900 dark:text-white">TU Delft</strong> in the Netherlands.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            With hands-on experience as a Software Engineer at <strong className="text-slate-900 dark:text-white">Hensoldt AG</strong> working on drone defense systems in C++ and Python, I combine academic rigor with real-world engineering.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            My interests span <strong className="text-slate-900 dark:text-white">AI & Machine Learning</strong>, <strong className="text-slate-900 dark:text-white">Natural Language Processing</strong>, <strong className="text-slate-900 dark:text-white">Computer Vision</strong>, and building scalable software systems. I'm also a multiple hackathon winner.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Pill icon="🇦🇹" text="Austrian" />
            <Pill icon="🇩🇪" text="Munich / 🇳🇱 Delft" />
            <Pill icon="🏋️" text="Weightlifting" />
            <Pill icon="🏃" text="Running" />
            <Pill icon="✈️" text="Traveling" />
          </div>
        </div>
        
        <div className="reveal reveal-delay-2">
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="2.1" label="GPA at TUM" />
            <StatCard value="1.14" label="A-Levels GPA" />
            <StatCard value="C2" label="English (Cambridge)" />
            <StatCard value="9+" label="Tech Stack" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
