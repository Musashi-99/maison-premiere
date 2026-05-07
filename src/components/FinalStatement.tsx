import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { finalStatementData } from '../data/mockData';

const FinalStatement: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );

    gsap.fromTo(
      textRef.current?.querySelectorAll('.animate-in') || [],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 70%',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-[100px] px-16">
      <div className="relative">
        <div 
          ref={imageRef}
          className="absolute inset-0 rounded-[32px] overflow-hidden"
        >
          <img
            alt={finalStatementData.imageAlt}
            className="w-full h-[500px] object-cover"
            src={finalStatementData.image}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center py-32">
          <p className="animate-in font-headline-lg text-[48px] text-white text-center font-light leading-[1.2] tracking-tight mb-6 whitespace-pre-line">
            {finalStatementData.title}
          </p>
          <p className="animate-in font-body-md text-[14px] text-white/80 text-center font-light leading-relaxed max-w-md mb-8">
            {finalStatementData.description}
          </p>
          <button className="animate-in px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-navigation uppercase tracking-[0.15em] text-[12px] hover:bg-white/20 transition-all duration-500 rounded-full">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalStatement;