"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Map to prevent SSR issues
const Map = dynamic(() => import("./MapSection"), { ssr: false });

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-0 py-16">
      <div className="w-full max-w-6xl">
        <div className="flex justify-center mb-8 space-x-4">
          <button
            className={`px-6 py-2 rounded-full text-white transition ${
              activeTab === "contact" ? "bg-yellow-500" : "bg-gray-500"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            Contact Form
          </button>
          <button
            className={`px-6 py-2 rounded-full text-white transition ${
              activeTab === "map" ? "bg-yellow-500" : "bg-gray-500"
            }`}
            onClick={() => setActiveTab("map")}
          >
            View Location
          </button>
          <button
            className={`px-6 py-2 rounded-full text-white transition ${
              activeTab === "more" ? "bg-yellow-500" : "bg-gray-500"
            }`}
            onClick={() => setActiveTab("more")}
          >
            More Help
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          {activeTab === "contact" && (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Text Block */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Need assistance?
                </h3>
                <p className="text-gray-600 mb-6">
                  Reach out to us anytime for queries, booking assistance, or
                  any support you need regarding the event arrangements. We're
                  here to help make your special day perfect!
                </p>
                <img
                  src="/contact-image.jpg"
                  alt="Support illustration"
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* Form Block */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Contact Us
                </h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-800 mb-1" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
                      placeholder="Enter your name"
                      type="text"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-800 mb-1"
                      htmlFor="email"
                    >
                      Your Email
                    </label>
                    <input
                      className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-800 mb-1"
                      htmlFor="message"
                    >
                      Your Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
                      rows={4}
                      placeholder="Enter your message"
                      id="message"
                      name="message"
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === "map" && (
            <div className="h-[450px]">
              <Map />
            </div>
          )}

          {activeTab === "more" && (
            <div className="text-center text-gray-600">
              <p>Additional help and resources will be available here soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
