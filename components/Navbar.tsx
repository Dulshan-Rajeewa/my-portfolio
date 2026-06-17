"use client";

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add a bottom border and slight background dimming
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Creative', href: '#design' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-900 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-white tracking-tighter hover:text-[#ff6b00] transition-colors">
              Dulshan<span className="text-[#ff6b00]">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            {/* CTA Button */}
            <a 
              href="mailto:your.email@example.com" 
              className="px-5 py-2.5 text-sm font-medium text-black bg-[#ff6b00] rounded-lg hover:bg-[#e05e00] transition-colors shadow-lg shadow-[#ff6b00]/10"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-400 hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute w-full bg-[#0d0d0d] border-b border-neutral-900 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-2 pb-6 space-y-2 flex flex-col shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              className="block px-3 py-3 text-base font-medium text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:your.email@example.com" 
            className="block px-3 py-3 mt-4 text-center text-base font-medium text-black bg-[#ff6b00] rounded-lg hover:bg-[#e05e00] transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}