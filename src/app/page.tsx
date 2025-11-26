import { Metadata } from "next";
import Header from "@/components/ui/Header";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSections";
import ContactSection from "@/components/sections/ContactSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: "Ataa Ur Rasool - Portfolio",
  description: "Software Engineer",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl backdrop-blur-md bg-white/10 p-12 rounded-3xl border border-white/20 shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Muhammad Ataa Ur Rasool
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mt-4">Software Engineer</p>
          <div className="mt-8 flex gap-4 justify-center">
            <a href="#about" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              Explore My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
