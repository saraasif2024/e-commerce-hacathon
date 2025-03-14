"use client"

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Top Banner */}
      <div
        className="frame1 bg-[#000000] text-white text-center py-[9px] px-[2px] 
        font-medium text-[12px] leading-[16.2px] sm:text-[14px] sm:leading-[18.9px] "
      >
        Sign up and get 20% off on your first order.
        <Link href="#" className="underline ml-1">
          Sign Up Now
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="navbar px-5 sm:px-6 xl:px-8">
        <div
          className="flex justify-between items-center mt-4 xl:w-[1240px] mx-auto"
        >
          {/* Toggle Menu for Mobile */}
          <div
            className="space-y-1 sm:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="w-8 h-1 bg-black"></div>
            <div className="w-8 h-1 bg-black"></div>
            <div className="w-8 h-1 bg-black"></div>
          </div>

          {/* Logo */}
          <h1 className="text-[25.2px] mr-2 sm:text-[32px] font-extrabold text-black">
            SHOP.CO
          </h1>

          <ul
            className="hidden sm:flex gap-5 font-medium text-sm sm:text-base text-black"
          >
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>

          <div
            className="hidden sm:flex items-center bg-[#F0F0F0] w-full max-w-[300px] xl:max-w-[577px] 
            h-[48px] rounded-[62px] px-4"
          >
            <IoSearchOutline className="text-[#00000066] w-5 h-5" />
            <input
              type="text"
              className="bg-transparent w-full h-full pl-3 text-sm text-gray-600 focus:outline-none"
              placeholder="Search for products"
            />
          </div>

          <div className="flex gap-3 items-center">
            <IoSearchOutline className="sm:hidden w-6 h-6 text-black" />
            <LuShoppingCart className="w-6 h-6 text-black" />
            <CgProfile className="w-6 h-6 text-black" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4">
            <ul className="flex flex-col gap-3 bg-[#f8f8f8] py-4 px-5 rounded-xl shadow-md">
              <li className="text-black font-medium text-sm">Shop</li>
              <li className="text-black font-medium text-sm">On Sale</li>
              <li className="text-black font-medium text-sm">New Arrivals</li>
              <li className="text-black font-medium text-sm">Brands</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;