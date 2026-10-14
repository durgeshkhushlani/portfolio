"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6 sm:px-10">
        <a
          href="#home"
          className="group relative flex h-12 w-12 items-center justify-center [perspective:220px]"
        >
          <span className="logo-text inline-block font-mono text-2xl font-black uppercase tracking-tight text-accent transition-[filter] duration-300 group-hover:drop-shadow-[0_0_6px_var(--accent-strong)]">
            {site.logoMark}
          </span>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-sm uppercase tracking-[0.15em] sm:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group/link relative flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground-dim hover:text-foreground"
                }`}
              >
                <span className="relative inline-flex h-[1em] w-[0.8em] items-center justify-center overflow-hidden align-middle">
                  <span
                    className={`absolute inset-0 flex items-center justify-center leading-none transition-transform duration-300 ${
                      isActive
                        ? "-translate-y-full"
                        : "group-hover/link:-translate-y-full"
                    }`}
                  >
                    /
                  </span>
                  <span
                    className={`absolute inset-0 flex translate-y-full items-center justify-center leading-none transition-transform duration-300 ${
                      isActive
                        ? "!translate-y-0"
                        : "group-hover/link:translate-y-0"
                    }`}
                  >
                    →
                  </span>
                </span>
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <ThemeToggle />
          <a
            href="#contact"
            className="flex items-center gap-2 border border-accent-strong px-4 py-2 font-mono text-sm uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-accent-strong/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
