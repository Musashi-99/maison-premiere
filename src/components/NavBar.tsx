import React from 'react';
import { navLinks } from '../data/mockData';

interface NavBarProps {
  cartCount?: number;
}

const NavBar: React.FC<NavBarProps> = ({ cartCount = 0 }) => {
  return (
    <nav className="bg-transparent flex justify-between items-center w-full px-16 py-10 fixed top-0 z-50 shadow-[0_2px_20px_rgba(17,17,17,0.03)]">
      <div className="flex gap-10 items-center">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="font-navigation uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-1"
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
          className="font-navigation uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-300"
        >
          EN / BN
        </a>
        <a
          href="#"
          className="font-navigation uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-300 border border-white/20 px-8 py-3 rounded-full"
        >
          CART ({cartCount})
        </a>
      </div>
    </nav>
  );
};

export default NavBar;