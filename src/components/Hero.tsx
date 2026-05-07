import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { heroData } from '../data/mockData';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      imageRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1.05, opacity: 0.7, duration: 2 }
    )
    .fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
      '-=1.5'
    )
    .fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 0.9, duration: 1 },
      '-=0.8'
    )
    .fromTo(
      indicatorRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8 },
      '-=0.5'
    );

    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: containerRef });

  return (
    <header ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#2D2D2D]">
        <img
          ref={imageRef}
          alt={heroData.imageAlt}
          className="w-full h-full object-cover opacity-70 object-center transform mix-blend-overlay"
          src={heroData.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
        <h1 ref={titleRef} className="font-display-xl text-[160px] text-white mb-10 tracking-[-0.05em] font-light uppercase">
          {heroData.title}
        </h1>
        <p ref={subtitleRef} className="font-body-lg text-[16px] text-white max-w-md opacity-90 font-light leading-relaxed">
          {heroData.subtitle}
        </p>
      </div>
      <div ref={indicatorRef} className="absolute bottom-12 flex items-center gap-6 z-10">
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