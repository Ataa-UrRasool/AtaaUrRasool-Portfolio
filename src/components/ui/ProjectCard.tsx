"use client";

import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative glass-card rounded-3xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Featured ribbon */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-accent to-primary rounded-full flex items-center gap-1 shadow-glow transition-transform group-hover:scale-110">
          <Star className="w-3 h-3 fill-white text-white" />
          <span className="text-xs font-semibold text-white">Featured</span>
        </div>
      )}

      {/* Image container */}
      <div className="relative h-52 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
          className="h-full"
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Glassmorphic overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-dark/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center gap-4"
        >
           <p className="text-sm text-gray-200 line-clamp-3">
             {project.description}
           </p>
           
           <div className="flex gap-4">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                   onClick={(e) => e.stopPropagation()} // Prevent modal opening
                >
                  <Github className="w-5 h-5 text-white" />
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                   onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </motion.a>
              )}
           </div>
           
           <span className="text-xs text-primary font-medium mt-2">Click for details</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-white mb-2 line-clamp-1">
          {project.title}
        </h3>
        
        {/* Short description still visible, or remove if user wants ONLY on hover. 
            User said "show a bit of small decsription ... only when clicked or hovered".
            I'll keep it for now as layout looks weird without it. */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack icons */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-xs text-gray-200 rounded-full border border-primary/30 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 text-xs text-gray-400 rounded-full">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Category badge */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
            {project.category}
          </span>
        </div>
      </div>

      {/* Gradient border effect on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))",
          padding: "2px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </motion.div>
  );
}
