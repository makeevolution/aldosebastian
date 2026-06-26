import { SectionHeading } from "@/components/section-heading"
import Image from "next/image";

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
              "I'm a software engineer with 5 years of experience."
            }
          </p>
          <p>
            I am enthusiastic in C# and Python software development, working on diverse projects such as
            desktop applications, web-backend services, and scalable, robust deployment thereof.
            I strive to write clean, maintainable code and follow software architecture best practices.
            My focus is on creating efficient, scalable solutions that align with user needs and industry standards.
          </p>
          <p>
            I'm passionate about continuous learning, always experimenting with new techniques,
            frameworks, and best practices. Whether it's improving my coding skills or exploring
            emerging technologies, I enjoy staying ahead and growing as a developer.`
          </p>
          <p>
            I didn't start out as a developer; I was a mechanical engineering graduate. I was exposed to coding and software engineering during the pandemic,
            and I was hooked. I love the challenge of solving complex problems and the satisfaction of seeing a project come to life. I therefore started my journey as a
            QA and with the wonderful and supportive people I come across in my career, I was able to transition to become a software developer. It's still an ongoing journey,
            and I'm excited to see where it takes me.
          </p>
        </div>
        <div className="md:col-span-2 flex items-center justify-center">
            <Image
              src="/profile-picture.png"
              alt="Profile picture"
              width={300}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
      </div>
    </section>
  )
}
