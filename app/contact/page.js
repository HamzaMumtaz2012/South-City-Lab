'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit logic
  };

  return (
    <>
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-[#333333]">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-normal text-[#d30815] text-center tracking-tight">
          Contact Us
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Send Us a Message */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-normal text-gray-800">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#f8f9fa] border-none rounded-none p-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="block text-sm text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#f8f9fa] border-none rounded-none p-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  name="comments"
                  rows={6}
                  placeholder="Comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full bg-[#f8f9fa] border-none rounded-none p-3.5 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 resize-y"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#d30815] hover:bg-red-700 text-white font-medium text-xs tracking-widest uppercase px-6 py-2.5 rounded-none transition-colors"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Get Offer Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-normal text-gray-800">
                Get Offer Info
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We appreciate your comments and questions.<br />
                Please call 111 724(SCH) 000<br />
                or complete this brief form.
              </p>
            </div>

            {/* Address Box */}
            <div className="bg-[#f8f9fa] p-8 text-center space-y-3">
              <div className="flex justify-center">
                <MapPin className="w-8 h-8 text-[#d30815] fill-[#d30815]/10" />
              </div>
              <p className="text-lg text-gray-700 leading-snug px-2">
                St-1, Block 3, Shahrah-e-Firdousi,<br />
                Clifton, Karachi 75600
              </p>
            </div>

            {/* Phone & Email Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Box */}
              <div className="bg-[#f8f9fa] p-6 text-center space-y-2">
                <div className="flex justify-center">
                  <Phone className="w-6 h-6 text-[#d30815]" />
                </div>
                <p className="text-sm text-gray-700">
                  021-35860811
                </p>
              </div>

              {/* Email Box */}
              <div className="bg-[#f8f9fa] p-6 text-center space-y-2">
                <div className="flex justify-center">
                  <Mail className="w-6 h-6 text-[#d30815]" />
                </div>
                <p className="text-sm text-gray-700">
                  info@southcitylab.org
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
      
    </section>
     <footer  className="bg-white py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
            <div>
              <img className="h-20 sm:h-24 mb-4 w-auto" src="/Logo.jpeg" alt="South City Lab Logo" />
              <p className="text-red-600 text-lg sm:text-xl leading-relaxed font-light max-w-[260px]">
                A leading Private Laboratory in Karachi offering the highest standards of laboratory services.
              </p>
            </div>

            <div>
              <h3 className="text-red-600 text-2xl font-bold mb-6">Quick Link</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium">About US</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium">Service</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium">Covid Test</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-red-600 text-2xl font-bold mb-4">Subscribe To Our Newsletter</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 font-medium">
                Subscribe to the our mailing list to recevie updtes on new arrivals, special offers and other discount information.
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors text-md font-medium">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-8 mb-8 pb-8 border-b border-gray-300">
            <a href="#" className="text-red-600 hover:text-red-700 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-red-600 hover:text-red-700 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.35 7-6 7-10.55A4.47 4.47 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" className="text-red-600 hover:text-red-700 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <div className="text-center w-full bg-red-500 py-4 px-4">
        <p className="text-white text-base sm:text-2xl mb-2 sm:mb-4">
          All rights reserved by <span className="font-bold">South City Lab.</span> Copyright - 2021
        </p>
        <p className="text-white text-sm sm:text-lg">
          Website Developed By: <a href="#" className="text-white underline">Business Brain System</a>
        </p>
      </div>
    </>
  );
}