import React from 'react';
import { Scroller } from '@/components/ui/scroller-1';
import { collectionData } from '../data/mockData';

const jewelleryProducts = [
  {
    id: '1',
    category: 'Kolkata Heritage',
    name: 'Antique 22-karat gold choker',
    price: '€1,550',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop',
    alt: 'Antique gold choker necklace'
  },
  {
    id: '2',
    category: 'Artisanal Gold',
    name: 'Handcrafted filigree bridal piece',
    price: '€845',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=500&fit=crop',
    alt: 'Gold filigree bridal jewelry'
  },
  {
    id: '3',
    category: 'Heritage Makers',
    name: 'Traditional textured gold bangle',
    price: '€965',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=500&fit=crop',
    alt: 'Textured gold bangle'
  },
  {
    id: '4',
    category: 'Kolkata Heritage',
    name: 'Rose gold jhumka earrings',
    price: '€590',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop',
    alt: 'Rose gold jhumka earrings'
  },
  {
    id: '5',
    category: 'Artisanal Gold',
    name: 'Delicate gold chain necklace',
    price: '€720',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=500&fit=crop',
    alt: 'Gold chain necklace'
  },
  {
    id: '6',
    category: 'Heritage Makers',
    name: 'Antique gold ring with kundan',
    price: '€420',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop',
    alt: 'Kundan gold ring'
  },
  {
    id: '7',
    category: 'Kolkata Heritage',
    name: 'Layered gold haar necklace',
    price: '€2,100',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop',
    alt: 'Layered gold necklace'
  },
  {
    id: '8',
    category: 'Artisanal Gold',
    name: 'Gold payal ankle bracelet',
    price: '€340',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop',
    alt: 'Gold ankle bracelet'
  }
];

const ProductScrollItem = ({ product }: { product: typeof jewelleryProducts[0] }) => (
  <div className="flex-shrink-0 w-[280px] h-[480px] bg-[#F1ECE6] group cursor-pointer flex flex-col overflow-hidden">
    <div className="relative w-full h-[340px] overflow-hidden flex-shrink-0">
      <img
        src={product.image}
        alt={product.alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
      />
    </div>
    <div className="px-6 py-4 flex flex-col flex-grow min-h-[120px]">
      <p className="font-label-uppercase text-[7px] text-[#B89B72] tracking-[0.25em] mb-1.5 uppercase leading-none">
        {product.category}
      </p>
      <p className="font-body-md text-[10px] text-[#6F6962] mb-2 font-normal leading-relaxed line-clamp-2">
        {product.name}
      </p>
      <p className="font-headline-md text-[17px] text-[#111111] font-light tracking-[0.02em] mt-auto">
        {product.price}
      </p>
    </div>
  </div>
);

const HeirloomCollections: React.FC = () => {
  return (
    <section className="py-[96px] grid grid-cols-12 gap-8 px-12">
      <div className="col-span-12 flex flex-col items-start justify-start pt-12">
        <div className="max-w-2xl mb-10">
          <p className="font-label-uppercase text-[9px] tracking-[0.28em] text-[#B89B72] mb-5 uppercase font-normal">
            Kolkata Craftsmanship
          </p>
          <h2 className="font-headline-lg text-[48px] text-[#111111] mb-6 leading-[1] font-light tracking-[0.03em]">
            {collectionData.title}
          </h2>
          <p className="font-body-md text-[11px] text-[#3D3D3D] mb-8 font-normal leading-[1.85] max-w-[400px]">
            {collectionData.description}
          </p>
          <p className="font-label-uppercase text-[8px] tracking-[0.32em] text-[#B89B72] font-normal">
            {collectionData.limitedText}
          </p>
        </div>
        
        <div className="w-full">
          <Scroller overflow="x" height="520px" withButtons>
            <div className="flex gap-5 h-full">
              {jewelleryProducts.map((product) => (
                <ProductScrollItem key={product.id} product={product} />
              ))}
            </div>
          </Scroller>
        </div>
        
        <div className="flex items-center gap-5 mt-8">
          <span className="material-symbols-outlined text-[11px] text-[#B89B72] cursor-pointer hover:text-[#111111] transition-colors duration-300">
            arrow_back_ios
          </span>
          <span className="font-label-uppercase text-[9px] text-[#111111] tracking-[0.2em] font-normal">
            {collectionData.currentSlide} — {collectionData.totalSlides}
          </span>
          <span className="material-symbols-outlined text-[11px] text-[#111111] cursor-pointer hover:text-[#B89B72] transition-colors duration-300">
            arrow_forward_ios
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeirloomCollections;