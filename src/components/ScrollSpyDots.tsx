"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";

export default function ScrollSpyDots() {
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
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 sm:flex">
      {navLinks.map((link) => {
        const isActive = active === link.href;
        return (
          <a
            key={link.href}
            href={link.href}
            aria-label={link.label}
            className="group flex items-center justify-center p-1"
          >
            <span
              className={`block rounded-full transition-all ${
                isActive
                  ? "h-2.5 w-2.5 bg-foreground"
                  : "h-1.5 w-1.5 bg-foreground-dim/50 group-hover:bg-foreground-dim"
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}
