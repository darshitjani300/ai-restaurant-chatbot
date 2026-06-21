"use client";

import React, { useState } from "react";

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
    description: "Braised veal shank, traditional gremolata, saffron risotto alla Milanese",
    price: 34,
    calories: 890,
    tags: ["Main", "Chef's pick"],
    category: "Mains",
    icon: "🍖",
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

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="w-full bg-[#FBF9F6]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 lg:py-18">
        {/* Section Header */}
        <div className="mb-8">
          <h4 className="text-brand-accent uppercase tracking-widest text-sm font-bold mb-3">
            Our Menu
          </h4>
          <h2
            className="text-4xl md:text-5xl text-brand-dark mb-4"
          >
            Crafted with tradition
          </h2>
          <p className="text-brand-gray-light text-md max-w-lg leading-relaxed">
            Every dish is made fresh daily using recipes passed down through three generations of the Marchetti family.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === category
                  ? "bg-brand-dark text-white"
                  : "bg-transparent border border-gray-200 text-brand-gray hover:border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="bg-gray-200 gap-px grid grid-cols-1 lg:grid-cols-2 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white p-6 md:p-8 flex justify-between items-start gap-4 hover:bg-gray-50 transition-colors">
              
              {/* Left side: Icon + Content */}
              <div className="flex gap-4 md:gap-5">
                <div className="text-4xl pt-0.5 shrink-0 select-none">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-brand-dark font-bold text-xl mb-1">{item.name}</h3>
                  <p className="text-brand-gray-light text-sm leading-snug max-w-70 md:max-w-xs mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#F6EFEA] text-[#A6581E] px-2.5 py-1 rounded text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side: Price + Calories */}
              <div className="text-right shrink-0">
                <div
                  className="text-brand-dark text-xl font-medium"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  ${item.price}
                </div>
                <div className="text-brand-gray-light text-[10px] mt-1">
                  {item.calories} kcal
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
