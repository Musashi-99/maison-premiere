import React from 'react';
import { philosophyData } from '../data/mockData';

const Philosophy: React.FC = () => {
  return (
    <section className="py-[120px] flex flex-col items-center">
      <h2 className="font-headline-lg text-[120px] text-[#1A1A1A] tracking-tighter font-light text-center uppercase mb-16">
        {philosophyData.title}
      </h2>
      <div className="w-full flex justify-center items-center gap-12 px-12 mb-16">
        <img
          alt={philosophyData.images[0].alt}
          className="w-48 opacity-20 mix-blend-multiply"
          src={philosophyData.images[0].src}
        />
        <div className="relative w-[340px] aspect-[4/5] bg-[#EFEBE7]/50 p-8">
          <img
            alt={philosophyData.images[1].alt}
            className="w-full h-full object-contain mix-blend-multiply opacity-90"
            src={philosophyData.images[1].src}
          />
          <div className="absolute bottom-6 left-6">
            <p className="font-label-uppercase text-[8px] text-[#8E6E45] tracking-[0.2em] uppercase">
              {philosophyData.images[1].label}
            </p>
            <p className="font-label-uppercase text-[7px] text-[#8E6E45]/50 tracking-[0.2em] mt-1 uppercase">
              {philosophyData.images[1].subLabel}
            </p>
          </div>
        </div>
        <div className="relative w-[460px] aspect-[4/5] overflow-hidden -mt-32">
          <img
            alt={philosophyData.images[2].alt}
            className="w-full h-full object-cover scale-105"
            src={philosophyData.images[2].src}
          />
        </div>
        <img
          alt={philosophyData.images[3].alt}
          className="w-56 opacity-20 mix-blend-multiply"
          src={philosophyData.images[3].src}
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-6 mb-16">
          <div className="w-24 h-[1px] bg-[#C5A059]/40 relative">
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
          </div>
          <span className="font-label-uppercase text-[10px] text-[#C5A059] tracking-[0.2em]">
            {philosophyData.currentSlide}/{philosophyData.totalSlides}
          </span>
        </div>
        <p className="font-body-md text-[14px] text-[#2D2D2D] max-w-2xl text-center font-light leading-[2.0]">
          {philosophyData.description}
        </p>
      </div>
    </section>
  );
};

export default Philosophy;