"use client";

import { Project } from "@/types/project";
import Image from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const renderLink = (
    href: string,
    label: ReactNode,
    variant: "primary" | "secondary" = "primary"
  ) => {
    const baseStyles =
      "px-4 py-2 rounded-md font-medium transition-colors duration-200";
    const styles =
      variant === "primary"
        ? `${baseStyles} bg-blue-600 text-white hover:bg-blue-700`
        : `${baseStyles} bg-gray-700 text-gray-200 hover:bg-gray-600`;

    return (
      <a href={href} className={styles}>
        {label}
      </a>
    );
  };

  return (
    <motion.article
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 border border-gray-700"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          quality={85}
        />
      </div>

      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

        <p className="text-gray-300 mb-4 overflow-hidden max-h-[4.5rem]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {renderLink("https://github.com/Ataa-UrRasool/", "View Project")}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
