"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Story = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // ── Directional scroll-reveal: image slides from left, content from right ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const direction = el.dataset.animDir;
            el.classList.remove("opacity-0");
            if (direction === "left") {
              el.classList.add("anim-fade-left");
            } else {
              el.classList.add("anim-fade-right");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="our-story" className="relative w-full bg-[#171411] overflow-hidden">
      {/* Decorative organic glow */}
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #B96727 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 lg:py-18 flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left Column - Image */}
        <div
          ref={imageRef}
          data-anim-dir="left"
          className="relative w-full lg:w-1/2 min-h-[280px] sm:min-h-[350px] lg:min-h-[500px] rounded-lg overflow-hidden opacity-0"
        >
          <Image
            src="/images/chef-story.png"
            alt="Chef Luca Marchetti"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          {/* Subtle gradient to blend into the right column on desktop */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#171411] to-transparent z-10"></div>
          {/* Subtle gradient to blend into the bottom on mobile */}
          <div className="block lg:hidden absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#171411] to-transparent z-10"></div>

          {/* Decorative frame accent — top-left corner bracket */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <div className="w-10 h-10 border-t-2 border-l-2 border-brand-accent/20 rounded-tl-sm" />
          </div>
          {/* Bottom-right corner bracket */}
          <div className="absolute bottom-4 right-4 z-20 pointer-events-none hidden lg:block">
            <div className="w-10 h-10 border-b-2 border-r-2 border-brand-accent/20 rounded-br-sm" />
          </div>
        </div>

        {/* Right Column - Content */}
        <div
          ref={contentRef}
          data-anim-dir="right"
          className="w-full lg:w-1/2 flex items-center z-20 opacity-0"
        >
          <div className="max-w-xl">
            <h4 className="text-[#B96727] tracking-widest uppercase text-xs font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#B96727]/50" />
              Our Story
            </h4>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white leading-snug lg:leading-13 mb-8"
            >
              Three generations.<br />
              One family recipe.
            </h2>

            {/* ── Pull-quote with large decorative quotation marks ── */}
            <div className="relative mb-8 pl-6 border-l-2 border-brand-accent/20">
              {/* Large decorative opening quote */}
              <span
                className="absolute -top-4 -left-2 text-brand-accent/15 text-7xl leading-none select-none pointer-events-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </span>
              <p className="text-white/90 text-lg sm:text-xl italic leading-relaxed mb-1">
                The pasta is still rolled by hand every morning, and the rag&ugrave; still simmers for six hours.
              </p>
            </div>

            <div className="text-brand-gray-light text-sm md:text-base space-y-6 leading-snug mb-8">
              <p>
                Bella Vista was born in 2009 when Luca Marchetti brought his
                grandmother&apos;s handwritten recipe book from Bologna to Austin.
                What started as a 24-seat trattoria on a side street is now a
                landmark &mdash; but the dedication hasn&apos;t changed.
              </p>
              <p>
                We don&apos;t cut corners. We don&apos;t freeze anything. We cook the way
                we were taught, because we believe you can taste the difference.
              </p>
            </div>

            {/* ── Chef signature with decorative olive branch SVG ── */}
            <div className="flex items-center gap-4">
              {/* Decorative olive branch */}
              <svg
                className="w-8 h-8 text-brand-accent/30 shrink-0 hidden sm:block"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 28C8 24 12 18 16 14C20 10 24 6 28 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <ellipse cx="10" cy="20" rx="3" ry="5" transform="rotate(-35 10 20)" fill="currentColor" opacity="0.4" />
                <ellipse cx="16" cy="14" rx="2.5" ry="4.5" transform="rotate(-40 16 14)" fill="currentColor" opacity="0.3" />
                <ellipse cx="22" cy="9" rx="2" ry="4" transform="rotate(-45 22 9)" fill="currentColor" opacity="0.25" />
              </svg>
              <div>
                <div
                  className="text-[#B96727] text-lg lg:text-xl italic font-medium"
                >
                  &mdash; Luca Marchetti
                </div>
                <div className="text-[#5D6052] text-xs uppercase tracking-widest font-bold mt-1">
                  Chef &amp; Owner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
