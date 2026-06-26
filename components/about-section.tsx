import { SectionHeading } from "@/components/section-heading"

const facts = [
  { label: "Years building software", value: "6+" },
  { label: "Projects shipped", value: "40+" },
  { label: "Open-source repos", value: "20+" },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="01" title="About me" />

      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            {
              "I'm a software engineer who enjoys turning complex problems into simple, elegant interfaces. My focus is on writing clean, maintainable code and building products that feel fast and intuitive."
            }
          </p>
          <p>
            {
              "I started my journey customizing themes for a personal blog and quickly fell in love with the craft of software. Since then I've worked with startups and larger teams, shipping everything from marketing sites to data-heavy dashboards."
            }
          </p>
          <p>
            When I&apos;m not at the keyboard, you&apos;ll find me contributing
            to open source, mentoring junior developers, or hunting down the
            perfect cup of coffee.
          </p>
        </div>

        <dl className="grid grid-cols-3 gap-4 md:col-span-2 md:grid-cols-1">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-lg border border-border bg-card p-5"
            >
              <dt className="text-sm text-muted-foreground">{fact.label}</dt>
              <dd className="mt-1 text-2xl font-semibold text-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
