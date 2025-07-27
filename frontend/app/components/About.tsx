// frontend/app/components/About.tsx
"use client";

import React from "react";

const About = () => {
  return (
    <section className="px-6 py-12 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b pb-2 text-center">
          About Us
        </h2>
        <p className="text-lg leading-7 mb-4 text-center">
          Welcome to <strong>Sri Sai Bhargavi Function Hall</strong>, your premier destination for
          weddings, receptions, and events in <strong>Sullurupeta, Tirupati District</strong>. We pride
          ourselves on offering a spacious and elegant venue with top-class facilities.
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>Fully air-conditioned hall with a seating capacity of 500+</li>
          <li>Ample parking space for guests</li>
          <li>Modern stage setup and lighting</li>
          <li>Clean and spacious dining and kitchen areas</li>
          <li>Tie-ups with trusted decorators, caterers, and lighting vendors</li>
        </ul>

        <p className="mt-6 text-center font-semibold text-gray-600">
          Your event, our responsibility. We make celebrations unforgettable!
        </p>
      </div>
    </section>
  );
};

export default About;
