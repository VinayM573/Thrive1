import { Link } from "@tanstack/react-router";
import { useState } from "react";
import * as LucideIcons from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/vision", label: "Our Vision" },
  { to: "/partner", label: "Become a Partner" },
] as const;

export function Nav({ offsetTop = false }: { offsetTop?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`fixed inset-x-0 z-40 backdrop-blur-xl bg-background/60 border-b border-border ${
        offsetTop ? "top-14" : "top-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-block size-2.5 rounded-full bg-primary group-hover:scale-125 transition" />
          <span className="text-display text-2xl tracking-tight">THRIVE</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-foreground" }}
              className="px-4 py-2 text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/partner"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Open a Franchise →
          </Link>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md hover:bg-secondary"
          aria-label="Toggle menu"
        >
          {open ? <LucideIcons.X className="size-5" /> : <LucideIcons.Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md hover:bg-secondary text-base"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/partner"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
            >
              Open a Franchise →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
