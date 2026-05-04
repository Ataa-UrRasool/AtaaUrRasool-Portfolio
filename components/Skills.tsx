import { portfolio } from "@/data/portfolio.config";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="mb-20">
      <SectionHeader index="// 03" title="skills" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {portfolio.skills.map((group) => (
          <div
            key={group.group}
            className="rounded-sm p-4"
            style={{ background: "var(--bg2)", border: "1px solid var(--divider)" }}
          >
            <p
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--blue)" }}
            >
              {group.group}
            </p>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-xs flex items-start gap-2"
                  style={{ color: "rgba(226,226,226,0.45)" }}
                >
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                    style={{ background: "var(--blue)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
