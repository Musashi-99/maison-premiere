import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current?.querySelectorAll('.footer-animate') || [],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-[#1A1A1A] py-20 px-16">
      <div ref={contentRef} className="grid grid-cols-12 gap-12">
        <div className="col-span-4">
          <h3 className="footer-animate font-headline-md text-[28px] text-white font-light mb-6">
            MAISON PREMIÈRE
          </h3>
          <p className="footer-animate font-body-md text-[13px] text-white/60 font-light leading-relaxed max-w-xs">
            An intimate maison of antique gold and Bengali heritage heirlooms, crafted for those who value tradition & radiance.
          </p>
        </div>
        
        <div className="col-span-2">
          <h4 className="footer-animate font-label-uppercase text-[10px] text-white/40 tracking-[0.2em] mb-6 uppercase">
            Collections
          </h4>
          <ul className="space-y-3">
            {['Earrings', 'Necklaces', 'Bangles', 'Rings', 'Heirlooms'].map((item) => (
              <li key={item}>
                <a href="#" className="footer-animate font-body-md text-[13px] text-white/70 hover:text-white transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="col-span-2">
          <h4 className="footer-animate font-label-uppercase text-[10px] text-white/40 tracking-[0.2em] mb-6 uppercase">
            About
          </h4>
          <ul className="space-y-3">
            {['Our Story', 'Artisans', 'Philosophy', 'Press', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="footer-animate font-body-md text-[13px] text-white/70 hover:text-white transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="col-span-4">
          <h4 className="footer-animate font-label-uppercase text-[10px] text-white/40 tracking-[0.2em] mb-6 uppercase">
            Newsletter
          </h4>
          <p className="footer-animate font-body-md text-[13px] text-white/60 font-light mb-4">
            Receive updates on new collections and exclusive events.
          </p>
          <div className="footer-animate flex gap-4">
            <input 
              type="email" 
              placeholder="Your email"
              className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white text-[13px] placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors duration-300"
            />
            <button className="px-6 py-3 bg-white text-[#1A1A1A] font-navigation uppercase tracking-[0.1em] text-[11px] hover:bg-white/90 transition-colors duration-300">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
        <p className="font-body-md text-[11px] text-white/40 font-light">
          © 2026 Maison Première. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="font-body-md text-[11px] text-white/40 hover:text-white transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;