import { Mail } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="04" title="Get in touch" />

      <div className="mx-auto max-w-xl text-center">
        <a
          href="mailto:aldo_hasibuan@yahoo.com"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="size-4" />
          aldo_hasibuan@yahoo.com
        </a>
      </div>
      <div className="mx-auto max-w-xl text-center">
        <a
          href="mailto:aldo_hasibuan@yahoo.com"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <LinkedinIcon className="size-4" />
          https://www.linkedin.com/in/aldo-sebastian/
        </a>
      </div>
    </section>
  )
}
