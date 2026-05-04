"use client";
import { portfolio } from "@/data/portfolio.config";

export default function Hero() {
  const [first, ...rest] = portfolio.name.split(" ");
  const last = rest.join(" ");

  return (
    <div className="mb-20 animate-fadein" style={{ animationDelay: "0.15s" }}>
      {/* Label */}
      <p className="font-mono text-xs mb-5 tracking-widest" style={{ color: "var(--blue)" }}>
        // whoami
      </p>

      {/* Name — two-tone weight treatment */}
      <h1
        className="leading-none mb-6"
        style={{ fontSize: "clamp(36px, 7vw, 64px)", letterSpacing: "-0.04em" }}
      >
        <span className="font-light" style={{ color: "var(--muted)" }}>{first} </span>
        <span className="font-semibold" style={{ color: "var(--white)" }}>{last}</span>
      </h1>

      {/* Role tag row */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {portfolio.role.split(" · ").map((part, i) => (
          <span
            key={i}
            className="font-mono text-xs px-3 py-1 rounded-sm"
            style={{
              background: i === 0 ? "var(--blue-dim)" : "var(--faint)",
              color: i === 0 ? "var(--blue)" : "var(--muted)",
              border: `1px solid ${i === 0 ? "var(--blue-border)" : "var(--divider)"}`,
            }}
          >
            {part}
          </span>
        ))}
      </div>

      {/* Status */}
      <div
        className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-sm"
        style={{
          background: "var(--blue-dim)",
          border: "1px solid var(--blue-border)",
          color: "var(--blue)",
        }}
      >
        <span
          className="status-pulse w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--blue)" }}
        />
        {portfolio.status}
      </div>
    </div>
  );
}
