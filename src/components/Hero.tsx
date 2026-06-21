import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full bg-[#171411] overflow-hidden flex flex-col">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 grow">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center p-8 md:p-16 lg:px-24 lg:py-32 z-10">
          <div className="max-w-xl">
            <h4 className="text-[#5D6052] tracking-widest uppercase text-xs font-bold mb-6 lg:mb-8">
              Austin&apos;s Finest Italian
            </h4>
            <h1 className="text-5xl lg:text-7xl text-white leading-13 lg:leading-16 mb-8">
              Where every meal
              <br />
              becomes a <span className="italic font-medium">memory</span>
            </h1>
            <p className="text-brand-gray-light text-sm md:text-base max-w-md mb-10 leading-relaxed">
              Handmade pasta, wood-fired pizza, and a wine list curated
              <br className="hidden md:block" />
              from the hillside estates of Tuscany and Piedmont.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#cta"
                className="bg-[#0D0C0A] hover:bg-black text-white px-10 py-4 rounded font-semibold text-xs transition-colors"
              >
                Book a table
              </a>
              <a
                href="#menu"
                className="border border-brand-dark-hover hover:border-[#4A453A] text-brand-gray-light hover:text-white px-10 py-4 rounded font-semibold text-xs transition-colors"
              >
                View menu
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-12 md:gap-20 mt-12 pt-10 border-t border-brand-dark-hover max-w-lg">
            <div>
              <div className="text-4xl text-white mb-1">14</div>
              <div className="text-xs uppercase tracking-widest text-brand-gray-light font-bold">
                Years open
              </div>
            </div>
            <div>
              <div
                className="text-4xl text-white flex items-center gap-1 mb-1"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                4.9<span className="text-xl text-white pb-1">★</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-brand-gray-light font-bold">
                Google rating
              </div>
            </div>
            <div>
              <div
                className="text-4xl text-white mb-1"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                38
              </div>
              <div className="text-xs uppercase tracking-widest text-brand-gray-light font-bold">
                Menu items
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image & Overlay */}
        <div className="relative hidden lg:block min-h-150 h-full">
          {/* Main Hero Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/hero-food.png"
              alt="Delicious Italian Dish"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient overlay to blend image into the dark left background */}
            <div className="absolute inset-0 bg-linear-to-r from-[#171411] via-[#171411]/80 to-transparent w-3/5 z-10"></div>
          </div>

          {/* Chef's Pick Card */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-lg z-20 bg-[#1E1B17]/95 backdrop-blur-sm border border-white/5 p-8 rounded-lg shadow-2xl">
            <h5 className="text-[#5D6052] text-xs font-bold tracking-widest uppercase mb-4">
              Chef&apos;s Pick Tonight
            </h5>
            <h3 className="text-white text-3xl mb-3">Ossobuco Milanese</h3>
            <p className="text-brand-gray-light text-md mb-4 leading-snug max-w-sm">
              Slow-braised veal shank, gremolata, saffron risotto alla Milanese
            </p>
            <div className="text-[#5D6052] text-2xl font-medium">$34</div>
          </div>
        </div>
      </div>

      {/* Bottom Info Strip */}
      <div className="w-full bg-[#B96727] border-t border-white/5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 px-6 md:px-12 lg:px-24">
          <div className="p-8 lg:px-12 flex items-center justify-start gap-5">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm text-white/80 uppercase tracking-widest font-bold mb-1">
                Hours
              </div>
              <div className="text-white font-semibold text-sm">
                Daily &middot; 12pm &ndash; 10pm
              </div>
            </div>
          </div>
          <div className="p-8 lg:px-12 flex items-center justify-start gap-5 md:border-x md:border-white/10">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm text-white/80 uppercase tracking-widest font-bold mb-1">
                Location
              </div>
              <div className="text-white font-semibold text-sm">
                123 Congress Ave, Austin TX
              </div>
            </div>
          </div>
          <div className="p-8 lg:px-12 flex items-center justify-start gap-5">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm text-white/80 uppercase tracking-widest font-bold mb-1">
                Reservations
              </div>
              <div className="text-white font-semibold text-sm">
                (512) 555-0191
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
