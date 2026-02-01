"use client";

import { useState } from "react";
import { Project } from "@/types/project";
import ProjectCard from "../ui/ProjectCard";
import FadeIn from "../ui/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "../ui/ProjectModal";

const projects: Project[] = [
  {
    id: 12,
    title: "PaperPal",
    description:
      "A production-ready, full-stack AI platform designed to automate academic research, literature review, and knowledge synthesis. Seamlessly integrates multi-agent workflows with a modern web and mobile interface.",
    technologies: ["Python", "FastAPI", "React", "LangChain", "PostgreSQL", "Docker", "Gemini API"],
    imageUrl: "/paperpal.png",
    githubUrl: "https://github.com/Ataa-UrRasool/",
    category: "AI",
    featured: true,
    period: "Jan 2026 - Jan 2026",
    features: [
      "Multi-Agent Research System using LangGraph for autonomous planning and reporting.",
      "Intelligent Literature Search integrating Arxiv/Semantic Scholar with PDF extraction.",
      "Advanced RAG Pipeline with ChromaDB and Context-Aware Synthesis.",
      "Full-Stack Architecture (React + FastAPI + PostgreSQL).",
      "Native Android Companion App built with Kotlin."
    ],
    highlights: [
      "Built a state-machine–based agent workflow with LangGraph.",
      "Optimized large-PDF processing with async extraction.",
      "Implemented dual-provider LLM fallback for high availability."
    ]
  },
  {
    id: 13,
    title: "Voice AI Assistant",
    description:
      "A production-ready, voice-enabled AI assistant designed to provide accurate, real-time responses to school-related queries through natural speech interaction using RAG and Multi-Agent reasoning.",
    technologies: ["Python", "React", "FastAPI", "Web Speech API", "LangChain", "RAG"],
    imageUrl: "/voice-ai.png",
    githubUrl: "https://github.com/Ataa-UrRasool/",
    category: "AI",
    featured: true,
    period: "Jan 2026 - Jan 2026",
    features: [
      "Real-time speech-to-text (STT) and text-to-speech (TTS) via Web Speech API.",
      "Multi-Agent RAG System for intent classification and document retrieval.",
      "Context-Aware multi-turn conversational capabilities."
    ],
    highlights: [
      "Architected independent modular components for scalable development.",
      "Optimized chunking and semantic retrieval for low-latency responses."
    ]
  },
  {
    id: 1,
    title: "DASPER – AI-Powered Building Damage Assessment",
    description:
      "Production-ready AI platform for rapid building damage assessment during disasters. Custom CNN model with EfficientNet-B4, computer vision pipelines, and cross-platform mobile app supporting offline field usage. Reduces assessment time from weeks to minutes.",
    technologies: ["React Native", "Expo", "Flask", "PyTorch", "Python", "OpenCV", "MongoDB", "Firebase"],
    imageUrl: "/dasper.png",
    githubUrl: "https://github.com/Ataa-UrRasool/",
    category: "AI",
    featured: true,
  },
  {
    id: 2,
    title: "CodeReview: AI-Powered Platform",
    description:
      "AI-powered code review platform using LangChain and OpenAI API for intelligent code analysis.",
    technologies: ["Python", "FastAPI", "LangChain", "React", "OpenAI"],
    imageUrl: "/codeReviewer.png",
    githubUrl: "https://github.com/Ataa-UrRasool/",
    category: "AI",
    featured: true,
  },
  {
    id: 3,
    title: "BankEasy",
    description:
      "Full-stack banking app with Spring Boot and React, featuring microservices architecture.",
    technologies: ["Java", "Spring Boot", "MySQL", "React", "JPA"],
    imageUrl: "/BankEasy.jpg",
    githubUrl: "https://github.com/Ataa-UrRasool/",
    category: "Full-Stack",
    featured: true,
  },
  {
    id: 4,
    title: "Pulse - Hospital Management",
    description:
      "Comprehensive hospital management system with real-time synchronization and CRUD operations.",
    technologies: ["Java", "JavaFX", "MySQL", "Scene Builder"],
    imageUrl: "/hospital-ms.jpeg",
    githubUrl: "https://github.com/Ataa-UrRasool/",
    category: "Full-Stack",
  },
  {
    id: 5,
    title: "CafeBytes",
    description:
      "Cafe POS system with modules for Manager, Employee, and Guest using N-tier architecture.",
    technologies: ["C#", "WinForms", "SQL Server"],
    imageUrl: "/cafe-ms.jpeg",
    githubUrl: "https://github.com/Ataa-UrRasool/CafeBytes",
    category: "Backend",
  },
  {
    id: 6,
    title: "JetNotes – Simple Notes App",
    description:
      "Minimalist notes application built with Kotlin and Jetpack Compose. Includes ROOM database, Hilt DI, MVVM, LiveData, Coroutines, and structured DAO interactions.",
    technologies: ["Kotlin", "Jetpack Compose", "ROOM", "Hilt", "MVVM", "Coroutines"],
    imageUrl: "/jetNotes.png",
    githubUrl: "https://github.com/Ataa-UrRasool/",
    category: "Frontend",
  },
  {
    id: 7,
    title: "MoviesApp – Android App",
    description:
      "Android app using Kotlin & Jetpack Compose with NavController, Coil for images, and runtime permissions. Practiced navigation and UI rendering.",
    technologies: ["Kotlin", "Jetpack Compose", "Coil", "Android"],
    imageUrl: "/moviesApp.jpg",
    githubUrl: "https://github.com/Ataa-UrRasool/",
    category: "Frontend",
  },
  {
    id: 8,
    title: "Instagram UI Clone – Android App",
    description:
      "Instagram UI replica built using Kotlin and Jetpack Compose M3. Includes splash screens, popups, and UI layout fundamentals.",
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "Android Studio"],
    imageUrl: "/instaClone.png",
    githubUrl: "https://github.com/Ataa-UrRasool/",
    category: "Frontend",
  },
  {
    id: 9,
    title: "WhatsApp UI Clone – Android App",
    description:
      "WhatsApp UI clone using Kotlin and Jetpack Compose Material 3 with reusable components and navigation flows.",
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "Android Studio"],
    imageUrl: "/whatsappClone.png",
    githubUrl: "https://github.com/Ataa-UrRasool/",
    category: "Frontend",
  },
  {
    id: 10,
    title: "Khaabay – Food Website",
    description:
      "Custom 5-page food website built using HTML, CSS, JS, and Bootstrap 4 with Login/Signup flow and responsive design.",
    technologies: ["HTML5", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: "/khabaay.png",
    githubUrl: "https://github.com/Ataa-UrRasool/",
    category: "Frontend",
  },
  {
    id: 11,
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Bootstrap, SASS, Parallax scrolling, and Email.js for automated email handling.",
    technologies: ["React", "Bootstrap", "SASS", "HTML5", "CSS", "JavaScript"],
    imageUrl: "/portfolioWeb.png",
    githubUrl: "https://github.com/Ataa-UrRasool/",
    category: "Frontend",
  }

];

type FilterOption = "All" | "Full-Stack" | "Backend" | "AI" | "Frontend";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterOption>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: FilterOption[] = ["All", "Full-Stack", "Backend", "AI", "Frontend"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-5xl font-heading font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
        </FadeIn>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                filter === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-glow"
                  : "glass-card text-gray-300 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
