import ScrambleText from "@/components/ScrambleText";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex min-h-screen flex-col items-start justify-center gap-6 px-6 pt-24 sm:px-16"
      >
        <p className="font-mono text-sm text-accent">// hello world, I&apos;m</p>

        <h1 className="font-display text-5xl uppercase leading-tight tracking-wide text-foreground sm:text-7xl">
          {site.name}
        </h1>

        <p className="font-mono text-lg text-foreground-dim sm:text-xl">
          &gt;_ <ScrambleText words={site.roles} />
        </p>

        <p className="max-w-xl font-mono text-sm leading-relaxed text-foreground-dim sm:text-base">
          {site.shortBio}
        </p>

        <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs uppercase tracking-[0.2em]">
          <a
            href="#projects"
            className="border border-accent-strong px-4 py-2 text-foreground transition-colors hover:bg-accent-strong/10"
          >
            Explore my work
          </a>
          <a
            href="#contact"
            className="border border-border px-4 py-2 text-foreground-dim transition-colors hover:text-foreground"
          >
            {site.ctaLabel}
          </a>
        </div>
      </section>

      <section
        id="about"
        className="flex min-h-screen flex-col items-start justify-center gap-4 px-6 sm:px-16"
      >
        <p className="font-mono text-sm text-accent">01 / about</p>
        <h2 className="font-display text-4xl uppercase text-foreground sm:text-5xl">
          About
        </h2>
      </section>

      <section
        id="projects"
        className="flex min-h-screen flex-col items-start justify-center gap-4 px-6 sm:px-16"
      >
        <p className="font-mono text-sm text-accent">02 / projects</p>
        <h2 className="font-display text-4xl uppercase text-foreground sm:text-5xl">
          Projects
        </h2>
      </section>

      <section
        id="skills"
        className="flex min-h-screen flex-col items-start justify-center gap-4 px-6 sm:px-16"
      >
        <p className="font-mono text-sm text-accent">03 / skills</p>
        <h2 className="font-display text-4xl uppercase text-foreground sm:text-5xl">
          Skills
        </h2>
      </section>

      <section
        id="contact"
        className="flex min-h-screen flex-col items-start justify-center gap-4 px-6 sm:px-16"
      >
        <p className="font-mono text-sm text-accent">04 / contact</p>
        <h2 className="font-display text-4xl uppercase text-foreground sm:text-5xl">
          Contact
        </h2>
      </section>
    </>
  );
}
