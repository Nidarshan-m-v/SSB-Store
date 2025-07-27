// components/ImageCorousel.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/marriage_hall_1.jpg",
  "/images/marriage_hall_1.jpg",
  "/images/marriage_hall_1.jpg",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Image */}
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-1000 ease-in-out"
        priority
      />

      {/* Overlay for Decoration */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hall Name */}
      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-md">
          <span className="text-yellow-300">SSB</span> Marriage Hall
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-medium text-white/90">
          Where your dreams become celebrations.
        </p>
      </div>
    </div>
  );
}
