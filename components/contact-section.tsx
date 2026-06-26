import { Mail } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="04" title="Get in touch" />

      <div className="mx-auto max-w-xl text-center">
        <h3 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
          Let&apos;s build something together
        </h3>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {
            "I'm currently open to new opportunities and freelance projects. Whether you have a question or just want to say hi, my inbox is always open — I'll do my best to get back to you."
          }
        </p>
        <a
          href="mailto:hello@alexrivera.dev"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="size-4" />
          hello@alexrivera.dev
        </a>
      </div>
    </section>
  )
}
