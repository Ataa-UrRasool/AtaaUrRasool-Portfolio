"use client";
import { portfolio } from "@/data/portfolio.config";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="mb-20">
      <SectionHeader index="// 02" title="experience" />
      <div className="flex flex-col gap-1">
        {portfolio.experience.map((exp, i) => (
          <div
            key={i}
            className="flex gap-6 p-5 rounded-sm transition-all duration-200 group"
            style={{
              borderLeft: "2px solid var(--divider)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--blue)";
              (e.currentTarget as HTMLElement).style.background = "var(--bg2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--divider)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            {/* Date */}
            <p
              className="font-mono text-xs pt-0.5 shrink-0 w-36"
              style={{ color: "var(--muted)" }}
            >
              {exp.date}
            </p>

            {/* Content */}
            <div>
              <h3 className="font-semibold text-sm mb-0.5" style={{ color: "var(--white)" }}>
                {exp.title}
              </h3>
              <p className="font-mono text-xs mb-2" style={{ color: "var(--blue)" }}>
                {exp.company}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
