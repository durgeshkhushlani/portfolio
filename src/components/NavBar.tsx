"use client";

import { useEffect, useState } from "react";
import HudFrame from "./HudFrame";
import { navLinks, site } from "@/data/site";

export default function NavBar() {
  const [active, setActive] = useState<string>(navLinks[0].href);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <HudFrame className="flex w-full max-w-5xl items-center justify-between gap-6 px-5 py-3">
        <a
          href="#home"
          className="font-display text-lg uppercase tracking-wide text-accent"
        >
          {site.logoMark}
        </a>

        <nav className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] sm:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`border px-2 py-1 transition-colors ${
                  isActive
                    ? "border-accent-strong text-foreground"
                    : "border-transparent text-foreground-dim hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="flex items-center gap-2 border border-accent-strong px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-accent-strong/10"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {site.ctaLabel}
        </a>
      </HudFrame>
    </header>
  );
}
