import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { categories, categorySectionData } from '../data/mockData';

const Categories: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current?.querySelectorAll('.animate-in') || [],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );

    gsap.fromTo(
      imageRef.current,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 70%',
        }
      }
    );

    gsap.fromTo(
      productRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: productRef.current,
          start: 'top 75%',
        }
      }
    );

    gsap.fromTo(
      listRef.current?.querySelectorAll('.category-item') || [],
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 75%',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-[80px] px-16">
      <div ref={headerRef} className="mb-16">
        <p className="animate-in font-label-uppercase text-[11px] text-[#B89B72] tracking-[0.25em] mb-4 uppercase">
          {categorySectionData.title}
        </p>
      </div>
      
      <div className="grid grid-cols-12 gap-12">
        <div 
          ref={imageRef}
          className="col-span-5 relative overflow-hidden rounded-[24px]"
        >
          <img
            alt={categorySectionData.mainImageAlt}
            className="w-full h-[600px] object-cover"
            src={categorySectionData.mainImage}
          />
        </div>
        
        <div className="col-span-3 flex flex-col justify-center">
          <div 
            ref={productRef}
            className="bg-[#FAF8F5] rounded-[20px] p-8 shadow-[0_12px_40px_rgba(30,26,22,0.06)]"
          >
            <div className="relative h-[280px] mb-6 overflow-hidden rounded-[12px]">
              <img
                alt={categorySectionData.featuredProduct.alt}
                className="w-full h-full object-cover"
                src={categorySectionData.featuredProduct.image}
              />
            </div>
            <p className="font-label-uppercase text-[9px] text-[#8A7A6A] tracking-[0.2em] mb-2 uppercase">
              {categorySectionData.featuredProduct.category}
            </p>
            <p className="font-body-md text-[14px] text-[#1A1A1A] mb-2 font-light">
              {categorySectionData.featuredProduct.name}
            </p>
            <p className="font-headline-md text-[22px] text-[#2A2A2A] font-light">
              {categorySectionData.featuredProduct.price}
            </p>
          </div>
        </div>
        
        <div ref={listRef} className="col-span-4 flex flex-col justify-center">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="category-item group py-6 border-b border-[#E8E4DF] cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body-md text-[14px] text-[#1A1A1A] group-hover:text-[#8A7A6A] transition-colors duration-300 font-light">
                    {category.name}
                  </p>
                  <p className="font-label-uppercase text-[10px] text-[#B89B72] tracking-[0.2em] mt-1">
                    {category.itemCount}
                  </p>
                </div>
                <span className="material-symbols-outlined text-[20px] text-[#9A8A7A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;