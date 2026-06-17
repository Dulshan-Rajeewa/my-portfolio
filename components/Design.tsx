"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// 1. Array for your Figma competition designs
const figmaDesigns = [
  {
    id: "pulse-ix25",
    title: "Pulse", 
    category: "UI/UX Prototype (Top 10 Finalist)",
    event: "IX’25 UI/UX Challenge - IEEE IIT", 
    image: "/projects/pulse.jpg", 
    description: "Designed for a 2050 'Blended Reality', Pulse is a conceptual emotion-aware messaging application. It seamlessly integrates passive biometric data from smartwatches and VR headsets to understand user emotional states. The high-fidelity prototype employs a minimalist dark mode aesthetic and professional UI/UX motion graphics to translate complex physiological signals into intuitive, immersive communication.",
    tools: "Figma • FigJam • UI/UX Motion Graphics",
    youtubeUrl: "https://youtu.be/HH5w0udlCnM",
    figmaUrl: "https://www.figma.com/proto/kIUExdU9jcwaSkjvx8UlQW/IX-25---Visual-Vibers?node-id=12-7&p=f&t=X47FYqf4P5eJh6LK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12%3A7&show-proto-sidebar=1",
    team: [
      { name: "Dulshan Rajeewa", url: "#" },
      { name: "Nabil Mahmoor", url: "https://linkedin.com/in/nabil-mahmoor" },
      { name: "Behan Ravishka", url: "https://www.linkedin.com/in/behanravishkaperera" }
    ]
  },
  {
    id: "deep-cre8x",
    title: "Deep", 
    category: "UI/UX App Design (Top 10 Finalist)",
    event: "Cre8x 2.0 Designathon - BCS KDU", 
    image: "/projects/deep.jpg", 
    description: "Current ocean conservation platforms are often overly scientific or limited to simple donations, leaving users feeling disconnected from the overwhelming scale of marine plastic pollution. To solve this, I designed 'Deep' (Project Ocean Guardian), a mobile app that transforms conservation into an engaging, gamified social experience. The high-fidelity prototype focuses on habit-building UX, visualizing the real-world impact of individual actions, and connecting users for local community cleanups.",
    tools: "Figma • UI/UX Research • Gamification Strategy",
    youtubeUrl: "https://youtube.com/shorts/x2M8T0D0C_4?feature=share",
    figmaUrl: "https://www.figma.com/proto/Ilp8j0tODeLYc7j6MiH4ON/Cre8x-Round-01?page-id=0%3A1&node-id=3-21&viewport=-31%2C-173%2C0.38&t=ZHzSqxoDRs64NNOR-1&scaling=scale-down&content-scaling=fixed",
    team: [
      { name: "Dulshan Rajeewa", url: "#" },
      { name: "Nabil Mahmoor", url: "https://linkedin.com/in/nabil-mahmoor" },
      { name: "Behan Ravishka", url: "https://www.linkedin.com/in/behanravishkaperera" }
    ]
  }
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
                  <p className="text-sm text-neutral-300 font-medium">
                    Web & Graphic Maintenance (
                    <a
                      href="https://meodmusic.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 underline"
                    >
                      MEOD MUSIC
                    </a>
                    )
                  </p>
                </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                <p className="text-sm text-neutral-300 font-medium">Consistent High Success Score</p>
              </div>
            </div>
          </div>

          <div className="z-10 w-full lg:w-auto shrink-0">
            <a 
              href="https://dulshanrj1.wixsite.com/dulshan/portfolio-1" 
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

                {/* --- ADDED YOUTUBE AND FIGMA BUTTONS --- */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {selectedDesign.youtubeUrl && (
                    <a 
                      href={selectedDesign.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium bg-red-600/10 text-red-500 hover:bg-red-600 hover:text-white border border-red-600/20 hover:border-red-600 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                        <path d="M21.582 6.186a2.506 2.506 0 0 0-1.766-1.766C18.258 4 12 4 12 4s-6.258 0-7.816.42a2.506 2.506 0 0 0-1.766 1.766C2 7.742 2 12 2 12s0 4.258.418 5.814a2.506 2.506 0 0 0 1.766 1.766C5.742 20 12 20 12 20s6.258 0 7.816-.42a2.506 2.506 0 0 0 1.766-1.766C22 16.258 22 12 22 12s0-4.258-.418-5.814zM10 15.464V8.536L16 12l-6 3.464z"/>
                      </svg>
                      Watch Demo
                    </a>
                  )}

                  {selectedDesign.figmaUrl && (
                    <a 
                      href={selectedDesign.figmaUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-500 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z" fill="#0ACF83"/>
                        <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
                        <path d="M38 9.5C38 14.7467 33.7467 19 28.5 19H19V0H28.5C33.7467 0 38 4.25329 38 9.5Z" fill="#FF7262"/>
                        <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5Z" fill="#1ABCFE"/>
                        <path d="M19 47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5Z" fill="#A259FF"/>
                      </svg>
                      View Figma Prototype
                    </a>
                  )}
                </div>

                <div className="pt-4 border-t border-neutral-800 mt-2">
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