import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/mockData';

interface NavBarProps {
  cartCount?: number;
}

const NavBar: React.FC<NavBarProps> = ({ cartCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-8 transition-all duration-700 ease-out ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(30,26,22,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex gap-10 items-center">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className={`font-navigation uppercase tracking-[0.15em] transition-all duration-500 flex items-center gap-1 ${
              isScrolled
                ? 'text-[#2A2A2A] hover:text-[#8A7A6A]'
                : 'text-white/80 hover:text-white'
            }`}
          >
            {link.label}
            {link.hasDropdown && (
              <span className="material-symbols-outlined text-[14px]">keyboard_arrow_down</span>
            )}
          </a>
        ))}
      </div>
      <div />
      <div className="flex gap-10 items-center">
        <a
          href="#"
          className={`font-navigation uppercase tracking-[0.15em] transition-all duration-500 ${
            isScrolled
              ? 'text-[#5A5A5A] hover:text-[#2A2A2A]'
              : 'text-white/80 hover:text-white'
          }`}
        >
          EN / BN
        </a>
        <a
          href="#"
          className={`font-navigation uppercase tracking-[0.15em] transition-all duration-500 px-8 py-3 rounded-full ${
            isScrolled
              ? 'text-[#2A2A2A] border-[#D4C9BC] hover:border-[#8A7A6A] hover:bg-[#F5F2EE]'
              : 'text-white border-white/30 hover:border-white hover:bg-white/10'
          } border`}
        >
          CART ({cartCount})
        </a>
      </div>
    </nav>
  );
};

export default NavBar;