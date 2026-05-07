import React from 'react';
import { heritageEditData } from '../data/mockData';

const HeritageEdit: React.FC = () => {
  return (
    <section className="py-[120px]">
      <div className="flex justify-between items-end px-12 mb-12">
        <h2 className="font-headline-lg text-[72px] text-[#1A1A1A] tracking-tighter font-light uppercase">
          {heritageEditData.title}
        </h2>
        <div className="flex gap-12 font-body-md text-[16px] font-light">
          {heritageEditData.tabs.map((tab, index) => (
            <span
              key={tab}
              className={`cursor-pointer transition-colors ${index === 0 ? 'text-[#1A1A1A] border-b border-[#1A1A1A] pb-1' : 'text-[#8E6E45] hover:text-[#1A1A1A]'}`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-12 px-12 relative">
        <div className="absolute top-0 right-12 flex items-center gap-4 z-10 mt-4">
          <span className="material-symbols-outlined text-[14px] text-[#8E6E45] cursor-pointer hover:text-[#1A1A1A]">
            arrow_back_ios
          </span>
          <span className="font-label-uppercase text-[9px] text-[#1A1A1A] tracking-[0.2em]">
            {heritageEditData.currentSlide}/{heritageEditData.totalSlides}
          </span>
          <span className="material-symbols-outlined text-[14px] text-[#1A1A1A] cursor-pointer">
            arrow_forward_ios
          </span>
        </div>
        <div className="col-span-7 bg-[#EFEBE7]/50 p-24 flex flex-col items-center justify-center relative h-[800px]">
          <img
            alt={heritageEditData.products[0].alt}
            className="w-3/4 object-contain mix-blend-multiply mb-12 opacity-90"
            src={heritageEditData.products[0].image}
          />
          <div className="absolute bottom-8 left-8 text-left">
            <p className="font-label-uppercase text-[8px] text-[#8E6E45] tracking-[0.2em] mb-2 uppercase">
              {heritageEditData.products[0].category}
            </p>
            <p className="font-body-md text-[11px] text-[#1A1A1A] mb-2 font-light">
              {heritageEditData.products[0].name}
            </p>
            <p className="font-headline-md text-[20px] text-[#1A1A1A] font-light tracking-tighter">
              {heritageEditData.products[0].price}
            </p>
          </div>
        </div>
        <div className="col-span-5 flex flex-col gap-12">
          <div className="flex flex-col items-center justify-center relative h-[450px] overflow-hidden group">
            <img
              alt={heritageEditData.products[1].alt}
              className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
              src={heritageEditData.products[1].image}
            />
            <div className="absolute bottom-8 left-8 text-left z-10 bg-[#F9F5F1]/90 p-6 backdrop-blur-md w-[240px]">
              <p className="font-label-uppercase text-[8px] text-[#8E6E45] tracking-[0.2em] mb-1 uppercase">
                {heritageEditData.products[1].category}
              </p>
              <p className="font-body-md text-[10px] text-[#1A1A1A] mb-2 font-light">
                {heritageEditData.products[1].name}
              </p>
              <p className="font-headline-md text-[18px] text-[#1A1A1A] font-light tracking-tighter">
                {heritageEditData.products[1].price}
              </p>
            </div>
          </div>
          <div className="bg-[#EFEBE7]/50 p-12 flex flex-col items-center justify-center relative h-[300px] ml-16">
            <img
              alt={heritageEditData.products[2].alt}
              className="w-1/2 object-contain mix-blend-multiply mb-8 opacity-90"
              src={heritageEditData.products[2].image}
            />
            <div className="absolute bottom-6 left-6 text-left">
              <p className="font-label-uppercase text-[8px] text-[#8E6E45] tracking-[0.2em] mb-1 uppercase">
                {heritageEditData.products[2].category}
              </p>
              <p className="font-body-md text-[10px] text-[#1A1A1A] mb-2 font-light">
                {heritageEditData.products[2].name}
              </p>
              <p className="font-headline-md text-[18px] text-[#1A1A1A] font-light tracking-tighter">
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