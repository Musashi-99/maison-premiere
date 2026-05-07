import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ArtisanFocus: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    imageRefs.current.forEach((img, index) => {
      if (img) {
        gsap.fromTo(
          img,
          { y: 80, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: img,
              start: 'top 75%',
            }
          }
        );
      }
    });

    gsap.fromTo(
      textRef.current?.querySelectorAll('.animate-in') || [],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 px-12 min-h-[90vh] flex flex-col justify-center">
      <div className="grid grid-cols-2 gap-2 items-stretch">
        <div 
          ref={(el) => { imageRefs.current[0] = el; }}
          className="relative overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(26,26,26,0.2)]"
        >
          <img
            alt="Cinematic Bengali heritage artwork with elephant symbolism and Kolkata cultural elements"
            className="w-full h-[600px] object-cover hover:scale-[1.02] transition-transform duration-1200 ease-out"
            src="/Create_an_ultra-cinematic_Bengali_heritage_202605072236.jpeg"
          />
        </div>
        <div 
          ref={(el) => { imageRefs.current[1] = el; }}
          className="relative overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(26,26,26,0.2)]"
        >
          <img
            alt="Handcrafted sterling silver elephant jewelry piece with intricate detailing"
            className="w-full h-[600px] object-cover hover:scale-[1.02] transition-transform duration-1200 ease-out"
            src="/468959790_543327422016002_203892450514685563_n.jpg"
          />
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent" />
      </div>
      <div ref={textRef} className="flex flex-col items-center justify-center mt-12">
        <span className="animate-in font-label-uppercase text-[10px] text-[#8E6E45] tracking-[0.25em] uppercase mb-4">
          From Inspiration to Craft
        </span>
        <p className="animate-in font-headline-md text-[32px] text-[#2A2A2A] text-center font-light leading-[1.5] tracking-wide max-w-xl">
          Crafted in silver. Inspired by memory, wisdom, and Bengal's timeless artisan spirit.
        </p>
      </div>
    </section>
  );
};

export default ArtisanFocus;