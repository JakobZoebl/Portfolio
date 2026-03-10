import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useStickyBottom from '../hooks/useStickyBottom';

/* ------------------------------------------------------------------ */
/*  Each card gets a side ('left' | 'right') and a stagger delay (s). */
/*  Cards slide in horizontally from far off-screen once the bento    */
/*  grid container scrolls into view, AFTER the F1 featured card.     */
/* ------------------------------------------------------------------ */

const OFFSCREEN_PX = 1800; // large enough to be fully off-screen

const ProjectCard = ({ year, title, description, icon, iconColorClass, tags, borderHoverClass, textHoverClass, url, isDownload, downloadName, className, previewNode, side, delay, triggerAnim }) => {
  const controls = useAnimation();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (triggerAnim && !hasAnimated.current) {
      hasAnimated.current = true;
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 70,
          damping: 22,
          mass: 1,
          delay,
        }
      });
    }
  }, [triggerAnim, controls, delay]);

  const CardWrapper = url ? motion.a : motion.div;
  const wrapperProps = url ? { 
    href: url, 
    target: "_blank", 
    rel: "noreferrer",
    ...(isDownload ? { download: downloadName || true } : {})
  } : {};

  const initialX = side === 'left' ? -OFFSCREEN_PX : OFFSCREEN_PX;

  return (
    <CardWrapper 
      {...wrapperProps}
      initial={{ x: initialX, opacity: 0 }}
      animate={controls}
      className={`group relative flex flex-col bg-slate-50 dark:bg-[#111111] rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg ${borderHoverClass} hover:-translate-y-1 transition-all duration-300 ${url ? 'cursor-pointer' : ''} ${className || ''} will-change-transform`}
    >
      <div className={`${previewNode && previewNode.props && previewNode.props.className && previewNode.props.className.includes('absolute') ? 'lg:w-1/2 pr-6' : 'w-full'}`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`size-10 rounded-lg shrink-0 ${iconColorClass} flex items-center justify-center`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className="text-xs font-mono text-slate-500 whitespace-nowrap ml-2">{year}</span>
      </div>
      
      {previewNode && (
        previewNode.props && previewNode.props.className && previewNode.props.className.includes('absolute') ? (
          previewNode
        ) : (
          <div className="mb-6 w-full grow flex items-center justify-center overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800/50 bg-white dark:bg-black/20">
            {previewNode}
          </div>
        )
      )}
      
      <h3 className={`text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5 ${textHoverClass} transition-colors font-display`}>
        {title}
        {url && (
          <span className="text-sm opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
            {isDownload ? '↓' : '↗'}
          </span>
        )}
      </h3>
      
      <p className={`text-sm text-slate-600 dark:text-slate-400 mb-4 ${previewNode ? '' : 'grow'}`}>{description}</p>
      
      <div className={`flex gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/50 flex-wrap ${previewNode ? 'mt-auto' : ''}`}>
        {tags.map((tag, i) => (
          <React.Fragment key={i}>
            <span className="text-xs text-slate-500 font-medium">{tag}</span>
            {i < tags.length - 1 && <span className="text-xs text-slate-500">•</span>}
          </React.Fragment>
        ))}
      </div>
      </div>
    </CardWrapper>
  );
};

