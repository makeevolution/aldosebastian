import { Code2, Database, Cloud, Palette } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const groups = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Python"],
  },
  {
    icon: Palette,
    title: "Front-end & Design",
    items: ["Tailwind CSS", "Framer Motion", "Accessibility", "Figma", "Design Systems"],
  },
  {
    icon: Database,
    title: "Data & Backend",
    items: ["PostgreSQL", "Prisma", "REST", "GraphQL", "Redis"],
  },
  {
    icon: Cloud,
    title: "Tooling & DevOps",
    items: ["Vercel", "Docker", "GitHub Actions", "Git", "Vitest"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="02" title="Skills & tools" />

      <div className="grid gap-5 sm:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border border-border bg-card p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <group.icon className="size-5" />
              </span>
              <h3 className="font-medium text-foreground">{group.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
