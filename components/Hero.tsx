"use client";

import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 lg:px-24 bg-[#0d0d0d] text-[#ffffff] overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff6b00] rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#ff6b00] rounded-full blur-[120px] opacity-5 pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Text & Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <p className="text-sm sm:text-base font-mono tracking-wider text-[#ff6b00] uppercase">
              Hi, I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f3f4f6]">
              Dulshan Rajeewa
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-400 mt-2">
              Software Engineering Undergraduate
            </h2>
          </div>

          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Specializing in full-stack systems and privacy-preserving behavioral biometrics. 
            Building scalable cloud architectures and exploring low-latency, on-device machine learning frameworks.
          </p>

          {/* Social Links (SVG Icons) */}
          <div className="flex justify-center lg:justify-start items-center gap-5 pt-2">
            {/* GitHub */}
            <a 
              href="https://github.com/Dulshan-Rajeewa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-[#ff6b00] hover:border-[#ff6b00] transition-all duration-300"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="http://www.linkedin.com/in/dulshanrajeewa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-[#ff6b00] hover:border-[#ff6b00] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.015-.51.09-.69.2-.5.65-1 1.41-1 1 0 1.39.75 1.39 1.86v4.5h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5.2v8.37H8z"/>
              </svg>
            </a>
          </div>

          {/* Core Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-lg font-medium text-black bg-[#ff6b00] hover:bg-[#e05e00] transition-colors duration-300 shadow-lg shadow-[#ff6b00]/10"
            >
              Get In Touch
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-lg font-medium text-neutral-300 bg-transparent border border-neutral-800 hover:border-neutral-600 hover:text-white transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Column: Visual Frame */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-b from-neutral-800 to-transparent">
            <div className="w-full h-full rounded-full bg-[#121212] flex items-center justify-center overflow-hidden border border-neutral-900 shadow-2xl">
              
              {
              <img 
                src="/profile_new.png" 
                alt="Dulshan Rajeewa" 
                className="w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity"
              /> 
              }
            </div>

            {/* Metrics Widget Overlay */}
            <div className="absolute -bottom-4 right-4 sm:right-8 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 px-5 py-3 rounded-xl shadow-xl">
              <p className="text-xs text-neutral-400 font-mono">Current Status</p>
              <p className="text-sm font-semibold text-[#ff6b00]">Available for Internships</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}