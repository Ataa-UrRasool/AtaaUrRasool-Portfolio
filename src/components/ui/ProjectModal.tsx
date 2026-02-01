"use client";

import { Project } from "@/types/project";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Calendar, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl glass-card border border-white/10 shadow-2xl flex flex-col md:flex-row bg-[#0a0a0a]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/20 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Side: Image (Desktop) / Top (Mobile) */}
          <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-black/20">
             <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/50" />
            
            {/* Links Overlay (Visible on bottom left for desktop) */}
            <div className="absolute bottom-6 left-6 flex gap-4">
               {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors backdrop-blur-md"
                  title="View Source"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors backdrop-blur-md"
                   title="View Live"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto custom-scrollbar">
            
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                 <div>
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                        {project.category}
                    </span>
                    <h2 className="text-3xl font-heading font-bold text-white mb-2">{project.title}</h2>
                 </div>
              </div>
              
              {project.period && (
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{project.period}</span>
                </div>
              )}

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 text-xs text-gray-300 rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-3">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                     <li key={i} className="flex gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                     </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Engineering Highlights */}
             {project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Engineering Highlights
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                     <li key={i} className="flex gap-3 text-sm text-gray-300">
                        <Star className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                        <span>{highlight}</span>
                     </li>
                  ))}
                </ul>
              </div>
            )}
            
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
