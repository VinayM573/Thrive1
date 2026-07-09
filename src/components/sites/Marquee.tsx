export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-primary text-primary-foreground py-4">
      <div className="flex whitespace-nowrap marquee-track">
        {row.map((t, i) => (
          <span key={i} className="text-display text-3xl md:text-4xl px-8 flex items-center gap-8">
            {t}
            <span className="inline-block size-2 rounded-full bg-primary-foreground" />
          </span>
        ))}
      </div>
    </div>
  );
}
