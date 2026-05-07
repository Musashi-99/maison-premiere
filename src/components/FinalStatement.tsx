import React from 'react';
import { finalStatementData } from '../data/mockData';

const FinalStatement: React.FC = () => {
  return (
    <section className="py-[96px] flex flex-col items-center text-center px-16">
      <h2 className="font-headline-lg text-[116px] leading-[0.85] text-[#1A1A1A] tracking-tighter font-light max-w-5xl uppercase mb-20">
        {finalStatementData.title.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h2>
      <div className="relative w-full max-w-[1000px] h-[680px] overflow-hidden mb-20">
        <img
          alt={finalStatementData.imageAlt}
          className="w-full h-full object-cover scale-105"
          src={finalStatementData.image}
        />
      </div>
      <p className="font-label-uppercase text-[11px] text-[#C5A059] tracking-[0.2em] max-w-sm text-center leading-[1.8] uppercase">
        {finalStatementData.description.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </section>
  );
};

export default FinalStatement;