const Projects = () => {
  const { ref, topOffset } = useStickyBottom();
  const gridRef = useRef(null);
  const [gridVisible, setGridVisible] = useState(false);

  // Observe when the bento grid container scrolls into view
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setGridVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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

        {/* Project Bento Grid — overflow hidden so off-screen cards don't cause scrollbars */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-6 gap-6 overflow-hidden">
          
          {/* ========== FROM LEFT ========== */}

          {/* Left Column — all 3 from left */}
          <ProjectCard 
            className="lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-1"
            side="left" delay={0.0} triggerAnim={gridVisible}
            year="2025" title="Home Price Predictor" 
            description="Interhyp Challenge at HackaTUM 2025. Built a home price prediction and recommendation system."
            icon="home" iconColorClass="bg-blue-500/10 text-blue-500"
            borderHoverClass="hover:border-primary/30" textHoverClass="group-hover:text-primary"
            tags={["Python", "Regression", "HackaTUM"]}
          />
          <ProjectCard 
            className="lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-3"
            side="left" delay={0.08} triggerAnim={gridVisible}
            year="2025" title="Demining Software" 
            description="TUM Venture Labs Challenge at TUM Science-Hackathon 2025. Software for managing humanitarian demining."
            icon="bomb" iconColorClass="bg-purple-500/10 text-purple-500"
            borderHoverClass="hover:border-purple-400/30" textHoverClass="group-hover:text-purple-400"
            tags={["Full Stack", "Hackathon"]}
            url="https://demining-two.vercel.app"
          />
          <ProjectCard 
            className="lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-5"
            side="left" delay={0.16} triggerAnim={gridVisible}
            year="2024" title="Hedge-Trading Bot" 
            description="Optiver Challenge at HackaTUM 2024. Automated hedge trading strategies with real-time market data."
            icon="swap_horiz" iconColorClass="bg-green-500/10 text-green-500"
            borderHoverClass="hover:border-green-400/30" textHoverClass="group-hover:text-green-400"
            tags={["Python", "Finance", "Optiver"]}
          />

          {/* Steam Data Viz — also from left */}
          <ProjectCard 
            className="lg:col-span-3 lg:row-span-2 lg:col-start-2 lg:row-start-1"
            side="left" delay={0.12} triggerAnim={gridVisible}
            previewNode={
              <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden border-l border-slate-200 dark:border-slate-800 hidden lg:block group/iframe">
                <iframe 
                  src="https://data-visualization-one-orcin.vercel.app/" 
                  className="absolute top-0 left-0 w-[calc(200%+40px)] h-[calc(200%+40px)] scale-50 origin-top-left border-0 pointer-events-none group-hover/iframe:pointer-events-auto transition-opacity" 
                  title="Steam Data Preview" 
                  loading="lazy"
                ></iframe>
              </div>
            }
            year="2025/2026" title="Steam Data Visualization" 
            description="Interactive D3.js dashboard visualizing Steam's catalog data."
            icon="analytics" iconColorClass="bg-cyan-500/10 text-cyan-500"
            borderHoverClass="hover:border-accent/30" textHoverClass="group-hover:text-accent"
            tags={["D3", "JavaScript", "Visualization"]}
            url="https://data-visualization-one-orcin.vercel.app/"
          />

          {/* ========== FROM RIGHT ========== */}

          {/* NLP Paper — from right */}
          <ProjectCard 
            className="lg:col-span-2 lg:row-span-4 lg:col-start-2 lg:row-start-3"
            side="right" delay={0.20} triggerAnim={gridVisible}
            previewNode={
              <div className="w-full h-full min-h-[280px] relative overflow-hidden bg-white dark:bg-slate-900 rounded-t-lg">
                <iframe 
                  src="/Benchmarking_and_Generating_GP_Consultation_Summaries.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                  title="NLP Paper Preview"
                  scrolling="no"
                  className="absolute top-0 left-0 w-[calc(100%+24px)] h-[calc(100%+50px)] -mt-[50px] border-0 pointer-events-none opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto"
                />
              </div>
            }
            year="2025/2026" title="LLM GP Consultation Summaries" 
            description="Automatic LLM-based GP consultation summary and benchmarking system. Developed at TU Delft focusing on NLP metrics and medical data processing."
            icon="psychology" iconColorClass="bg-indigo-500/10 text-indigo-500"
            borderHoverClass="hover:border-indigo-400/30" textHoverClass="group-hover:text-indigo-400"
            tags={["NLP", "LLM", "Python", "Benchmarking"]}
            url="/Benchmarking_and_Generating_GP_Consultation_Summaries.pdf"
            isDownload={true}
          />

          {/* Right Column — both from right */}
          <ProjectCard 
            className="lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-3"
            side="right" delay={0.06} triggerAnim={gridVisible}
            year="2023" title="Surveying Homepage" 
            description="HTML/CSS and JS Homepage for a local surveying company. Full web development and deployment."
            icon="web" iconColorClass="bg-orange-500/10 text-orange-500"
            borderHoverClass="hover:border-orange-400/30" textHoverClass="group-hover:text-orange-400"
            tags={["HTML", "CSS", "JavaScript"]}
            url="https://www.geounit.at/"
          />
          <ProjectCard 
            className="lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-5"
            side="right" delay={0.14} triggerAnim={gridVisible}
            year="2022" title="N.E.A.T. Application" 
            description="Neural Network development using Genetic Algorithms (N.E.A.T.) for FlappyBird as part of my Pre-Scientific Paper — Grade: 1.0."
            icon="neurology" iconColorClass="bg-red-500/10 text-red-500"
            borderHoverClass="hover:border-red-400/30" textHoverClass="group-hover:text-red-400"
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
