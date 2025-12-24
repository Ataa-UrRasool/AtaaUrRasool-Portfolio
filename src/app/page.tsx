"use client";

import Header from "@/components/ui/Header";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSections";
import ContactSection from "@/components/sections/ContactSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ParticleBackground from "@/components/ui/ParticleBackground";
import FloatingShapes from "@/components/ui/FloatingShapes";
import AnimatedText from "@/components/ui/AnimatedText";
import TypingAnimation from "@/components/ui/TypingAnimation";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white relative overflow-hidden">
      {/* Global Effects */}
      <ScrollProgress />
      <CustomCursor />
      <ParticleBackground />
      <FloatingShapes />

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-6xl glass-card p-12 md:p-16 rounded-3xl relative z-10">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl" />
          
          <div className="relative z-10">
            {/* Mobile: 2 lines */}
            <div className="md:hidden">
              <AnimatedText
                text={`Muhammad Ataa Ur
Rasool`}
                className="text-3xl font-heading font-bold mb-6 gradient-text"
                delay={0.5}
              />
            </div>
            
            {/* Desktop: 1 line */}
            <div className="hidden md:block">
              <AnimatedText
                text="Muhammad Ataa Ur Rasool"
                className="text-6xl lg:text-7xl font-heading font-bold mb-6 gradient-text"
                delay={0.5}
              />
            </div>
            <TypingAnimation
              text="Software Engineer"
              className="text-xl md:text-3xl text-gray-200 mt-6 mb-8 font-heading"
              delay={1500}
            />
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.8 }}
            >
              <a
                href="#about"
                className="group inline-block px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full font-heading font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all relative overflow-hidden"
              >
                <span className="relative z-10">Explore My Work</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0.2 }}
                  transition={{ duration: 0.5 }}
                />
              </a>
            </motion.div>
          </div>
        </div>
        
        <ScrollIndicator />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      {/* <SkillsSection /> */}

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
