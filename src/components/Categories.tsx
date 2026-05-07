import React from 'react';
import { categories, categorySectionData } from '../data/mockData';

const Categories: React.FC = () => {
  return (
    <section className="py-[120px] grid grid-cols-12 gap-0">
      <div className="col-span-5 pr-32 flex flex-col pt-12">
        <h2 className="font-headline-lg text-[96px] text-[#1A1A1A] mb-16 tracking-tighter font-light uppercase">
          {categorySectionData.title}
        </h2>
        <div className="flex flex-col border-t border-[#1A1A1A]/10">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`py-8 border-b border-[#1A1A1A]/10 ${!category.isOpen ? 'flex items-center gap-6 cursor-pointer group hover:bg-[#EFEBE7]/30 transition-colors px-2 -mx-2' : 'flex flex-col'}`}
              onClick={() => {}}
            >
              <div className="flex items-center gap-6 cursor-pointer">
                <span className={`material-symbols-outlined text-[14px] font-light ${category.isOpen ? 'text-[#C5A059]' : 'text-[#8E6E45]'}`}>
                  {category.isOpen ? 'remove' : 'add'}
                </span>
                <span className={`font-headline-md text-[40px] text-[#1A1A1A] font-light ${!category.isOpen ? 'group-hover:translate-x-2 transition-transform duration-500' : ''}`}>
                  {category.name}
                </span>
              </div>
              {category.isOpen && category.description && (
                <div className="pl-10 mt-6">
                  <p className="font-body-md text-[13px] text-[#2D2D2D] leading-[1.8] max-w-[280px] font-light">
                    {category.description}
                  </p>
                  <a className="inline-block mt-8 font-label-uppercase text-[9px] text-[#C5A059] tracking-[0.2em] border-b border-[#C5A059]/30 pb-1 hover:border-[#C5A059] transition-colors uppercase" href="#">
                    {category.itemCount}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-7 relative">
        <div className="overflow-hidden bg-[#2D2D2D]">
          <img
            alt={categorySectionData.mainImageAlt}
            className="w-full h-[1000px] object-cover scale-105 transform mix-blend-multiply opacity-80"
            src={categorySectionData.mainImage}
          />
        </div>
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[380px] bg-[#F9F5F1] p-8 shadow-2xl z-10 translate-x-1/2">
          <img
            alt={categorySectionData.featuredProduct.alt}
            className="w-full object-cover mb-8 mix-blend-multiply opacity-90"
            src={categorySectionData.featuredProduct.image}
          />
          <div className="text-left">
            <p className="font-label-uppercase text-[8px] text-[#8E6E45] tracking-[0.2em] mb-2 uppercase">
              {categorySectionData.featuredProduct.category}
            </p>
            <p className="font-body-md text-[11px] text-[#1A1A1A] mb-3 font-light">
              {categorySectionData.featuredProduct.name}
            </p>
            <p className="font-headline-md text-[24px] text-[#1A1A1A] font-light tracking-tighter">
              {categorySectionData.featuredProduct.price}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;