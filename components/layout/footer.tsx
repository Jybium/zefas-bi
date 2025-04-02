"use client";

import Link from "next/link";
import Image from "next/image";
import { NewsletterSignup } from "./newsletter-signup";

const Footer = () => {
  // Smooth scroll function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-b from-[#FAFFFC] to-[#E1FFEB] text-grey-900 py-12 px-4 xl:px-20">
      <div className="mx-auto grid lg:flex lg:justify-between gap-8 pb-9">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center">
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
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://res.cloudinary.com/ddynvenje/image/upload/v1734311980/datacrunch/socials/skill-icons_instagram_y9zsib.svg"
                width={20}
                height={20}
                alt="Instagram"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/106108978/admin/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://res.cloudinary.com/ddynvenje/image/upload/v1734311980/datacrunch/socials/devicon_linkedin_lhnjfd.svg"
                width={20}
                height={20}
                alt="LinkedIn"
              />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://res.cloudinary.com/ddynvenje/image/upload/v1734311980/datacrunch/socials/devicon_facebook_arc02a.svg"
                width={20}
                height={20}
                alt="Facebook"
              />
            </Link>
            <Link
              href="https://x.com/RxDono"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://res.cloudinary.com/ddynvenje/image/upload/v1734311980/datacrunch/socials/simple-icons_x_c8rseu.svg"
                width={20}
                height={20}
                alt="Twitter"
              />
            </Link>
          </div>
        </div>

        <NewsletterSignup />
      </div>

      {/* Copyright and Back to Top */}
      <div className="grid lg:flex justify-between gap-5 lg:gap-24 mt-10 lg:text-center text-xs">
        <nav className="hidden md:flex space-x-12">
          <Link
            href="/#about-us"
            className="text-grey-900 hover:text-brand-500 px-3 py-2 text-sm font-medium"
          >
            About Us
          </Link>
          <Link
            href="/solutions"
            className="text-grey-900 hover:text-brand-500 px-3 py-2 text-sm font-medium"
          >
            Solutions
          </Link>
          <Link
            href="/training"
            className="text-grey-900 hover:text-brand-500 px-3 py-2 text-sm font-medium"
          >
            Training
          </Link>
          <Link
            href="/#why-choose-us"
            className="text-grey-900 hover:text-brand-500 px-3 py-2 text-sm font-medium"
          >
            Why choose us
          </Link>
        </nav>

        <p>&copy; Copyright 2025 Zefas</p>
      </div>
    </footer>
  );
};

export default Footer;
