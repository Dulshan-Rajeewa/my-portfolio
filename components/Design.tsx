"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// 1. Array for your Figma competition designs
const figmaDesigns = [
  {
    id: "competition-1",
    title: "FinTech Mobile Dashboard", // Replace with your actual project name
    category: "Interactive Prototype",
    event: "Inter-University Hackathon", // Replace with the actual competition
    image: "/projects/design1.jpg", // Add this image to your public/projects folder
    description: "Developed a comprehensive high-fidelity prototype focusing on seamless user onboarding and data visualization. Bridged the gap between complex financial logic and intuitive user interfaces.",
    tools: "Figma • FigJam • Wireframing",
    team: [
      { name: "Dulshan Rajeewa", url: "#" },
      { name: "Teammate One", url: "#" }
    ]
  },
  {
    id: "competition-2",
    title: "Healthcare Booking System", 
    category: "UI/UX Case Study",
    event: "Design-a-thon 2025", 
    image: "/projects/design2.jpg", 
    description: "Created a scalable design system and user flow for a medical appointment scheduling platform, prioritizing accessibility and clear visual hierarchy for a diverse user base.",
    tools: "Figma • User Flow • Prototyping",
    team: [
      { name: "Dulshan Rajeewa", url: "#" },
      { name: "Teammate Two", url: "#" }
    ]
  }
  // Add as many Figma designs as you want here
];

export default function Design() {
  const [selectedDesign, setSelectedDesign] = useState<typeof figmaDesigns[0] | null>(null);

  const closeModal = () => setSelectedDesign(null);

  return (
    <section id="design" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#0a0a0a] border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-wider text-[#ff6b00] uppercase mb-2">Creative</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">UI/UX & Brand Design</h3>
        </div>

        {/* --- PART 1: The Figma Designs Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {figmaDesigns.map((design) => (
            <div 
              key={design.id}
              onClick={() => setSelectedDesign(design)}
              className="bg-[#121212] rounded-xl overflow-hidden border border-neutral-800 hover:border-[#ff6b00]/50 transition-all duration-300 cursor-pointer group flex flex-col h-full"
            >
              <div className="relative w-full aspect-video bg-neutral-900 overflow-hidden">
                <Image 
                  src={design.image} 
                  alt={design.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <p className="text-xs font-mono text-neutral-500 mb-1 truncate">{design.event}</p>
                  <h4 className="text-xl font-semibold text-white mb-1">{design.title}</h4>
                  <p className="text-sm text-[#ff6b00] font-medium">{design.category}</p>
                </div>
                <div className="mt-6 flex items-center text-sm text-neutral-400 group-hover:text-white transition-colors">
                  <span>View Prototype Details</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- PART 2: The Freelance / Brand Identity Banner --- */}
        <div className="bg-gradient-to-r from-[#121212] to-[#0a0a0a] rounded-2xl p-6 sm:p-10 border border-neutral-800 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#ff6b00] opacity-5 blur-3xl rounded-full pointer-events-none -translate-y-1/2" />
          
          <div className="z-10 max-w-2xl">
            <h4 className="text-2xl font-semibold text-white mb-3">Freelance Brand Identity & Graphic Design</h4>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Beyond software engineering, I maintain an active freelance practice providing professional logo design, mascot creation, and comprehensive brand identity services.
            </p>
            
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                <p className="text-sm text-neutral-300 font-medium">Level 1 Fiverr Seller</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                <p className="text-sm text-neutral-300 font-medium">Web & Graphic Maintenance (MEOD MUSIC)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                <p className="text-sm text-neutral-300 font-medium">Consistent High Success Score</p>
              </div>
            </div>
          </div>

          <div className="z-10 w-full lg:w-auto shrink-0">
            {/* REPLACE WITH YOUR ACTUAL WIX URL */}
            <a 
              href="https://your-wix-portfolio-url.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 rounded-lg font-medium text-sm text-black bg-[#ff6b00] hover:bg-[#e05e00] transition-colors duration-300 shadow-lg shadow-[#ff6b00]/10 group"
            >
              <span>View Wix Design Gallery</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* --- PART 3: The Figma Modal (Pop-up) Overlay --- */}
      {selectedDesign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/80 transition-opacity">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#121212] rounded-2xl border border-neutral-700 shadow-2xl custom-scrollbar">
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-neutral-900 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-10 items-center">
              
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
                <Image 
                  src={selectedDesign.image} 
                  alt={selectedDesign.title}
                  fill
                  className="object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-mono text-neutral-500 mb-2">{selectedDesign.event}</p>
                  <h4 className="text-3xl font-semibold text-white">{selectedDesign.title}</h4>
                  <p className="text-sm text-[#ff6b00] mt-1 font-medium">{selectedDesign.tools}</p>
                </div>

                <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                  <p>{selectedDesign.description}</p>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <p className="text-xs text-neutral-500 mb-2 font-mono uppercase">Design Team</p>
                  <div className="flex flex-wrap gap-3">
                    {selectedDesign.team.map((member, index) => (
                      <React.Fragment key={index}>
                        <a href={member.url} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-300 hover:text-[#ff6b00] transition-colors">
                          {member.name}
                        </a>
                        {index < selectedDesign.team.length - 1 && <span className="text-neutral-700">•</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}