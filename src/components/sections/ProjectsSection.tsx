import { Project } from "@/types/project";
import ProjectCard from "../ui/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "CodeReview: AI-Powered Code Review Platform",
    description:
      "An AI-powered code review platform using LangChain and OpenAI API. Automates code analysis and provides intelligent suggestions for code quality improvements through multi-agent systems.",
    technologies: ["Python", "FastAPI", "LangChain", "React", "OpenAI API", "Tailwind CSS"],
    imageUrl: "/codeReviewer.png",
    githubUrl: "https://github.com/Ataa-UrRasool/",
  },
  {
    id: 2,
    title: "BankEasy",
    description:
      "A full-stack banking application built with Spring Boot and React, featuring distinct modules for Admin, Customer, and Employee operations. Implements microservices architecture and secure JWT authentication.",
    technologies: ["Java", "Spring Boot", "MySQL", "React", "JPA", "REST APIs"],
    imageUrl: "/BankEasy.jpg",
    githubUrl: "https://github.com/Ataa-UrRasool/",
  },
  {
    id: 3,
    title: "Pulse - Hospital Management",
    description:
      "A comprehensive hospital management system built with JavaFX, featuring real-time synchronization and CRUD operations. Implements GRASP design patterns for maintainable architecture.",
    technologies: ["Java", "JavaFX", "MySQL", "Scene Builder"],
    imageUrl: "/hospital-ms.jpeg",
    githubUrl: "https://github.com/Ataa-UrRasool/",
  },
  {
    id: 4,
    title: "CafeBytes",
    description:
      "A cafe point of sale system with distinct modules for Manager, Employee, and Guest. Features real-time database management and complex SQL queries for efficient data handling.",
    technologies: ["C#", "WinForms", "SQL Server", "N-tier Architecture"],
    imageUrl: "/cafe-ms.jpeg",
    githubUrl: "https://github.com/Ataa-UrRasool/CafeBytes",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
