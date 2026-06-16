"use client";

import React from 'react';
import Image from 'next/image';

export default function Design() {
  return (
    <section id="design" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#0a0a0a] border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-wider text-[#ff6b00] uppercase mb-2">Creative</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">UI/UX & Brand Design</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left/Main Card: Figma Competitions */}
          <div className="lg:col-span-8 bg-[#121212] rounded-2xl p-6 sm:p-10 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 group">
                <Image 
                  src="/projects/design.jpg" 
                  alt="Figma UI/UX Design Prototype"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-mono text-sm -z-10">
                  [ Figma Prototype Image ]
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-white">Competitive UI/UX Prototyping</h4>
                <p className="text-sm text-[#ff6b00] mt-1 font-medium">Figma • Wireframing • User Flow</p>
              </div>
              
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Designed high-fidelity mockups, interactive prototypes, and scalable design systems for various hackathons and UI/UX competitions. Focused on creating intuitive user experiences that bridge the gap between complex engineering logic and seamless human-computer interaction.
              </p>
              
              <div className="pt-4 border-t border-neutral-800">
                <p className="text-xs text-neutral-500 font-mono uppercase">Collaborative work with Team Visual Vibers</p>
              </div>
            </div>
          </div>

          {/* Right Card: Fiverr & Freelance (Links to Wix) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#121212] to-[#0a0a0a] rounded-2xl p-6 sm:p-8 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 flex flex-col justify-between relative overflow-hidden">
            
            {/* Subtle Accent Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff6b00] opacity-10 blur-2xl rounded-full pointer-events-none" />

            <div className="space-y-6 z-10">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Freelance Brand Identity</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Beyond software engineering, I maintain an active freelance practice providing professional logo design, mascot creation, and brand identity services.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                  <p className="text-sm text-neutral-300">Level 1 Fiverr Seller</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                  <p className="text-sm text-neutral-300">Web & Graphic Maintenance (MEOD MUSIC)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                  <p className="text-sm text-neutral-300">High Success Score & Client Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="mt-8 z-10">
              {/* REMEMBER TO REPLACE THE HREF WITH YOUR ACTUAL WIX URL */}
              <a 
                href="https://dulshanrj1.wixsite.com/dulshan/portfolio-1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-5 py-3.5 rounded-lg font-medium text-sm text-white bg-neutral-900 border border-neutral-700 hover:border-[#ff6b00] hover:bg-neutral-800 transition-all duration-300 group"
              >
                <span>View Design Portfolio</span>
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-[#ff6b00] transition-colors group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <p className="text-[10px] text-neutral-500 text-center mt-3 font-mono uppercase tracking-wider">Redirects to full gallery</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}