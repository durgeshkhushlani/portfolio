import HudFrame from "@/components/HudFrame";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons/SocialIcons";
import { site } from "@/data/site";

const links = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: MailIcon,
  },
  {
    label: "GitHub",
    value: site.github.replace("https://", ""),
    href: site.github,
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "Durgesh Khushlani",
    href: site.linkedin,
    Icon: LinkedinIcon,
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col justify-center gap-10 px-6 py-24 sm:px-16"
    >
      <div>
        <p className="font-mono text-sm text-accent">04 / contact</p>
        <h2 className="font-display font-black text-4xl uppercase text-foreground sm:text-5xl">
          Contact
        </h2>
      </div>

      <p className="max-w-xl font-mono text-sm leading-relaxed text-foreground-dim sm:text-base">
        {site.openToWork} — reach out if you have a problem worth solving, or
        just want to talk about systems, AI, or anything you&apos;re building.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {links.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="block"
          >
            <HudFrame className="flex flex-col gap-3 p-5">
              <Icon className="h-5 w-5 text-accent" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim">
                {label}
              </p>
              <p className="break-all font-mono text-sm text-foreground">
                {value}
              </p>
            </HudFrame>
          </a>
        ))}
      </div>

      <a
        href={`mailto:${site.email}`}
        className="w-fit border border-accent-strong px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-accent-strong/10"
      >
        {site.ctaLabel} →
      </a>
    </section>
  );
}
