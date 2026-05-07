import React from 'react';
import { artisanData } from '../data/mockData';

const ArtisanFocus: React.FC = () => {
  return (
    <section className="py-[96px] grid grid-cols-2 gap-24 items-center">
      <div className="relative h-[960px] w-full overflow-hidden -ml-12">
        <img
          alt={artisanData.mainImageAlt}
          className="w-full h-full object-cover"
          src={artisanData.mainImage}
        />
      </div>
      <div className="flex flex-col items-center px-16">
        <h2 className="font-headline-lg text-[92px] text-[#1A1A1A] tracking-tighter font-light text-center uppercase leading-[0.9] mb-16">
          {artisanData.title.split(' ').map((word, i) => (
            <React.Fragment key={i}>
              {word}
              <br />
            </React.Fragment>
          ))}
        </h2>
        <div className="w-full max-w-[440px] aspect-square bg-[#1A1A1A] p-20 mb-24 flex items-center justify-center">
          <img
            alt={artisanData.ringImageAlt}
            className="w-full h-full object-contain opacity-90 mix-blend-screen"
            src={artisanData.ringImage}
          />
        </div>
        <p className="font-body-md text-[15px] text-[#2D2D2D] max-w-sm text-center font-light leading-[1.8]">
          {artisanData.description}
        </p>
      </div>
    </section>
  );
};

export default ArtisanFocus;