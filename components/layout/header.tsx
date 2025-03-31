"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  interface NavLink {
    href: string;
    label: string;
  }

  const isActive = (path: string): boolean => {
    return pathname === path;
  };

  // Navigation links configuration
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Solutions" },
    { href: "/training", label: "Training" },
    { href: "/contact", label: "Why choose us" },
  ];

  return (
    <header className="bg-[#EFF3E6] sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-20 py-5">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="https://res.cloudinary.com/ddynvenje/image/upload/v1743308707/zefasbi/zefasbi-logo_pvjlig.svg"
                alt="Zefas BI Logo"
                width={96}
                height={43}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium ${
                  isActive(link.href)
                    ? "text-brand-500 bg-opacity-10 underline underline-offset-4"
                    : "text-grey-900 hover:text-brand-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 w-[210px] h-[60px]"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-grey-900 hover:text-brand-500 hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
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
        <div
          className="md:hidden fixed inset-0 top-[106px] bg-[#EFF3E6] z-40"
          id="mobile-menu"
        >
          <div className="px-2 pt-4 pb-3 space-y-4 sm:px-3 h-full flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-3 text-base font-medium ${
                  isActive(link.href)
                    ? "text-brand-500 bg-brand-500 bg-opacity-10 underline underline-offset-4"
                    : "text-grey-900 hover:text-brand-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-auto pb-8">
              <Link
                href="/contact-us"
                className="block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
