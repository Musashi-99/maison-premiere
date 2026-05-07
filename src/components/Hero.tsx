import React from 'react';
import { heroData } from '../data/mockData';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#2D2D2D]">
        <img
          alt={heroData.imageAlt}
          className="w-full h-full object-cover opacity-70 object-center scale-105 transform mix-blend-overlay"
          src={heroData.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
        <h1 className="font-display-xl text-[140px] text-white mb-8 tracking-[-0.05em] font-light uppercase">
          {heroData.title}
        </h1>
        <p className="font-body-lg text-[14px] text-white max-w-md opacity-90 font-light leading-relaxed">
          {heroData.subtitle}
        </p>
      </div>
      <div className="absolute bottom-12 flex items-center gap-6 z-10">
        <div className="w-24 h-[1px] bg-[#C5A059]/60 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
        </div>
        <span className="font-label-uppercase text-[#C5A059] tracking-[0.2em]">
          {heroData.currentSlide}/{heroData.totalSlides}
        </span>
      </div>
    </header>
  );
};

export default Hero;