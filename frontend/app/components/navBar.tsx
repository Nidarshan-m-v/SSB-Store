// components/navBar.tsx
"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">SSB Marriage Hall</h1>
        <ul className="flex space-x-6 font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Gallery">Gallery</Link></li>
          <li><Link href="/booking">Booking</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
