import HudFrame from "@/components/HudFrame";
import { site } from "@/data/site";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-start justify-center gap-8 px-6 py-24 sm:px-16"
    >
      <div>
        <p className="font-mono text-sm text-accent">01 / about</p>
        <h2 className="font-display text-4xl uppercase text-foreground sm:text-5xl">
          About
        </h2>
      </div>

      <div className="grid w-full gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-4 font-mono text-sm leading-relaxed text-foreground-dim sm:text-base">
          {site.longBio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <HudFrame className="flex flex-col gap-2 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Currently building
            </p>
            <p className="font-mono text-sm text-foreground">
              {site.currentlyBuilding}
            </p>
          </HudFrame>

          <HudFrame className="flex flex-col gap-2 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Education
            </p>
            <p className="font-mono text-sm text-foreground">
              {site.education.degree}
            </p>
            <p className="font-mono text-xs text-foreground-dim">
              {site.education.institution} — {site.education.year}
            </p>
          </HudFrame>

          <HudFrame className="flex items-center gap-2 p-5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">
              {site.openToWork}
            </p>
          </HudFrame>
        </div>
      </div>
    </section>
  );
}
