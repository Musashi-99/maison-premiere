import React, { useState, useCallback } from 'react';
import { categories, categorySectionData } from '../data/mockData';

interface CategoryType {
  id: string;
  name: string;
  description: string;
  itemCount: string;
}

const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('earrings');
  const [isAnimating, setIsAnimating] = useState(false);

  const activeData = categories.find(c => c.id === activeCategory) as CategoryType;

  const handleCategoryClick = useCallback((categoryId: string) => {
    if (categoryId === activeCategory || isAnimating) return;
    
    setIsAnimating(true);
    setActiveCategory(categoryId);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [activeCategory, isAnimating]);

  const categoryImages: Record<string, string> = {
    earrings: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlbaNxU71Vwa-038yCjaajh1xOvcv7fUdQgjVlP7cbLLPDvei7_yAF4-dRZBBGl7o9kruynFrw87ebhDh9cKVPl3Qcfjly3eNK-PZXPBZjcUgL0rjCR1ySuJ__2U2t9fYziUKDIX9tgYUREO7wNujVTuC9zePhtmuen-G34vn4vanh4DIgrozUWpVq8rzo6vQI6goF4dleV5-iAIDPS8AUO936SuHFJCrJNYsuiLS2pbJxIYByX9RMsCAmykm7-ghe0dsR-dXnoQ',
    necklaces: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzhVCT4OW8gESTcIh33ESWDihXaHuDmnndFFYB8-7gD-DYdPTinW2jgSy20UzMEpH9vseqU2IQLOkId4opZpUXftnhrbWBRPr4X0Mepwu5saarGMPeBgPMjPQJyO3STLLfDKRdnSeWsNW_ud3R4-tp5D3k7k5B2-Mz2gfb9q9RliWPY-sy7TcH33shkD26U8bITPV8gdYFNl-AQuaiK3tdwN78JDcxp34DbsHrWfiPJp1m6G3IQf0Fndn4RzR98chNn9N5RUa1fw',
    bangles: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSTfPqdZ0hSQGucvtxLLVYxmGdwa9jhfwTbWVQvI_wkACkvfO0b6dhQUEumcSMLW_th1x04kjH1As_FjKRxFcRYtCPBep2AAPWhaRJDa66btvA5PgeHVWs2qBGUs9dysuSW8oBjCvYcThkFku6cK17iOWXOOHT8hPfZf0_sQ5uHaVAMSJ9MC41pmbRnACvjh2CTZpK_BWOFLAGFoeryB1snTq9czjeSzxzVwmM5nPRCFavF0CU5zQ4vUiACNNF9Bzt95tnrpmUgA',
    rings: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2gEuHrh9h-BFuIMldsM5tyr63aAT-gOLMkBnDW2-9nk4xg1-fZOVmOLlK3QqBQRwd2BJGEn4GiGDAY7PNfkfbS81s4y5JeougCDIpyoYZznsMbTKHqeRDwQ35GlDjDIF4ulZ59POtvhWGBIqza8oqGfXrmzi2JDO-AOxPe0ohLpbLLyBzE2jQNCfPtot9e96lszKmOdzzzScfKQNKRLLFtL8fENtvACa7U9m2HhWORqHxlLwZwOTx-NT8UZNpfArvo17NtJtzyA',
    heirlooms: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMLpae8NhFJbnulWQMtgpFUWKV_qTqxmuFpAcHm9PwB-1ebwBtl6jnrrAm_4L19cwAnW-7dU0qVWy4agxS8gi-hoerr40YzJ2AY3ENZ8hd6zF484-4BJv1nJ382zFAX3ysRPjv3uzlf-0lV8A8yiKo9xJvIDfRmSUy5hSBt1L2XHsXywaqIMK8nwQrdz9YdPLA4GigU9UpqYByiukx5ePlMxJDQmXo9pwAOkTonowsqZc2JUgC6EahglEwZ_n40elL2CqiNxksuA',
  };

  return (
    <section className="py-[120px] grid grid-cols-12 gap-0">
      <div className="col-span-5 pr-32 flex flex-col pt-16">
        <h2 className="font-headline-lg text-[72px] text-[#111111] mb-20 tracking-tight font-light uppercase leading-none">
          {categorySectionData.title}
        </h2>
        
        <div className="flex flex-col border-t border-[rgba(17,17,17,0.1)]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`group relative py-5 border-b border-[rgba(17,17,17,0.1)] text-left transition-all duration-400 ease-out
                ${activeCategory === category.id 
                  ? 'bg-transparent' 
                  : 'hover:bg-[rgba(184,155,114,0.06)] hover:transition-colors'
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`font-body-md text-[10px] tracking-[0.3em] uppercase transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'text-[#B89B72] opacity-100' 
                      : 'text-[#6F6962] opacity-0 group-hover:opacity-50'
                  }`}>
                    {activeCategory === category.id ? '✦' : ''}
                  </span>
                  <span className={`font-headline-lg text-[34px] text-[#111111] tracking-tight transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'font-normal text-[#111111]' 
                      : 'font-light text-[#111111]/60 group-hover:text-[#B89B72]/70'
                  }`}>
                    {category.name}
                  </span>
                </div>
                
                {activeCategory === category.id && (
                  <span className="absolute left-0 bottom-0 h-[1px] w-12 bg-[#B89B72] transition-all duration-400" />
                )}
              </div>

              {activeCategory === category.id && activeData?.description && (
                <div className="mt-4 pl-7 overflow-hidden">
                  <div className={`transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                    <p className="font-body-md text-[16px] text-[#5F5953] leading-[1.75] max-w-[340px] font-light">
                      {activeData.description}
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="font-label-uppercase text-[8px] text-[#B89B72] tracking-[0.3em] uppercase">
                        {activeData.itemCount}
                      </span>
                      <span className="w-10 h-[1px] bg-[rgba(17,17,17,0.12)]" />
                    </div>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="col-span-7 relative">
        <div className="overflow-hidden h-[700px]">
          <div className={`w-full h-full transition-all duration-600 ease-out ${isAnimating ? 'opacity-0 scale-[1.01]' : 'opacity-100 scale-100'}`}>
            <img
              alt={`${activeCategory} - Bengali luxury jewelry`}
              className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.005]"
              src={categoryImages[activeCategory] || categorySectionData.mainImage}
              style={{
                filter: 'brightness(0.975) saturate(0.9)',
              }}
            />
          </div>
        </div>

        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[320px] bg-[#F6F2EE]/95 backdrop-blur-sm p-7 shadow-[0_8px_40px_rgba(17,17,17,0.06)] z-10 translate-x-4">
          <div className="relative overflow-hidden">
            <img
              alt={categorySectionData.featuredProduct.alt}
              className={`w-full h-[280px] object-cover mb-5 transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 scale-[1.01]' : 'opacity-100 scale-100'}`}
              src={categorySectionData.featuredProduct.image}
              style={{
                filter: 'brightness(0.99) saturate(0.88)',
              }}
            />
          </div>
          
          <div className={`transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-label-uppercase text-[7px] text-[#B89B72] tracking-[0.35em] uppercase">
                {categorySectionData.featuredProduct.category}
              </span>
              <span className="w-6 h-[1px] bg-[#B89B72]/40" />
            </div>
            
            <h3 className="font-headline-md text-[23px] text-[#111111] font-light tracking-tight mb-1">
              {categorySectionData.featuredProduct.name}
            </h3>
            
            <p className="font-body-md text-[14px] text-[#5F5953]">
              {categorySectionData.featuredProduct.price}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;