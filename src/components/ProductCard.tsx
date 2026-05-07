import React from 'react';
import type { Product } from '../data/mockData';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'offset' | 'small' | 'medium' | 'large';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'default' }) => {
  const isOffset = variant === 'offset';
  const sizeClass = variant === 'small' ? 'h-[300px]' : variant === 'medium' ? 'h-[440px]' : 'h-[540px]';

  const imageWidth = variant === 'small' ? 'w-1/2' : variant === 'medium' ? 'w-full' : variant === 'large' ? 'w-3/4' : 'w-[68%]';
  const imageMargin = isOffset ? 'mt-14' : variant === 'small' ? 'mb-6' : 'mb-8';
  const imageTopMargin = variant === 'small' ? '' : 'mt-10';

  return (
    <div className={`flex flex-col items-center justify-start ${sizeClass} relative group cursor-pointer bg-[#F1ECE6] ${isOffset ? 'mt-16' : ''}`}>
      <img
        alt={product.alt}
        className={`${imageWidth} object-contain mix-blend-multiply ${imageMargin} ${imageTopMargin} transition-transform duration-700 group-hover:scale-[1.025]`}
        src={product.image}
      />
      <div className="absolute bottom-8 left-8 right-8 text-left">
        <p className="font-label-uppercase text-[10px] text-[#B89B72] tracking-[0.22em] mb-3 uppercase">
          {product.category}
        </p>
        <p className="font-body-md text-[13px] text-[#333333] mb-2.5 font-normal leading-relaxed">
          {product.name}
        </p>
        <p className="font-headline-md text-[24px] text-[#111111] font-light tracking-[0.02em]">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;