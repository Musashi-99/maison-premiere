import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = ['CATALOGUE', 'HEIRLOOM', 'PHILOSOPHY', 'EDITIONS'];

  return (
    <footer className="flex justify-between items-center w-full px-16 py-14 bg-[#F9F5F1] border-t border-[#1A1A1A]/10 mt-12">
      <div className="font-headline-md text-[28px] tracking-tighter text-[#1A1A1A] font-light">
        MAISON PREMIÈRE ©
      </div>
      <div className="flex gap-14">
        {footerLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="font-navigation text-[11px] uppercase tracking-[0.2em] text-[#2D2D2D] hover:text-[#C5A059] transition-colors duration-300 flex items-center gap-1"
          >
            {link}
            {link === 'CATALOGUE' && (
              <span className="material-symbols-outlined text-[12px]">keyboard_arrow_down</span>
            )}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;