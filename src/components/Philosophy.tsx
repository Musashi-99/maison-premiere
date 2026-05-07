import React from 'react';
import { philosophyData } from '../data/mockData';

const Philosophy: React.FC = () => {
  return (
    <section className="py-[48px] flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto mb-8">
        <div className="relative w-full aspect-[16/7] overflow-hidden rounded-[14px] shadow-[0_16px_48px_rgba(17,17,17,0.06)] philosophy-fade-in">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="Artisan_crafting_silver_ring_Kol._202605072158.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#F6F2EE]/30 via-[#F6F2EE]/10 to-transparent pointer-events-none" />
        </div>
      </div>
      <h2 className="font-headline-lg text-[72px] text-[#111111] tracking-tighter font-light text-center uppercase mb-6 philosophy-fade-in-delay-1">
        {philosophyData.title}
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-5 mb-6 philosophy-fade-in-delay-1">
          <div className="w-28 h-[1px] bg-[#B89B72]/60 relative">
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#B89B72] rounded-full" />
          </div>
          <span className="font-label-uppercase text-[12px] text-[#B89B72] tracking-[0.2em]">
            {philosophyData.currentSlide}/{philosophyData.totalSlides}
          </span>
        </div>
        <div className="font-body-md text-[16px] text-[#3D3D3D] max-w-3xl text-center font-light leading-[1.85] philosophy-fade-in-delay-2">
          <p className="mb-5">Rooted in the artistry of Bengal, Chokmoki creates jewelry that carries memory, emotion, and quiet elegance. Each piece is designed to feel timeless — blending traditional craftsmanship with a refined modern silhouette.</p>
          <p className="mb-5">Inspired by Kolkata's heritage ateliers, our collections celebrate delicate detail, graceful femininity, and the beauty of everyday adornment. From sculpted silver forms to heirloom-inspired textures, every design is crafted to feel personal, expressive, and enduring.</p>
          <p className="mb-5">We believe jewelry is more than ornamentation. It is identity, ritual, and storytelling worn close to the skin. Crafted in 92.5 sterling silver and finished with meticulous care, every Chokmoki piece is designed to move effortlessly between heritage and contemporary style — preserving the soul of Bengali craftsmanship through a modern editorial lens.</p>
          <p className="text-[#B89B72] tracking-[0.12em] uppercase font-label-uppercase text-[12px]">Quiet luxury. Timeless artistry. Made to be treasured.</p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;