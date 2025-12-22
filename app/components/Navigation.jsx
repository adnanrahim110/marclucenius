"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/book" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/coaching" }, // Mapping 'Contact' to coaching/contact for now
  ];

  return (
    <nav className="fixed w-full z-50 bg-primary-950/95 backdrop-blur-sm border-b border-primary-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Left Side Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-accent-400"
                    : "text-gray-300 hover:text-accent-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary-900 inline-flex items-center justify-center p-2 text-accent-400 hover:text-white hover:bg-primary-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="h-6 w-px bg-primary-700"></div> {/* Divider */}
            <Link
              href="#"
              className="text-sm font-medium tracking-widest uppercase text-gray-300 hover:text-white"
            >
              Log In
            </Link>
            <button className="bg-accent-400 text-primary-950 px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-accent-300 transition-colors shadow-[0_0_15px_rgba(206,165,93,0.3)]">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-950 border-b border-primary-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-center uppercase tracking-widest text-white hover:bg-primary-900"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              className="block px-3 py-4 text-base font-medium text-center uppercase tracking-widest text-gray-400"
            >
              Log In
            </Link>
            <div className="p-4">
              <button className="w-full bg-accent-400 text-primary-950 px-6 py-3 font-bold uppercase tracking-widest text-sm">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
