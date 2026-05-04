"use client";
import { portfolio } from "@/data/portfolio.config";
import SectionHeader from "./SectionHeader";

export default function Certifications() {
  return (
    <section id="certifications" className="mb-20">
      <SectionHeader index="// 04" title="certifications" />
      <div className="flex flex-col gap-1">
        {portfolio.certifications.map((cert, i) => (
          <div
            key={i}
            className="flex gap-6 p-5 rounded-sm transition-all duration-200"
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
              className="font-mono text-xs pt-0.5 shrink-0 w-20"
              style={{ color: "var(--muted)" }}
            >
              {cert.date}
            </p>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-sm mb-0.5 leading-snug" style={{ color: "var(--white)" }}>
                    {cert.name}
                  </h3>
                  <p className="font-mono text-xs" style={{ color: "var(--blue)" }}>
                    {cert.issuer}
                  </p>
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs shrink-0 transition-colors duration-150"
                    style={{ color: "var(--muted)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--white)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
                    }
                  >
                    view ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
