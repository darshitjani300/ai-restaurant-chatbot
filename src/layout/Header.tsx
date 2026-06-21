"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaFireFlameCurved } from "react-icons/fa6";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Menu", href: "#menu" },
    { label: "Our story", href: "#our-story" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-brand-bg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          {/* Dark Circle */}
          <div className="w-10 h-10 bg-brand-dark rounded-full shrink-0 flex items-center justify-center text-brand-accent">
            <FaFireFlameCurved />
          </div>
          <div className="flex flex-col">
            <Link
              href="/"
              className="text-2xl font-semibold text-brand-dark tracking-tight"
            >
              Bella Vista
            </Link>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gray-light font-medium mt-0.5">
              Ristorante &middot; Est. 2009
            </span>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-md font-medium text-brand-gray hover:text-brand-dark transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#cta"
            className="hidden md:inline-flex bg-brand-dark hover:bg-brand-dark-hover text-white text-md font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            Reserve a table
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-brand-dark transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-brand-dark transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-brand-dark transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-brand-bg border-t border-gray-100 px-6 py-4 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-md font-medium text-brand-gray hover:text-brand-dark transition-colors border-b border-gray-100 last:border-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-4 text-center block w-full bg-brand-dark hover:bg-brand-dark-hover text-white text-md font-medium px-6 py-3 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Reserve a table
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
