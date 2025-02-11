import { Metadata } from "next";
import Header from "@/components/ui/Header";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSections";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Ataa Ur Rasool - Portfolio",
  description: "Software Engineer",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Muhammad Ataa Ur Rasool</h1>
          <p className="mt-2">Software Engineer</p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
