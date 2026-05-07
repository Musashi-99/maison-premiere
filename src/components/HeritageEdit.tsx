import React from 'react';

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
  return (
    <section className="py-[100px]">
      <div className="px-16 mb-12">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] text-[#9A8A7A] tracking-[0.3em] font-label-uppercase">
              01 / 05
            </span>
            <div className="h-[1px] w-16 bg-[#D4C9BC]" />
          </div>
          <h2 className="font-headline-lg text-[68px] text-[#1A1A1A] tracking-tight font-light uppercase leading-[0.92]">
            Heritage Edit
          </h2>
        </div>
        <p className="font-body-md text-[15px] text-[#6A6A6A] font-light leading-relaxed max-w-xl">
          Curated heirlooms shaped by Bengal's timeless artisan legacy.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 px-16">
        <div className="col-span-7 group">
          <div className="bg-[#FAF8F5] rounded-[28px] overflow-hidden shadow-[0_16px_48px_rgba(30,26,22,0.07)] transition-all duration-700 ease-out group-hover:shadow-[0_24px_64px_rgba(30,26,22,0.12)] group-hover:-translate-y-2">
            <div className="relative h-[640px]">
              <img
                alt={products[0].alt}
                className="w-full h-full object-contain mix-blend-multiply opacity-95 transition-transform duration-[1800ms] ease-out group-hover:scale-[1.03]"
                src={products[0].image}
              />
            </div>
          </div>
        </div>

        <div className="col-span-5 grid grid-cols-2 gap-6">
          {products.slice(1).map((product) => (
            <div
              key={product.id}
              className="group"
            >
              <div className="bg-[#FAF8F5] rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(30,26,22,0.05)] transition-all duration-500 ease-out group-hover:shadow-[0_16px_48px_rgba(30,26,22,0.1)] group-hover:-translate-y-1">
                <div className="relative h-[300px]">
                  <img
                    alt={product.alt}
                    className="w-full h-full object-contain mix-blend-multiply opacity-95 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]"
                    src={product.image}
                  />
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