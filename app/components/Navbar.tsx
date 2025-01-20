'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-xl font-bold text-[#2B2B2B]">BrandLogo</a>
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              className="text-[#2B2B2B] hover:text-gray-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="#2B2B2B"
                  stroke="#2B2B2B"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="#2B2B2B"
                  stroke="#2B2B2B"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <a className="text-[#2B2B2B] hover:text-green-600 transition duration-200">Home</a>
            </Link>
            <Link href="/about-us">
              <a className="text-[#2B2B2B] hover:text-green-600 transition duration-200">About</a>
            </Link>
            <Link href="/service">
              <a className="text-[#2B2B2B] hover:text-green-600 transition duration-200">Services</a>
            </Link>
            <Link href="/contact-us">
              <a className="text-[#2B2B2B] hover:text-green-600 transition duration-200">Contact</a>
            </Link>
            <Link href="/blog">
              <a className="text-[#2B2B2B] hover:text-green-600 transition duration-200">Blog</a>
            </Link>
          </div>

          {/* Call-to-Action Button (Desktop Only) */}
          <div className="hidden md:flex">
            <button className="btn btn-primary bg-[#2B2B2B] border-none text-[#fcf5eb] btn-md rounded-3xl ">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden bg-transparent bg-opacity-90 rounded-lg mt-2 p-4 space-y-4">
            <Link href="/">
              <a className="block text-[#2B2B2B] hover:text-gray-300 transition duration-200">Home</a>
            </Link>
            <Link href="/about-us">
              <a className="block text-[#2B2B2B] hover:text-gray-300 transition duration-200">About</a>
            </Link>
            <Link href="/service">
              <a className="block text-[#2B2B2B] hover:text-gray-300 transition duration-200">Services</a>
            </Link>
            <Link href="/contact-us">
              <a className="block text-[#2B2B2B] hover:text-gray-300 transition duration-200">Contact</a>
            </Link>
            <Link href="/blog">
              <a className="block text-[#2B2B2B] hover:text-gray-300 transition duration-200">Blog</a>
            </Link>
            <Link href="#get-started">
              <a className="block px-4 py-2 bg-[#2B2B2B] hover:bg-green-600 text-white rounded-lg font-semibold shadow-lg transition duration-200">
                Get Started
              </a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
