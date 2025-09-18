"use client";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="w-full 2xl:max-w-7xl mx-auto flex items-start justify-between bg-[#0F172A] z-10">
      <div className="jelly-wrapper z-0">
        <div className="jelly-circle z-0"></div>
      </div>
      <aside className="hidden md:block text-white sticky top-0 h-screen">
        <Sidebar />
      </aside>

      <main className="px-6 py-10  space-y-12 md:space-y-32">
        <Hero />
        <About />
        <Experience />
        <Projects />
        {/* <Contact /> */}
      </main>
    </div>
  );
}
