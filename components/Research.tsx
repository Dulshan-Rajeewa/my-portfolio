"use client";

import React from 'react';
import Image from 'next/image';

export default function Research() {
  return (
    <section id="research" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-wider text-[#ff6b00] uppercase mb-2">R&D</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Academic Research</h3>
        </div>

        {/* Research Card */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-2xl p-6 sm:p-10 border border-neutral-800 relative overflow-hidden">
          
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b00] opacity-[0.03] blur-3xl rounded-full pointer-events-none" />

          {/* Left Side: Content */}
          <div className="w-full lg:w-3/5 space-y-6 z-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 text-[10px] font-mono font-medium bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 rounded-md">IEEE Standard</span>
                <span className="text-xs font-mono text-neutral-500">Target: KDU IRC 2026</span>
              </div>
              <h4 className="text-2xl font-semibold text-white leading-snug">
                Beyond NLP: A Conceptual Framework for Keystroke-Based Emotion Recognition in Digital Communication
              </h4>
            </div>

            <div className="space-y-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              <p>
                Traditional emotion recognition models rely heavily on Natural Language Processing (NLP) or facial recognition, raising significant privacy concerns and requiring high computational overhead. 
              </p>
              <p>
                This research introduces a novel, privacy-preserving framework that shifts the paradigm to behavioral biometrics. By analyzing keystroke dynamics—specifically typing speed, mechanical pressure, and micro-hesitations—the framework facilitates low-latency, on-device emotion state identification without ever parsing the user&apos;s semantic content or accessing visual data.
              </p>
            </div>

            {/* Team Members Section */}
            <div className="pt-4 border-t border-neutral-800">
              <p className="text-xs text-neutral-500 mb-2 font-mono uppercase">Co-Authored with Team Visual Vibers</p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="text-xs text-neutral-300 hover:text-[#ff6b00] transition-colors">Dulshan Rajeewa</a>
                <span className="text-neutral-700">•</span>
                <a href="#" className="text-xs text-neutral-300 hover:text-[#ff6b00] transition-colors">Teammate One</a>
                <span className="text-neutral-700">•</span>
                <a href="#" className="text-xs text-neutral-300 hover:text-[#ff6b00] transition-colors">Teammate Two</a>
                <span className="text-neutral-700">•</span>
                <a href="#" className="text-xs text-neutral-300 hover:text-[#ff6b00] transition-colors">Teammate Three</a>
              </div>
            </div>
          </div>

          {/* Right Side: Abstract/Paper Image Graphic */}
          <div className="w-full lg:w-2/5 relative aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 group shadow-2xl flex items-center justify-center">
             <Image 
              src="/projects/research.jpg" 
              alt="Conceptual Framework Diagram"
              fill
              className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Fallback abstract wireframe if image is missing */}
            <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 p-8 space-y-4">
              <div className="w-full h-8 bg-neutral-800/50 rounded-md" />
              <div className="w-5/6 h-4 bg-neutral-800/50 rounded-md" />
              <div className="w-full h-32 bg-neutral-800/30 border border-dashed border-neutral-700 rounded-md mt-4" />
              <p className="text-neutral-600 font-mono text-[10px] mt-4 uppercase tracking-widest">[ Framework Diagram ]</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}