import React, { useEffect, useRef, useState } from 'react';

const ArtisanFocus: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 px-12 min-h-[90vh] flex flex-col justify-center transition-all duration-1000 ${isVisible ? 'artisan-scroll-reveal visible' : 'artisan-scroll-reveal'}`}
    >
      <div className="grid grid-cols-2 gap-2 items-stretch">
        <div className="relative overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(26,26,26,0.2)]">
          <img
            alt="Cinematic Bengali heritage artwork with elephant symbolism and Kolkata cultural elements"
            className="w-full h-[600px] object-cover hover:scale-[1.02] transition-transform duration-1200 ease-out"
            src="/Create_an_ultra-cinematic_Bengali_heritage_202605072236.jpeg"
          />
        </div>
        <div className="relative overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(26,26,26,0.2)]">
          <img
            alt="Handcrafted sterling silver elephant jewelry piece with intricate detailing"
            className="w-full h-[600px] object-cover hover:scale-[1.02] transition-transform duration-1200 ease-out"
            src="/468959790_543327422016002_203892450514685563_n.jpg"
          />
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent" />
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <span className="font-label-uppercase text-[10px] text-[#8E6E45] tracking-[0.25em] uppercase mb-4">
          From Inspiration to Craft
        </span>
        <p className="font-headline-md text-[32px] text-[#2A2A2A] text-center font-light leading-[1.5] tracking-wide max-w-xl">
          Crafted in silver. Inspired by memory, wisdom, and Bengal's timeless artisan spirit.
        </p>
      </div>
    </section>
  );
};

export default ArtisanFocus;