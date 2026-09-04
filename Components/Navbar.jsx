'use client'
import React from 'react'
import { useState } from 'react';
import { ChevronDown, Menu, X } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen , setIsOpen] = useState(false)
  return (
     <nav className="sticky top-0 z-50 border-y border-red-200/40 bg-white/95 shadow-sm backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image className="h-10 sm:h-12 w-auto" src="/Logo.jpeg" width={180} height={60} alt="South City Lab Logo" />
              </Link>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-red-100 text-red-600 transition-colors hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200"
              >
                {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              </button>
            </div>

            <ul className="hidden items-center gap-2 text-sm lg:flex lg:gap-3 lg:text-base">
              <li className="relative">
                <button
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-red-200 ${isOpen ? "bg-red-50 text-red-600" : "text-red-400 hover:bg-red-50 hover:text-red-600"}`}
                >
                <a href="/">Home</a>
                  
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>

                {isOpen && (
                  <ul className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-lg ring-1 ring-black/5">
                    <li>
                      <Link href="/#about" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2.5 font-medium text-gray-600 transition-colors hover:bg-red-50 hover:text-red-600">About Us</Link>
                    </li>
                    <li>
                      <a href="#services" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2.5 font-medium text-gray-600 transition-colors hover:bg-red-50 hover:text-red-600">Services</a>
                    </li>
                  </ul>
                )}
              </li>
              
              <li><a href="/blogs" className="block rounded-lg px-3 py-2 font-medium text-red-400 transition-colors hover:bg-red-50 hover:text-red-600">Blog</a></li>
              <li><a href="/gallery" className="block rounded-lg px-3 py-2 font-medium text-red-400 transition-colors hover:bg-red-50 hover:text-red-600">Gallery</a></li>
              <li><a href="/onlineReports" className="block rounded-lg px-3 py-2 font-medium text-red-400 transition-colors hover:bg-red-50 hover:text-red-600">Online Reports</a></li>
              <li><a href="/contact" className="block rounded-lg px-3 py-2 font-medium text-red-400 transition-colors hover:bg-red-50 hover:text-red-600">Contact Us</a></li>
            </ul>
          </div>

          {menuOpen && (
            <div className="border-t border-gray-100 py-3 md:hidden">
              <ul className="flex flex-col gap-1 text-red-500">
                <li>
                  <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-semibold transition-colors hover:bg-red-50"
                  >
                    Home
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <ul className="mt-1 space-y-1 border-l-2 border-red-100 pl-3">
                      <li><a href="#about" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 text-gray-600 transition-colors hover:bg-red-50 hover:text-red-600">About Us</a></li>
                      <li><a href="#services" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 text-gray-600 transition-colors hover:bg-red-50 hover:text-red-600">Services</a></li>
                    </ul>
                  )}
                </li>
                      <li><a href="/blogs" className="block rounded-lg px-3 py-2 font-medium text-red-400 transition-colors hover:bg-red-50 hover:text-red-600">Blog</a></li>
                    <li><a href="/gallery" className="block rounded-lg px-3 py-2 font-medium text-red-400 transition-colors hover:bg-red-50 hover:text-red-600">Gallery</a></li>
              <li><a href="/onlineReports" className="block rounded-lg px-3 py-2 font-medium text-red-400 transition-colors hover:bg-red-50 hover:text-red-600">Online Reports</a></li>
              <li><a href="/contact" className="block rounded-lg px-3 py-2 font-medium text-red-400 transition-colors hover:bg-red-50 hover:text-red-600">Contact Us</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
  )
}

export default Navbar