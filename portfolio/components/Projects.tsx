import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/content";
import { SectionHeading } from "./About";

export default function Projects() {
  return (
    <section id="projects" className="bg-paper-dim px-6 py-20 dark:bg-ink-soft md:px-14">
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="04" title="Projects" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className="group flex flex-col justify-between rounded-2xl border border-ink/10 bg-paper p-7 transition-colors hover:border-teal-500/40 dark:border-paper/[0.12] dark:bg-ink dark:hover:border-teal-300/40"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-paper">
                    <span className="mr-2 font-mono text-xs text-teal-600 dark:text-teal-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {project.name}
                  </h3>
                  <div className="flex shrink-0 gap-1 opacity-70 transition-opacity group-hover:opacity-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} source code`}
                      className="rounded-full p-1.5 text-ink/60 hover:bg-ink/[0.06] hover:text-ink dark:text-paper/60 dark:hover:bg-paper/[0.08] dark:hover:text-paper"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} live site`}
                      className="rounded-full p-1.5 text-ink/60 hover:bg-ink/[0.06] hover:text-ink dark:text-paper/60 dark:hover:bg-paper/[0.08] dark:hover:text-paper"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/65 dark:text-paper/65">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-ink/[0.05] px-3 py-1 text-xs text-ink/60 dark:bg-paper/[0.08] dark:text-paper/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
