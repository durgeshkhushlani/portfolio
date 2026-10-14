"use client";

import * as motion from "motion/react-client";
import ScrambleText from "@/components/ScrambleText";
import WaveBackground from "@/components/WaveBackground";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons/SocialIcons";
import { site } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden px-6 text-center"
    >
      <WaveBackground />

      <motion.div
        initial="hidden"
        animate="show"
        custom={0}
        variants={fadeUp}
        className="relative z-10 h-32 w-32 overflow-hidden rounded-full border border-accent-strong"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-img.jpg"
          alt="Durgesh Khushlani"
          draggable={false}
          className="h-full w-full select-none object-cover"
        />
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="show"
        custom={0.1}
        variants={fadeUp}
        className="font-display font-black text-4xl uppercase leading-tight tracking-wide text-foreground sm:text-6xl"
      >
        {site.name}
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="show"
        custom={0.2}
        variants={fadeUp}
        className="font-mono text-base text-foreground-dim sm:text-lg"
      >
        &gt;_ <ScrambleText words={site.roles} />
      </motion.p>

      <motion.p
        initial="hidden"
        animate="show"
        custom={0.3}
        variants={fadeUp}
        className="max-w-md font-mono text-sm text-foreground-dim"
      >
        {site.tagline}
      </motion.p>

      <motion.div
        initial="hidden"
        animate="show"
        custom={0.4}
        variants={fadeUp}
        className="flex flex-wrap justify-center gap-4 pt-2 font-mono text-xs uppercase tracking-[0.2em]"
      >
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
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        custom={0.5}
        variants={fadeUp}
        className="flex items-center gap-5 pt-2 text-foreground-dim"
      >
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-foreground"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-foreground"
        >
          <LinkedinIcon className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${site.email}`}
          aria-label="Email"
          className="transition-colors hover:text-foreground"
        >
          <MailIcon className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
}
