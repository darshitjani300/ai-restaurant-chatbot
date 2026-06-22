import React from "react";

const reviews = [
  {
    id: 1,
    text: "\"The tagliatelle is unlike anything I've had outside of Bologna. I genuinely didn't want to leave.\"",
    initials: "PM",
    author: "Priya M.",
    source: "Google",
  },
  {
    id: 2,
    text: "\"I asked the chat bot about gluten-free options and had a table booked in under a minute. Brilliant experience.\"",
    initials: "JT",
    author: "Jake T.",
    source: "Yelp",
  },
  {
    id: 3,
    text: "\"The Ossobuco is the best I've had in the US. The wine list is exceptional. We'll be back every month.\"",
    initials: "SR",
    author: "Sofia R.",
    source: "TripAdvisor",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="w-full bg-[#FBF9F6]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 lg:py-18">
        {/* Section Header */}
        <div className="mb-8">
          <h4 className="text-[#B96727] uppercase tracking-widest text-sm font-bold mb-3">
            Guest Reviews
          </h4>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-4"
          >
            What people are saying
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 md:p-10 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div>
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
                <p
                  className="text-brand-dark text-lg sm:text-xl italic leading-snug mb-6"
                >
                  {review.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F6EFEA] flex items-center justify-center shrink-0">
                  <span className="text-brand-accent text-sm font-bold">
                    {review.initials}
                  </span>
                </div>
                <div className="text-sm text-brand-gray-light font-medium">
                  {review.author} &middot; {review.source}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
