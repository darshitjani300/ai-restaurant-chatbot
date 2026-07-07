"use client";

import React, { useState, useEffect, useRef } from "react";

const menuItems = [
  {
    id: 1,
    name: "Burrata e prosciutto",
    description: "Creamy buffalo burrata, aged Parma ham, heirloom cherry tomatoes, basil oil",
    price: 18,
    calories: 420,
    tags: ["Starter", "Gluten-free"],
    category: "Starters",
    icon: "🥗",
  },
  {
    id: 2,
    name: "Margherita pizza",
    description: "San Marzano tomato, buffalo mozzarella, fresh basil, extra virgin olive oil",
    price: 16,
    calories: 680,
    tags: ["Pizza", "Vegetarian"],
    category: "Mains",
    icon: "🍕",
  },
  {
    id: 3,
    name: "Tagliatelle al ragù",
    description: "House-rolled egg pasta, 6-hour Bolognese of beef and pork, Parmigiano-Reggiano",
    price: 21,
    calories: 760,
    tags: ["Pasta", "Signature"],
    category: "Pasta",
    icon: "🍝",
  },
  {
    id: 4,
    name: "Branzino al forno",
    description: "Whole roasted sea bass, capers, Taggiasca olives, lemon, white wine",
    price: 28,
    calories: 540,
    tags: ["Main", "Gluten-free"],
    category: "Mains",
    icon: "🐟",
  },
  {
    id: 5,
    name: "Ossobuco milanese",
    description: "Braised veal shank, traditional gremolata, saffron risotto alla Milanese — the dish that started it all.",
    price: 34,
    calories: 890,
    tags: ["Main", "Chef's pick"],
    category: "Mains",
    icon: "🍖",
    featured: true,
  },
  {
    id: 6,
    name: "Tiramisu classico",
    description: "House-made mascarpone cream, espresso-soaked savoiardi, dark cocoa dusting",
    price: 9,
    calories: 420,
    tags: ["Dessert", "Vegetarian"],
    category: "Desserts",
    icon: "🍮",
  },
];

const categories = ["All", "Starters", "Pasta", "Mains", "Desserts"];

// Small organic rotations for tag pills — breaks the template feel
const tagRotations = [-1.5, 0.8, -0.5, 1.2, -1, 0.6];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

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
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Staggered card reveal on scroll ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    if (gridRef.current) {
      gridRef.current.querySelectorAll(".menu-card").forEach((card) => {
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, [filteredItems]);

  return (
    <section id="menu" className="w-full bg-[#FBF9F6] relative overflow-hidden">
      {/* Decorative background shape — organic touch */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #d06922 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 lg:py-18 relative">
        {/* Section Header */}
        <div ref={headerRef} className="mb-10">
          <h4 className="anim-hidden text-brand-accent uppercase tracking-widest text-sm font-bold mb-3 flex items-center gap-3">
            <span className="w-6 h-px bg-brand-accent/40" />
            Our Menu
          </h4>
          <h2 className="anim-hidden text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-4 relative inline-block">
            Crafted with tradition
            {/* Hand-drawn underline SVG — not a straight line */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 280 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M1 5.5C40 2 70 7 110 4C150 1 180 6.5 220 3.5C250 1.5 270 5 279 3"
                stroke="#d06922"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.3"
              />
            </svg>
          </h2>
          <p className="anim-hidden text-brand-gray-light text-md max-w-lg leading-relaxed mt-5">
            Every dish is made fresh daily using recipes passed down through three generations of the Marchetti family.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-brand-dark text-white shadow-md scale-105"
                  : "bg-transparent border border-gray-200 text-brand-gray hover:border-brand-accent/30 hover:text-brand-dark"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid — featured card breaks the uniform pattern */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => {
            const isFeatured = "featured" in item && item.featured;

            return (
              <div
                key={item.id}
                className={`menu-card group rounded-xl border transition-all duration-500 opacity-0 translate-y-6 ${
                  isFeatured
                    ? "sm:col-span-2 lg:col-span-2 bg-[#1a1814] text-white border-[#2d2a24] p-0 overflow-hidden"
                    : "bg-white p-6 border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1"
                }`}
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                {isFeatured ? (
                  /* ── FEATURED CARD — horizontal layout, dark bg, breaks the grid ── */
                  <div className="flex flex-col sm:flex-row">
                    {/* Left: Decorative accent panel */}
                    <div className="relative sm:w-2/5 bg-[#221e19] p-8 sm:p-10 flex flex-col justify-center">
                      {/* Organic blob decoration */}
                      <div
                        className="absolute top-4 right-4 w-24 h-24 rounded-full opacity-10 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle, #d06922 0%, transparent 70%)",
                        }}
                      />
                      <div className="text-6xl sm:text-7xl mb-4 select-none">{item.icon}</div>
                      <span className="inline-flex items-center gap-1.5 text-brand-accent text-[10px] uppercase tracking-[0.2em] font-bold">
                        <span className="w-4 h-px bg-brand-accent/60" />
                        Chef&apos;s selection
                      </span>
                    </div>

                    {/* Right: Content */}
                    <div className="sm:w-3/5 p-8 sm:p-10 flex flex-col justify-center">
                      <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3 group-hover:text-brand-accent transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-[#8c847b] text-sm sm:text-base leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-brand-accent text-3xl font-semibold">
                            ${item.price}
                          </div>
                          <div className="text-[#5D6052] text-[10px] mt-0.5">
                            {item.calories} kcal
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIdx) => (
                            <span
                              key={tag}
                              className="bg-white/10 text-brand-accent/90 px-2.5 py-1 rounded-full text-xs font-semibold"
                              style={{
                                transform: `rotate(${tagRotations[tagIdx % tagRotations.length]}deg)`,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ── REGULAR CARD ── */
                  <>
                    {/* Top row: Icon + Price */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-lg bg-[#FBF3ED] flex items-center justify-center text-2xl select-none transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {item.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-brand-dark text-2xl font-semibold group-hover:text-brand-accent transition-colors">
                          ${item.price}
                        </div>
                        <div className="text-brand-gray-light text-[10px] mt-0.5">
                          {item.calories} kcal
                        </div>
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-brand-dark font-bold text-2xl mb-2 group-hover:text-brand-accent transition-colors">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-brand-gray-light text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tags — with subtle organic rotation */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.tags.map((tag, tagIdx) => (
                        <span
                          key={tag}
                          className="bg-[#F6EFEA] text-[#A6581E] px-2.5 py-1 rounded-full text-xs font-semibold transition-transform duration-300 hover:scale-105"
                          style={{
                            transform: `rotate(${tagRotations[(index + tagIdx) % tagRotations.length]}deg)`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
