import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const projects = [
  {
    title: "Simple Pizza Winkel",
    description:
      "This is my personal project, to apply my learnings about microservices that I have seen and worked with in my current/previous software engineering job. \
      The project is a pizza ordering system that allows users to order pizzas online. It consists of multiple microservices, each responsible for a specific part of the system.",
    image: "/projects/project-analytics.png",
    tags: [".NET", "Docker", "PostgreSQL", "Dapper", "Microservices"],
    demo: "https://github.com/makeevolution/SimplePizzaWinkel#demo",
  },
  {
    title: "Zeg Het Maar",
    description:
      "A simple app to help me learn the Dutch language.",
    image: "/projects/project-commerce.png",
    tags: ["React", "NextJS", "Tailwind"],
    demo: "https://zeghetmaar.onrender.com",
  }
]

export function ProjectsSection() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="03" title="Projects" />

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
                  More details <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
