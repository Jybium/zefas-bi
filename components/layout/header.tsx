"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="https://res.cloudinary.com/ddynvenje/image/upload/v1742835793/zefasbi/zefasbi-logo_pvjlig.svg"
                alt="Zefas BI Logo"
                width={96}
                height={43}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-grey-700 hover:text-brand-500 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-grey-700 hover:text-brand-500 px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-grey-700 hover:text-brand-500 px-3 py-2 text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-grey-700 hover:text-brand-500 px-3 py-2 text-sm font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-grey-700 hover:text-brand-500 px-3 py-2 text-sm font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 w-[210px] h-[60px]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-grey-700 hover:text-brand-500 hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-grey-700 hover:text-brand-500 block px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-grey-700 hover:text-brand-500 block px-3 py-2 text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-grey-700 hover:text-brand-500 block px-3 py-2 text-base font-medium"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-grey-700 hover:text-brand-500 block px-3 py-2 text-base font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-grey-700 hover:text-brand-500 block px-3 py-2 text-base font-medium"
            >
              Contact Us
            </Link>
            <Link
              href="/get-started"
              className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-brand-500 hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
