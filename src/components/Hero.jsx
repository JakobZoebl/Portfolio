import React from "react";
import NeuralCanvas from "./NeuralCanvas";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <NeuralCanvas />
      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-20 flex flex-col items-center justify-center font-display pointer-events-none min-h-[80vh]">
        <h1 className="text-[35vw] sm:text-[31vw] md:text-[28vw] lg:text-[25vw] font-black leading-[0.8] tracking-[-0.04em] text-slate-900 dark:text-white drop-shadow-2xl transition-colors opacity-0 text-center animate-[fadeIn_2s_ease-out_1s_forwards] font-['IBM_Plex_Sans'] uppercase">
          JAKOB
          <br />
          <span className="text-gradient">ZÖBL</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
