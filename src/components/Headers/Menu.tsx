"use client";
import React, { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-[5%] py-4 ">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">MentalHeal</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-gray-600">
            Home
          </a>
          <a href="#" className="hover:text-gray-600">
            How it Work
          </a>
          <a href="#" className="hover:text-gray-600">
            Features
          </a>
          <a href="#" className="hover:text-gray-600">
            Technology
          </a>
          <a href="#" className="hover:text-gray-600">
            Pricing
          </a>
        </nav>
        <div className="md:hidden">
          <button className="p-2" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden w-full bg-white py-4 absolute left-0 top-[60px] shadow-md z-10">
          <div className="flex flex-col px-[5%] max-w-[1400px] mx-auto">
            <a href="#" className="py-2 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="py-2 hover:text-gray-600">
              How it Work
            </a>
            <a href="#" className="py-2 hover:text-gray-600">
              Features
            </a>
            <a href="#" className="py-2 hover:text-gray-600">
              Technology
            </a>
            <a href="#" className="py-2 hover:text-gray-600">
              Pricing
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Menu;
