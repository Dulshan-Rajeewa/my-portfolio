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
    githubUrl: "https://github.com/Dulshan-Rajeewa/stagetrace",
    team: [
      { name: "Dulshan Rajeewa", url: "#" },
      { name: "Nabil Mahmoor", url: "https://linkedin.com/in/nabil-mahmoor" },
      { name: "Behan Ravishka", url: "https://www.linkedin.com/in/behanravishkaperera" },
      { name: "Heshan", url: "https://linkedin.com/in/heshan-dharmasiri-199859347" }
    ]
  },
  {
    id: "life-logging-app",
    title: "Life Logging App",
    category: "Android Application",
    event: "3rd Year Mobile Computing Project",
    image: "/projects/life-logging.jpg",
    problem: "Users often lack a simple, offline-capable platform to consistently log daily activities, reflect on personal growth, and track their daily progress without being overwhelmed by cluttered interfaces.",
    solution: "Developed a minimal, offline-first Android application using Kotlin and Jetpack Compose. The app features a daily activity timeline, category badges, and animated summary cards to provide a seamless personal life-logging experience.",
    githubUrl: "https://github.com/Dulshan-Rajeewa/Life-Logging-App",
    team: [
      { name: "Dulshan Rajeewa", url: "#" },
      { name: "Behan Ravishka", url: "https://www.linkedin.com/in/behanravishkaperera" }
    ]
  },
  {
    id: "geodoze",
    title: "GeoDoze",
    category: "Mobile Application",
    event: "Startup Competition",
    image: "/projects/geodoze.jpg",
    problem: "Public transit commuters frequently miss their stops due to falling asleep or getting distracted, and standard time-based alarms are ineffective against unpredictable traffic and transit delays.",
    solution: "Engineered a smart commuter alarm using Flutter that utilizes GPS geofencing to trigger alerts based on location. Implemented reliable background tracking via a foreground service and smart overshoot detection algorithms to ensure accurate, full-screen alarms even with screen-off GPS drift.",
    githubUrl: "https://github.com/Dulshan-Rajeewa/geo_doze",
    team: [
      { name: "Dulshan Rajeewa", url: "#" },
      { name: "Nabil Mahmoor", url: "https://linkedin.com/in/nabil-mahmoor" },
      { name: "Behan Ravishka", url: "https://www.linkedin.com/in/behanravishkaperera" },
      { name: "Heshan", url: "https://linkedin.com/in/heshan-dharmasiri-199859347" }
    ]
  },
  {
    id: "kdu-sms",
    title: "KDU Student Management System",
    category: "Full-Stack Web App",
    event: "3rd Year SCTT Module Project",
    image: "/projects/kdu-sms.jpg",
    problem: "University administration requires secure, scalable systems to manage complex student demographics, dynamic course enrollments, and strict auditing of administrative actions without encountering performance bottlenecks.",
    solution: "Architected a containerized Student Management System utilizing a Node.js Microservices Architecture and a React frontend. Engineered features including smart ID generation, bulk academic operations, and an independent, immutable audit trailing service, all deployed seamlessly via Docker.",
    githubUrl: "https://github.com/Dulshan-Rajeewa/Student_Management_System",
    team: [
      { name: "Dulshan Rajeewa", url: "#" }
    ]
  },
  {
    id: "glance",
    title: "Glance AI",
    category: "Full-Stack AI Application",
    event: "DEV{thon} 3.0 (UOM)",
    image: "/projects/glance.jpg",
    problem: "Manually scheduling events from scattered, multi-modal sources—like physical flyers, voice memos, or unstructured text—is tedious, disjointed, and leads to missed appointments.",
    solution: "Engineered an intelligent scheduling assistant using Next.js 16 and Mistral's Pixtral vision model. The platform seamlessly parses text, audio, and image inputs to extract event metadata, enabling one-click Google Calendar synchronization and automated task management.",
    githubUrl: "https://github.com/Dulshan-Rajeewa/glance-main",
    liveUrl: "https://glance-beta.vercel.app/",
    team: [
      { name: "Dulshan Rajeewa", url: "#" },
      { name: "Nabil Mahmoor", url: "https://linkedin.com/in/nabil-mahmoor" },
      { name: "Behan Ravishka", url: "https://www.linkedin.com/in/behanravishkaperera" },
    ]
  },
  {
    id: "ks-transport",
    title: "KS Transport Management App",
    category: "Mobile Application",
    event: "Freelance Client Project",
    image: "/projects/ks-transport.jpg",
    problem: "Logistics companies often rely on manual, paper-based systems to track fleet trips and categorized expenses like fuel and maintenance, leading to inaccurate real-time profitability monitoring.",
    solution: "Developed a modern, responsive Flutter mobile application integrated with Firebase Firestore for real-time data synchronization. The system utilizes Provider for state management and features a comprehensive analytics dashboard to automatically calculate net profit, total kilometers driven, and track operational expenses.",
    githubUrl: "https://github.com/Dulshan-Rajeewa/Transport-Flutter-app",
    team: [
      { name: "Dulshan Rajeewa", url: "#" }
    ]
  },
  {
    id: "medihunt",
    title: "MediHunt",
    category: "Cloud-Native Web App",
    event: "Innovate with Ballerina 2025",
    image: "/projects/medihunt.jpg",
    problem: "Patients frequently struggle to locate specific medications in their area, while pharmacies lack streamlined, real-time inventory discovery platforms, leading to critical delays in healthcare access.",
    solution: "Engineered a comprehensive medicine finder using a cloud-native Ballerina backend and React 18 frontend. Integrated Supabase for real-time data synchronization, secure JWT authentication, and advanced location-based queries to seamlessly bridge the gap between pharmacy inventories and patient needs.",
    githubUrl: "https://github.com/Dulshan-Rajeewa/Medicine-finder-application",
    team: [
      { name: "Dulshan Rajeewa", url: "#" },
      { name: "Behan Ravishka", url: "https://www.linkedin.com/in/behanravishkaperera" }
    ]
  },
  {
    id: "university-info-system",
    title: "University Information System",
    category: "Desktop Application",
    event: "1st Year OOP Project",
    image: "/projects/university-system.jpg",
    problem: "Managing university operations manually leads to fragmented data across departments, making it difficult to securely track student enrollments, faculty assignments, and grades.",
    solution: "Built a centralized desktop application using Java Swing and MySQL, focusing on strong Object-Oriented Programming (OOP) principles. The system features role-based access control and comprehensive GUI dashboards to streamline administrative and academic workflows via JDBC.",
    githubUrl: "https://github.com/Dulshan-Rajeewa/university-information-system",
    team: [
      { name: "Dulshan Rajeewa", url: "#" },
      { name: "Behan Ravishka", url: "https://www.linkedin.com/in/behanravishkaperera" }
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof engineeringProjects[0] | null>(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#0a0a0a] border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-wider text-[#ff6b00] uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Engineering Projects</h3>
        </div>

        {/* The Grid of Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-[#121212] rounded-xl overflow-hidden border border-neutral-800 hover:border-[#ff6b00]/50 transition-all duration-300 cursor-pointer group flex flex-col h-full"
            >
              <div className="relative w-full h-48 bg-neutral-900 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
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

      {/* The Modal (Pop-up) Overlay */}
      {selectedProject && (
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
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

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

                {/* --- ADDED GITHUB BUTTON --- */}
                {selectedProject.githubUrl && (
                  <div className="pt-2">
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-500 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                      </svg>
                      View Source Code
                    </a>
                  </div>
                )}

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