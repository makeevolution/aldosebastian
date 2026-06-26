import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"

const projects = [
  {
    title: "Pulse Analytics",
    description:
      "A real-time analytics dashboard with customizable charts, team workspaces, and sub-second data refresh built on a streaming pipeline.",
    image: "/projects/project-analytics.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Marketplace Kit",
    description:
      "An open-source e-commerce starter with cart, checkout, and a headless CMS-driven storefront optimized for Core Web Vitals.",
    image: "/projects/project-commerce.png",
    tags: ["React", "Stripe", "Tailwind", "Prisma"],
    demo: "#",
    repo: "#",
  },
  {
    title: "DevForge CLI",
    description:
      "A developer tool that scaffolds production-ready projects, automates linting and CI, and ships with an interactive terminal UI.",
    image: "/projects/project-devtool.png",
    tags: ["Node.js", "TypeScript", "Docker", "GitHub Actions"],
    demo: "#",
    repo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="03" title="Selected work" />

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="group grid gap-6 overflow-hidden rounded-xl border border-border bg-card md:grid-cols-2"
          >
            <div
              className={`relative aspect-video overflow-hidden border-border md:aspect-auto md:min-h-64 ${
                i % 2 === 1 ? "md:order-2 md:border-l" : "md:border-r"
              }`}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`Screenshot of the ${project.title} project`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="font-mono text-xs text-primary"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex items-center gap-4">
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  Live demo <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={project.repo}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <GithubIcon className="size-4" /> Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
