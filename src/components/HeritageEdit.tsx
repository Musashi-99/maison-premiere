import React from 'react';
import { heritageEditData } from '../data/mockData';

const HeritageEdit: React.FC = () => {
  return (
    <section className="py-[96px]">
      <div className="flex justify-between items-end px-16 mb-16">
        <h2 className="font-headline-lg text-[84px] text-[#1A1A1A] tracking-tighter font-light uppercase">
          {heritageEditData.title}
        </h2>
        <div className="flex gap-16 font-body-md text-[18px] font-light">
          {heritageEditData.tabs.map((tab, index) => (
            <span
              key={tab}
              className={`cursor-pointer transition-colors ${index === 0 ? 'text-[#1A1A1A] border-b border-[#1A1A1A] pb-2' : 'text-[#8E6E45] hover:text-[#1A1A1A]'}`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-16 px-16 relative">
        <div className="absolute top-0 right-16 flex items-center gap-6 z-10 mt-6">
          <span className="material-symbols-outlined text-[16px] text-[#8E6E45] cursor-pointer hover:text-[#1A1A1A]">
            arrow_back_ios
          </span>
          <span className="font-label-uppercase text-[11px] text-[#1A1A1A] tracking-[0.2em]">
            {heritageEditData.currentSlide}/{heritageEditData.totalSlides}
          </span>
          <span className="material-symbols-outlined text-[16px] text-[#1A1A1A] cursor-pointer">
            arrow_forward_ios
          </span>
        </div>
        <div className="col-span-7 bg-[#EFEBE7]/50 p-28 flex flex-col items-center justify-center relative h-[840px]">
          <img
            alt={heritageEditData.products[0].alt}
            className="w-3/4 object-contain mix-blend-multiply mb-16 opacity-90"
            src={heritageEditData.products[0].image}
          />
          <div className="absolute bottom-10 left-10 text-left">
            <p className="font-label-uppercase text-[10px] text-[#8E6E45] tracking-[0.2em] mb-3 uppercase">
              {heritageEditData.products[0].category}
            </p>
            <p className="font-body-md text-[13px] text-[#1A1A1A] mb-2 font-light">
              {heritageEditData.products[0].name}
            </p>
            <p className="font-headline-md text-[24px] text-[#1A1A1A] font-light tracking-tighter">
              {heritageEditData.products[0].price}
            </p>
          </div>
        </div>
        <div className="col-span-5 flex flex-col gap-16">
          <div className="flex flex-col items-center justify-center relative h-[480px] overflow-hidden group">
            <img
              alt={heritageEditData.products[1].alt}
              className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
              src={heritageEditData.products[1].image}
            />
            <div className="absolute bottom-10 left-10 text-left z-10 bg-[#F9F5F1]/90 p-8 backdrop-blur-md w-[280px]">
              <p className="font-label-uppercase text-[10px] text-[#8E6E45] tracking-[0.2em] mb-2 uppercase">
                {heritageEditData.products[1].category}
              </p>
              <p className="font-body-md text-[12px] text-[#1A1A1A] mb-2 font-light">
                {heritageEditData.products[1].name}
              </p>
              <p className="font-headline-md text-[22px] text-[#1A1A1A] font-light tracking-tighter">
                {heritageEditData.products[1].price}
              </p>
            </div>
          </div>
          <div className="bg-[#EFEBE7]/50 p-14 flex flex-col items-center justify-center relative h-[340px] ml-20">
            <img
              alt={heritageEditData.products[2].alt}
              className="w-1/2 object-contain mix-blend-multiply mb-10 opacity-90"
              src={heritageEditData.products[2].image}
            />
            <div className="absolute bottom-8 left-8 text-left">
              <p className="font-label-uppercase text-[10px] text-[#8E6E45] tracking-[0.2em] mb-2 uppercase">
                {heritageEditData.products[2].category}
              </p>
              <p className="font-body-md text-[12px] text-[#1A1A1A] mb-2 font-light">
                {heritageEditData.products[2].name}
              </p>
              <p className="font-headline-md text-[22px] text-[#1A1A1A] font-light tracking-tighter">
                {heritageEditData.products[2].price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageEdit;