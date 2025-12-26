import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden text-white">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 opacity-60 blur-3xl" />

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#121212] to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20">
        <Navbar />
        <div className="container mt-24 mx-auto px-6 md:px-12 py-4 space-y-24">
          <section id="hero">
            <HeroSection />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="contact">
            <EmailSection />
          </section>
        </div>
      </div>
    </main>
  );
}
