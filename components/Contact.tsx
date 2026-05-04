"use client";
import { useState } from "react";
import { portfolio } from "@/data/portfolio.config";
import SectionHeader from "./SectionHeader";

const links = [
  { key: "email",    label: portfolio.contact.email,                                  href: `mailto:${portfolio.contact.email}` },
  { key: "linkedin", label: portfolio.contact.linkedin.replace("https://", ""),        href: portfolio.contact.linkedin },
  { key: "github",   label: portfolio.contact.github.replace("https://", ""),          href: portfolio.contact.github },
  { key: "resume",   label: "download resume.pdf",                                    href: portfolio.contact.resume },
];

function ContactRow({ item }: { item: (typeof links)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.href}
      target={item.key !== "email" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-5 py-4 text-xs transition-all duration-150"
      style={{
        color: hovered ? "var(--white)" : "var(--muted)",
        borderBottom: "1px solid var(--divider)",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="font-mono min-w-20 text-xs"
        style={{ color: hovered ? "var(--blue)" : "rgba(79,142,247,0.4)" }}
      >
        {item.key}
      </span>
      <span>{item.label}</span>
      <span
        className="ml-auto transition-all duration-150"
        style={{
          color: hovered ? "var(--blue)" : "var(--faint)",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        →
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="mb-20">
      <SectionHeader index="// 06" title="contact" />
      <div
        className="rounded-sm p-6"
        style={{ background: "var(--bg2)", border: "1px solid var(--divider)" }}
      >
        <p className="font-mono text-xs mb-5" style={{ color: "var(--muted)" }}>
          <span style={{ color: "var(--blue)" }}>$</span> ping {portfolio.name.split(" ")[0].toLowerCase()} --all
        </p>
        <div>
          {links.map((item, i) => (
            <div key={item.key} style={{ borderBottom: i === links.length - 1 ? "none" : undefined }}>
              <ContactRow item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
