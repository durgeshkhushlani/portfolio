"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HudFrame from "@/components/HudFrame";
import { projects, type Project } from "@/data/projects";

const COUNT = projects.length;
const SPACING = 440;
const ROTATE = 50;
const DEPTH = 260;
const DURATION = 0.45;

function getOffset(i: number, active: number) {
  let diff = i - active;
  if (diff > COUNT / 2) diff -= COUNT;
  if (diff < -COUNT / 2) diff += COUNT;
  return diff;
}

function Card({
  project,
  offset,
  onClick,
}: {
  project: Project;
  offset: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const isActive = offset === 0;

  useEffect(() => {
    if (!ref.current) return;
    if (!initialized.current) {
      gsap.set(ref.current, { xPercent: -50, yPercent: -50 });
      initialized.current = true;
    }
    gsap.to(ref.current, {
      x: offset * SPACING,
      z: isActive ? 40 : -DEPTH,
      rotateY: isActive ? 0 : -Math.sign(offset) * ROTATE,
      opacity: Math.abs(offset) > 1.5 ? 0 : isActive ? 1 : 0.55,
      scale: isActive ? 1 : 0.72,
      zIndex: isActive ? 10 : 0,
      duration: DURATION,
      ease: "power2.out",
    });
  }, [offset, isActive]);

  return (
    <div
      ref={ref}
      onClick={!isActive ? onClick : undefined}
      className={`absolute left-1/2 top-1/2 overflow-hidden border [backface-visibility:hidden] ${
        isActive
          ? "w-full max-w-4xl border-accent-strong bg-background-elevated/40 p-5 sm:p-8"
          : "h-64 w-52 cursor-pointer border-border bg-background-elevated"
      }`}
    >
      {isActive ? (
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          <HudFrame className="flex min-h-48 items-center justify-center sm:min-h-full">
            <p className="font-display text-2xl font-bold uppercase tracking-wide text-foreground-dim/40">
              {project.name}
            </p>
          </HudFrame>

          <div className="flex flex-col justify-center gap-3">
            <p className="font-mono text-xs text-foreground-dim">
              {project.year} — {project.status}
            </p>
            <h3 className="font-display text-2xl font-black uppercase text-foreground sm:text-3xl">
              {project.name}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-foreground-dim">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="border border-border px-2 py-1 font-mono text-xs text-foreground-dim"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.liveUrl ?? project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-fit border border-accent-strong px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-accent-strong/10"
            >
              View details →
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-xl font-black uppercase text-foreground-dim/25">
              {project.name}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-3 pt-8">
            <h3 className="font-display text-sm font-black uppercase text-foreground">
              {project.name}
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const wheelLock = useRef(false);

  function next() {
    setActive((a) => (a + 1) % COUNT);
  }
  function prev() {
    setActive((a) => (a - 1 + COUNT) % COUNT);
  }

  function handleWheel(e: React.WheelEvent<HTMLDivElement>) {
    if (wheelLock.current) return;
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    if (Math.abs(e.deltaX) < 35) return;

    wheelLock.current = true;
    if (e.deltaX > 0) {
      next();
    } else {
      prev();
    }
    setTimeout(() => {
      wheelLock.current = false;
    }, DURATION * 1000 * 0.75);
  }

  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col justify-center gap-10 overflow-x-hidden px-6 py-24 sm:px-16"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-sm text-accent">02 / projects</p>
          <h2 className="font-display font-black text-4xl uppercase text-foreground sm:text-5xl">
            Projects
          </h2>
        </div>
        <p className="font-mono text-sm text-foreground-dim">
          {String(active + 1).padStart(2, "0")} / {String(COUNT).padStart(2, "0")}
        </p>
      </div>

      <div
        onWheel={handleWheel}
        className="relative flex h-[32rem] items-center justify-center [perspective:2200px]"
      >
        <button
          type="button"
          onClick={prev}
          aria-label="Previous project"
          className="absolute left-0 z-20 flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background font-mono text-foreground-dim transition-colors hover:border-accent-strong hover:text-foreground sm:left-4"
        >
          ←
        </button>

        <div className="relative h-full w-full [transform-style:preserve-3d]">
          {projects.map((project, i) => {
            const offset = getOffset(i, active);
            return (
              <div
                key={project.name}
                className={offset === 0 ? "" : "hidden sm:block"}
              >
                <Card project={project} offset={offset} onClick={() => setActive(i)} />
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next project"
          className="absolute right-0 z-20 flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background font-mono text-foreground-dim transition-colors hover:border-accent-strong hover:text-foreground sm:right-4"
        >
          →
        </button>
      </div>

      <div className="flex justify-center gap-3 font-mono text-sm">
        {projects.map((project, i) => (
          <button
            key={project.name}
            type="button"
            onClick={() => setActive(i)}
            className={`transition-colors ${
              i === active
                ? "text-accent-strong"
                : "text-foreground-dim/40 hover:text-foreground-dim"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </section>
  );
}
