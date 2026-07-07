"use client";

import React, { useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    text: "The tagliatelle is unlike anything I've had outside of Bologna. I genuinely didn't want to leave.",
    initials: "PM",
    author: "Priya M.",
    source: "Google",
    rotate: -1.2,
  },
  {
    id: 2,
    text: "I asked the chat bot about gluten-free options and had a table booked in under a minute. Brilliant experience.",
    initials: "JT",
    author: "Jake T.",
    source: "Yelp",
    rotate: 0.8,
  },
  {
    id: 3,
    text: "The Ossobuco is the best I've had in the US. The wine list is exceptional. We'll be back every month.",
    initials: "SR",
    author: "Sofia R.",
    source: "TripAdvisor",
    rotate: -0.5,
  },
  {
    id: 4,
    text: "We celebrated our anniversary here and Luca himself came out to recommend the wine pairing. Unforgettable night.",
    initials: "MC",
    author: "Marco C.",
    source: "Google",
    rotate: 1.1,
  },
  {
    id: 5,
    text: "Best Italian outside of Italy, hands down. The burrata alone is worth the trip across Austin.",
    initials: "AW",
    author: "Ava W.",
    source: "Yelp",
    rotate: -0.7,
  },
  {
    id: 6,
    text: "My kids are picky eaters but they devoured the margherita pizza. The staff made us feel like family.",
    initials: "DK",
    author: "Daniel K.",
    source: "TripAdvisor",
    rotate: 0.9,
  },
];

// Source icons/colors for visual variety
const sourceStyles: Record<string, { color: string; icon: string }> = {
  Google: { color: "#4285F4", icon: "G" },
  Yelp: { color: "#D32323", icon: "Y" },
  TripAdvisor: { color: "#34E0A1", icon: "T" },
};

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => {
  const source = sourceStyles[review.source] || { color: "#888", icon: "?" };

  return (
    <div
      className="group bg-white p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between w-[340px] sm:w-[380px] shrink-0 cursor-default"
      style={{
        transform: `rotate(${review.rotate}deg)`,
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "rotate(0deg) translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = `rotate(${review.rotate}deg)`;
      }}
    >
      <div>
        {/* Large decorative quotation mark */}
        <span
          className="block text-brand-accent/10 text-8xl leading-none select-none pointer-events-none -mb-6 -mt-2"
          style={{ fontFamily: "Georgia, serif" }}
        >
          &ldquo;
        </span>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-brand-accent"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Review Text */}
        <p className="text-brand-dark text-lg italic leading-relaxed mb-6">
          {review.text}
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#F6EFEA] flex items-center justify-center shrink-0">
            <span className="text-brand-accent text-sm font-bold">
              {review.initials}
            </span>
          </div>
          <div>
            <div className="text-sm text-brand-dark font-semibold">
              {review.author}
            </div>
            <div className="text-xs text-brand-gray-light">
              {review.source}
            </div>
          </div>
        </div>
        {/* Source badge */}
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: source.color }}
        >
          {source.icon}
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  // ── Scroll-reveal for section header ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.querySelectorAll(".anim-hidden").forEach((child, i) => {
            const c = child as HTMLElement;
            c.classList.remove("anim-hidden");
            c.classList.add("anim-fade-up");
            c.style.animationDelay = `${i * 0.1}s`;
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" className="w-full bg-[#FBF9F6] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-12 lg:pt-18">
        {/* Section Header */}
        <div ref={headerRef} className="mb-10">
          <h4 className="anim-hidden text-[#B96727] uppercase tracking-widest text-sm font-bold mb-3 flex items-center gap-3">
            <span className="w-6 h-px bg-[#B96727]/40" />
            Guest Reviews
          </h4>
          <div className="anim-hidden flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-brand-dark">
              What people are saying
            </h2>
            <p className="text-brand-gray-light text-sm whitespace-nowrap">
              4.9 ★ average &middot; 2,400+ reviews
            </p>
          </div>
        </div>
      </div>

      {/* ── Infinite horizontal marquee ── */}
      <div className="relative py-6 pb-12 lg:pb-18">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-linear-to-r from-[#FBF9F6] to-transparent z-10 pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-linear-to-l from-[#FBF9F6] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track gap-6 px-6">
          {/* First set */}
          {reviews.map((review) => (
            <ReviewCard key={`a-${review.id}`} review={review} />
          ))}
          {/* Duplicate set for seamless loop */}
          {reviews.map((review) => (
            <ReviewCard key={`b-${review.id}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
