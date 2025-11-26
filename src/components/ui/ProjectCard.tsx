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
      "px-4 py-2 rounded-full font-medium transition-all duration-200";
    const styles =
      variant === "primary"
        ? `${baseStyles} bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105`
        : `${baseStyles} bg-white/10 text-gray-200 hover:bg-white/20 backdrop-blur-sm border border-white/20`;

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {label}
      </a>
    );
  };

  return (
    <motion.article
      className="backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
      whileHover={{
        y: -5,
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

        <p className="text-gray-200 mb-4 overflow-hidden max-h-[4.5rem] leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 text-gray-200 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.githubUrl && renderLink(project.githubUrl, "View Project")}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
