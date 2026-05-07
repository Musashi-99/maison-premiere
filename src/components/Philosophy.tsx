import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { philosophyData } from '../data/mockData';

const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current?.querySelectorAll('.animate-in') || [],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );

    imagesRef.current.forEach((img, index) => {
      if (img) {
        gsap.fromTo(
          img,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2 + index * 0.15,
            scrollTrigger: {
              trigger: img,
              start: 'top 80%',
            }
          }
        );
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-[120px] px-16">
      <div className="grid grid-cols-12 gap-16">
        <div ref={textRef} className="col-span-7">
          <p className="animate-in font-label-uppercase text-[11px] text-[#B89B72] tracking-[0.25em] mb-8 uppercase">
            {philosophyData.title}
          </p>
          <p className="animate-in font-body-lg text-[18px] text-[#1A1A1A] font-light leading-[2] mb-10">
            {philosophyData.description}
          </p>
          <div className="animate-in flex items-center gap-4">
            <div className="w-16 h-[1px] bg-[#D4C9BC]" />
            <span className="font-label-uppercase text-[10px] text-[#9A8A7A] tracking-[0.25em]">
              {philosophyData.currentSlide} / {philosophyData.totalSlides}
            </span>
          </div>
        </div>
        <div className="col-span-5 grid grid-cols-2 gap-4">
          {philosophyData.images.map((image, index) => (
            <div
              key={index}
              ref={(el) => { imagesRef.current[index] = el; }}
              className={`relative ${image.isLarge ? 'row-span-2' : ''} ${image.isFeatured ? 'col-span-2' : ''}`}
            >
              <div className="relative overflow-hidden rounded-[16px]">
                <img
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  src={image.src}
                />
                {image.label && (
                  <div className="absolute bottom-4 left-4 bg-[#FAF8F5]/95 px-4 py-2 rounded-[8px]">
                    <p className="font-body-md text-[11px] text-[#1A1A1A] font-light">{image.label}</p>
                    <p className="font-label-uppercase text-[9px] text-[#B89B72] tracking-[0.15em]">{image.subLabel}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;