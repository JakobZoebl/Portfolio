import React from 'react';

const ProjectCard = ({ year, title, description, icon, iconColorClass, tags, delayClass, borderHoverClass, textHoverClass, url, isDownload, downloadName }) => {
  const CardWrapper = url ? 'a' : 'div';
  const wrapperProps = url ? { 
    href: url, 
    target: "_blank", 
    rel: "noreferrer",
    ...(isDownload ? { download: downloadName || true } : {})
  } : {};

  return (
    <CardWrapper 
      {...wrapperProps}
      className={`reveal ${delayClass} group flex flex-col bg-slate-50 dark:bg-[#111111] rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg ${borderHoverClass} hover:-translate-y-1 transition-all duration-300 ${url ? 'cursor-pointer' : ''}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`size-10 rounded-lg ${iconColorClass} flex items-center justify-center`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className="text-xs font-mono text-slate-500">{year}</span>
      </div>
      
      <h3 className={`text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5 ${textHoverClass} transition-colors font-display`}>
        {title}
        {url && (
          <span className="text-sm opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            {isDownload ? '↓' : '↗'}
          </span>
        )}
      </h3>
      
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">{description}</p>
      <div className="flex gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/50 flex-wrap">
        {tags.map((tag, i) => (
          <React.Fragment key={i}>
            <span className="text-xs text-slate-500 font-medium">{tag}</span>
            {i < tags.length - 1 && <span className="text-xs text-slate-500">•</span>}
          </React.Fragment>
        ))}
      </div>
    </CardWrapper>
  );
};

import useStickyBottom from '../hooks/useStickyBottom';

const Projects = () => {
  const { ref, topOffset } = useStickyBottom();

  return (
    <section 
      ref={ref}
      id="projects" 
      className="parallax-sticky py-24 px-6 bg-transparent transition-colors"
      style={{ top: `${topOffset}px` }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display text-slate-900 dark:text-white">Projects & Hackathons</h2>
            <a 
              href="https://github.com/JakobZoebl" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 text-lg font-light hover:text-primary dark:hover:text-white transition-colors group/gh"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Personal Github</span>
              <span className="text-sm opacity-50 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 transition-transform duration-200">↗</span>
            </a>
          </div>
        </div>
        
        {/* Featured Project */}
        <a 
          href="https://f1prediction.live" 
          target="_blank" 
          rel="noreferrer" 
          className="reveal block featured-group rounded-2xl bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300 mb-8 cursor-pointer"
        >
          <div className="grid lg:grid-cols-2">
            <div className="bg-slate-100 dark:bg-slate-900/50 aspect-[16/10] lg:aspect-auto relative overflow-hidden group/iframe border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <iframe 
                src="https://f1prediction.live" 
                className="absolute top-0 left-0 w-[calc(400%+80px)] h-[400%] scale-[0.25] sm:w-[calc(300%+60px)] sm:h-[300%] sm:scale-[0.334] md:w-[calc(200%+40px)] md:h-[200%] md:scale-[0.5] origin-top-left border-0 pointer-events-none group-hover/iframe:pointer-events-auto transition-opacity" 
                title="F1 Prediction Live Preview" 
                loading="lazy"
              ></iframe>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-primary/20 text-primary">Featured</span>
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Live Preview</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display featured-group-hover:text-primary transition-colors">F1 Prediction Application</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">A live preview of my Formula 1 prediction application. Built to forecast race outcomes and analyze performance using machine learning models and dynamic frontend charts. Try it out right here!</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Python</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Machine Learning</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Full Stack</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Web</span>
              </div>
              <span className="text-xs font-mono text-primary hover:underline w-max">2026 · f1prediction.live ↗</span>
            </div>
          </div>
        </a>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            year="2025" title="Home Price Predictor" 
            description="Interhyp Challenge at HackaTUM 2025. Built a home price prediction and recommendation system."
            icon="home" iconColorClass="bg-blue-500/10 text-blue-500"
            delayClass="reveal-delay-1" textHoverClass="group-hover:text-primary" borderHoverClass="hover:border-primary/30"
            tags={["Python", "Regression", "HackaTUM"]}
          />
          <ProjectCard 
            year="2025/2026" title="Steam Data Visualization" 
            description="Interactive D3.js dashboard visualizing Steam's catalog data, based on a high-dimensional pre-processed dataset."
            icon="analytics" iconColorClass="bg-cyan-500/10 text-cyan-500"
            delayClass="reveal-delay-2" textHoverClass="group-hover:text-accent" borderHoverClass="hover:border-accent/30"
            tags={["D3", "JavaScript", "Visualization"]}
            url="https://data-visualization-one-orcin.vercel.app/"
          />
          <ProjectCard 
            year="2025" title="Demining Management Software" 
            description="TUM Venture Labs Challenge at TUM Science-Hackathon 2025 (TUM Venture Labs Challenge). Software for managing humanitarian demining operations."
            icon="bomb" iconColorClass="bg-purple-500/10 text-purple-500"
            delayClass="reveal-delay-3" textHoverClass="group-hover:text-purple-400" borderHoverClass="hover:border-purple-400/30"
            tags={["Full Stack", "Hackathon"]}
            url="https://demining-two.vercel.app"
          />
          <ProjectCard 
            year="2024" title="Automatic Hedge-Trading Bot" 
            description="Optiver Challenge at HackaTUM 2024. Automated hedge trading strategies with real-time market data."
            icon="swap_horiz" iconColorClass="bg-green-500/10 text-green-500"
            delayClass="reveal-delay-1" textHoverClass="group-hover:text-green-400" borderHoverClass="hover:border-green-400/30"
            tags={["Python", "Finance", "Optiver"]}
          />
          <ProjectCard 
            year="2023" title="Surveying Company Homepage" 
            description="HTML/CSS and JS Homepage for a local surveying company. Full web development and deployment."
            icon="web" iconColorClass="bg-orange-500/10 text-orange-500"
            delayClass="reveal-delay-2" textHoverClass="group-hover:text-orange-400" borderHoverClass="hover:border-orange-400/30"
            tags={["HTML", "CSS", "JavaScript"]}
            url="https://www.geounit.at/"
          />
          <ProjectCard 
            year="2025/2026" title="LLM GP Consultation Summaries" 
            description="Automatic LLM-based GP consultation summary and benchmarking system. Developed at TU Delft focusing on NLP metrics and medical data processing."
            icon="psychology" iconColorClass="bg-indigo-500/10 text-indigo-500"
            delayClass="reveal-delay-1" textHoverClass="group-hover:text-indigo-400" borderHoverClass="hover:border-indigo-400/30"
            tags={["NLP", "LLM", "Python", "Benchmarking"]}
            url="/Benchmarking_and_Generating_GP_Consultation_Summaries.pdf"
            isDownload={true}
          />
          <ProjectCard 
            year="2022" title="N.E.A.T. Application" 
            description="Neural Network development using Genetic Algorithms (N.E.A.T.) for FlappyBird as part of my Pre-Scientific Paper — Grade: 1.0."
            icon="neurology" iconColorClass="bg-red-500/10 text-red-500"
            delayClass="reveal-delay-2" textHoverClass="group-hover:text-red-400" borderHoverClass="hover:border-red-400/30"
            tags={["Neural Networks", "Genetic Algorithms"]}
            url="/Pre-Scientific-Paper.pdf"
            isDownload={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
