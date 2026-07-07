"use client";

import React, { useEffect, useRef } from "react";

const Cta = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // ── Scroll-reveal ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.querySelectorAll(".anim-hidden").forEach((child, i) => {
            const c = child as HTMLElement;
            c.classList.remove("anim-hidden");
            c.classList.add("anim-fade-up");
            c.style.animationDelay = `${i * 0.12}s`;
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" className="w-full bg-[#B96727] relative overflow-hidden">
      {/* Background texture — subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 14px,
            rgba(255,255,255,0.5) 14px,
            rgba(255,255,255,0.5) 15px
          )`,
        }}
      />

      {/* Decorative organic blob — top right */}
      <div
        className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full opacity-[0.08] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fff 0%, transparent 70%)",
        }}
      />

      <div
        ref={sectionRef}
        className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 px-6 md:px-12 lg:px-24 py-12 lg:py-18 relative"
      >
        {/* Text Content */}
        <div className="max-w-2xl">
          {/* Decorative Italian flourish */}
          <p className="anim-hidden text-white/40 text-sm italic mb-4 flex items-center gap-3">
            <svg
              className="w-5 h-5 text-white/30 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3C7 8 4 12 4 15.5C4 18.5 6.5 21 9.5 21C11.5 21 13 19.5 12 17C11 19.5 12.5 21 14.5 21C17.5 21 20 18.5 20 15.5C20 12 17 8 12 3Z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
            &ldquo;La buona cucina richiede tempo e pazienza&rdquo;
          </p>

          <h2 className="anim-hidden text-3xl sm:text-4xl md:text-5xl text-white mb-4 relative">
            Ready for an evening
            <br className="hidden sm:block" />
            to <span className="italic">remember?</span>
          </h2>
          <p className="anim-hidden text-white/80 text-sm md:text-lg leading-relaxed">
            Tables fill up fast &mdash; book ahead or ask our AI assistant below.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="tel:+15125550191"
          className="anim-hidden group shrink-0 w-full sm:w-auto text-center bg-white hover:bg-gray-50 text-[#92440C] font-semibold text-md px-8 py-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
        >
          Reserve your table
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Cta;
