import { portfolio } from "@/data/portfolio.config";
import SectionHeader from "./SectionHeader";

export default function About() {
  const paragraphs = portfolio.about.split("\n\n");
  return (
    <section id="about" className="mb-20">
      <SectionHeader index="// 01" title="about" />
      <div
        className="rounded-sm p-7 flex flex-col gap-4"
        style={{ background: "var(--bg2)", border: "1px solid var(--divider)" }}
      >
        {paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed" style={{ color: "rgba(226,226,226,0.6)" }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
