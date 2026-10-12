import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />

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
