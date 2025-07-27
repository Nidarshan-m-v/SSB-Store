// components/About.tsx
"use client";

import FlipCard from "./FlipCard";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800 border-l-8 border-yellow-600 pl-4">
            About Our Marriage Hall
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our prestigious marriage hall, a perfect destination for
            celebrating life's most cherished moments. We blend tradition and
            elegance with modern amenities to create an unforgettable venue for
            weddings, engagements, receptions, and other special gatherings.
          </p>
          <p className="text-gray-600">
            From spacious seating arrangements and ambient lighting to
            professional staff and ample parking, we provide everything you need
            to ensure your event runs smoothly. Your celebration deserves the
            perfect setting – and we deliver it with grace.
          </p>
          <div>
            <a
              href="#booking"
              className="inline-block mt-4 bg-yellow-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Flip Card Section */}
        <section className="w-full p-1 flex justify-center items-center bg-yellow-50">
          <FlipCard />
        </section>
      </div>
    </section>
  );
}
