import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#13110E]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 lg:px-24 py-8">
        
        {/* Brand */}
        <div 
          className="text-white text-lg font-semibold tracking-wide shrink-0"
        >
          Bella Vista
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <a href="#menu" className="text-brand-gray-light hover:text-white text-md transition-colors">
            Menu
          </a>
          <a href="#cta" className="text-brand-gray-light hover:text-white text-md transition-colors">
            Reservations
          </a>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-gray-light hover:text-white text-md transition-colors">
            Instagram
          </Link>
          <a href="#" className="text-brand-gray-light hover:text-white text-md transition-colors">
            Privacy
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-[#6D655C] text-md shrink-0 text-center md:text-right">
          &copy; 2026 Bella Vista
        </div>

      </div>
    </footer>
  );
};

export default Footer;
