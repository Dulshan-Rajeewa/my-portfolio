"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const researchPapers = [
  {
    id: "beyond-nlp",
    tag: "IEEE Standard",
    target: "Target: KDU IRC 2026",
    title: "Beyond NLP: A Conceptual Framework for Keystroke-Based Emotion Recognition in Digital Communication",
    content: [
      "Traditional emotion recognition models rely heavily on Natural Language Processing (NLP) or facial recognition, raising significant privacy concerns and requiring high computational overhead.",
      "This research introduces a novel, privacy-preserving framework that shifts the paradigm to behavioral biometrics. By analyzing keystroke dynamics—specifically typing speed, mechanical pressure, and micro-hesitations—the framework facilitates low-latency, on-device emotion state identification without ever parsing the user's semantic content or accessing visual data."
    ],
    team: [
      { name: "UD Rajeewa", url: "#" },
      { name: "PHMLCB Abeyrathne", url: "#" },
      { name: "MPBR Perera", url: "#" },
      { name: "IGSB Rupasingha", url: "#" }
    ],
    image: "/projects/research.jpg"
  },
  {
    id: "future-research-2027",
    tag: "In Progress",
    target: "Target: 2027 Publication",
    title: "Upcoming Research Initiative",
    content: [
      "Currently conceptualizing the next phase of research to be conducted during my final year of software engineering studies.",
      "This space is reserved for my upcoming 2027 academic publication, which will continue to focus on scalable systems, advanced biometrics, or low-latency architecture."
    ],
    team: [
      { name: "Dulshan Rajeewa", url: "#" }
    ],
    image: "/projects/research-placeholder.jpg"
  }
];

export default function Research() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. Navigation Handlers
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? researchPapers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === researchPapers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="research" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-sm font-mono tracking-wider text-[#ff6b00] uppercase mb-2">R&D</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Academic Research</h3>
          </div>
          
          {/* Custom Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 transition-all duration-300 focus:outline-none"
              aria-label="Previous research paper"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 transition-all duration-300 focus:outline-none"
              aria-label="Next research paper"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 4. The Carousel Container */}
        <div className="relative w-full overflow-hidden rounded-2xl">
          
          {/* The Sliding Track */}
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {researchPapers.map((paper) => (
              
              // Individual Card (Takes up 100% of the container width)
              <div key={paper.id} className="w-full shrink-0">
                <div className="flex flex-col-reverse lg:flex-row gap-12 items-center bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-2xl p-6 sm:p-10 border border-neutral-800 relative h-full">
                  
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b00] opacity-[0.03] blur-3xl rounded-full pointer-events-none" />

                  {/* Content Side */}
                  <div className="w-full lg:w-3/5 space-y-6 z-10">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-2 py-1 text-[10px] font-mono font-medium bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 rounded-md">
                          {paper.tag}
                        </span>
                        <span className="text-xs font-mono text-neutral-500">{paper.target}</span>
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-semibold text-white leading-snug">
                        {paper.title}
                      </h4>
                    </div>

                    <div className="space-y-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
                      {paper.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-neutral-800 mt-6">
                      <p className="text-xs text-neutral-500 mb-3 font-mono uppercase tracking-wider">
                        Co-Authored with
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {paper.team.map((member, index) => (
                          <React.Fragment key={index}>
                            <a href={member.url} className="text-xs text-neutral-300 hover:text-[#ff6b00] transition-colors">
                              {member.name}
                            </a>
                            {index < paper.team.length - 1 && <span className="text-neutral-700">•</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="w-full lg:w-2/5 relative aspect-[4/3] lg:aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl flex items-center justify-center group">
                    <Image 
                      src={paper.image} 
                      alt={paper.title}
                      fill
                      className="object-cover brightness-75 saturate-75 contrast-110 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105 transition-all duration-500"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    {/* Fallback abstract wireframe if image is missing */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 p-8 space-y-4">
                      <div className="w-full h-8 bg-neutral-800/50 rounded-md" />
                      <div className="w-5/6 h-4 bg-neutral-800/50 rounded-md" />
                      <div className="w-full h-32 bg-neutral-800/30 border border-dashed border-neutral-700 rounded-md mt-4" />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Carousel Indicators (Dots) */}
        <div className="flex justify-center gap-3 mt-8">
          {researchPapers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-[#ff6b00] w-6" : "bg-neutral-700 hover:bg-neutral-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}