"use client";
import { useState } from "react";
import { portfolio } from "@/data/portfolio.config";
import SectionHeader from "./SectionHeader";

function ProjectCard({ project }: { project: (typeof portfolio.projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      // href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-sm p-5 relative overflow-hidden transition-all duration-200"
      style={{
        background: hovered ? "var(--bg3)" : "var(--bg2)",
        border: `1px solid ${hovered ? "var(--blue-border)" : "var(--divider)"}`,
        textDecoration: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Blue top bar reveal */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300"
        style={{
          background: "var(--blue)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
        }}
      />

      {/* Index */}
      <p className="font-mono text-xs mb-2" style={{ color: "var(--blue)" }}>
        // {project.index}
      </p>

      {/* Name */}
      <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--white)" }}>
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2 py-0.5 rounded-sm"
            style={{
              background: "var(--blue-dim)",
              color: "var(--blue)",
              border: "1px solid var(--blue-border)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mb-20">
      <SectionHeader index="// 05" title="projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {portfolio.projects.map((p) => (
          <ProjectCard key={p.index} project={p} />
        ))}
      </div>
    </section>
  );
}
