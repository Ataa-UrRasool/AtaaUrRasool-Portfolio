interface SectionHeaderProps {
  index: string;
  title: string;
}

export default function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-mono text-xs" style={{ color: "var(--blue)" }}>
        {index}
      </span>
      <h2
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: "var(--muted)" }}
      >
        {title}
      </h2>
      <div className="flex-1 h-px" style={{ background: "var(--divider)" }} />
    </div>
  );
}
