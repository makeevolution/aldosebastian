import { ArrowDown, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

export function HeroSection() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pb-20 pt-32"
    >
      <p className="mb-5 font-mono text-sm text-primary">Hi, my name is</p>
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        Alex Rivera.
      </h1>
      <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-muted-foreground sm:text-5xl lg:text-6xl">
        I build things for the web.
      </h2>
      <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        {
          "I'm a software engineer specializing in building fast, accessible, and thoughtfully designed digital experiences. Currently focused on crafting performant front-end systems and developer tooling."
        }
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Contact me
        </a>
      </div>

      <div className="mt-10 flex items-center gap-5">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label="GitHub"
        >
          <GithubIcon className="size-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="size-5" />
        </a>
        <a
          href="#contact"
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label="Email"
        >
          <Mail className="size-5" />
        </a>
      </div>

      <a
        href="#about"
        className="mt-16 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
      >
        Scroll down <ArrowDown className="size-3.5" />
      </a>
    </section>
  )
}
