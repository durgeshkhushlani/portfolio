import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />

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
