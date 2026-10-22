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
            I'm a <strong className="text-slate-900 dark:text-white">Master's Computer Science student</strong> at the <strong className="text-slate-900 dark:text-white">Technical University of Munich (TUM)</strong>, where I recently graduated from my B.Sc. in Computer Science with a GPA of <strong className="text-slate-900 dark:text-white">1.9</strong> and gained global perspective during my ERASMUS+ exchange at <strong className="text-slate-900 dark:text-white">TU Delft</strong> in the Netherlands.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            I wrote my Bachelor's thesis on the <strong className="text-slate-900 dark:text-white">Graphical Perception of Multimodal Large Language Models</strong>, achieving a grade of <strong className="text-slate-900 dark:text-white">1.0</strong> (best possible grade). I always aim to challenge myself and work on complex problems, whether by competing in hackathons, conducting ambitious academic research, or taking on impactful working student positions.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Currently, I am working at <strong className="text-slate-900 dark:text-white">BMW AG</strong> in <strong className="text-slate-900 dark:text-white">Generative AI</strong> for retailer applications, building upon the valuable real-world experience I gained working as a Software Engineer at <strong className="text-slate-900 dark:text-white">Hensoldt AG</strong>.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            My technical passions lie in <strong className="text-slate-900 dark:text-white">GenAI, Machine Learning</strong>, <strong className="text-slate-900 dark:text-white">Natural Language Processing</strong>, and scalable cloud software infrastructure.
          </p>

        </div>

        <div className="reveal reveal-delay-2">
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="1.9" label="B.Sc. GPA at TUM" />
            <StatCard value="1.14" label="A-Levels GPA" />
            <StatCard value="C2" label="English (CAE)" />
            <StatCard value="6+ years" label="Programming Experience" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
