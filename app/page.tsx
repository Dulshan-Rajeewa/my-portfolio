import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Design from "@/components/Design";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white selection:bg-[#ff6b00] selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. The Sticky Navigation Bar */}
      <Navbar />

      {/* 2. The Page Sections */}
      <div id="home">
        <Hero />
      </div>
      <Projects />
      <Research />
      <Design />
      
    </main>
  );
}