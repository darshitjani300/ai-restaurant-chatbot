"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FaFireFlameCurved } from "react-icons/fa6";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems = [
    { label: "Menu", href: "#menu" },
    { label: "Our story", href: "#our-story" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  // ── Scroll-aware header: transparent → blurred on scroll ──
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Active section tracking via Intersection Observer ──
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // ── Close mobile menu on resize to desktop ──
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Lock body scroll when mobile menu is open ──
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const handleMobileNavClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-bg/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
          : "bg-brand-bg"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          {/* Dark Circle — slight scale on hover for personality */}
          <div className="w-10 h-10 bg-brand-dark rounded-full shrink-0 flex items-center justify-center text-brand-accent transition-transform duration-300 hover:scale-110 hover:rotate-6">
            <FaFireFlameCurved />
          </div>
          <div className="flex flex-col">
            <Link
              href="/"
              className="text-2xl font-semibold text-brand-dark tracking-tight transition-colors hover:text-brand-accent"
            >
              Bella Vista
            </Link>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gray-light font-medium mt-0.5">
              Ristorante &middot; Est. 2009
            </span>
          </div>
        </div>

        {/* Navigation Links - Desktop — with animated underlines */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link text-md font-medium transition-colors ${
                activeSection === item.href
                  ? "text-brand-dark"
                  : "text-brand-gray hover:text-brand-dark"
              }`}
              style={
                activeSection === item.href
                  ? { "--underline-active": "100%" } as React.CSSProperties
                  : undefined
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#cta"
            className="hidden md:inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-dark-hover text-white text-md font-medium px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group"
          >
            Reserve a table
            {/* Subtle arrow that slides in on hover */}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Mobile Menu Toggle — animated hamburger/cross */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu — smooth slide-down + fade instead of instant mount */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-brand-bg/95 backdrop-blur-lg border-t border-gray-100 px-6 py-4 flex flex-col">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`block py-3.5 text-md font-medium transition-all duration-300 border-b border-gray-100 last:border-none ${
                activeSection === item.href
                  ? "text-brand-accent translate-x-1"
                  : "text-brand-gray hover:text-brand-dark hover:translate-x-1"
              }`}
              onClick={handleMobileNavClick}
              style={{
                transitionDelay: mobileMenuOpen ? `${i * 50}ms` : "0ms",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-4 text-center block w-full bg-brand-dark hover:bg-brand-dark-hover text-white text-md font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-md"
            onClick={handleMobileNavClick}
            style={{
              transitionDelay: mobileMenuOpen
                ? `${navItems.length * 50}ms`
                : "0ms",
            }}
          >
            Reserve a table
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
