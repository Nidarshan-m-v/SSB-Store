"use client";

import React from "react";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 md:px-0">
      {/* Contact Form */}
      <div className="max-w-md w-full mb-10 px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
              placeholder="Enter your name"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="email">
              Your Email
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
              placeholder="Enter your email"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
              rows={4}
              placeholder="Enter your message"
              id="message"
              name="message"
            ></textarea>
          </div>
          <button
            className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Comments Section */}
      
    </div>
  );
};

export default ContactSection;
