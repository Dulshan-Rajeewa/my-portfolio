"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// 1. Define the data structure for your projects
const engineeringProjects = [
  {
    id: "stagetrace",
    title: "StageTrace",
    category: "B2B SaaS Architecture",
    event: "CodeSprint 11 - IEEE IIT",
    image: "/projects/stagetrace.jpg",
    problem: "In complex deployment pipelines, configuration drift between staging and production server nodes frequently leads to environment parity failures, causing unexpected downtime during releases.",
    solution: "Developed a continuous snapshotting agent that autonomously monitors server environments. The system calculates a real-time 'Environment Parity Score,' providing engineering teams with an immediate, quantifiable metric of node synchronization before deployment.",
    team: [
      { name: "Dulshan Rajeewa", url: "#" },
      { name: "Teammate One", url: "https://linkedin.com/in/teammember1" },
      { name: "Teammate Two", url: "https://linkedin.com/in/teammember2" },
      { name: "Teammate Three", url: "https://linkedin.com/in/teammember3" }
    ]
  },
  // You can easily add your other websites/apps here!
  {
    id: "project-two",
    title: "E-Commerce Web Platform",
    category: "Full-Stack Web App",
    event: "Personal Project",
    image: "/projects/ecommerce.jpg",
    problem: "Local businesses struggle to transition to digital storefronts due to complex setup processes and high transaction fees on existing platforms.",
    solution: "Built a lightweight, customizable e-commerce template using Next.js and Tailwind CSS, featuring an integrated headless CMS for easy product management and a streamlined checkout flow.",
    team: [
      { name: "Dulshan Rajeewa", url: "#" }
    ]
  }
];

export default function Projects() {
  // 2. State to track which project is currently selected for the pop-up
  const [selectedProject, setSelectedProject] = useState<typeof engineeringProjects[0] | null>(null);

  // Helper to close the modal
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#0a0a0a] border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-wider text-[#ff6b00] uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Engineering Projects</h3>
        </div>

        {/* 3. The Grid of Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-[#121212] rounded-xl overflow-hidden border border-neutral-800 hover:border-[#ff6b00]/50 transition-all duration-300 cursor-pointer group flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="relative w-full h-48 bg-neutral-900 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              {/* Card Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <p className="text-xs font-mono text-neutral-500 mb-1 truncate">{project.event}</p>
                  <h4 className="text-xl font-semibold text-white mb-1">{project.title}</h4>
                  <p className="text-sm text-[#ff6b00] font-medium">{project.category}</p>
                </div>
                <div className="mt-6 flex items-center text-sm text-neutral-400 group-hover:text-white transition-colors">
                  <span>View Details</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. The Modal (Pop-up) Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/80 transition-opacity">
          
          {/* Modal Content Container */}
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#121212] rounded-2xl border border-neutral-700 shadow-2xl custom-scrollbar">
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-neutral-900 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* The Detailed View (Reused from your previous layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-10 items-center">
              
              {/* Left Side: Image */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Right Side: Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-mono text-neutral-500 mb-2">{selectedProject.event}</p>
                  <h4 className="text-3xl font-semibold text-white">{selectedProject.title}</h4>
                  <p className="text-sm text-[#ff6b00] mt-1 font-medium">{selectedProject.category}</p>
                </div>

                <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                  <p><strong className="text-white">The Problem:</strong> {selectedProject.problem}</p>
                  <p><strong className="text-white">The Solution:</strong> {selectedProject.solution}</p>
                </div>

                {/* Team Members */}
                <div className="pt-4 border-t border-neutral-800">
                  <p className="text-xs text-neutral-500 mb-2 font-mono uppercase">Team Members</p>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.team.map((member, index) => (
                      <React.Fragment key={index}>
                        <a href={member.url} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-300 hover:text-[#ff6b00] transition-colors">
                          {member.name}
                        </a>
                        {index < selectedProject.team.length - 1 && <span className="text-neutral-700">•</span>}
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