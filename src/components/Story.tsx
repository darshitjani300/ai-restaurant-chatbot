import React from "react";
import Image from "next/image";

const Story = () => {
  return (
    <section id="our-story" className="relative w-full bg-[#171411] overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Left Column - Image */}
        <div className="relative w-full lg:w-1/2 min-h-100">
          <Image
            src="/images/chef-story.png"
            alt="Chef Luca Marchetti"
            fill
            className="object-cover object-center"
          />
          {/* Subtle gradient to blend into the right column on desktop */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#171411] to-transparent z-10"></div>
          {/* Subtle gradient to blend into the bottom on mobile */}
          <div className="block lg:hidden absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#171411] to-transparent z-10"></div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-1/2 flex items-center p-8 md:p-16 lg:p-20 xl:p-28 z-20">
          <div className="max-w-xl">
            <h4 className="text-[#B96727] tracking-widest uppercase text-xs font-bold mb-6">
              Our Story
            </h4>
            <h2
              className="text-4xl md:text-5xl text-white leading-11 lg:leading-13 mb-8"
            >
              Three generations.<br />
              One family recipe.
            </h2>
            <div className="text-brand-gray-light text-sm md:text-base space-y-6 leading-snug mb-8">
              <p>
                Bella Vista was born in 2009 when Luca Marchetti brought his
                grandmother&apos;s handwritten recipe book from Bologna to Austin.
                What started as a 24-seat trattoria on a side street is now a
                landmark &mdash; but the pasta is still rolled by hand every
                morning, and the rag&ugrave; still simmers for six hours.
              </p>
              <p>
                We don&apos;t cut corners. We don&apos;t freeze anything. We cook the way
                we were taught, because we believe you can taste the difference.
              </p>
            </div>
            <div
              className="text-[#B96727] text-lg lg:text-xl italic font-medium"
            >
              &mdash; Luca Marchetti, Chef &amp; Owner
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
