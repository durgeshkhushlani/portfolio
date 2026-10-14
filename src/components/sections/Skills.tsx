"use client";

import { useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { skillGroups } from "@/data/skills";

type Pulse = { id: number; group: string };

const STAGGER_MS = 80;

function Tile({
  name,
  group,
  index,
  pulse,
}: {
  name: string;
  group: string;
  index: number;
  pulse: Pulse | null;
}) {
  const popping = pulse !== null && pulse.group === group;
  const style = popping
    ? ({ "--delay": `${index * STAGGER_MS}ms` } as CSSProperties)
    : undefined;

  return (
    <button
      key={popping ? `pop-${pulse!.id}` : "rest"}
      type="button"
      data-tile
      data-group={group}
      style={style}
      className={`tech-tile relative border border-border px-3 py-2 text-left font-mono text-xs text-foreground-dim transition-transform duration-200 hover:z-10 hover:scale-125 hover:text-foreground sm:text-sm ${
        popping ? "is-popping" : ""
      }`}
    >
      {name}
    </button>
  );
}

export default function Skills() {
  const [pulse, setPulse] = useState<Pulse | null>(null);
  const idRef = useRef(0);

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const tile = (e.target as HTMLElement).closest<HTMLElement>("[data-tile]");
    if (!tile) return;
    const group = tile.dataset.group;
    if (!group) return;
    idRef.current += 1;
    setPulse({ id: idRef.current, group });
  }

  return (
    <section
      id="skills"
      className="flex min-h-screen flex-col justify-center gap-10 px-6 py-24 sm:px-16"
    >
      <div>
        <p className="font-mono text-sm text-accent">03 / skills</p>
        <h2 className="font-display font-black text-4xl uppercase text-foreground sm:text-5xl">
          Skills
        </h2>
      </div>

      <div onClick={handleClick} className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item, i) => (
                <Tile
                  key={item}
                  name={item}
                  group={group.label}
                  index={i}
                  pulse={pulse}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
