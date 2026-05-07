import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
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
  <div className="flex-shrink-0 w-[320px] h-[520px] bg-[#F1ECE6] group cursor-pointer flex flex-col overflow-hidden">
    <div className="relative w-full h-[360px] overflow-hidden flex-shrink-0">
      <img
        src={product.image}
        alt={product.alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
      />
    </div>
    <div className="px-8 py-5 flex flex-col flex-grow min-h-[140px]">
      <p className="font-label-uppercase text-[9px] text-[#B89B72] tracking-[0.25em] mb-2 uppercase leading-none">
        {product.category}
      </p>
      <p className="font-body-md text-[12px] text-[#6F6962] mb-3 font-normal leading-relaxed line-clamp-2">
        {product.name}
      </p>
      <p className="font-headline-md text-[20px] text-[#111111] font-light tracking-[0.02em] mt-auto">
        {product.price}
      </p>
    </div>
  </div>
);

const HeirloomCollections: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    productRefs.current.forEach((product, index) => {
      if (product) {
        gsap.fromTo(
          product,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: index * 0.08,
            scrollTrigger: {
              trigger: product,
              start: 'top 85%',
            }
          }
        );
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-[80px] grid grid-cols-12 gap-8 px-16">
      <div className="col-span-12 flex flex-col items-start justify-start pt-12">
        <div ref={headerRef} className="max-w-2xl mb-12">
          <p className="animate-in font-label-uppercase text-[11px] tracking-[0.28em] text-[#B89B72] mb-6 uppercase font-normal">
            Kolkata Craftsmanship
          </p>
          <h2 className="animate-in font-headline-lg text-[56px] text-[#111111] mb-8 leading-[1] font-light tracking-[0.03em]">
            {collectionData.title}
          </h2>
          <p className="animate-in font-body-md text-[13px] text-[#3D3D3D] mb-10 font-normal leading-[1.85] max-w-[400px]">
            {collectionData.description}
          </p>
          <p className="animate-in font-label-uppercase text-[10px] tracking-[0.32em] text-[#B89B72] font-normal">
            {collectionData.limitedText}
          </p>
        </div>
        
        <div className="w-full">
          <Scroller overflow="x" height="560px" withButtons>
            <div className="flex gap-6 h-full">
              {jewelleryProducts.map((product, index) => (
                <div
                  key={product.id}
                  ref={(el) => { productRefs.current[index] = el; }}
                >
                  <ProductScrollItem product={product} />
                </div>
              ))}
            </div>
          </Scroller>
        </div>
        
        <div className="flex items-center gap-6 mt-10">
          <span className="material-symbols-outlined text-[14px] text-[#B89B72] cursor-pointer hover:text-[#111111] transition-colors duration-300">
            arrow_back_ios
          </span>
          <span className="font-label-uppercase text-[11px] text-[#111111] tracking-[0.2em] font-normal">
            {collectionData.currentSlide} — {collectionData.totalSlides}
          </span>
          <span className="material-symbols-outlined text-[14px] text-[#111111] cursor-pointer hover:text-[#B89B72] transition-colors duration-300">
            arrow_forward_ios
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeirloomCollections;