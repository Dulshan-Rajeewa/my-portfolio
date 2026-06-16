"use client";

import React from 'react';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#0a0a0a] border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-wider text-[#ff6b00] uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Engineering Projects</h3>
        </div>

        {/* Project Card: StageTrace */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#121212] rounded-2xl p-6 sm:p-10 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300">
          
          {/* Left Side: Image Placeholder */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 group">
            {/* Replace the src with your actual image path */}
            <Image 
              src="/projects/stagetrace.jpg" 
              alt="StageTrace Dashboard"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              // Fallback for when you don't have the image yet:
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Placeholder styling if image is missing */}
            <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-mono text-sm -z-10">
              [ StageTrace Image Placeholder ]
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-mono text-neutral-500 mb-2">CodeSprint 11 - IEEE IIT</p>
              <h4 className="text-2xl font-semibold text-white">StageTrace</h4>
              <p className="text-sm text-[#ff6b00] mt-1 font-medium">B2B SaaS Architecture</p>
            </div>

            <div className="space-y-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-neutral-200">The Problem:</strong> In complex deployment pipelines, configuration drift between staging and production server nodes frequently leads to environment parity failures, causing unexpected downtime during releases.
              </p>
              <p>
                <strong className="text-neutral-200">The Solution:</strong> Developed a continuous snapshotting agent that autonomously monitors server environments. The system calculates a real-time &quot;Environment Parity Score,&quot; providing engineering teams with an immediate, quantifiable metric of node synchronization before deployment.
              </p>
            </div>

            {/* Team Members Section */}
            <div className="pt-4 border-t border-neutral-800">
              <p className="text-xs text-neutral-500 mb-2 font-mono uppercase">Built with Team Visual Vibers</p>
              <div className="flex flex-wrap gap-3">
                <a href="#" target="_blank" className="text-xs text-neutral-300 hover:text-[#ff6b00] transition-colors">Dulshan Rajeewa</a>
                <span className="text-neutral-700">•</span>
                <a href="https://linkedin.com/in/teammember1" target="_blank" className="text-xs text-neutral-300 hover:text-[#ff6b00] transition-colors">Teammate One</a>
                <span className="text-neutral-700">•</span>
                <a href="https://linkedin.com/in/teammember2" target="_blank" className="text-xs text-neutral-300 hover:text-[#ff6b00] transition-colors">Teammate Two</a>
                <span className="text-neutral-700">•</span>
                <a href="https://linkedin.com/in/teammember3" target="_blank" className="text-xs text-neutral-300 hover:text-[#ff6b00] transition-colors">Teammate Three</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}