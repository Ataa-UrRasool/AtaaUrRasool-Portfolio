"use client";
import { portfolio } from "@/data/portfolio.config";

export default function TopBar() {
  const slug = portfolio.name.toLowerCase().replace(/\s+/g, "-");
  return (
    <div
      className="flex items-center gap-2 mb-20 animate-fadein"
      style={{ animationDelay: "0.05s" }}
    >
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
      </div>
      <span
        className="ml-3 font-mono text-xs tracking-widest"
        style={{ color: "var(--muted)" }}
      >
        // {slug}
      </span>
    </div>
  );
}
