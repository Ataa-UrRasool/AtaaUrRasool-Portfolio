"use client";
import { useState } from "react";

const links = [
  { num: "01", label: "about",          href: "#about"          },
  { num: "02", label: "experience",     href: "#experience"     },
  { num: "03", label: "skills",         href: "#skills"         },
  { num: "04", label: "certs",          href: "#certifications" },
  { num: "05", label: "projects",       href: "#projects"       },
  { num: "06", label: "contact",        href: "#contact"        },
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav
      className="flex mb-20 animate-fadein rounded-sm overflow-hidden"
      style={{ border: "1px solid var(--divider)", animationDelay: "0.3s" }}
    >
      {links.map((link, i) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setActive(link.href)}
          className="flex-1 text-center py-3 font-mono text-xs tracking-widest transition-all duration-200"
          style={{
            color: active === link.href ? "var(--white)" : "var(--muted)",
            background: active === link.href ? "var(--blue-dim)" : "transparent",
            borderRight: i < links.length - 1 ? "1px solid var(--divider)" : "none",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            if (active !== link.href) {
              (e.currentTarget as HTMLElement).style.color = "var(--white)";
              (e.currentTarget as HTMLElement).style.background = "var(--faint)";
            }
          }}
          onMouseLeave={(e) => {
            if (active !== link.href) {
              (e.currentTarget as HTMLElement).style.color = "var(--muted)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }
          }}
        >
          <span style={{ color: "var(--blue)" }}>{link.num}.</span>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
