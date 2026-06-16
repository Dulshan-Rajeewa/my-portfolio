import Hero from "@/components/Hero";
// You will uncomment these as we build them:
// import Projects from "@/components/Projects";
// import Research from "@/components/Research";
// import Design from "@/components/Design";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white selection:bg-[#ff6b00] selection:text-white font-sans overflow-x-hidden">
      {/* 1. The Hero Section we just built */}
      <Hero />

      {/* 2. Future sections will stack cleanly below */}
      {/* <Projects /> */}
      {/* <Research /> */}
      {/* <Design /> */}
    </main>
  );
}