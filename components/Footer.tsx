import { portfolio } from "@/data/portfolio.config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="flex items-center justify-between pt-6 font-mono text-xs"
      style={{ borderTop: "1px solid var(--divider)", color: "var(--faint)" }}
    >
      <span>© {year} {portfolio.name}</span>
      <span style={{ color: "var(--blue)", opacity: 0.4 }}>
        built with 💞
      </span>
    </footer>
  );
}
