import React from "react";

const Cta = () => {
  return (
    <section id="cta" className="w-full bg-[#B96727]">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 px-6 md:px-12 lg:px-24 py-12 lg:py-18">
        {/* Text Content */}
        <div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-white mb-4"
          >
            Ready for an evening to remember?
          </h2>
          <p className="text-white/90 text-sm md:text-lg">
            Tables fill up fast &mdash; book ahead or ask our AI assistant below.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="tel:+15125550191"
          className="shrink-0 w-full sm:w-auto text-center bg-white hover:bg-gray-50 text-[#92440C] font-semibold text-md px-8 py-4 rounded transition-colors shadow-sm"
        >
          Reserve your table
        </a>
      </div>
    </section>
  );
};

export default Cta;
