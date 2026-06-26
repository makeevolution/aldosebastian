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
        Aldo Sebastian.
      </h1>
      <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        {
          "I'm a T-shaped software engineer, passionate in building reliable, scalable and observable systems."
        }
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View my projects
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
    </section>
  )
}
