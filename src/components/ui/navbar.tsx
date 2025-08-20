import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Navigation items
  const navItems = [
    { id: "home", label: "Home", link: "/" },
    { id: "about", label: "About", link: "#about" },
    { id: "projects", label: "Projects", link: "#projects" },
    // { id: "blog", label: "Blog", link: "/blog" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle link click
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setIsMobileMenuOpen(false);

    // Smooth scroll to section
    const element = document.getElementById(linkId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed md:relative md:bg-gruvbox_gray-soft flex justify-center items-center w-1/12 md:w-full h-fit top-0 right-0 md:z-50 transition-all duration-300 md:border-b border-white/20`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    className={`relative text-sm font-medium py-2 px-1 transition-all duration-300 capitalize ${
                      activeLink === item.id
                        ? "text-[#fbf1c7] hover:text-red-600"
                        : "text-[#fbf1c7] hover:text-red-600"
                    }`}
                  >
                    <Link href={item.link}>{item.label}</Link>

                    {/* Underline indicator */}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="flex flex-col justify-center items-center w-8 h-8 space-y-1 transition-all duration-300 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <span
                  className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`fixed z-50 w-full h-fit top-0 bottom-0 left-0 right-0 md:hidden transition-all duration-300 bg-gruvbox_gray-medium text-amber-50  border-t border-gray-100 ${
              isMobileMenuOpen
                ? "opacity-100 visible z-50 translate-y-0 max-h-96"
                : "opacity-0 invisible -translate-y-4 max-h-0"
            } overflow-hidden`}
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  onClick={handleLinkClick}
                  key={item.id}
                  className={`w-full text-left font-medium py-3 px-4 transition-all duration-300 border-l-4 capitalize rounded-r-lg  `}
                >
                  <Link href={item.link}>{item.label}</Link>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
