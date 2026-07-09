import { Link } from "@tanstack/react-router";
import * as LucideIcons from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-display text-6xl md:text-8xl leading-none">
            THRIVE.
            <span className="text-primary">GYM</span>
          </div>
          <p className="mt-4 max-w-md text-muted-foreground">
            Built in India. Engineered for the body you're chasing. Train hard. Live well. Thrive.
          </p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Explore</p>
          <ul className="space-y-2 text-foreground/90">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/vision" className="hover:text-primary">Our Vision</Link></li>
            <li><Link to="/partner" className="hover:text-primary">Franchise</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Contact</p>
          <ul className="space-y-2 text-foreground/90 text-sm">
            <li>hello@thrivegym.in</li>
            <li>+91 80 4000 0000</li>
            <li>Bengaluru, India</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {/* Instagram */}
            <a href="#" className="size-9 grid place-items-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="size-9 grid place-items-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="size-9 grid place-items-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Thrive Gym. All rights reserved.
      </div>
    </footer>
  );
}
