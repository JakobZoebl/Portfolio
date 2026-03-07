import React from 'react';

const ProjectCard = ({ year, title, description, icon, iconColorClass, tags, delayClass, borderHoverClass, textHoverClass }) => (
  <div className={`reveal ${delayClass} group flex flex-col bg-slate-50 dark:bg-[#111111] rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg ${borderHoverClass} hover:-translate-y-1 transition-all duration-300`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`size-10 rounded-lg ${iconColorClass} flex items-center justify-center`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <span className="text-xs font-mono text-slate-500">{year}</span>
    </div>
    <h3 className={`text-lg font-bold text-slate-900 dark:text-white mb-2 ${textHoverClass} transition-colors font-display`}>{title}</h3>
    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">{description}</p>
    <div className="flex gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/50 flex-wrap">
      {tags.map((tag, i) => (
        <React.Fragment key={i}>
          <span className="text-xs text-slate-500 font-medium">{tag}</span>
          {i < tags.length - 1 && <span className="text-xs text-slate-500">•</span>}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-black transition-colors">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display text-slate-900 dark:text-white">Projects & Hackathons</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-light">Competition wins and personal builds.</p>
          </div>
        </div>
        
        {/* Featured Project */}
        <div className="reveal group rounded-2xl bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300 mb-8">
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
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display">F1 Prediction Application</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">A live preview of my Formula 1 prediction application. Built to forecast race outcomes and analyze performance using machine learning models and dynamic frontend charts. Try it out right here!</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Python</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Machine Learning</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Full Stack</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Web</span>
              </div>
              <a href="https://f1prediction.live" target="_blank" rel="noreferrer" className="text-xs font-mono text-primary hover:underline w-max">2026 · f1prediction.live ↗</a>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            year="2025" title="Home Price Predictor" 
            description="Interhyp Challenge at HackaTUM 2025. Built a home price prediction and recommendation system."
            icon="home" iconColorClass="bg-blue-500/10 text-blue-500"
            delayClass="reveal-delay-1" textHoverClass="group-hover:text-primary" borderHoverClass="hover:border-primary/30"
            tags={["Python", "ML", "HackaTUM"]}
          />
          <ProjectCard 
            year="2025" title="Optiver Trading Bot" 
            description="Developed a competitive trading bot over three days at TU Delft's Optiver Hackathon."
            icon="trending_up" iconColorClass="bg-cyan-500/10 text-cyan-500"
            delayClass="reveal-delay-2" textHoverClass="group-hover:text-accent" borderHoverClass="hover:border-accent/30"
            tags={["Python", "Trading", "Algorithms"]}
          />
          <ProjectCard 
            year="2025" title="Demining Management Software" 
            description="TUM Venture Labs Challenge at TUM Science-Hackathon. Software for managing humanitarian demining operations."
            icon="bomb" iconColorClass="bg-purple-500/10 text-purple-500"
            delayClass="reveal-delay-3" textHoverClass="group-hover:text-purple-400" borderHoverClass="hover:border-purple-400/30"
            tags={["Full Stack", "Hackathon"]}
          />
          <ProjectCard 
            year="2024" title="Automatic Hedge-Trading Bot" 
            description="Optiver Challenge at HackaTUM 2024. Automated hedge trading strategies with real-time market data."
            icon="swap_horiz" iconColorClass="bg-green-500/10 text-green-500"
            delayClass="reveal-delay-1" textHoverClass="group-hover:text-green-400" borderHoverClass="hover:border-green-400/30"
            tags={["Python", "Finance"]}
          />
          <ProjectCard 
            year="2023" title="Landscaping Website" 
            description="HTML/CSS and CMS design for a local landscaping company. Full web development and deployment."
            icon="web" iconColorClass="bg-orange-500/10 text-orange-500"
            delayClass="reveal-delay-2" textHoverClass="group-hover:text-orange-400" borderHoverClass="hover:border-orange-400/30"
            tags={["HTML/CSS", "CMS"]}
          />
          <ProjectCard 
            year="2022" title="N.E.A.T. Application" 
            description="Neural Network development using Genetic Algorithms (N.E.A.T.). Pre-Scientific Paper — Grade: 1.0."
            icon="neurology" iconColorClass="bg-red-500/10 text-red-500"
            delayClass="reveal-delay-3" textHoverClass="group-hover:text-red-400" borderHoverClass="hover:border-red-400/30"
            tags={["Neural Networks", "Genetic Algorithms"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
