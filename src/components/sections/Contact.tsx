"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value.trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!email) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email.";
    }
    if (!message) next.message = "Please enter a message.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      e.preventDefault();
    }
  }

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col justify-center gap-12 px-6 py-24 sm:px-16"
    >
      <div>
        <h2 className="font-display font-black text-4xl uppercase text-foreground sm:text-5xl">
          Contact
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-5">
          <h3 className="font-display text-4xl font-normal uppercase leading-[1.05] text-foreground-dim sm:text-5xl lg:text-6xl">
            Get in
            <br />
            touch
          </h3>
          <p className="max-w-sm font-mono text-sm leading-relaxed text-foreground-dim sm:text-base">
            {site.openToWork} — reach out if you have a problem worth
            solving, or just want to talk about systems, AI, or anything
            you&apos;re building.
          </p>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-name"
              className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className={`border bg-transparent px-3 py-2 font-mono text-sm text-foreground outline-none transition-colors focus:border-accent-strong ${
                errors.name ? "border-red-400" : "border-border"
              }`}
            />
            {errors.name && (
              <p className="font-mono text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-email"
              className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className={`border bg-transparent px-3 py-2 font-mono text-sm text-foreground outline-none transition-colors focus:border-accent-strong ${
                errors.email ? "border-red-400" : "border-border"
              }`}
            />
            {errors.email && (
              <p className="font-mono text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              className={`resize-none border bg-transparent px-3 py-2 font-mono text-sm text-foreground outline-none transition-colors focus:border-accent-strong ${
                errors.message ? "border-red-400" : "border-border"
              }`}
            />
            {errors.message && (
              <p className="font-mono text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-fit border border-accent-strong px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-accent-strong/10"
          >
            {site.ctaLabel} →
          </button>
        </form>
      </div>
    </section>
  );
}
