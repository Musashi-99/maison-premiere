import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const products = [
  {
    id: 1,
    image: '/grid photos/469003679_542774795404598_8433627726007389185_n.jpg',
    alt: 'Antique gold filigree choker',
  },
  {
    id: 2,
    image: '/grid photos/469070966_544225148592896_8961910416927773404_n.jpg',
    alt: 'Handcrafted gold jhumkas',
  },
  {
    id: 3,
    image: '/grid photos/469112849_543327385349339_4561356442889936920_n.jpg',
    alt: 'Traditional gold bangle set',
  },
  {
    id: 4,
    image: '/grid photos/469118511_543209555361122_7140260739137426662_n.jpg',
    alt: 'Antique gold maang tikka',
  },
  {
    id: 5,
    image: '/grid photos/469531337_544225191926225_3822672529752950346_n.jpg',
    alt: 'Filigree gold ring',
  },
];

const HeritageEdit: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const gridCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    gsap.fromTo(
      heroCardRef.current,
      { y: 60, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroCardRef.current,
          start: 'top 75%',
        }
      }
    );

    gridCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            delay: 0.1 + index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            }
          }
        );
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-[100px]">
      <div className="px-16 mb-12">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] text-[#9A8A7A] tracking-[0.3em] font-label-uppercase">
              01 / 05
            </span>
            <div className="h-[1px] w-16 bg-[#D4C9BC]" />
          </div>
          <h2 ref={titleRef} className="font-headline-lg text-[68px] text-[#1A1A1A] tracking-tight font-light uppercase leading-[0.92]">
            Best Sellers
          </h2>
        </div>
        <p ref={subtitleRef} className="font-body-md text-[15px] text-[#6A6A6A] font-light leading-relaxed max-w-xl">
          Curated heirlooms shaped by Bengal's timeless artisan legacy.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 px-16">
        <div ref={heroCardRef} className="col-span-7 group">
          <div className="bg-[#F5F2EE] rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(30,26,22,0.08)] transition-all duration-700 ease-out group-hover:shadow-[0_32px_80px_rgba(30,26,22,0.14)] group-hover:-translate-y-3">
            <div className="relative h-[720px] w-full">
              <img
                alt={products[0].alt}
                className="w-full h-full object-cover mix-blend-multiply opacity-[0.97] transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04]"
                src={products[0].image}
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F2EE] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="col-span-5 grid grid-cols-2 gap-6">
          {products.slice(1).map((product, index) => (
            <div
              key={product.id}
              ref={(el) => { gridCardsRef.current[index] = el; }}
              className="group"
            >
              <div className="bg-[#F5F2EE] rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(30,26,22,0.06)] transition-all duration-500 ease-out group-hover:shadow-[0_20px_60px_rgba(30,26,22,0.12)] group-hover:-translate-y-2">
                <div className="relative h-[340px] w-full">
                  <img
                    alt={product.alt}
                    className="w-full h-full object-cover mix-blend-multiply opacity-[0.97] transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
                    src={product.image}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F5F2EE] to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeritageEdit;