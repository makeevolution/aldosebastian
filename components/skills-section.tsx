import { Code2, Database, Cloud, FlaskConical, Wrench } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const groups = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    items: [".NET", "Python", "Angular", "Django", "Flask", "NextJS", "SQLAlchemy", "Groovy"],
  },
  {
    icon: FlaskConical,
    title: "Testing",
    items: ["XUnit", "Pytest", "Moq", "SpecFlow", "Jasmine"],
  },
  {
    icon: Cloud,
    title: "DevOps & CI/CD",
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "TeamCity", "Atlassian Bamboo", "Helm"],
  },
  {
    icon: Database,
    title: "Data & Backend",
    items: ["MySQL", "SQLite", "ElasticSearch", "Redis", "RabbitMQ", "OpenTelemetry", "Domain Driven Design"],
  },
  {
    icon: Wrench,
    title: "Tools & Observability",
    items: ["Git", "Grafana", "Loki", "Splunk", "Swagger", "Jira", "k9s", "Rancher", "Claude Code", "GitHub Copilot"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="02" title="Skills & tools" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
