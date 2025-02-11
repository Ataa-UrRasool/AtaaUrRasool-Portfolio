import { Project } from "@/types/project";
import ProjectCard from "../ui/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "BankEasy",
    description:
      "A full-stack banking application built with Spring Boot and React, featuring distinct modules for Admin, Customer, and Employee operations. Implements microservices architecture and secure JWT authentication.",
    technologies: ["Java", "Spring Boot", "MySQL", "React", "JPA", "REST APIs"],
    imageUrl: "/BankEasy.jpg",
    githubUrl: "https://github.com/Ataa-UrRasool/",
  },
  {
    id: 2,
    title: "Pulse - Hospital Management",
    description:
      "A comprehensive hospital management system built with JavaFX, featuring real-time synchronization and CRUD operations. Implements GRASP design patterns for maintainable architecture.",
    technologies: ["Java", "JavaFX", "MySQL", "Scene Builder"],
    imageUrl: "/hospital-ms.jpeg",
    githubUrl: "https://github.com/Ataa-UrRasool/",
  },
  {
    id: 3,
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
    <section id="projects" className="py-20 bg-gray-900/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
