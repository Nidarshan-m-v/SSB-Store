'use client';

import ImageCarousel from "./components/ImageCarousel";
import Contact from "./components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <section id="carousel">
        <ImageCarousel />
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Our Marriage Hall</h2>
          <p className="text-lg text-gray-700">
            Welcome to our premier marriage hall! We provide a spacious and elegant venue
            perfect for weddings, receptions, and special occasions. With modern amenities,
            ample parking, and a warm ambiance, we ensure your event is unforgettable.
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking-preview" className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Now</h2>
          <p className="text-gray-700 mb-6">
            Plan your perfect day with ease. Click below to fill out our booking form.
          </p>
          <Link href="/booking">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Go to Booking Page
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Contact */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Contact />
        </div>
      </footer>
    </div>
  );
}
