import React from 'react';

const ArtisanFocus: React.FC = () => {
  return (
    <section className="py-[80px] grid grid-cols-[1.1fr_1fr] gap-16 items-center">
      <div className="relative h-[880px] w-[95%] overflow-hidden -ml-8">
      </div>
      <div className="flex flex-col items-center px-12">
        <h2 className="font-headline-lg text-[72px] text-[#1A1A1A] tracking-tight font-light text-center uppercase leading-[0.92] mb-8">
        </h2>
        <div className="w-72 h-72 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] p-6 mb-8 flex items-center justify-center shadow-[0_8px_32px_rgba(26,26,26,0.25)]">
        </div>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mb-8" />
        <p className="font-body-md text-[16px] text-[#3A3A3A] max-w-xs text-center font-light leading-[1.75]">
        </p>
      </div>
    </section>
  );
};

export default ArtisanFocus;