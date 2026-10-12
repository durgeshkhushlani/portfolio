"use client";

import { useEffect, useRef, useState } from "react";
import HudFrame from "@/components/HudFrame";
import { projects } from "@/data/projects";

const COUNT = projects.length;

export default function Projects() {
  const wrapperRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;
      setActive(Math.round(progress * (COUNT - 1)));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(index: number) {
    const el = wrapperRef.current;
    if (!el) return;
    const total = el.getBoundingClientRect().height - window.innerHeight;
    const target =
      el.getBoundingClientRect().top +
      window.scrollY +
      (total * index) / (COUNT - 1);
    window.scrollTo({ top: target, behavior: "smooth" });
  }

  return (
    <section
      id="projects"
      ref={wrapperRef}
      style={{ height: `${COUNT * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-8 overflow-hidden px-6 py-24 sm:px-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-sm text-accent">02 / projects</p>
            <h2 className="font-display text-4xl uppercase text-foreground sm:text-5xl">
              Projects
            </h2>
          </div>
          <p className="hidden font-mono text-sm text-foreground-dim sm:block">
            {String(active + 1).padStart(2, "0")} / {String(COUNT).padStart(2, "0")}
          </p>
        </div>

        <div className="flex gap-6">
          <ol className="hidden h-80 flex-col justify-between border-l border-border pl-4 sm:flex">
            {projects.map((project, i) => (
              <li key={project.name}>
                <button
                  onClick={() => goTo(i)}
                  className={`font-mono text-sm transition-colors ${
                    i === active
                      ? "text-accent-strong"
                      : "text-foreground-dim/50 hover:text-foreground-dim"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              </li>
            ))}
          </ol>

          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="grid w-full shrink-0 gap-8 lg:grid-cols-[1.2fr_1fr]"
                >
                  <div className="flex flex-col gap-4">
                    <p className="font-mono text-xs text-foreground-dim">
                      {project.year} — {project.status}
                    </p>
                    <h3 className="font-display text-3xl uppercase text-foreground sm:text-4xl">
                      {project.name}
                    </h3>
                    <p className="font-mono text-sm text-foreground-dim sm:text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="border border-border px-2 py-1 font-mono text-xs text-foreground-dim"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 font-mono text-xs uppercase tracking-[0.2em]">
                      <a
                        href={project.liveUrl ?? project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-accent-strong px-4 py-2 text-foreground transition-colors hover:bg-accent-strong/10"
                      >
                        View details →
                      </a>
                    </div>
                  </div>

                  <HudFrame className="hidden min-h-64 items-center justify-center lg:flex">
                    <p className="font-display text-2xl uppercase tracking-wide text-foreground-dim/40">
                      {project.name}
                    </p>
                  </HudFrame>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
